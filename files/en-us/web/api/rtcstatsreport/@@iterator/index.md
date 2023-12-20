---
title: "RTCStatsReport: [@@iterator]() method"
short-title: "@@iterator"
slug: Web/API/RTCStatsReport/@@iterator
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.@@iterator
---

{{APIRef("WebRTC")}}

The **`[@@iterator]()`** method of the {{domxref("RTCStatsReport")}} interface implements the [iterable protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) and allows statistics reports to be consumed by most syntaxes expecting iterables, such as the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and {{jsxref("Statements/for...of", "for...of")}} loops.
It returns an [iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the key-value pairs of the report in insertion order.

The initial value of this property is the same function object as the initial value of the {{domxref("RTCStatsReport.entries()")}} method.

The method is otherwise the same as [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator).

## Syntax

```js-nolint
RTCStatsReport[Symbol.iterator]()
```

### Return value

The same return value as {{domxref("RTCStatsReport.entries()")}}.
This is a new [iterable iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields the key-value (`id`-"statistics dictionary") pairs of the report.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport.entries()")}}
- [`Map.prototype[@@iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator)
