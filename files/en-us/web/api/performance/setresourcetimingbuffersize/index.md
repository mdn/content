---
title: performance.setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.setResourceTimingBufferSize
---
{{APIRef("Resource Timing API")}}

The **`setResourceTimingBufferSize()`** method sets the
browser's _resource timing buffer_ size to the specified number of
"`resource`" {{domxref("PerformanceEntry.entryType","performance entry
  type")}} objects.

A browser's recommended resource timing buffer size is at least 150
{{domxref("PerformanceEntry","performance entry")}} objects.

{{AvailableInWorkers}}

## Syntax

```js
setResourceTimingBufferSize(maxSize)
```

### Parameters

- `maxSize`
  - : A `number` representing the maximum number of
    {{domxref("PerformanceEntry","performance entry")}} objects the browser should hold in
    its performance entry buffer.

### Return value

This method has no return value.

## Examples

```js
function setResourceTimingBufferSize(maxSize) {
  if (performance === undefined) {
    log("Browser does not support Web Performance");
    return;
  }
  const supported = typeof performance.setResourceTimingBufferSize === "function";
  if (supported) {
    console.log("… Performance.setResourceTimingBufferSize() = Yes");
    performance.setResourceTimingBufferSize(maxSize);
  } else {
    console.error("The method Performance.setResourceTimingBufferSize() is not supported.");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
