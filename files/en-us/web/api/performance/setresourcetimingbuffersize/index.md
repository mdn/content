---
title: performance.setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
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
performance.setResourceTimingBufferSize(maxSize);
```

### Arguments

- maxSize
  - : A `number` representing the maximum number of
    {{domxref("PerformanceEntry","performance entry")}} objects the browser should hold in
    its performance entry buffer.

### Return value

- none
  - : This method has no return value.

## Example

```js
function setResourceTimingBufferSize(maxSize) {
  if (performance === undefined) {
    log("Browser does not support Web Performance");
    return;
  }
  var supported = typeof performance.setResourceTimingBufferSize == "function";
  if (supported) {
    log("... Performance.setResourceTimingBufferSize() = Yes");
    performance.setResourceTimingBufferSize(maxSize);
  } else {
    log("... Performance.setResourceTimingBufferSize() = NOT supported");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
