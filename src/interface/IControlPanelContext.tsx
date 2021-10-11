import { InfoMessage } from "../models/InfoMessage";

export interface IControlPanelContext {
    messageLog: InfoMessage[];
    setMessageLog: React.Dispatch<React.SetStateAction<InfoMessage[]>>;
    lastMessageId: number;
    setLastMessageId: React.Dispatch<React.SetStateAction<number>>;
    attackSelection: string;
    setAttackSelection: React.Dispatch<React.SetStateAction<string>>;
    startAttack: boolean;
    setStartAttack: React.Dispatch<React.SetStateAction<boolean>>;
    stopAttack: boolean;
    setStopAttack: React.Dispatch<React.SetStateAction<boolean>>;
    showView: string;
    setShowView: React.Dispatch<React.SetStateAction<string>>
}
