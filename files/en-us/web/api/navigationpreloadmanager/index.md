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

If supported, an object of this type is returned by {{domxref("ServiceWorkerRegistration.navigationPreload")}}.

## Methods

- {{domxref("NavigationPreloadManager.enable()")}}
  - : Enables navigation preloading, returning a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.disable()")}}
  - : Disables navigation preloading, returning a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.setHeaderValue()")}}
  - : Sets the value of the `Service-Worker-Navigation-Preload` header and returns an empty {{jsxref("Promise")}}.
- {{domxref("NavigationPreloadManager.getState()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an object with properties that indicate whether preloading is enabled, and the value sent with the {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP header in requests triggered by a preloading {{domxref("fetch()")}}.


## Description

Service workers handle {{domxref("fetch()")}} events on behalf of a site, for pages within a given scope.
When a user navigates to a page that uses a service worker, the browser boots up the worker (if it isn't already running), then sends it a fetch event and waits for the result.
On receiving an event, the worker returns the resource from a cache if it is present, or otherwise fetches the resource from the remote server (storing a copy for returning in future requests).

A service worker cannot process events from the browser until it has booted.
This is unavoidable, but it isn't usually a problem because much of the time service workers are already started (they remain active for some time after processing other requests).
Even if a service worker does have to boot, much of the time it may be returning values from a cache, which is very fast.
However if a worker has to boot before it can start fetching a remote resource then the delay can be significant.

The {{domxref("NavigationPreloadManager")}} provides a mechanism to allow fetching of the resources to run in parallel with service worker boot, so that by the time the worker is able to handle the fetch request from the browser, the resource may either have fully or partially downloaded.
This makes the case where the worker has to start up "no worse" than when the worker is already started, and in some cases better.

In addition, the preload manager sends the {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP header with preload requests, allowing responses to be customized for preload requests.

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

We first check for a cached response, and use it if one exists.
If there is a {{jsxref("Promise")}} for the pre-loaded response we wait for that to resolve (download to complete).
If there is no cached resource and not pre-loaded resource fetch in process, we start a a new fetch.

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

### Custom responses

TBD

### Getting the state

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speed up Service Worker with Navigation Preloads](https://developers.google.com/web/updates/2017/02/navigation-preload) (developers.google.com)
