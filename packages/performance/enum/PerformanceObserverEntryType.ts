export enum PerformanceObserverEntryType {
    // FP & FCP
    PAINT = 'paint',
    // 资源加载时间（统计不到当前document的加载时间）
    RESOURCE = 'resource',
    // 当前document的加载时间(L和DCP)
    NAVIGATION = 'navigation',
    // LCP
    LCP = 'largest-contentful-paint',
    // 长任务监控
    LONG_TASK = 'longtask'
}