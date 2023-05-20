---
title: "Performance: setResourceTimingBufferSize() method"
short-title: setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
page-type: web-api-instance-method
browser-compat: api.Performance.setResourceTimingBufferSize
---

{{APIRef("Performance API")}}

The **`setResourceTimingBufferSize()`** method sets the desired size of the browser's resource timing buffer which stores the "`resource`" performance entries.

The specification requires the resource timing buffer initially to be 250 or greater.

To clear the browser's performance resource data buffer, use the
{{domxref("Performance.clearResourceTimings()")}} method.

To get notified when the browser's resource timing buffer is full, listen for the {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}} event.

## Syntax

```js-nolint
setResourceTimingBufferSize(maxSize)
```

### Parameters

- `maxSize`
  - : A `number` representing the maximum number of {{domxref("PerformanceEntry","performance entry")}} objects the browser should hold in its performance entry buffer.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Setting a resource timing buffer size

The following call allows 500 "`resource`" performance entries in the browser's performance timeline.

```js
performance.setResourceTimingBufferSize(500);
```

If you set the buffer size to a number lower than the amount of current entries in the buffer, no entries will be removed. Instead, to clear the buffer, call {{domxref("Performance.clearResourceTimings()")}}.

```js
performance.getEntriesByType("resource").length; // 20
performance.setResourceTimingBufferSize(10);
performance.getEntriesByType("resource").length; // 20

performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.clearResourceTimings()")}}
- {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
