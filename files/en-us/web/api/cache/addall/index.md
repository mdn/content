---
title: "Cache: addAll() method"
short-title: addAll()
slug: Web/API/Cache/addAll
page-type: web-api-instance-method
browser-compat: api.Cache.addAll
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`addAll()`** method of the {{domxref("Cache")}} interface takes an array of URLs, retrieves them, and adds the resulting response objects to the given cache. The request objects created during retrieval become keys to the stored response operations.

> **Note:** `addAll()` will overwrite any key/value pairs
> previously stored in the cache that match the request, but will fail if a
> resulting `put()` operation would overwrite a previous cache entry stored by the same `addAll()` method.

## Syntax

```js-nolint
addAll(requests)
```

### Parameters

- `requests`

  - : An array of requests for the resources you want to add to the cache. These can be {{domxref("Request")}} objects or URLs.

    These requests are used as parameters to the {{domxref("Request.Request()", "Request()")}} constructor, so URLs follow the same rules as for that constructor. In particular, URLs may be relative to the base URL, which is the document's {{domxref("Node.baseURI", "baseURI")}} in a window context, or {{domxref("WorkerGlobalScope.location")}} in a worker context.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined`.

### Exceptions

- {{jsxref("TypeError")}}

  - : The URL scheme is not `http` or `https`.

    The Response status is not in the 200 range (i.e., not a successful response.) This occurs if the request does not return successfully, but also if the request is a _cross-origin no-cors_ request (in which case the reported status is always 0.)

## Examples

This code block waits for an {{domxref("InstallEvent")}} to fire, then runs
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} to handle the install process for
the app. This consists of calling {{domxref("CacheStorage.open")}} to create a new
cache, then using `addAll()` to add a series of assets to it.

```js
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
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
- {{domxref("Window.caches")}} and {{domxref("WorkerGlobalScope.caches")}}
