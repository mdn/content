---
title: "RTCStatsReport: entries() method"
short-title: entries()
slug: Web/API/RTCStatsReport/entries
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.entries
---

{{APIRef("WebRTC")}}

The **`entries()`** method of the {{domxref("RTCStatsReport")}} interface returns a new [iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object that can be used to iterate through the key/value pairs for each element in the `RTCStatsReport` object, in insertion order.

The keys are unique `id` values for monitored statistics objects from which the statistics are derived, and the associated values are [statistics dictionary objects](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types).

The method is otherwise the same as {{jsxref("Map.prototype.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

This example shows how to iterate through a {{domxref("RTCStatsReport")}} using the iterator returned by `entries()`.

Given a variable `myPeerConnection`, which is an instance of `RTCPeerConnection`, the code calls [`getStats()`](/en-US/docs/Web/API/RTCRtpReceiver/getStats) with `await` to wait for the statistics report.
It then uses a [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop, with the iterator returned by `entries()`, to iterate through the entries.
The properties of statistics objects with the `type` of `outbound-rtp` are logged to the console (other objects are discarded).

```js
const stats = await myPeerConnection.getStats();

for (const stat of stats.entries()) {
  if (stat.type != "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
  });
}
```

## Specifications

{{Specifications}} <!-- https://webidl.spec.whatwg.org/#dfn-maplike -->

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.entries()")}}
- {{domxref("RTCStatsReport.values()")}}
- {{domxref("RTCStatsReport.keys()")}}
