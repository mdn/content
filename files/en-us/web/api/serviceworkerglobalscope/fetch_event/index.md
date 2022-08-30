---
title: "ServiceWorkerGlobalScope: fetch event"
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
page-type: web-api-event
tags:
  - API
  - Property
  - Reference
  - Service
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - Workers
  - onfetch
browser-compat: api.ServiceWorkerGlobalScope.fetch_event
---

{{APIRef("Service Workers API")}}

The **fetch** event is fired when the {{domxref("fetch()")}} method is called.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("fetch", (event) => {});

onfetch = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Syntax

```js
serviceWorkerGlobalScope.onfetch = (fetchEvent) => { /* … */ }
```

## Example

This code snippet is from the [service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (see [prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/).) The {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} event handler
listens for the `fetch` event. When fired, the code returns a promise that
resolves to the first matching request in the {{domxref("Cache")}} object. If no match
is found, the code fetches a response from the network.

The code also handles exceptions thrown from the
{{domxref("fetch()")}} operation. Note that an HTTP
error response (e.g., 404) will not trigger an exception. It will return a normal
response object that has the appropriate error code set.

```js
self.addEventListener("fetch", (event) => {
  console.log(`Handling fetch event for ${event.request.url}`);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);
        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request)
        .then((response) => {
          console.log("Response from network is:", response);

          return response;
        })
        .catch((error) => {
          console.error(`Fetching failed: ${error}`);
          throw error;
        });
    })
  );
});
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
