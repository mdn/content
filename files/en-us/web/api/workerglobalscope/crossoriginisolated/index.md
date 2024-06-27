---
title: "WorkerGlobalScope: crossOriginIsolated property"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
page-type: web-api-instance-property
browser-compat: api.crossOriginIsolated
---

{{APIRef("Web Workers API")}}

The **`crossOriginIsolated`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns a boolean value that
indicates whether the website is in a cross-origin isolation state. That state mitigates the risk of side-channel attacks and unlocks a few capabilities:

- {{JSxRef("SharedArrayBuffer")}} can be created and sent via a {{DOMxRef("DedicatedWorkerGlobalScope.postMessage()")}} or a {{DOMxRef("MessagePort.postMessage()")}} call.
- {{DOMxRef("Performance.now()")}} offers better precision.
- {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}} can be accessed.

A website is in a cross-origin isolated state, when the response header {{HTTPHeader("Cross-Origin-Opener-Policy")}} has the value `same-origin` and the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} header has the value `require-corp` or `credentialless`.

## Value

A boolean value.

## Examples

```js
const myWorker = new Worker("worker.js");

if (self.crossOriginIsolated) {
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
