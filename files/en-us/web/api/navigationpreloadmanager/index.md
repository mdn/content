---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
tags:
  - API
  - Interface
  - Navigation
  - NavigationPreloadManager
  - Offline
  - Reference
  - Service Workers
browser-compat: api.NavigationPreloadManager
---
{{ServiceWorkerSidebar}}{{SeeCompatTable}}

The **`NavigationPreloadManager`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) provides methods for managing the preloading of resources with a service worker.

## Methods

- {{domxref("NavigationPreloadManager.enable()")}}
  - : Enables navigation preloading, returning a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.disable()")}}
  - : Disables navigation preloading, returning a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.setHeaderValue()")}}
  - : Sets the value of the `Service-Worker-Navigation-Preload` header and returns an empty {{jsxref("Promise")}}.
- {{domxref("NavigationPreloadManager.getState()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an object with properties indicating whether preload is enabled and the contents of the `Service-Worker-Navigation-Preload`.

## Examples

#### Feature detection and enabling navigation preloading

{{domxref("ServiceWorkerRegistration.navigationPreload")}} gets the `NavigationPreloadManager` for the service worker, or `undefined` if the feature is not supported.

```js
addEventListener('activate', event => {
  event.waitUntil(async function() {
    if (self.registration.navigationPreload) {
      // Enable navigation preloads!
      await self.registration.navigationPreload.enable();
    }
  }());
});
```

#### Using a preloaded response

The following example shows the implementation of a fetch event that uses a preloaded response ({{domxref("FetchEvent.preloadResponse")}}).

```js
addEventListener('fetch', event => {
  event.respondWith(async function() {
    // Respond from the cache if we can
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    // Else, use the preloaded response, if it's there
    const response = await event.preloadResponse;
    if (response) return response;

    // Else try the network.
    return fetch(event.request);
  }());
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speed up Service Worker with Navigation Preloads](https://developers.google.com/web/updates/2017/02/navigation-preload) (developers.google.com)
