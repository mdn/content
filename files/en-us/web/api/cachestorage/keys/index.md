---
title: CacheStorage.keys()
slug: Web/API/CacheStorage/keys
tags:
  - API
  - CacheStorage
  - Experimental
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - keys
browser-compat: api.CacheStorage.keys
---
{{APIRef("Service Workers API")}}

The
**`keys()`** method of the
{{domxref("CacheStorage")}} interface returns a {{jsxref("Promise")}} that will
resolve with an array containing strings corresponding to all of the named
{{domxref("Cache")}} objects tracked by the {{domxref("CacheStorage")}} object in the
order they were created. Use this method to iterate over a list of all
{{domxref("Cache")}} objects.

You can access `CacheStorage` through the global
{{domxref("caches")}} property.

## Syntax

```js
caches.keys().then(function(keyList) {
  //do something with your keyList
});
```

### Parameters

None.

### Return value

a {{jsxref("Promise")}} that resolves with an array of the {{domxref("Cache")}} names
inside the {{domxref("CacheStorage")}} object.

## Examples

In this code snippet we wait for an {{domxref("ServiceWorkerGlobalScope.onactivate",
  "activate")}} event, and then run a
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}} block that clears up any old,
unused caches before a new service worker is activated. Here we have an allowlist
containing the names of the caches we want to keep (`cacheAllowlist`). We
return the keys of the caches in the {{domxref("CacheStorage")}} object using
`keys()`, then check each key to see if it is in the allowlist. If not, we
delete it using {{domxref("CacheStorage.delete()")}}.

```js
this.addEventListener('activate', function(event) {
  var cacheAllowlist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheAllowlist.indexOf(key) === -1) {
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
