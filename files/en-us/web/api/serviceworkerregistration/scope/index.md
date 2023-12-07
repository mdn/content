---
title: "ServiceWorkerRegistration: scope property"
short-title: scope
slug: Web/API/ServiceWorkerRegistration/scope
page-type: web-api-instance-property
browser-compat: api.ServiceWorkerRegistration.scope
---

{{APIRef("Service Workers API")}}

The **`scope`** read-only property of the {{domxref("ServiceWorkerRegistration")}} interface returns the service worker's registration scope associated with the current service worker registration using the `scope` parameter specified when register the service worker by calling {{domxref('ServiceWorkerContainer.register()')}}. The service worker must be on the {{Glossary("Same-origin policy", "same origin")}} as the document that registers the {{domxref("ServiceWorker")}}.

## Value

Returns the service worker's registration scope associated with the current service worker registration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
