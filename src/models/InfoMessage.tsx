import { Host } from './Host';
import { InfoType } from '../enum/InfoType'

export class InfoMessage {
    id: number;
    time: Date;
    host: Host;
    message: string;
    infoType: InfoType;

    constructor(id: number, time: Date, host: Host, message: string, infoType: InfoType){
        this.id = id;
        this.time = time;
        this.host = host;
        this.message = message;
        this.infoType = infoType;
    }
}