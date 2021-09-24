import { InfoMessage } from "./InfoMessage";

export interface IControlPanelContext {
    messageLog: any[];
    setMessageLog: React.Dispatch<React.SetStateAction<any[]>>;
    lastMessageId: number;
    setLastMessageId: React.Dispatch<React.SetStateAction<number>>;
}
