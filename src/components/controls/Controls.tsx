import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import './Controls.css';

const Controls = () => {


    const handleChange = (event: any) => {

    };

    return (
        <div className="upper">
            <div className="form-wrapper">
                <div className="form flex-item">
                    <div className="lmfao">
                        <FormControl fullWidth className="attack-selection">
                            <InputLabel id="demo-simple-select-label">Select Attack Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={[]}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>DDOS</MenuItem>
                                <MenuItem value={20}>SSH Bruteforce</MenuItem>
                                <MenuItem value={30}>Man in the Middle</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="lmfao">
                        <Button variant="outlined" className="start-button flex-item">Start Attack</Button>
                        <Button variant="outlined" className="stop-button flex-item">Stop Attack</Button>
                    </div>
                    <Button variant="outlined" className="reroll-button flex-item">Reroll Environment</Button>
                </div>

            </div>
            <div className="form-wrapper">
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