---
title: ServiceWorkerRegistration.unregister()
slug: Web/API/ServiceWorkerRegistration/unregister
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
  - unregister
browser-compat: api.ServiceWorkerRegistration.unregister
---
{{APIRef("Service Workers API")}}

The **`unregister()`** method of the
{{domxref("ServiceWorkerRegistration")}} interface unregisters the service worker
registration and returns a {{jsxref("Promise")}}. The promise will resolve to
`false` if no registration was found, otherwise it resolves to
`true` irrespective of whether unregistration happened or not (it may not
unregister if someone else just called {{domxref("ServiceWorkerContainer.register()")}}
with the same scope.) The service worker will finish any ongoing operations before it is
unregistered.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
serviceWorkerRegistration.unregister().then(function(boolean) {
});
```

### Parameters

None.

### Return value

{{jsxref("Promise")}} resolves with a boolean indicating whether the service worker has
unregistered or not.

## Example

The following simple example registers a service worker example, but then immediately
unregisters it again:

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', {scope: 'sw-test'}).then(function(registration) {
    // registration worked
    console.log('Registration succeeded.');
    registration.unregister().then(function(boolean) {
      // if boolean = true, unregister is successful
    });
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
};
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
