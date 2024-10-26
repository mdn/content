---
title: "Request: isHistoryNavigation property"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
page-type: web-api-instance-property
browser-compat: api.Request.isHistoryNavigation
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`isHistoryNavigation`** read-only property of the {{domxref("Request")}} interface is a boolean indicating whether the request is a history navigation(back/foward navigation). This allows a service worker to know whether a request was due to a back/forward navigation. An example of how this might be used is that a service worker could respond to such a navigation with a cached response.

The history navigation happens by calling {{domxref("History.traverseTo()")}}, {{domxref("History.back()")}}, {{domxref("History.forward()")}}, {{domxref("Navigation.traverseTo()")}}, {{domxref("Navigation.back()")}}, {{domxref("Navigation.forward()")}}, or directly by clicking the browser's navigation button.

## Value

A boolean value.

## Examples

The example code executes in service worker, and listens {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} event. In the event handler, check the `isHistoryNavigation` property to know whether a request happens because of a back/forward navigation.If so, we respond it with a cached response (if existed in cache storage).

```js
self.addEventListener("request", (event) => {
  // ...

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response !== undefined) {
          return response;
        } else {
          return fetch(event.request).then((response) => {
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });

            return response;
          });
        }
      }),
    );
  }

  // ...
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
