import { SystemInformation } from "../models/SystemInformation";

export class ChartDataSorter {
    public sortCurrent = (sysInfo: SystemInformation[]) => {
        const threeMinutes = 180000;
        const currentMillis = Date.now()
        const newArray = sysInfo;

        newArray.forEach((item, i) => {
            if (item.date.getTime() < currentMillis - threeMinutes) {
                newArray.slice(i);
            }
        });

        return newArray;
    }
}

