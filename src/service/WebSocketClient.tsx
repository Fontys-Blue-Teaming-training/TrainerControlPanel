import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { ControlPanelContext } from '../context/ControlPanelContext';
import { Host } from '../models/Host';
import { InfoMessage } from '../models/InfoMessage';
import { Scenario } from '../models/Scenario';
import { SystemInformation } from '../models/SystemInformation';
import { Team } from '../models/Team';
import { TeamHttpClient } from './TeamHttpClient';

export const WebSocketClient = () => {
    //Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] = useState('ws://192.168.1.2:3002');
    const teamHttpClient = new TeamHttpClient();
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
        setStopAttack,
        setAllTeams
    } = useContext(ControlPanelContext);

    const {
        sendMessage,
        lastMessage,
        readyState,
    } = useWebSocket(socketUrl, {
        shouldReconnect: (closeEvent) => true,
    });

    useEffect(() => {

        if (lastMessage) {
            try {
                //Parse JSON and construct object
                const json = JSON.parse(lastMessage['data']);
                if (json['InfoType'] === 3) {
                    teamHttpClient.getTeams()
                        .then((res: any) => {
                            if (res['success']) {
                                let array: Team[];
                                array = res['message'];
                                setAllTeams(array);
                            }
                            else {
                                console.log('failed')
                            }
                        })
                }
                const date = new Date();
                const host = new Host(json['Host']['Ip'], json['Host']['HostEnum'], json['Host']['HostName']);
                const infoMessage = new InfoMessage(lastMessageId, date, host, json['Message'], json['InfoType']);
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
                        setChartData(old => [...old, sysInfo]);
                        if(chartData.length > 3) {
                          const tempArray = JSON.parse(JSON.stringify(chartData));
                          console.log('before',tempArray);
                          tempArray.shift();
                          console.log('after',tempArray);
                          setChartData(tempArray);
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
        setSocketUrl('ws://192.168.1.2:3002');
        sendMessage('connect');
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