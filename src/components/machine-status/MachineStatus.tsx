import MachineStatusCard from "../machine-status-card/MachineStatusCard";
import './MachineStatus.css';

const MachineStatus = () => {

    return (
        <div className="status-view">
            <div className="machine-metrics">
                <div className="machine-metrics">
                    <div className="item">
                        <MachineStatusCard />
                    </div>
                    <div className="item">
                        <MachineStatusCard />
                    </div>
                    <div className="item">
                        <MachineStatusCard />
                    </div>
                    <div className="item">
                        <MachineStatusCard />
                    </div>
                </div>
            </div>
            <div className="metrics-graph">
                <div className="graph">
                    <MachineStatusCard />
                </div>
                <div className="graph">
                    <MachineStatusCard />
                </div>
                <div className="graph">
                    <MachineStatusCard />
                </div>
                <div className="graph">
                    <MachineStatusCard />
                </div>
            </div>
        </div>
    )
}

export default MachineStatus;