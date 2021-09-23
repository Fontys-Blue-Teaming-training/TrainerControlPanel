import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { maxWidth } from '@mui/system';
import './Logs.css';


const Logs = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#2A2B2E",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const columns = [
        {
            id: 'time',
            label: 'Time',
            minWidth: 100,
            maxWidth: 150
        },
        {
            id: 'host',
            label: 'Host',
            minWidth: 100,
            maxWidth: 150

        },
        {
            id: 'messageType',
            label: 'Event Type',
            minWidth: 100,
            maxWidth: 150,
        },
        {
            id: 'event',
            label: 'Event',
            minWidth: 170,
        },
    ];

    function createData(time: Date, host: string, ip: string, event: string, messageType: string) {
        return { time, host, ip, event, messageType };
    }

    const rows = [
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
        createData(new Date, 'My PC', '127.0.0.1', 'DDOS Attack detected', 'Warning'),
    ];

    return (
        <div className="table-container">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={"left"}
                                        style={{ width: column.maxWidth }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1}>
                                        <StyledTableCell size="small">
                                            {row.time.toLocaleTimeString()}
                                        </StyledTableCell>
                                        <StyledTableCell size="small">
                                            {row.host} [{row.ip}]
                                        </StyledTableCell>
                                        <StyledTableCell size="small">
                                            {row.messageType}
                                        </StyledTableCell>
                                        <StyledTableCell size="small">
                                            {row.event}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>

    );


}

export default Logs;





