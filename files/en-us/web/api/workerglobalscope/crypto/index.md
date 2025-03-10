---
title: "WorkerGlobalScope: crypto property"
short-title: crypto
slug: Web/API/WorkerGlobalScope/crypto
page-type: web-api-instance-property
browser-compat: api.crypto
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers("worker")}}

The **`crypto`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns the {{domxref("Crypto")}} object for this worker. This object gives workers access to certain cryptographic related services.

Although the property itself is read-only, all of its methods (and the methods of its
child object, {{domxref("SubtleCrypto")}}) are not read-only, and therefore vulnerable
to attack by {{glossary("polyfill")}}.

Although `crypto` is available on all workers, the returned `Crypto` object only has one usable feature in insecure contexts: the {{domxref("Crypto.getRandomValues", "getRandomValues()")}} method. In general, you should use this API only in secure contexts.

## Value

An instance of the {{domxref("Crypto")}} interface, providing access to general-purpose cryptography and a strong random-number generator.

## Examples

See the example on the page for {{domxref("Window.crypto")}}, which uses the `crypto` property to access the {{domxref("Crypto.getRandomValues", "getRandomValues()")}} method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Crypto")}} interface
- {{domxref("Window.crypto")}}
