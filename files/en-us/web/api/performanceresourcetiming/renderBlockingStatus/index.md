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

The **`renderBlockingStatus`** read-only property returns the render-blocking
nature of the resource.

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
function print_renderBlocking_resources() {
  const p = performance.getEntriesByType("resource");
  for (let i=0; i < p.length; i++) {
    if (p[i].renderBlockingStatus==="blocking"){
        console.log(p[i].name);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
