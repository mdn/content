---
title: "RTCStatsReport: keys() method"
short-title: keys()
slug: Web/API/RTCStatsReport/keys
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.keys
---

{{APIRef("WebRTC")}}

The **`keys()`** method of the {{domxref("RTCStatsReport")}} interface returns a new _[map iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that can be used to iterate through the keys for each element in the `RTCStatsReport` object, in insertion order.

The keys in the `RTCStatsReport` are unique string `id` values, which represent the monitored statistics objects from which the statistics are derived.

## Syntax

```js-nolint
keys()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using keys()

This example shows how to iterate through a statistics report by calling `next()` on the iterator returned by `keys()`.

```js
myPeerConnection = new RTCPeerConnection(pcOptions);
const stats = await myPeerConnection.getStats();

// Get an iterator for the RTCStatsReport
const iterator = stats.keys();

// Iterate through the report by calling next()
while (iterator.hasNext()) {
  const id = iterator.next();
  const statistics = stats.get(id);
  if (statistics.type != "outbound-rtp") continue;
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

- {{jsxref("Map.prototype.keys()")}}
- {{domxref("RTCStatsReport.values()")}}
- {{domxref("RTCStatsReport.entries()")}}
