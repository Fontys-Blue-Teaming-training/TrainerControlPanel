import { ICardData } from '../../interface/ICardData';
import './MachineStatusCard.css';

const MachineStatusCard = (props: { data: number, title: string }) => {
    return (
        <div className="status-card">
            <div className="box box-down cyan">
                {props.data && props.title ?
                    <>
                        <h2>{props.data}</h2>
                        <p>{props.title}</p>
                    </>
                    :
                    <div>no data found...</div>
                }

            </div>
        </div>
    )
}

export default MachineStatusCard;