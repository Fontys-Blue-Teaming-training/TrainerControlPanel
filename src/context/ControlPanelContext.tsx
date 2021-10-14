import { createContext, ReactNode, useEffect, useState } from 'react';
import { IControlPanelContext } from '../interface/IControlPanelContext';
import { InfoMessage } from '../models/InfoMessage';
import { SystemInformation } from '../models/SystemInformation';

export const ControlPanelContext = createContext({} as IControlPanelContext);

export const ControlPanelProvider = (props: { children: ReactNode }) => {
    const [messageLog, setMessageLog] = useState([] as InfoMessage[]);
    const [chartData, setChartData] = useState([] as SystemInformation[]);
    const [lastMessageId, setLastMessageId] = useState(1);
    const [attackSelection, setAttackSelection] = useState('');
    const [startAttack, setStartAttack] = useState(false);
    const [stopAttack, setStopAttack] = useState(false);
    const [showView, setShowView] = useState("controls");
    const [changedChartData, setChangedChartData] = useState(false);

    const value = {
        messageLog, setMessageLog,
        lastMessageId, setLastMessageId,
        attackSelection, setAttackSelection,
        startAttack, setStartAttack,
        stopAttack, setStopAttack,
        showView, setShowView,
        chartData, setChartData,
        changedChartData, setChangedChartData
    }

    return (
        <ControlPanelContext.Provider value={value}>
            {props.children}
        </ControlPanelContext.Provider>
    )
}