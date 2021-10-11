import { Button, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { ControlPanelContext } from "../../context/ControlPanelContext";
import MachineStatus from "../machine-status/MachineStatus";
import './Controls.css';

const Controls = () => {
    const {
        attackSelection,
        setAttackSelection,
        startAttack,
        setStartAttack,
        setStopAttack
    } = useContext(ControlPanelContext);

    const handleChange = (event: any) => {
        setAttackSelection(event.target.value);
    };

    const sendStartAttack = () => {
        setStartAttack(true);
    }

    const sendStopAttack = () => {
        setStopAttack(true);
    }

    return (
        <div className="controls-container">
            <div className="status">
                <MachineStatus />
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
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"ssh-bruteforce"}>SSH Bruteforce</MenuItem>
                                <MenuItem value={"placeholder"}>Man in the Middle</MenuItem>
                                <MenuItem value={"placeholder"}>Example Attack</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <div className="controls-buttons">

                            <Button onClick={sendStartAttack} variant="contained" className="controls-button start">
                                Start Attack
                            </Button>
                            <Button onClick={sendStopAttack} variant="contained" className="controls-button stop">
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