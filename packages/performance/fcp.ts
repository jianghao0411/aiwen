import {startPerformanceObserver} from "./utils/PerformanceObserverUtils";
import {PerformanceObserverEntryType} from "./enum/PerformanceObserverEntryType";
import {PerformanceObserverEntryName} from "./enum/PerformanceObserverEntryName";

// 首次内容绘制
export const FCP = () => {

    const cb = (entries: PerformanceEntry[PerformanceObserverEntryType.PAINT], ob: PerformanceObserver) => {
        entries.forEach((entry) => {
            if (entry.name === PerformanceObserverEntryName.FCP) {
                ob.disconnect();
                console.log('FCP')
            }
        });
    }

    startPerformanceObserver(PerformanceObserverEntryType.PAINT, cb);
}