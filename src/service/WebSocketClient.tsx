import { send } from 'process';
import React, { useState, useCallback, useMemo, useRef, useEffect, useContext } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { ControlPanelContext } from '../context/ControlPanelContext';
import { InfoType } from '../enum/InfoType';
import { Host } from '../models/Host';
import { InfoMessage } from '../models/InfoMessage';
import { Scenario } from '../models/Scenario';

export const WebSocketClient = () => {
    //Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] = useState('ws://192.168.1.167:3002');
    const {
        messageLog,
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
            //Set id of message
            setLastMessageId(lastMessageId + 1);
            //Parse JSON and construct object
            const json = JSON.parse(lastMessage['data']);
            const date = new Date();
            const host = new Host(json['Host']['Ip'], json['Host']['HostEnum'], json['Host']['HostName']);
            const infoMessage = new InfoMessage(lastMessageId, date, host, json['Message'], InfoType[json['InfoType']]);
            //Add entry to message log
            setMessageLog(old => [...old, infoMessage]);
        }
    }, [lastMessage]);

    useEffect(() => {
        if (startAttack) {
            switch (attackSelection) {
                case "":
                    console.log('Throw error.');
                    break;
                case "ssh-bruteforce":
                    const scenario = new Scenario(0, 0)
                    sendMessage(JSON.stringify(scenario));
                    break;
            }
        }
        setStartAttack(false);
    }, [startAttack]);

    useEffect(() => {
        if (stopAttack) {
            switch (attackSelection) {
                case "":
                    console.log('Throw error.');
                    break;
                case "ssh-bruteforce":
                    const scenario = new Scenario(0, 2)
                    sendMessage(JSON.stringify(scenario));
                    break;
            }
        }
        setStopAttack(false);
    }, [stopAttack]);

    const connect = useCallback(() => {
        setSocketUrl('ws://192.168.1.167:3002')
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