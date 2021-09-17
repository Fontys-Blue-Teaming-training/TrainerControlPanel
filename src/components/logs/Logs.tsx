import * as React from 'react';
import './Logs.css';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const Logs = () => {
    const createData = (dateTime: Date, event: String) => {
        return { dateTime, event };
    }

    const rows = [
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event"),
        createData(new Date, "Test Event")
    ];

    const headCells = [
        {
            id: 'dateTime',
            numeric: true,
            disablePadding: true,
            label: 'Date',
        },
        {
            id: 'protocol',
            numeric: false,
            disablePadding: true,
            label: 'Protocol',
        },
        {
            id: 'ip',
            numeric: false,
            disablePadding: true,
            label: 'IP Adress',
        },
    ]


    return (
        <div>
            <table className="logs-table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody className="logs-table-body">
                    {rows.map((row) => (
                        <tr>
                            <td>
                                {row.dateTime.toLocaleTimeString()}
                            </td>
                            <td>
                                {row.event}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Logs;