import { Host } from './Host';
import { InfoType } from '../enum/InfoType'

export interface InfoMessage {
    time: Date;
    host: Host;
    message: string;
    infoType: InfoType;
}