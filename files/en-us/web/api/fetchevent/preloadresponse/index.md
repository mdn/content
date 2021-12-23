---
title: FetchEvent.preloadResponse
slug: Web/API/FetchEvent/preloadResponse
tags:
  - API
  - Experimental
  - FetchEvent
  - Offline
  - Property
  - Reference
  - Service Workers
  - Web Performance
  - Workers
  - request
browser-compat: api.FetchEvent.preloadResponse
---
{{APIRef("Service Workers API")}}

The **`preloadResponse`** read-only property of the
{{domxref("FetchEvent")}} interface returns a {{jsxref("Promise")}} that resolves to the
navigation preload {{domxref("Response")}} if navigation preload was triggered or
undefined otherwise.

## Syntax

```js
var expectedResponse = fetchEvent.preloadResponse;
```

### Value

A {{jsxref("Promise")}} that resolves to a {{domxref("Response")}} or otherwise to
`undefined`.

## Example

This code snippet is from the [navigation
preload page](https://developers.google.com/web/updates/2017/02/navigation-preload#the-solution). The {{domxref("ServiceWorkerGlobalScope.onfetch")}} event handler
listens for the `fetch` event. When fired, pass a promise that back to the
controlled page to {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}.
This promise resolves to the first matching URL request in the {{domxref("Cache")}}
object. If no match is found, the code checks for a preloaded response. Else it fetches
a response from the network.

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

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service
  workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker
  ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web
  workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
