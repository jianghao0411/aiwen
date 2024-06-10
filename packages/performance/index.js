"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PerformanceObserverEntryType_1 = require("./enum/PerformanceObserverEntryType");
var PerformanceObserverEntryName_1 = require("./enum/PerformanceObserverEntryName");
var performanceObserver = new PerformanceObserver(function (list) {
    for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
        var entry = _a[_i];
        var name_1 = entry.name, startTime = entry.startTime, duration = entry.duration;
        if (name_1 === PerformanceObserverEntryName_1.PerformanceObserverEntryName.FP) {
            console.log(startTime + duration);
        }
        else if (name_1 === PerformanceObserverEntryName_1.PerformanceObserverEntryName.FP) {
            console.log(startTime + duration);
        }
    }
});
performanceObserver.observe({
    entryTypes: [PerformanceObserverEntryType_1.PerformanceObserverEntryType.PAINT]
});
