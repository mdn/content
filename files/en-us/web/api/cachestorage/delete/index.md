---
title: CacheStorage.delete()
slug: Web/API/CacheStorage/delete
tags:
  - API
  - CacheStorage
  - Experimental
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - delete
browser-compat: api.CacheStorage.delete
---
{{APIRef("Service Workers API")}}

The **`delete()`** method of the
{{domxref("CacheStorage")}} interface finds the {{domxref("Cache")}} object matching the
`cacheName`, and if found, deletes the {{domxref("Cache")}} object and
returns a {{jsxref("Promise")}} that resolves to `true`. If no
{{domxref("Cache")}} object is found, it resolves to `false`.

You can access `CacheStorage` through the global
{{domxref("caches")}} property.

## Syntax

```js
caches.delete(cacheName).then(function(boolean) {
  // your cache is now deleted
});
```

### Parameters

- `cacheName`
  - : The name of the cache you want to delete.

### Return value

a {{jsxref("Promise")}} that resolves to `true` if the {{domxref("Cache")}}
object is found and deleted, and `false` otherwise.

## Examples

In this code snippet we wait for an activate event, and then run a
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} block that clears up any old,
unused caches before a new service worker is activated. Here we have an array of cache
names we want to keep (`cachesToKeep`). We return the keys of the caches in
the {{domxref("CacheStorage")}} object using {{domxref("CacheStorage.keys")}}, then
check each key to see if it is in the array. If not, we delete it using
`delete()`.

```js
this.addEventListener('activate', function(event) {
  var cachesToKeep = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cachesToKeep.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
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
