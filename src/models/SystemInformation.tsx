

export class SystemInformation {
    date: Date;
    currentSystemUptime: string;
    currentCpuUsage: number;
    currentRamUsage: number;
    currentInternetConnectivity: string;

    constructor(date: Date, currentSystemUptime: string, currentCpuUsage: number, currentRamUsage: number, currentInternetConnectivity: string) {
        this.date = date;
        this.currentSystemUptime = currentSystemUptime;
        this.currentCpuUsage = currentCpuUsage;
        this.currentRamUsage = currentRamUsage;
        this.currentInternetConnectivity = currentInternetConnectivity;
    }
}