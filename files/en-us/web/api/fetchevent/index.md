---
title: FetchEvent
slug: Web/API/FetchEvent
page-type: web-api-interface
tags:
  - API
  - FetchEvent
  - Interface
  - Offline
  - Reference
  - Service Workers
  - Workers
browser-compat: api.FetchEvent
---
{{APIRef("Service Workers API")}}

This is the event type for `fetch` events dispatched on the {{domxref("ServiceWorkerGlobalScope", "service worker global scope", "", 1)}}. It contains information about the fetch, including the request and how the receiver will treat the response. It provides the {{domxref("FetchEvent.respondWith", "event.respondWith()")}} method, which allows us to provide a response to this fetch.

{{InheritanceDiagram}}

## Constructor

- {{domxref("FetchEvent.FetchEvent()", "FetchEvent()")}}
  - : Creates a new `FetchEvent` object. This constructor is not typically used. The browser creates these objects itself and provides them to `fetch` event callbacks.

## Properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("FetchEvent.clientId")}} {{ReadOnlyInline}}
  - : The {{domxref("Client.id", "id")}} of the same-origin {{domxref("Client", "client")}} that initiated the fetch.
- {{domxref("FetchEvent.preloadResponse")}} {{ReadOnlyInline}}
  - : A {{jsxref("Promise")}} for a {{domxref("Response")}}, or `undefined` if this fetch is not a navigation, or [navigation preload](/en-US/docs/Web/API/NavigationPreloadManager) is not enabled.
- {{domxref("FetchEvent.replacesClientId")}} {{ReadOnlyInline}}
  - : The {{domxref("Client.id", "id")}} of the {{domxref("Client", "client")}} that is being replaced during a page navigation.
- {{domxref("FetchEvent.resultingClientId")}} {{ReadOnlyInline}}
  - : The {{domxref("Client.id", "id")}} of the {{domxref("Client", "client")}} that replaces the previous client during a page navigation.
- {{domxref("FetchEvent.request")}} {{ReadOnlyInline}}
  - : The {{domxref("Request")}} the browser intends to make.

## Methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}}_.

- {{domxref("FetchEvent.respondWith()")}}
  - : Prevent the browser's default fetch handling, and provide (a promise for) a response yourself.
- {{domxref("ExtendableEvent.waitUntil()")}}
  - : Extends the lifetime of the event. Used to notify the browser of tasks that extend beyond the returning of a response, such as streaming and caching.

## Examples

This fetch event uses the browser default for non-GET requests.
For GET requests it tries to return a match in the cache, and falls back to the network. If it finds a match in the cache, it asynchronously updates the cache for next time.

```js
self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method !== "GET") return;

  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // If we found a match in the cache, return it, but also
        // update the entry in the cache in the background.
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })()
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
