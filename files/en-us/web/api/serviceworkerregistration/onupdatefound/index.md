---
title: ServiceWorkerRegistration.onupdatefound
slug: Web/API/ServiceWorkerRegistration/onupdatefound
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - onupdatefound
browser-compat: api.ServiceWorkerRegistration.onupdatefound
---
{{APIRef("Service Workers API")}}

The **`onupdatefound`** property of the
{{domxref("ServiceWorkerRegistration")}} interface is an {{domxref("EventListener")}}
property called whenever an event of type `statechange` is fired; it is fired
any time the {{domxref("ServiceWorkerRegistration.installing")}} property acquires a new
service worker.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
serviceWorkerRegistration.onupdatefound = function() { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker
  ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web
  workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
