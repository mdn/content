---
title: "ServiceWorker: scriptURL property"
short-title: scriptURL
slug: Web/API/ServiceWorker/scriptURL
page-type: web-api-instance-property
browser-compat: api.ServiceWorker.scriptURL
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Returns the `ServiceWorker` serialized script URL defined as part of [`ServiceWorkerRegistration`](/en-US/docs/Web/API/ServiceWorkerRegistration).
Must be on the same origin as the document that registers the
`ServiceWorker`.

## Value

A string.

## Examples

```js
const sw = navigator.serviceWorker.controller;
console.log(sw.scriptURL);
// https://example.com/scripts/service-worker.js
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
