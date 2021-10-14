import { Chart } from "react-chartjs-2";
import { SystemInformation } from "../../models/SystemInformation";
import ChartCard from "../machine-status-card/ChartCard";
import MachineStatusCard from "../machine-status-card/MachineStatusCard";
import './MachineStatus.css';

const MachineStatus = (props: { sysInfo: SystemInformation[] }) => {

    return (
        <div>
            {props.sysInfo.length > 0 ?
                <div className="status-view">
                    <div className="machine-metrics">
                        <div className="machine-metrics">
                            <div className="item">
                                <MachineStatusCard
                                    title="CPU usage"
                                    body={props.sysInfo[0].currentCpuUsage.toString()}
                                />
                            </div>
                            <div className="item">
                                <MachineStatusCard
                                    title="CPU usage"
                                    body={props.sysInfo[0].currentRamUsage.toString()}
                                />
                            </div>
                            <div className="item">

                            </div>
                            <div className="item">

                            </div>
                        </div>
                    </div>
                    <div className="metrics-graph">
                        <div className="graph">
                            <ChartCard
                                label="test"
                                dataType="cpu"
                            />
                        </div>
                        <div className="graph">
                            <ChartCard
                                label="test"
                                dataType="ram"
                            />
                        </div>
                    </div>
                </div>
                :
                <div>Get fucked...</div>
            }
        </div>



    )
}

export default MachineStatus;