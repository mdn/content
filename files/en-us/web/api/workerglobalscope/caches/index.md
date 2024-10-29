---
title: "WorkerGlobalScope: caches property"
short-title: caches
slug: Web/API/WorkerGlobalScope/caches
page-type: web-api-instance-property
browser-compat: api.caches
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

The **`caches`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns the {{domxref("CacheStorage")}} object associated with the current context.
This object enables functionality such as storing assets for offline use, and generating custom responses to requests.

## Value

A {{domxref("CacheStorage")}} object.

## Examples

The following example shows how you'd use a cache in a [service worker](/en-US/docs/Web/API/Service_Worker_API) context to store assets offline.

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    self.caches
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

- [Service Workers](/en-US/docs/Web/API/Service_Worker_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
