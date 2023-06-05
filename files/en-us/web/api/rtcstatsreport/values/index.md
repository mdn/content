---
title: "RTCStatsReport: values() method"
short-title: values()
slug: Web/API/RTCStatsReport/values
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.values
---

{{APIRef("WebRTC")}}

The **`values()`** method of the {{domxref("RTCStatsReport")}} interface returns a new _[iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that can be used to iterate through the values for each element in the `RTCStatsReport` object, in insertion order.

The values are [statistics dictionary objects](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types).

The method is otherwise the same as {{jsxref("Map.prototype.values()")}}.

## Syntax

```js-nolint
values()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

This example shows how to iterate through a {{domxref("RTCStatsReport")}} using the iterator returned by `values()`.

Given a variable `myPeerConnection`, which is an instance of `RTCPeerConnection`, the code calls [`getStats()`](/en-US/docs/Web/API/RTCRtpReceiver/getStats) with `await` to wait for the statistics report.
It then uses a [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop, with the iterator returned by `values()`, to iterate through the dictionary objects in the report.
The properties of statistics objects with the `type` of `outbound-rtp` are logged to the console (other objects are discarded).

```js
const stats = await myPeerConnection.getStats();

for (const stat of stats.values()) {
  if (stat.type != "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.values()")}}
- {{domxref("RTCStatsReport.keys()")}}
- {{domxref("RTCStatsReport.entries()")}}
