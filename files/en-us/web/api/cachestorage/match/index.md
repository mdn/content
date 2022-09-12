---
title: CacheStorage.match()
slug: Web/API/CacheStorage/match
page-type: web-api-instance-method
tags:
  - API
  - CacheStorage
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - match
browser-compat: api.CacheStorage.match
---

{{APIRef("Service Workers API")}}

The **`match()`** method of the {{domxref("CacheStorage")}} interface checks if a given {{domxref("Request")}} or URL string is a key for a stored {{domxref("Response")}}.
This method returns a {{jsxref("Promise")}} for a {{domxref("Response")}}, or a {{jsxref("Promise")}} which resolves to `undefined` if no match is found.

You can access `CacheStorage` through the global
{{domxref("caches")}} property.

`Cache` objects are searched in creation order.

> **Note:** {{domxref("CacheStorage.match()", "caches.match()")}} is a convenience method.
> Equivalent functionality is to call {{domxref("cache.match()")}} on each cache (in the order returned by {{domxref("CacheStorage.keys()", "caches.keys()")}}) until a {{domxref("Response")}} is returned.

## Syntax

```js
match(request);
match(request, options);
```

### Parameters

- `request`
  - : The {{domxref("Request")}} you want to match. This can be a {{domxref("Request")}}
    object or a URL string.
- `options` {{optional_inline}}

  - : An object whose properties control how matching is done in the `match`
    operation. The available options are:

    - `ignoreSearch`
      - : A boolean value that specifies whether the
        matching process should ignore the query string in the URL. For example, if set
        to `true`, the `?value=bar` part of
        `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod`
      - : A boolean value that, when set to
        `true`, prevents matching operations from validating the
        {{domxref("Request")}} `http` method (normally only `GET`
        and `HEAD` are allowed.) It defaults to `false`.
    - `ignoreVary`
      - : A boolean value that, when set to
        `true,` tells the matching operation not to perform `VARY`
        header matching. In other words, if the URL matches you will get a match
        regardless of whether the {{domxref("Response")}} object has a `VARY`
        header or not. It defaults to `false`.
    - `cacheName`
      - : A string that represents a specific
        cache to search within.

### Return value

a {{jsxref("Promise")}} that resolves to the matching {{domxref("Response")}}. If
no matching response to the specified request is found, the promise resolves
with `undefined`.

## Examples

This example is from the MDN [simple service worker example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (see [simple service worker running live](https://bncb2v.csb.app/)).
Here we wait for a {{domxref("FetchEvent")}} to fire. We construct a custom response
like so:

1. Check whether a match for the request is found in the {{domxref("CacheStorage")}}
   using {{domxref("CacheStorage.match","CacheStorage.match()")}}. If so, serve that.
2. If not, open the `v1` cache using `open()`, put the default
   network request in the cache using {{domxref("Cache.put","Cache.put()")}} and return a
   clone of the default network request using `return response.clone()`. The
   last is necessary because `put()` consumes the response body.
3. If this fails (e.g., because the network is down), return a fallback response.

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => caches.match("/gallery/myLittleVader.jpg"));
      }
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
- {{domxref("Cache")}}
- {{domxref("caches")}}
