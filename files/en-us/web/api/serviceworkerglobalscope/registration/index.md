---
title: ServiceWorkerGlobalScope.registration
slug: Web/API/ServiceWorkerGlobalScope/registration
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - registration
browser-compat: api.ServiceWorkerGlobalScope.registration
---
{{APIRef("Service Workers API")}}

The **`registration`** read-only property of the {{domxref("ServiceWorkerGlobalScope")}} interface returns a reference to the {{domxref("ServiceWorkerRegistration")}} object, which represents the service worker's registration.

## Syntax

```js
serviceWorkerRegistration = self.registration
```

### Value

A {{domxref("ServiceWorkerRegistration")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
