---
title: ServiceWorkerRegistration.installing
slug: Web/API/ServiceWorkerRegistration/installing
tags:
  - API
  - Installing
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
browser-compat: api.ServiceWorkerRegistration.installing
---
{{APIRef("Service Workers API")}}

The **`installing`** property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a service worker whose
{{domxref("ServiceWorker.state")}} is `installing`. This property is
initially set to `null`.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
var serviceWorker = serviceWorkerRegistration.installing;
```

### Value

A {{domxref("ServiceWorker")}} object, if it is currently in an `installing`
state.

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
