import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { ControlPanelContext } from "../../context/ControlPanelContext";
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
            <div className="form-container padding">
                <div className="form">
                    <div className="align-horizontal">
                        <FormControl variant="filled" fullWidth className="attack-selection">
                            <InputLabel id="demo-simple-select-label">Select Attack Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={attackSelection}
                                label="Age"
                                onChange={handleChange}
                            >
                                
                                <MenuItem value={"ssh-bruteforce"}>SSH Bruteforce</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="align-horizontal">
                        <Button variant="contained" className="start-button cbutton" onClick={sendStartAttack}>Start Attack</Button>
                        <Button variant="contained" className="stop-button cbutton" onClick={sendStopAttack}>Stop Attack</Button>
                    </div>
                    <Button variant="contained" className="reroll-button cbutton">Reroll Environment</Button>
                </div>
            </div>
            <div className="form-container">
                <div className="attack-status">
                    <div className="overview">
                        <li>
                            Man in the middle
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controls;