import { useContext, useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import { ControlPanelContext } from "../../context/ControlPanelContext";
import { SystemInformation } from "../../models/SystemInformation";
import ChartCard from "../machine-status-card/ChartCard";
import MachineStatusCard from "../machine-status-card/MachineStatusCard";
import './MachineStatus.css';

const MachineStatus = (props: { sysInfo: SystemInformation[] }) => {
    const { chartData } = useContext(ControlPanelContext);
    const [currentRamusage, setCurrentRamUsage] = useState(0);
    const [currentCpuusage, setCurrentCpuUsage] = useState(0);
    const [ramData, setRamData] = useState([] as number[]);
    const [cpuData, setCpuData] = useState([] as number[]);
    const [date, setDate] = useState([] as string[]);

    useEffect(() => {
        console.log(chartData);
        const ramArray = [] as number[];
        const cpuArray = [] as number[];
        const dateArray = [] as string[];
        chartData.forEach(item => {
            ramArray.push(item.currentRamUsage);
            dateArray.push(item.date.toLocaleTimeString());
            cpuArray.push(item.currentCpuUsage);
        });
        if (chartData.length > 0) {
            setCurrentCpuUsage(chartData[0].currentCpuUsage);
            setCurrentRamUsage(chartData[0].currentRamUsage);
        }
        if (ramData.length > 25) {
            ramData.shift();
            date.shift();
            cpuData.shift();
        }
        setDate(dateArray);
        setRamData(ramArray);
        setCpuData(cpuArray);

    }, [chartData])

    return (
        <div>
            {props.sysInfo.length > 0 ?
                <div className="status-view">
                    <div className="machine-metrics">
                        <div className="machine-metrics">
                            <div className="item">
                                <MachineStatusCard
                                    title="CPU usage"
                                    data={currentCpuusage}
                                />
                            </div>
                            <div className="item">
                                <MachineStatusCard
                                    title="RAM Usage"
                                    data={currentRamusage}
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
                                label="Ram usage"
                                data={ramData}
                                date={date}
                            />
                        </div>
                        <div className="graph">
                            <ChartCard
                                label="CPU usage"
                                data={cpuData}
                                date={date}
                            />
                        </div>
                    </div>
                </div>
                :
                <div>No data found...</div>
            }
        </div>



    )
}

export default MachineStatus;