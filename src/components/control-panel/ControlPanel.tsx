import Controls from '../controls/Controls';
import Logs from '../logs/Logs';
import NetworkStatus from '../network-status/NetworkStatus';
import './ControlPanel.css';

const ControlPanel = () => {
    return (
        <div className="controlpanel-wrapper">
            <div className="controlpanel-grid-layout">
                    <div className="network-status card">
                        <NetworkStatus/>
                    </div>
                    <div className="controls card">
                        <Controls />
                    </div>
                    <div className="logs card">
                        <Logs/>
                    </div>
            </div>
        </div>
    )
}

export default ControlPanel;
