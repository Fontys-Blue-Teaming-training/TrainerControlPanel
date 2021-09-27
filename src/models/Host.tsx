import { Hosts } from '../enum/Hosts';

export class Host {
    ip: string;
    hostsEnum: Hosts;
    hostName: string;

    constructor(ip: string, hostsEnum: Hosts, hostName: string) {
        this.ip = ip;
        this.hostsEnum = hostsEnum;
        this.hostName = hostName;
    }
}