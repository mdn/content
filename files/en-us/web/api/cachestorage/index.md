---
title: CacheStorage
slug: Web/API/CacheStorage
page-type: web-api-interface
tags:
  - API
  - CacheStorage
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.CacheStorage
---

{{APIRef("Service Workers API")}}

The **`CacheStorage`** interface represents the storage for {{domxref("Cache")}} objects.

The interface:

- Provides a master directory of all the named caches that can be accessed by a {{domxref("ServiceWorker")}} or other type of worker or {{domxref("window")}} scope (you're not limited to only using it with service workers).
- Maintains a mapping of string names to corresponding {{domxref("Cache")}} objects.

Use {{domxref("CacheStorage.open()")}} to obtain a {{domxref("Cache")}} instance.

Use {{domxref("CacheStorage.match()")}} to check if a given {{domxref("Request")}} is a key in any of the {{domxref("Cache")}} objects that the `CacheStorage` object tracks.

You can access `CacheStorage` through the global {{domxref("caches")}} property.

> **Note:** `CacheStorage` always rejects with a `SecurityError` on untrusted origins (i.e. those that aren't using HTTPS, although this definition will likely become more complex in the future.) When testing on Firefox, you can get around this by checking the **Enable Service Workers over HTTP (when toolbox is open)** option in the Firefox Devtools options/gear menu. Furthermore, because `CacheStorage` requires file-system access, it may be unavailable in private mode in Firefox.

> **Note:** {{domxref("CacheStorage.match()")}} is a convenience method. Equivalent functionality to match a cache entry can be implemented by returning an array of cache names from {{domxref("CacheStorage.keys()")}}, opening each cache with {{domxref("CacheStorage.open()")}}, and matching the one you want with {{domxref("Cache.match()")}}.

{{AvailableInWorkers}}

{{securecontext_header}}

## Methods

- {{domxref("CacheStorage.match()")}}
  - : Checks if a given {{domxref("Request")}} is a key in any of the {{domxref("Cache")}} objects that the {{domxref("CacheStorage")}} object tracks, and returns a {{jsxref("Promise")}} that resolves to that match.
- {{domxref("CacheStorage.has()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to `true` if a {{domxref("Cache")}} object matching the `cacheName` exists.
- {{domxref("CacheStorage.open()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to the {{domxref("Cache")}} object matching the `cacheName` (a new cache is created if it doesn't already exist.)
- {{domxref("CacheStorage.delete()")}}
  - : Finds the {{domxref("Cache")}} object matching the `cacheName`, and if found, deletes the {{domxref("Cache")}} object and returns a {{jsxref("Promise")}} that resolves to `true`. If no {{domxref("Cache")}} object is found, it resolves to `false`.
- {{domxref("CacheStorage.keys()")}}
  - : Returns a {{jsxref("Promise")}} that will resolve with an array containing strings corresponding to all of the named {{domxref("Cache")}} objects tracked by the {{domxref("CacheStorage")}}. Use this method to iterate over a list of all the {{domxref("Cache")}} objects.

## Examples

This code snippet is from the MDN [simple service worker example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (see [simple service worker running live](https://bncb2v.csb.app/).)
This service worker script waits for an {{domxref("InstallEvent")}} to fire, then runs {{domxref("ExtendableEvent.waitUntil","waitUntil")}} to handle the install process for the app. This consists of calling {{domxref("CacheStorage.open")}} to create a new cache, then using {{domxref("Cache.addAll")}} to add a series of assets to it.

In the second code block, we wait for a {{domxref("FetchEvent")}} to fire. We construct a custom response like so:

1. Check whether a match for the request is found in the CacheStorage. If so, serve that.
2. If not, fetch the request from the network, then also open the cache created in the first block and add a clone of the request to it using {{domxref("Cache.put")}} (`cache.put(event.request, response.clone())`.)
3. If this fails (e.g. because the network is down), return a fallback response.

Finally, return whatever the custom response ended up being equal to, using {{domxref("FetchEvent.respondWith")}}.

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
        ])
      )
  );
});

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

This snippet shows how the API can be used outside of a service worker context, and uses the `await` operator for much more readable code.

```js
// Try to get data from the cache, but fall back to fetching it live.
async function getData() {
  const cacheVersion = 1;
  const cacheName = `myapp-${cacheVersion}`;
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  let cachedData = await getCachedData(cacheName, url);

  if (cachedData) {
    console.log("Retrieved cached data");
    return cachedData;
  }

  console.log("Fetching fresh data");

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(url);
  cachedData = await getCachedData(cacheName, url);
  await deleteOldCaches(cacheName);

  return cachedData;
}

// Get data from the cache.
async function getCachedData(cacheName, url) {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
}

// Delete any old caches to respect user's disk space.
async function deleteOldCaches(currentCache) {
  const keys = await caches.keys();

  for (const key of keys) {
    const isOurCache = key.startsWith("myapp-");
    if (currentCache === key || !isOurCache) {
      continue;
    }
    caches.delete(key);
  }
}

try {
  const data = await getData();
  console.log({ data });
} catch (error) {
  console.error({ error });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
- [Private Browsing / Incognito modes](/en-US/docs/Web/API/Web_Storage_API#private_browsing_incognito_modes)
