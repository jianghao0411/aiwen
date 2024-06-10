import {PerformanceObserverEntryType} from "../enum/PerformanceObserverEntryType";

/**
 * 是否是Performance支持的类型
 *
 * @param type
 */
export const isSupportPerformanceType = (type: any) => {
    return PerformanceObserver.supportedEntryTypes.indexOf(type) > -1;
}

export const startPerformanceObserver = <TYPE extends PerformanceObserverEntryType>(type: TYPE, callback: (entries: any, ob: PerformanceObserver) => void, opts?: PerformanceObserverInit) => {

    if (!isSupportPerformanceType(type)) {
        throw new Error('UnSupport performance type:' + type);
    }

    const observer = new PerformanceObserver((list, ob) => {
        callback(list.getEntries(), ob);
    });

     observer.observe(Object.assign(
        {
            type,
            buffered: true,
        },
        opts || {},
    ) as PerformanceObserverInit);
}