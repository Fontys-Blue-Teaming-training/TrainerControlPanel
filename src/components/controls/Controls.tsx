import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import './Controls.css';

const Controls = () => {


    const handleChange = (event: any) => {

    };

    return (
        <div className="controls-container">
            <div className="form-container padding">
                <div className="form">
                    <div className="align-horizontal">
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

                    <div className="align-horizontal">
                        <Button variant="outlined" className="start-button">Start Attack</Button>
                        <Button variant="outlined" className="stop-button">Stop Attack</Button>
                    </div>
                    <Button variant="outlined" className="reroll-button">Reroll Environment</Button>
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