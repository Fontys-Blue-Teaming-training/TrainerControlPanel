import React, { useContext, useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import './Logs.css';
import { ControlPanelContext } from '../../context/ControlPanelContext';


const Logs = () => {
    const { messageLog, setMessageLog, lastMessageId } = React.useContext(ControlPanelContext);

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

    useEffect(() => {
        let id = (lastMessageId - 1).toString();
        document.getElementById(id)?.scrollIntoView();
    }, [messageLog]);

    return (
        <div className="logs-container">
            <div className="table">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table aria-label="sticky table">
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
                                {
                                    messageLog.length > 0 ?
                                        messageLog.map((row) => {
                                            return (
                                                <StyledTableRow hover role="checkbox" tabIndex={-1} id={row.id.toString()}>
                                                    <StyledTableCell size="small">
                                                        {row.time.toLocaleTimeString()}
                                                    </StyledTableCell>
                                                    <StyledTableCell size="small">
                                                        {row.host.hostName} [{row.host.ip}]
                                                    </StyledTableCell>
                                                    <StyledTableCell size="small">
                                                        {row.infoType}
                                                    </StyledTableCell>
                                                    <StyledTableCell size="small">
                                                        {row.message}
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            );
                                        })
                                        :
                                        <div></div>
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        </div >
    );
}

export default Logs;





