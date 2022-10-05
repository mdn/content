---
title: ServiceWorkerRegistration.active
slug: Web/API/ServiceWorkerRegistration/active
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - active
browser-compat: api.ServiceWorkerRegistration.active
---

{{APIRef("Service Workers API")}}

The **`active`** property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a service worker whose
{{domxref("ServiceWorker.state")}} is `activating` or `activated`.
This property is initially set to `null`.

An active worker controls a {{domxref("Client")}} if the client's URL
falls within the scope of the registration (the `scope` option set when
{{domxref("ServiceWorkerContainer.register")}} is first called.)

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

> **Note:** Once an active worker is `activating`, neither a
> runtime script error nor a force termination of the active worker prevents the active
> worker from getting `activated`.

## Value

A {{domxref("ServiceWorker")}} object's property, if it is currently in an
`activating` or `activated` state.

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
