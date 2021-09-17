import Controls from '../controls/Controls';
import Logs from '../logs/Logs';
import NetworkStatus from '../network-status/NetworkStatus';
import './ControlPanel.css';

const ControlPanel = () => {
    return (
        <div className="control-panel-wrapper">
            <div className="controls">
                <div>
                    <NetworkStatus />
                </div>
                <div className="controls-wrapper">
                    <Controls />
                </div>
            </div>
            <div className="logs-wrapper">
                <div className="logs">
                    <Logs />
                </div>
            </div>
        </div>
    )
}

export default ControlPanel;
