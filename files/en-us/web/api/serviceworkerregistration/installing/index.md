---
title: "ServiceWorkerRegistration: installing property"
short-title: installing
slug: Web/API/ServiceWorkerRegistration/installing
page-type: web-api-instance-property
browser-compat: api.ServiceWorkerRegistration.installing
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`installing`** read-only property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a service worker whose
{{domxref("ServiceWorker.state")}} is `installing`. This property is
initially set to `null`.

## Value

A {{domxref("ServiceWorker")}} object, if it is currently in an `installing`
state.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
