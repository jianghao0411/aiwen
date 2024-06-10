interface PerformanceEntry {
    'event': PerformanceEventTiming[];
    'first-input': PerformanceEventTiming[];
    'paint': PerformancePaintTiming[];
    'navigation': PerformanceNavigationTiming[];
    'resource': PerformanceResourceTiming[];
    // 'layout-shift': LayoutShift[];
    // 'largest-contentful-paint': LargestContentfulPaint[];
    // 'long-animation-frame': PerformanceLongAnimationFrameTiming[];
}