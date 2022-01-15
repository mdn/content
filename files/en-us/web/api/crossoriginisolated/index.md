---
title: crossOriginIsolated
slug: Web/API/crossOriginIsolated
tags:
  - API
  - Experimental
  - Property
  - Reference
  - crossOriginIsolated
browser-compat: api.crossOriginIsolated
---
{{APIRef()}}{{SeeCompatTable}}

The global **`crossOriginIsolated`** read-only property returns a boolean value that
indicates whether a {{JSxRef("SharedArrayBuffer")}} can be sent via a
{{DOMxRef("Window.postMessage()")}} call.

This value is dependent on any {{HTTPHeader("Cross-Origin-Opener-Policy")}} and
{{HTTPHeader("Cross-Origin-Embedder-Policy")}} headers present in the response.

## Syntax

```js
var myCrossOriginIsolated = self.crossOriginIsolated; // or just crossOriginIsolated
```

### Value

A boolean value

## Examples

```js
if(crossOriginIsolated) {
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

- [Service Workers](/en-US/docs/Web/API/ServiceWorker_API)
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
