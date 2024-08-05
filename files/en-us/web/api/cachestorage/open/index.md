---
title: "CacheStorage: open() method"
short-title: open()
slug: Web/API/CacheStorage/open
page-type: web-api-instance-method
browser-compat: api.CacheStorage.open
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`open()`** method of the
{{domxref("CacheStorage")}} interface returns a {{jsxref("Promise")}} that resolves to
the {{domxref("Cache")}} object matching the `cacheName`.

You can access `CacheStorage` through the {{domxref("Window.caches")}} property in windows or through the {{domxref("WorkerGlobalScope.caches")}} property in workers.

> [!NOTE]
> If the specified {{domxref("Cache")}} does not exist, a new
> cache is created with that `cacheName` and a {{jsxref("Promise")}} that
> resolves to this new {{domxref("Cache")}} object is returned.

## Syntax

```js-nolint
open(cacheName)
```

### Parameters

- `cacheName`
  - : The name of the cache you want to open.

### Return value

A {{jsxref("Promise")}} that resolves to the requested {{domxref("Cache")}} object.

## Examples

This example is from the MDN [simple service worker example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (see [simple service worker running live](https://bncb2v.csb.app/)).
Here we wait for an {{domxref("InstallEvent")}} to fire, then runs
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} to handle the install process for
the app. This consists of calling `CacheStorage.open()` to create a new
cache, then using {{domxref("Cache.addAll()")}} to add a series of assets to it.

```js
self.addEventListener("install", (event) => {
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
