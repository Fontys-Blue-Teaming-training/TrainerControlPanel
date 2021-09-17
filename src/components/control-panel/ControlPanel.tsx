import Controls from '../controls/Controls';
import Logs from '../logs/Logs';
import NetworkStatus from '../network-status/NetworkStatus';
import './ControlPanel.css';

const ControlPanel = () => {
    return (
        <div className="control-panel-wrapper">
            <div className="controls">
                <div className="card-padding">
                    <div className="card">
                        <NetworkStatus />
                    </div>
                </div>
                <div className="card-padding">
                    <div className="controls-wrapper card">
                        <Controls />
                    </div>
                </div>
            </div>
            <div className="card-padding">
                <div className="logs-wrapper card">
                    <div className="logs">
                        <Logs />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ControlPanel;
