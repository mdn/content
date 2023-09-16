---
title: "RTCStatsReport: size property"
short-title: size
slug: Web/API/RTCStatsReport/size
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.size
---

{{APIRef("WebRTC")}}

The **`size`** read-only property of the {{domxref("RTCStatsReport")}} interface returns the number of items in the current report.

Note that each item consists of a key-value pair, where the keys are unique `id` values for monitored statistics objects from which the statistics are derived, and the associated values are [statistics dictionary objects](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types).

The method is otherwise the same as {{jsxref("Map.prototype.size")}}.

## Value

An integer indicating the number of items in this report.
The value is zero if the report is empty.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
