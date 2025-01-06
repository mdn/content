---
title: "Window: crossOriginIsolated property"
short-title: crossOriginIsolated
slug: Web/API/Window/crossOriginIsolated
page-type: web-api-instance-property
browser-compat: api.crossOriginIsolated
---

{{APIRef("DOM")}}

The **`crossOriginIsolated`** read-only property of the {{domxref("Window")}} interface returns a boolean value that indicates whether the document is cross-origin isolated.

A cross-origin isolated document only shares its {{glossary("Browsing context", "browsing context group")}} with same-origin documents in popups and navigations, and resources (both same-origin and cross-origin) that the document has opted into using via [CORS](/en-US/docs/Web/HTTP/CORS) (and [COEP](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) for `<iframe>`).
The relationship between a cross-origin opener of the document or any cross-origin popups that it opens are severed.
The document may also be hosted in a separate OS process alongside other documents with which it can communicate by operating on shared memory.
This mitigates the risk of side-channel attacks and cross-origin attacks referred to as [XS-Leaks](https://xsleaks.dev/).

Cross-origin isolated documents operate with fewer restrictions when using the following APIs:

- {{JSxRef("SharedArrayBuffer")}} can be created and sent via a {{DOMxRef("Window.postMessage()")}} or a {{DOMxRef("MessagePort.postMessage()")}} call.
- {{DOMxRef("Performance.now()")}} offers better precision.
- {{DOMxRef("Performance.measureUserAgentSpecificMemory()")}} can be called.

A document will be cross-origin isolated if it is returned with an HTTP response that includes the headers:

- {{HTTPHeader("Cross-Origin-Opener-Policy")}} header with the directive `same-origin`.
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} header with the directive `require-corp` or `credentialless`.

Access to the APIs must also be allowed by the `Permissions-Policy` {{HTTPHeader("Permissions-Policy/cross-origin-isolated", "cross-origin-isolated")}}.
Otherwise `crossOriginIsolated` property will return `false`, and the document will not be able to use the APIs listed above with reduced restrictions.

## Value

A boolean value.

## Examples

### Cross-origin isolating a document

To cross-origin isolate a document:

- Set the {{HTTPHeader("Cross-Origin-Opener-Policy")}} HTTP header to `same-origin`:

  ```http
  Cross-Origin-Opener-Policy: same-origin
  ```

- Set the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP header to `require-corp` or `credentialless`:

  ```http
  Cross-Origin-Embedder-Policy: require-corp
  Cross-Origin-Embedder-Policy: credentialless
  ```

- The {{HTTPHeader("Permissions-Policy/cross-origin-isolated","cross-origin-isolated")}} directive of the {{HTTPHeader("Permissions-Policy")}} header must not block access to the feature.
  Note that the default allowlist of the directive is `self`, so the permission will be granted by default to cross-origin isolated documents.

### Checking if the document is cross-origin isolated

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

## See also

- {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
