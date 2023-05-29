---
title: "RTCStatsReport: has() method"
short-title: has()
slug: Web/API/RTCStatsReport/has
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.has
---

{{APIRef("WebRTC")}}

The **`has()`** method of the {{domxref("RTCStatsReport")}} interface returns a boolean indicating whether a statistics report with the specified id exists.

## Syntax

```js-nolint
has(id)
```

### Parameters

- `id`
  - : A string containing the id of the statistics dictionary to test for in the `RTCStatsReport` object.

### Return value

`true` if an element with the specified `id` exists in the `RTCStatsReport` object; otherwise `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
