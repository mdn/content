---
title: ServiceWorkerGlobalScope.clients
slug: Web/API/ServiceWorkerGlobalScope/clients
tags:
  - API
  - Clients
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
browser-compat: api.ServiceWorkerGlobalScope.clients
---
{{APIRef("Service Workers API")}}

The **`clients`** read-only property of the
{{domxref("ServiceWorkerGlobalScope")}} interface returns the [`Clients`](/en-US/docs/Web/API/Clients "The ServiceWorkerClients interface of the ServiceWorker API represents a container for a list of ServiceWorkerClient objects.")
object associated with the service worker.

## Syntax

```js
swClients = self.clients
```

### Value

The {{domxref("Clients")}} object associated with the specific worker.

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
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
