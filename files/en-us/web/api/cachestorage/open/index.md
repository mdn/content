---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
tags:
  - API
  - CacheStorage
  - Experimental
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - open
browser-compat: api.CacheStorage.open
---
{{APIRef("Service Workers API")}}

The **`open()`** method of the
{{domxref("CacheStorage")}} interface returns a {{jsxref("Promise")}} that resolves to
the {{domxref("Cache")}} object matching the `cacheName`.

You can access `CacheStorage` through the global
{{domxref("caches")}} property.

> **Note:** If the specified {{domxref("Cache")}} does not exist, a new
> cache is created with that `cacheName` and a {{jsxref("Promise")}} that
> resolves to this new {{domxref("Cache")}} object is returned.

## Syntax

```js
caches.open(cacheName).then(function(cache) {
  // Do something with your cache
});
```

### Parameters

- cacheName
  - : The name of the cache you want to open.

### Return value

A {{jsxref("Promise")}} that resolves to the requested {{domxref("Cache")}} object.

## Examples

This example is from the MDN [sw-test
example](https://github.com/mdn/sw-test/) (see [sw-test running live](https://mdn.github.io/sw-test/)).
Here we wait for an {{domxref("InstallEvent")}} to fire, then runs
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} to handle the install process for
the app. This consists of calling `CacheStorage.open()` to create a new
cache, then using {{domxref("Cache.addAll()")}} to add a series of assets to it.

```js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
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
