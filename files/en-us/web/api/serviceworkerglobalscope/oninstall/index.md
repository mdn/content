---
title: ServiceWorkerGlobalScope.oninstall
slug: Web/API/ServiceWorkerGlobalScope/oninstall
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerGlobalScope
browser-compat: api.ServiceWorkerGlobalScope.oninstall
---
{{APIRef("Service Workers API")}}

The **`oninstall`** property of the {{domxref("ServiceWorkerGlobalScope")}} interface is an event handler fired whenever an {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} event occurs (when the service worker installs). This happens before [activation](/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event).

## Syntax

```js
self.oninstall = function(event) { /* ... */ };
```

## Examples

The following snippet shows how an `install` event handler can be used to populate a cache with a number of responses, which the service worker can then use to serve assets offline:

```js
self.oninstall = function(event) {
  event.waitUntil(
   caches.open('v1').then(function(cache) {
         return cache.add(
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
     );
   })
   );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
