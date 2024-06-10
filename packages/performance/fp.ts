import {startPerformanceObserver} from "./utils/PerformanceObserverUtils";
import {PerformanceObserverEntryType} from "./enum/PerformanceObserverEntryType";
import {PerformanceObserverEntryName} from "./enum/PerformanceObserverEntryName";

// 首次绘制
export const FP = () => {

    const cb = (entries: PerformanceEntry[PerformanceObserverEntryType.PAINT], ob: PerformanceObserver) => {
        entries.forEach((entry) => {
            if (entry.name === PerformanceObserverEntryName.FP) {
                ob.disconnect();
                console.log('FP', entry.startTime + entry.duration)
            }
        });
    }

    startPerformanceObserver(PerformanceObserverEntryType.PAINT, cb);
}