import { createContext, ReactNode, useEffect, useState } from 'react';
import { IControlPanelContext } from '../interface/IControlPanelContext';
import { InfoMessage } from '../interface/InfoMessage';

export const ControlPanelContext = createContext({} as IControlPanelContext);

export const ControlPanelProvider = (props: { children: ReactNode }) => {
    const [messageLog, setMessageLog] = useState([] as any[]);
    const [lastMessageId, setLastMessageId] = useState(1);

    const value = {
        messageLog, setMessageLog,
        lastMessageId, setLastMessageId
    }

    return (
        <ControlPanelContext.Provider value={value}>
            {props.children}
        </ControlPanelContext.Provider>
    )
}