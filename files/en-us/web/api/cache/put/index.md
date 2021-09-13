---
title: Cache.put()
slug: Web/API/Cache/put
tags:
  - API
  - Cache
  - Experimental
  - Method
  - NeedsExample
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - put
browser-compat: api.Cache.put
---
{{APIRef("Service Workers API")}}

The **`put()`** method of the
{{domxref("Cache")}} interface allows key/value pairs to be added to the current
{{domxref("Cache")}} object.

Often, you will just want to {{domxref("fetch()")}}
one or more requests, then add the result straight to your cache. In such cases you are
better off using
{{domxref("Cache.add","Cache.add()")}}/{{domxref("Cache.addAll","Cache.addAll()")}}, as
they are shorthand functions for one or more of these operations.

```js
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('Bad response status');
  }
  return cache.put(url, response);
})
```

> **Note:** `put()` will overwrite any key/value pair
> previously stored in the cache that matches the request.

> **Note:** {{domxref("Cache.add")}}/{{domxref("Cache.addAll")}} do not
> cache responses with `Response.status` values that are not in the 200
> range, whereas {{domxref("Cache.put")}} lets you store any request/response pair. As a
> result, {{domxref("Cache.add")}}/{{domxref("Cache.addAll")}} can't be used to store
> opaque responses, whereas {{domxref("Cache.put")}} can.

## Syntax

```js
cache.put(request, response).then(function() {
  // request/response pair has been added to the cache
});
```

### Parameters

- request
  - : The {{domxref("Request")}} object or URL that you want to add to the cache.
- response
  - : The {{domxref("Response")}} you want to match up to the request.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined`.

> **Note:** The promise will reject with a `TypeError` if the
> URL scheme is not `http` or `https`.

## Examples

This example is from the MDN [sw-test
example](https://github.com/mdn/sw-test/) (see [sw-test running live](https://mdn.github.io/sw-test/)).
Here we wait for a {{domxref("FetchEvent")}} to fire. We construct a custom response
like so:

1.  Check whether a match for the request is found in the {{domxref("CacheStorage")}}
    using {{domxref("CacheStorage.match","CacheStorage.match()")}}. If so, serve that.
2.  If not, open the `v1` cache using `open()`, put the default
    network request in the cache using {{domxref("Cache.put","Cache.put()")}} and return a
    clone of the default network request using `return response.clone()`. Clone
    is needed because `put()` consumes the response body.
3.  If this fails (e.g., because the network is down), return a fallback response.

```js
var response;
var cachedResponse = caches.match(event.request).catch(function() {
  return fetch(event.request);
}).then(function(r) {
  response = r;
  caches.open('v1').then(function(cache) {
    cache.put(event.request, response);
  });
  return response.clone();
}).catch(function() {
  return caches.match('/sw-test/gallery/myLittleVader.jpg');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
