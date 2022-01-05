---
title: FetchEvent.request
slug: Web/API/FetchEvent/request
tags:
  - API
  - Experimental
  - FetchEvent
  - Offline
  - Property
  - Reference
  - Service Workers
  - Workers
  - request
browser-compat: api.FetchEvent.request
---
{{APIRef("Service Workers API")}}

The **`request`** read-only property of the
{{domxref("FetchEvent")}} interface returns the {{domxref("Request")}} that triggered
the event handler.

This property is non-nullable (since version 46, in the case of Firefox.) If a request
is not provided by some other means, the constructor `init` object must
contain a request (see {{domxref("FetchEvent.FetchEvent()")}}.)

## Syntax

```js
var recentRequest = fetchEvent.request;
```

### Value

A {{domxref("Request")}} object.

## Example

This code snippet is from the [service
worker fetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) ([run the fetch
sample live](https://googlechrome.github.io/samples/service-worker/prefetch/)). The {{domxref("ServiceWorkerGlobalScope.onfetch")}} event handler
listens for the `fetch` event. When fired, pass a promise that back to the
controlled page to {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}.
This promise resolves to the first matching URL request in the {{domxref("Cache")}}
object. If no match is found, the code fetches a response from the network.

The code also handles exceptions thrown from the
{{domxref("fetch()")}} operation. Note that an HTTP error
response (e.g., 404) will not trigger an exception. It will return a normal response
object that has the appropriate error code set.

```js
self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }
      console.log('No response found in cache. About to fetch from network...');

      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        console.error('Fetching failed:', error);

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

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service
  workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker
  ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web
  workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
