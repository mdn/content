---
title: "RTCStatsReport: values() method"
short-title: values()
slug: Web/API/RTCStatsReport/values
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.values
---

{{APIRef("WebRTC")}}

The **`values()`** method of the {{domxref("RTCStatsReport")}} interface returns a new _[map iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that can be used to iterate through the values for each element in the `RTCStatsReport` object, in insertion order.

The values are [statistics dictionary objects](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types).

## Syntax

```js-nolint
values()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

### Using values()

```js
myPeerConnection = new RTCPeerConnection(pcOptions);
const stats = await myPeerConnection.getStats();

// Get an iterator for the RTCStatsReport
const iterator = stats.values();

// Iterate through the report by calling next()
while (iterator.hasNext()) {
  const statistics = iterator.next();
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

- {{jsxref("Map.prototype.values()")}}
- {{domxref("RTCStatsReport.keys()")}}
- {{domxref("RTCStatsReport.entries()")}}
