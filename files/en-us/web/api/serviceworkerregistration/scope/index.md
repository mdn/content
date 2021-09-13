---
title: ServiceWorkerRegistration.scope
slug: Web/API/ServiceWorkerRegistration/scope
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - scope
browser-compat: api.ServiceWorkerRegistration.scope
---
{{APIRef("Service Workers API")}}

The **`scope`** read-only property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a unique identifier for a
service worker registration. The service worker must be on the same origin as the
document that registers the {{domxref("ServiceWorker")}}.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
var swScope = serviceWorkerRegistration.scope;
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
