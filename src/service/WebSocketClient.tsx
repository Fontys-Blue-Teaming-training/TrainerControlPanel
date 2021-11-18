import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { ControlPanelContext } from '../context/ControlPanelContext';
import { InfoType } from '../enum/InfoType';
import { Host } from '../models/Host';
import { InfoMessage } from '../models/InfoMessage';
import { Scenario } from '../models/Scenario';
import { SystemInformation } from '../models/SystemInformation';

export const WebSocketClient = () => {
    //Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] = useState('ws://145.93.61.55:3002');
    const {
        chartData,
        setChartData,
        setMessageLog,
        lastMessageId,
        setLastMessageId,
        startAttack,
        setStartAttack,
        attackSelection,
        stopAttack,
        setStopAttack
    } = useContext(ControlPanelContext);

    const {
        sendMessage,
        lastMessage,
        readyState,
    } = useWebSocket(socketUrl);

    useEffect(() => {

        if (lastMessage) {
            try {
                //Parse JSON and construct object
                const json = JSON.parse(lastMessage['data']);
                const date = new Date();
                const host = new Host(json['Host']['Ip'], json['Host']['HostEnum'], json['Host']['HostName']);
                const infoMessage = new InfoMessage(lastMessageId, date, host, json['Message'], InfoType[json['InfoType']]);
                if (json['Host']['HostEnum'] === 0 || json['Host']['HostEnum'] === 1) {
                    //Add entry to message log
                    setLastMessageId(lastMessageId + 1);
                    setMessageLog(old => [...old, infoMessage]);
                }
                else {
                    const maxLength = 50;
                    const data = JSON.parse(infoMessage.message);
                    const sysInfo = new SystemInformation(new Date, data['CurrentSystemUptime'],
                        data['CurrentCpuPercentageUsage'], data['CurrentRamPercentageUsage'], data['CurrentInternetConnectivity']);
                    if (chartData.length > maxLength) {
                        setChartData(old => [...old.splice(0), sysInfo]);
                    }
                    else {
                        setChartData(old => [...old, sysInfo]);
                    }
                }
            }
            catch (error) {
                console.log(error);
            }

        }
    }, [lastMessage]);

    useEffect(() => {
        if (startAttack) {
            const scenario = new Scenario(attackSelection, 0)
            sendMessage(JSON.stringify(scenario));
        }
        setStartAttack(false);
    }, [startAttack]);

    useEffect(() => {
        if (stopAttack) {
            const scenario = new Scenario(attackSelection, 2)
            sendMessage(JSON.stringify(scenario));
        }
        setStopAttack(false);
    }, [stopAttack]);

    const connect = useCallback(() => {
        setSocketUrl('ws://145.93.61.55:3002')
        sendMessage('connect')
    }, []);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <div>
        </div>
    );
};

export default WebSocketClient;