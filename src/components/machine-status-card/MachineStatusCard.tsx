import { ICardData } from '../../interface/ICardData';
import './MachineStatusCard.css';

const MachineStatusCard = (props: ICardData) => {
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