---
title: CacheStorage.has()
slug: Web/API/CacheStorage/has
tags:
  - API
  - CacheStorage
  - Experimental
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - has
browser-compat: api.CacheStorage.has
---
{{APIRef("Service Workers API")}}

The **`has()`** method of the {{domxref("CacheStorage")}}
interface returns a {{jsxref("Promise")}} that resolves to `true` if a
{{domxref("Cache")}} object matches the `cacheName`.

You can access `CacheStorage` through the global
{{domxref("caches")}} property.

## Syntax

```js
caches.has(cacheName).then(function(boolean) {
  // true: your cache exists!
});
```

### Parameters

- `cacheName`
  - : A {{domxref("DOMString")}} representing the name of the {{domxref("Cache")}} object
    you are looking for in the {{domxref("CacheStorage")}}.

### Return value

a {{jsxref("Promise")}} that resolves to `true` if the cache exists or
`false` if not.

## Examples

The following example first checks whether a cache called 'v1' exists. If so, we add a
list of assets to it. If not then we run some kind of cache set-up function.

```js
caches.has('v1').then(function(hasCache) {
  if (!hasCache) {
    someCacheSetupFunction();
  } else {
    caches.open('v1').then(function(cache) {
      return cache.addAll(myAssets);
    });
  }
}).catch(function() {
  // Handle exception here.
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
