import { InfoMessage } from "../models/InfoMessage";
import { ScenarioEntry } from "../models/ScenarioEntry";
import { SystemInformation } from "../models/SystemInformation";
import { Team } from "../models/Team";

export interface IControlPanelContext {
    messageLog: InfoMessage[];
    setMessageLog: React.Dispatch<React.SetStateAction<InfoMessage[]>>;
    lastMessageId: number;
    setLastMessageId: React.Dispatch<React.SetStateAction<number>>;
    attackSelection: number;
    setAttackSelection: React.Dispatch<React.SetStateAction<number>>;
    teamSelection: number;
    setTeamSelection: React.Dispatch<React.SetStateAction<number>>;
    startAttack: boolean;
    setStartAttack: React.Dispatch<React.SetStateAction<boolean>>;
    stopAttack: boolean;
    setStopAttack: React.Dispatch<React.SetStateAction<boolean>>;
    showView: string;
    setShowView: React.Dispatch<React.SetStateAction<string>>;
    chartData: SystemInformation[];
    setChartData: React.Dispatch<React.SetStateAction<SystemInformation[]>>;
    allTeams: Team[];
    setAllTeams: React.Dispatch<React.SetStateAction<Team[]>>;
    allScenarios: ScenarioEntry[];
    setAllScenarios: React.Dispatch<React.SetStateAction<ScenarioEntry[]>>;
    changedChartData: boolean;
    setChangedChartData: React.Dispatch<React.SetStateAction<boolean>>;
}
