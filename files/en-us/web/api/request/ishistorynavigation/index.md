---
title: "Request: isHistoryNavigation property"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
page-type: web-api-instance-property
browser-compat: api.Request.isHistoryNavigation
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`isHistoryNavigation`** read-only property of the {{domxref("Request")}} interface is a boolean indicating whether the request is a history navigation.

A history navigation is a navigation within the browser's history, made by calling {{domxref("History.go()")}}, {{domxref("History.back()")}}, {{domxref("History.forward()")}}, {{domxref("Navigation.traverseTo()")}}, {{domxref("Navigation.back()")}}, {{domxref("Navigation.forward()")}}, or directly by clicking the browser's back or forward navigation button.

## Value

A boolean value.

## Examples

This example executes in a service worker. It listens for the {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} event. In the event handler, the service worker checks the `isHistoryNavigation` property to know whether the request happened because of a history navigation. If so, it attempts to respond with a cached response. If the cache does not contain a response for this request, the service worker fetches a response from the network, caches a clone of it, and responds with the network response.

```js
self.addEventListener("fetch", (event) => {
  // …

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      (async () => {
        let response = await caches.match(event.request);
        if (response !== undefined) {
          return response;
        }
        response = await fetch(event.request);
        const responseClone = response.clone();

        event.waitUntil(
          caches
            .open("v1")
            .then((cache) => cache.put(event.request, responseClone)),
        );

        return response;
      })(),
    );
  }

  // …
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("History API", "", "", 1)}}
- {{domxref("Navigation API", "", "", 1)}}
- {{domxref("Service Worker API", "", "", 1)}}
