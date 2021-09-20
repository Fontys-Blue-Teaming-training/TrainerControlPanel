import Controls from '../controls/Controls';
import Logs from '../logs/Logs';
import NetworkStatus from '../network-status/NetworkStatus';
import './ControlPanel.css';

const ControlPanel = () => {
    return (
        <div className="container">
            <div className="control-panel-wrapper">
                <div className="controls">
                    <div className="card-padding">
                        <div className="controls-wrapper card">
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
                        <Logs />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ControlPanel;
