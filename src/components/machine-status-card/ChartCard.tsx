import { Line } from 'react-chartjs-2';
import React, { useContext, useEffect, useState } from 'react';
import MetricChart from '../chart/MetricChart';
import { ControlPanelContext } from '../../context/ControlPanelContext';

const ChartCard = (props: { label: string, data: number[], date: string[] }) => {

    return (
        <div className="status-card">
            <div className="box box-down cyan">
                <MetricChart
                    label={props.label}
                    data={props.data}
                    date={props.date}
                />
            </div>
        </div>
    )
}

export default ChartCard;