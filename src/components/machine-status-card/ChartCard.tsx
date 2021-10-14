import { Line } from 'react-chartjs-2';
import React from 'react';
import MetricChart from '../chart/MetricChart';
import { SystemInformation } from '../../models/SystemInformation';

const ChartCard = (props: { label: string, dataType: string }) => {

    return (
        <div className="status-card">
            <div className="box box-down cyan">
                <MetricChart
                    label={props.label}
                    dataType={props.dataType}
                />
            </div>
        </div>
    )
}

export default ChartCard;