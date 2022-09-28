---
title: FetchEvent.resultingClientId
slug: Web/API/FetchEvent/resultingClientId
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - FetchEvent
  - Property
  - Reference
  - Service Workers
  - Worker
  - resultingClientId
browser-compat: api.FetchEvent.resultingClientId
---

{{APIRef("Service Workers API")}}

The **`resultingClientId`** read-only property of the
{{domxref("FetchEvent")}} interface is the {{domxref("Client.id", "id")}} of the
{{domxref("Client", "client")}} that replaces the previous client during a page
navigation.

For example, when navigating from page A to page B `resultingClientId` is
the ID of the client associated with page B.

If the fetch request is a subresource request or the request's
[`destination`](/en-US/docs/Web/API/Request/destination) is
`report`, `resultingClientId` will be an empty string.

## Value

A string.

## Examples

```js
self.addEventListener("fetch", (event) => {
  console.log(event.resultingClientId);
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
