import { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ControlPanelContext } from '../../context/ControlPanelContext';
import { ChartDataSorter } from '../../service/ChartDataSorter';
import './MetricChart.css'

const MetricChart = (props: { label: string, dataType: string }) => {
    const sorter = new ChartDataSorter();
    const [yAxis, setYAxis] = useState([] as number[]);
    const [XAxis, setXAxis] = useState([] as Date[]);
    const { chartData } = useContext(ControlPanelContext);

    const determineData = () => {
        switch (props.dataType) {
            case "cpu":
                const cpuArray = [] as number[];
                const cpuDates = [] as Date[];
                chartData.forEach(metric => {
                    cpuArray.push(metric.currentCpuUsage);
                    cpuDates.push(metric.date);
                });
                setYAxis(cpuArray);
                setXAxis(cpuDates);
                break;
            case "ram":
                const ramArray = [] as number[];
                const ramDates = [] as Date[];
                chartData.forEach(metric => {
                    cpuArray.push(metric.currentCpuUsage);
                    ramDates.push(metric.date);
                });
                setYAxis(ramArray);
                setXAxis(ramDates);
                break;
        }
    }

    useEffect(() => {
        determineData();
    }, [chartData])

    const data = {
        labels: XAxis,
        datasets: [
            {
                label: props.label,
                data: yAxis,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };


    return (
        <>
            <Line data={data} />
        </>
    )
}

export default MetricChart;