---
title: PerformanceResourceTiming.renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.renderBlockingStatus
---

{{APIRef("Resource Timing API")}}

Render-blocking resources are static files such as fonts, CSS, and JavaScript files, that block or delay the browser from rendering page content to the screen.
The **`renderBlockingStatus`** read-only property returns the render-blocking
nature of the resource. This eliminates the need to rely on complex heurestics to identify render-blocking resources.

## Value

A string containing one of the following values:

- `"blocking"`
  - : The resource might potentially block rendering.
- `"non-blocking"`
  - : The resource does not block rendering.

## Examples

In the following example, we print out the {{domxref("PerformanceEntry.name","name")}} of
resources which are potentially render-blocking.

```js
function printRenderBlockingResources() {
  const entries = performance.getEntriesByType("resource");
  for (const entry of entries) {
    if (entry.renderBlockingStatus === "blocking") {
      console.log(entry.name);
    }
  }
}

printRenderBlockingResources();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
