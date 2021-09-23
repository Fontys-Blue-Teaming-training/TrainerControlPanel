import { send } from 'process';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

export const WebSocketClient = () => {
    //Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] = useState('ws://145.93.60.72:3002');
    const messageHistory = useRef([]);


    const {
        sendMessage,
        lastMessage,
        readyState,
    } = useWebSocket(socketUrl);
    console.log(lastMessage);

    // messageHistory.current = useMemo(() =>
    //     messageHistory.current.concat(lastMessage), [lastMessage]);

    const connect = useCallback(() => {
        setSocketUrl('ws://145.93.60.72:3002')
        sendMessage('connect')
    }
        , []);

    const handleClickSendMessage = useCallback(() =>
        sendMessage('say'), []);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <div>
            <button
                onClick={connect}
            >
                Connect
            </button>
            <button
                onClick={handleClickSendMessage}
                disabled={readyState !== ReadyState.OPEN}
            >
                Click Me to send 'Hello'
            </button>
            <span>The WebSocket is currently {connectionStatus}</span>
            {lastMessage ? <span>Last message: {lastMessage.data}</span> : <div></div>}
            <ul>
                {messageHistory.current
                    .map((message, idx) => <span key={idx}></span>)}
            </ul>
        </div>
    );
};

export default WebSocketClient;