---
title: performance.clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.clearResourceTimings
---
{{APIRef("Resource Timing API")}}

The **`clearResourceTimings()`** method removes all
{{domxref("PerformanceEntry","performance entries")}} with an
{{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`" from
the browser's performance data buffer and sets the size of the performance data buffer
to zero. To set the size of the browser's performance data buffer, use the
{{domxref("Performance.setResourceTimingBufferSize()")}} method.

{{AvailableInWorkers}}

## Syntax

```js
clearResourceTimings()
```

### Parameters

None.

### Return value

none

## Examples

```js
function load_resource() {
  const image = new Image();
  image.src = "https://developer.mozilla.org/static/img/opengraph-logo.png";
}
function clear_performance_timings() {
  if (performance === undefined) {
    log("Browser does not support Web Performance");
    return;
  }
  // Create a resource timing performance entry by loading an image
  load_resource();

  const supported = typeof performance.clearResourceTimings === "function";
  if (supported) {
    console.log("Run: performance.clearResourceTimings()");
    performance.clearResourceTimings();
  } else {
    console.log("performance.clearResourceTimings() NOT supported");
    return;
  }
  // getEntries should now return zero
  const p = performance.getEntriesByType("resource");
  if (p.length === 0) {
    console.log("… Performance data buffer cleared");
  } else {
    console.log("… Performance data buffer NOT cleared!");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
