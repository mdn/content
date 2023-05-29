---
title: "RTCStatsReport: forEach() method"
short-title: forEach()
slug: Web/API/RTCStatsReport/forEach
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.forEach
---

{{APIRef("WebRTC")}}

The **`forEach()`** method of the {{domxref("RTCStatsReport")}} interface executes a provided function once for each key/value pair in the `RTCStatsReport` object, in insertion order.

The keys are unique `id` values for the monitored statistics objects from which the statistics are derived, and the associated values are [statistics dictionary objects](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types).

Otherwise the method is the same as {{jsxref("Map.prototype.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each entry in the report.
    The function is called with the following arguments:
    - `report`
      - : Statistics report for each iteration.
        This can be any of the [statistics dictionary types](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types).
    - `id`
      - : A unique string identifying the monitored object from which the statistics are derived.
    - `map`
      - : The report being iterated.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`.

### Return value

{{jsxref("undefined")}}.

## Examples

The code first creates an `RTCPeerConnection`, uses it to get the statistics report, and then iterates the report using {{domxref("RTCStatsReport.forEach()")}}.
It then filters the dictionaries for just those reports that have the `type` of `inbound-rtp` and `kind` of `video`.

```js
myPeerConnection = new RTCPeerConnection(pcOptions);
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the report
    Object.keys(report).forEach((statName) => {
      console.log(`${statName}: ${report[statName]}`);
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.forEach()")}}
