import { Button } from '@mui/material';
import { useContext } from 'react';
import { ControlPanelContext } from '../../context/ControlPanelContext';
import './Navbar.css';

const Navbar = () => {

    const { setShowView } = useContext(ControlPanelContext);

    const enableControlsView = () => {
        setShowView("controls")
    }

    const enableLogsView = () => {
        setShowView("logs")
    }

    return (
        <div className="navbar">
            <div className="logo">
                <div className="logo-img">

                </div>
            </div>
            <div className="navbar-buttons">
                <hr className="hr3" />
                <Button onClick={enableControlsView} className="nav-button">Controls</Button>
                <Button onClick={enableLogsView} className="nav-button">Logs</Button>
            </div>
        </div>
    )
}

export default Navbar;