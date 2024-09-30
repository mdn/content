---
title: "RTCStatsReport: keys() method"
short-title: keys()
slug: Web/API/RTCStatsReport/keys
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.keys
---

{{APIRef("WebRTC")}}

The **`keys()`** method of the {{domxref("RTCStatsReport")}} interface returns a new _[iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ object that can be used to iterate through the keys for each element in the `RTCStatsReport` object, in insertion order.

The keys in the `RTCStatsReport` are unique string `id` values, which represent the monitored statistics objects from which the statistics are derived.

The method is otherwise the same as {{jsxref("Map.prototype.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Return value

A new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Examples

This example shows how to iterate through a {{domxref("RTCStatsReport")}} using the iterator returned by `keys()`.

Given a variable `myPeerConnection`, which is an instance of `RTCPeerConnection`, the code calls [`getStats()`](/en-US/docs/Web/API/RTCRtpReceiver/getStats) with `await` to wait for the statistics report.
It then uses a [for...of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop, with the iterator returned by `keys()`, to iterate through the IDs.
Each ID is used to get the corresponding statistics dictionary.
The properties of statistics objects with the `type` of `outbound-rtp` are logged to the console (other objects are discarded).

```js
const stats = await myPeerConnection.getStats();

for (const id of stats.keys()) {
  // Get dictionary associated with key (id)
  const stat = stats.get(id);
  if (stat.type != "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
  });
}
```

Note that this examples is somewhat contrived.
You could more easily iterate with {{domxref("RTCStatsReport.entries()","entries()")}} or {{domxref("RTCStatsReport.values()","values()")}} and not have to map the ID to a value.
You can even iterate the {{domxref("RTCStatsReport")}} itself, as it has the [`[Symbol.iterator]()`](/en-US/docs/Web/API/RTCStatsReport/Symbol.iterator) method!

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.keys()")}}
- {{domxref("RTCStatsReport.values()")}}
- {{domxref("RTCStatsReport.entries()")}}
