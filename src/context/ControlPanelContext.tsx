import { createContext, ReactNode, useEffect, useState } from 'react';
import { IControlPanelContext } from '../interface/IControlPanelContext';
import { InfoMessage } from '../models/InfoMessage';
import { ScenarioEntry } from '../models/ScenarioEntry';
import { SystemInformation } from '../models/SystemInformation';
import { Team } from '../models/Team';

export const ControlPanelContext = createContext({} as IControlPanelContext);

export const ControlPanelProvider = (props: { children: ReactNode }) => {
    const [messageLog, setMessageLog] = useState([] as InfoMessage[]);
    const [chartData, setChartData] = useState([] as SystemInformation[]);
    const [allTeams, setAllTeams] = useState([] as Team[]);
    const [allScenarios, setAllScenarios] = useState([] as ScenarioEntry[]);
    const [lastMessageId, setLastMessageId] = useState(1);
    const [attackSelection, setAttackSelection] = useState(-1);
    const [teamSelection, setTeamSelection] = useState(-1);
    const [startAttack, setStartAttack] = useState(false);
    const [stopAttack, setStopAttack] = useState(false);
    const [showView, setShowView] = useState("controls");
    const [changedChartData, setChangedChartData] = useState(false);

    const value = {
        messageLog, setMessageLog,
        lastMessageId, setLastMessageId,
        attackSelection, setAttackSelection,
        teamSelection, setTeamSelection,
        startAttack, setStartAttack,
        stopAttack, setStopAttack,
        showView, setShowView,
        chartData, setChartData,
        allTeams, setAllTeams,
        allScenarios, setAllScenarios,
        changedChartData, setChangedChartData
    }

    return (
        <ControlPanelContext.Provider value={value}>
            {props.children}
        </ControlPanelContext.Provider>
    )
}