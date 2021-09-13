---
title: Cache.addAll()
slug: Web/API/Cache/addAll
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
  - addAll
browser-compat: api.Cache.addAll
---
{{APIRef("Service Workers API")}}

The **`addAll()`** method of the
{{domxref("Cache")}} interface takes an array of URLs, retrieves them, and adds the
resulting response objects to the given cache. The request objects created during
retrieval become keys to the stored response operations.

> **Note:** `addAll()` will overwrite any key/value pairs
> previously stored in the cache that match the request, but will fail if a
> resulting `put()` operation would overwrite a previous cache entry stored
> by the same `addAll()` method.

## Syntax

```js
cache.addAll(requests[]).then(function() {
  // requests have been added to the cache
});
```

### Parameters

- requests
  - : An array of string URLs that you want to be fetched and added to the cache. You can
    specify the {{domxref("Request")}} object instead of the URL.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined`.

### Exceptions

- `TypeError`

  - : The URL scheme is not `http` or `https`.

    The Response status is not in the 200 range (i.e., not a successful response.) This occurs if the request does not return successfully, but also if the request is a _cross-origin no-cors_ request (in which case the reported status is always 0.)

## Examples

This code block waits for an {{domxref("InstallEvent")}} to fire, then runs
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} to handle the install process for
the app. This consists of calling {{domxref("CacheStorage.open")}} to create a new
cache, then using `addAll()` to add a series of assets to it.

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
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
- {{domxref("Cache")}}
- {{domxref("caches")}}
