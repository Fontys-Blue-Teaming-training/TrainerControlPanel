import Controls from '../controls/Controls';
import Logs from '../logs/Logs';
import NetworkStatus from '../network-status/NetworkStatus';
import './ControlPanel.css';

const ControlPanel = () => {
    return (
        <div className="controlpanel-wrapper">
            <div className="controlpanel-grid-layout">
                <div className="network-status card card-image">
                    <NetworkStatus />
                </div>
                <div className="controls card card-image">
                    <Controls />
                </div>
                <div className="logs card card-image">
                    <Logs />
                </div>
            </div>
        </div>
    )
}

export default ControlPanel;
