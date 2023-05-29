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

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

This example shows how to iterate through a statistics report by calling `next()` on the iterator returned by `entries()`.

```js
myPeerConnection = new RTCPeerConnection(pcOptions);
const stats = await myPeerConnection.getStats();

// Get an iterator for the RTCStatsReport
const iterator = stats.entries();

// Iterate through the report by calling next()
while (iterator.hasNext()) {
  const [id, statistics] = iterator.next();
  if (statistics.type != "outbound-rtp") continue;
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
