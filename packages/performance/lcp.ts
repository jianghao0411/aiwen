import {startPerformanceObserver} from "./utils/PerformanceObserverUtils";
import {PerformanceObserverEntryType} from "./enum/PerformanceObserverEntryType";

// 最大内容绘制
export const LCP = () => {

    const cb = (entries: PerformanceEntry[PerformanceObserverEntryType.PAINT], ob: PerformanceObserver) => {
        entries.forEach((entry) => {
            ob.disconnect();
            // TODO LCP 可能会触发多次
            console.log('LCP', entry.startTime + entry.duration)
        });
    }

    startPerformanceObserver(PerformanceObserverEntryType.LCP, cb);
}