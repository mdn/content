---
title: caches
slug: Web/API/caches
page-type: web-api-global-property
tags:
  - API
  - Property
  - Read-only
  - Reference
  - Service Workers
  - Web Workers
  - Window
browser-compat: api.caches
---
{{APIRef("Service Workers API")}}

The global **`caches`** read-only property returns the {{domxref("CacheStorage")}} object associated with the current context.
This object enables functionality such as storing assets for offline use, and generating custom responses to requests.

{{securecontext_header}}

## Value

A {{domxref("CacheStorage")}} object.

## Examples

The following example shows how you'd use a cache in a [service worker](/en-US/docs/Web/API/Service_Worker_API) context to store assets offline.

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

- [Service Workers](/en-US/docs/Web/API/Service_Worker_API)
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
