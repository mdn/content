---
title: "ServiceWorkerRegistration: scope property"
short-title: scope
slug: Web/API/ServiceWorkerRegistration/scope
page-type: web-api-instance-property
browser-compat: api.ServiceWorkerRegistration.scope
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`scope`** read-only property of the {{domxref("ServiceWorkerRegistration")}} interface returns a string representing a URL that defines a service worker's registration scope; that is, the range of URLs a service worker can control. This is set using the `scope` parameter specified in the call to {{domxref('ServiceWorkerContainer.register()')}} which registered the service worker.

## Value

Returns a string representing a URL that defines a service worker's registration scope.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
