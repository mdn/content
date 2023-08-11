---
title: "Performance: memory property"
short-title: memory
slug: Web/API/Performance/memory
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.Performance.memory
---

{{APIRef("Performance API")}} {{Deprecated_Header}}{{Non-standard_header}}

The non-standard and legacy `performance.memory` property returns the size of the JavaScript heap which can be helpful to measure and reduce the memory footprint of websites.

Note that the information this API provides is unreliable as it might overestimate actual memory usage if web pages share the same heap, or might underestimate actual memory usage if web pages use workers and/or cross-site iframes that are allocated in separate heaps. It is not standardized what "heap" means exactly. The API is only available in Chromium-based browsers.

A new API aiming to replace `performance.memory` is {{domxref("Performance.measureUserAgentSpecificMemory()")}}. It tries to estimate the memory used by a web page.

## Value

The read-only `performance.memory` property is an object with the following properties:

- `jsHeapSizeLimit`
  - : The maximum size of the heap, in bytes, that is available to the context.
- `totalJSHeapSize`
  - : The total allocated heap size, in bytes.
- `usedJSHeapSize`
  - : The currently active segment of JS heap, in bytes.

## Examples

### Getting JavaScript heap sizes

Calling `performance.memory` returns an object like this:

```js
{
  totalJSHeapSize: 39973671,
  usedJSHeapSize: 39127515,
  jsHeapSizeLimit: 4294705152
}
```

## Specifications

None.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.measureUserAgentSpecificMemory()")}}
