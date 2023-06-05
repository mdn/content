---
title: "RTCStatsReport: get() method"
short-title: get()
slug: Web/API/RTCStatsReport/get
page-type: web-api-instance-method
browser-compat: api.RTCStatsReport.get
---

{{APIRef("WebRTC")}}

The **`get()`** method of the {{domxref("RTCStatsReport")}} interface returns a specified element from an `RTCStatsReport`.

Elements in the `RTCStatsReport` are identified by unique `id` values, which represent the monitored statistics objects from which the statistics are derived.
The element returned will be an instance of one of the [statistics dictionary objects](/en-US/docs/Web/API/RTCStatsReport#the_statistic_types), and it will contain statistics for the object with the given `id`.
The fetched value is a reference to the statistics dictionary, and any change made to that object will effectively modify it inside the `RTCStatsReport` object.

The method is otherwise the same as {{jsxref("Map.prototype.get()")}}.

## Syntax

```js-nolint
get(id)
```

### Parameters

- `id`
  - : A string indicating the ID of the element to return from the `RTCStatsReport` object.
    IDs are unique strings that identify the monitored object from which the corresponding statistics are derived.

### Return value

The element associated with the specified `id` key, or {{jsxref("undefined")}} if the key can't be found in the `Map` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Map.prototype.get()")}}
