import { useContext } from 'react';
import { ControlPanelContext } from '../../context/ControlPanelContext';
import Controls from '../controls/Controls';
import Logs from '../logs/Logs';
import Navbar from '../navbar/Navbar';
import './ControlPanel.css';

const ControlPanel = () => {
    const { showView } = useContext(ControlPanelContext);
    return (
        <div className="app-wrapper">
            <div className="nav-wrapper">
                <Navbar />
            </div>
            <div className="view-wrapper">
                {
                    {
                        "controls": <Controls />,
                        "logs": <Logs />
                    }[showView]
                }
            </div>
        </div>
    )
}

export default ControlPanel;
