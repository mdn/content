---
title: FetchEvent.clientId
slug: Web/API/FetchEvent/clientId
tags:
  - API
  - Experimental
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

## Syntax

```js
var myClientId = fetchEvent.clientId;
```

### Value

A {{domxref("DOMString")}} that represents the client ID.

## Example

```js
self.addEventListener('fetch', function(event) {
  console.log(event.clientId);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service
  workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker
  ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web
  workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
