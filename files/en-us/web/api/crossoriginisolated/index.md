---
title: crossOriginIsolated
slug: Web/API/crossOriginIsolated
page-type: web-api-global-property
tags:
  - API
  - Property
  - Reference
  - crossOriginIsolated
browser-compat: api.crossOriginIsolated
---
{{APIRef()}}

The global **`crossOriginIsolated`** read-only property returns a boolean value that
indicates whether a {{JSxRef("SharedArrayBuffer")}} can be sent via a
{{DOMxRef("Window.postMessage()")}} call.

This value is dependent on any {{HTTPHeader("Cross-Origin-Opener-Policy")}} and
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} headers present in the response.

## Value

A boolean value.

## Examples

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Service Workers](/en-US/docs/Web/API/Service_Worker_API)
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
