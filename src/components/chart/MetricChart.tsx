import { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ControlPanelContext } from '../../context/ControlPanelContext';
import { ChartDataSorter } from '../../service/ChartDataSorter';
import './MetricChart.css'

const MetricChart = (props: { label: string, data: number[], date: string[] }) => {
    const data = {
        labels: props.date,
        datasets: [
            {
                label: props.label,
                data: props.data,
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