---
title: "WorkerGlobalScope: crossOriginIsolated property"
short-title: crossOriginIsolated
slug: Web/API/WorkerGlobalScope/crossOriginIsolated
page-type: web-api-instance-property
browser-compat: api.crossOriginIsolated
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`crossOriginIsolated`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns a boolean value that indicates whether the document is cross-origin isolated.

A cross-origin isolated document only shares its {{glossary("Browsing context","browsing context group")}} with same-origin documents in popups and navigations, and resources (both same-origin and cross-origin) that the document has opted into using via [CORS](/en-US/docs/Web/HTTP/CORS) (and [COEP](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) for `<iframe>`).
The relationship between a cross-origin opener of the document or any cross-origin popups that it opens are severed.
The document may also be hosted in a separate OS process alongside other documents with which it can communicate by operating on shared memory.
This mitigates the risk of side-channel attacks and cross-origin attacks referred to as [XS-Leaks](https://xsleaks.dev/).

Cross-origin isolated documents operate with fewer restrictions when using the following APIs:

- {{JSxRef("SharedArrayBuffer")}} can be created and sent via a {{DOMxRef("DedicatedWorkerGlobalScope.postMessage()")}} or a {{DOMxRef("MessagePort.postMessage()")}} call.
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
