---
title: ServiceWorkerRegistration.update()
slug: Web/API/ServiceWorkerRegistration/update
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - Update
browser-compat: api.ServiceWorkerRegistration.update
---

{{APIRef("Service Workers API")}}

The **`update()`** method of the
{{domxref("ServiceWorkerRegistration")}} interface attempts to update the service
worker. It fetches the worker's script URL, and if the new worker is not byte-by-byte
identical to the current worker, it installs the new worker. The fetch of the worker
bypasses any browser caches if the previous fetch occurred over 24 hours ago.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
update()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("ServiceWorkerRegistration")}}
object.

## Examples

The following simple example registers a service worker example then adds an event
handler to a button so you can explicitly update the service worker whenever desired:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // registration worked
      console.log("Registration succeeded.");
      button.onclick = () => {
        registration.update();
      };
    })
    .catch((error) => {
      // registration failed
      console.error(`Registration failed with ${error}`);
    });
}
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
