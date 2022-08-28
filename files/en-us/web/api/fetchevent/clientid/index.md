---
title: FetchEvent.clientId
slug: Web/API/FetchEvent/clientId
page-type: web-api-instance-property
tags:
  - API
  - FetchEvent
  - Property
  - Reference
  - Service Workers
  - clientId
browser-compat: api.FetchEvent.clientId
---
{{APIRef("Service Workers API")}}

The **`clientId`** read-only property of the
{{domxref("FetchEvent")}} interface returns the id of the {{domxref("Client")}} that the
current service worker is controlling.

The {{domxref("Clients.get()")}} method could then be passed this ID to retrieve the
associated client.

## Value

A string that represents the client ID.

## Examples

```js
self.addEventListener('fetch', (event) => {
  console.log(event.clientId);
});
```

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
