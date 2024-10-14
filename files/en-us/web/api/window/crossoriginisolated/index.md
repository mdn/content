---
title: "Window: crossOriginIsolated property"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
page-type: web-api-instance-property
browser-compat: api.crossOriginIsolated
---

{{APIRef("DOM")}}

The **`crossOriginIsolated`** read-only property of the {{domxref("Window")}} interface returns a boolean value that indicates whether the document is cross-origin isolated, and hence is allowed to use APIs that require cross-origin isolation.

A cross origin isolated document only shares its browser context group with same-origin documents (`<iframe>` and popups).
The relationship between a cross origin opener of the document or any cross-origin popups that it opens are severed.
If supported by the operating system, the document's browser context group is hosted in its own OS process, if supported by the OS.

This mitigates the risk of side-channel attacks.
The following APIs are therefore allowed:

- {{JSxRef("SharedArrayBuffer")}} can be created and sent via a {{DOMxRef("Window.postMessage()")}} or a {{DOMxRef("MessagePort.postMessage()")}} call.
- {{DOMxRef("Performance.now()")}} offers better precision.
- {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}} can be accessed.

A document will be cross-origin isolated if it is returned with an HTTP response that includes the headers:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} header with the directive `same-origin`
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} header with the directive `require-corp` or `credentialless`

## Value

A boolean value.

## Examples

```js
const myWorker = new Worker("worker.js");

if (window.crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
