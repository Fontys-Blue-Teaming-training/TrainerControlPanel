import { ICardProps } from '../../interface/ICardProps';
import './MachineStatusCard.css';

const MachineStatusCard = () => {
    return (
        <div className="status-card">
            <div className="box box-down cyan">
                <h2>45%</h2>
                <p>CPU Usage</p>
            </div>
        </div>
    )
}

export default MachineStatusCard;