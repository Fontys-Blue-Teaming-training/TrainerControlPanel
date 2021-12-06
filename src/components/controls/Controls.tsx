import { Button, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect } from "react";
import { ControlPanelContext } from "../../context/ControlPanelContext";
import MachineStatus from "../machine-status/MachineStatus";
import { ScenarioHttpClient } from '../../service/ScenarioHttpClient';
import { TeamHttpClient } from '../../service/TeamHttpClient';
import './Controls.css';
import { Team } from "../../models/Team";
import { ScenarioEntry } from "../../models/ScenarioEntry";

const Controls = () => {
    const scenarioHttpClient = new ScenarioHttpClient();
    const teamHttpClient = new TeamHttpClient();
    const {
        chartData,
        allScenarios,
        allTeams,
        attackSelection,
        teamSelection,
        setAttackSelection,
        setTeamSelection,
        startAttack,
        setStartAttack,
        setStopAttack,
        setAllTeams,
        setAllScenarios
    } = useContext(ControlPanelContext);

    const handleChange = (event: any) => {
        setAttackSelection(event.target.value);
    };

    const handleTeamChange = (event: any) => {
        setTeamSelection(event.target.value);
    };

    const sendStartAttack = () => {
        if (teamSelection.length < 1) {
            alert("Teamid cannot be empty!");
            return;
        }

        scenarioHttpClient.toggleScenario({ teamIds: teamSelection, scenarioId: attackSelection })
            .then((res: any) => {
                if (res['success']) {
                    setStartAttack(true);
                }
                else {
                    console.log('failed')
                }
            });
    }

    const sendStopAttack = () => {

        scenarioHttpClient.toggleScenario({ teamIds: teamSelection, scenarioId: attackSelection })
            .then((res: any) => {
                if (res['success']) {
                    setStopAttack(true);
                }
                else {
                    console.log('failed')
                }
            });


    }

    useEffect(() => {
        teamHttpClient.getTeams()
            .then((res: any) => {
                if (res['success']) {
                    let array: Team[];
                    array = res['message'];
                    setAllTeams(array);
                }
                else {
                    console.log('failed')
                }
            })

        scenarioHttpClient.getScenarios()
            .then((res: any) => {
                if (res['success']) {
                    let array: ScenarioEntry[];
                    array = res['message'];
                    setAllScenarios(array);
                }
                else {
                    console.log('failed')
                }
            })
    }, []);

    return (
        <div className="controls-container">
            <div className="status">
                <MachineStatus sysInfo={chartData} />
            </div>
            <div className="attack-overview">
                <div className="overview-card">
                    <div className="box box-down cyan">
                        <h2>Overview Attacks</h2>
                        <br />
                        <div className="half-width">
                            <div className="attack">
                                <div>SSH BruteForce</div>
                                <div className="dot off"></div>
                            </div>
                            <div className="attack">
                                <div>Man in the Middle</div>
                                <div className="dot off"></div>
                            </div>
                            <div className="attack">
                                <div>Some Attack</div>
                                <div className="dot on"></div>
                            </div>
                            <div className="attack">
                                <div>Another Attack</div>
                                <div className="dot off"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="controls">
                <div className="attack-selection">
                    <div className="box box-down">
                        <h2>Team</h2>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>Team</InputLabel>
                            <Select
                                className="select"
                                value={teamSelection}
                                onChange={handleTeamChange}
                                label="Team"
                                multiple
                            >
                                <MenuItem value="-1">
                                    <em>None</em>
                                </MenuItem>
                                {allTeams.map((team) =>
                                    <MenuItem value={team.id} key={team.id}> {team.name} </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <h2>Select Attack</h2>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Attack</InputLabel>
                            <Select
                                className="select"
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={attackSelection}
                                onChange={handleChange}
                                label="Attack"
                            >
                                <MenuItem value="-1">
                                    <em>None</em>
                                </MenuItem>

                                {allScenarios.map((scenario) =>
                                    <MenuItem value={scenario.id} key={scenario.id}> {scenario.name} </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <div className="controls-buttons">
                            <Button onClick={sendStartAttack} disabled={attackSelection === -1 || teamSelection.length < 1} variant="contained" className="controls-button start">
                                Start Attack
                            </Button>
                            <Button onClick={sendStopAttack} disabled={attackSelection === -1 || teamSelection.length < 1} variant="contained" className="controls-button stop">
                                Stop Attack
                            </Button>
                            <Button variant="contained" className="controls-button reroll">
                                Reroll System
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Controls;