---
title: Implement a caching strategy
slug: Web/Progressive_web_apps/How_to/Implement_a_caching_strategy
---

{{PWASidebar}}

One of the most fundamental features of a PWA, as opposed to a traditional website, is the ability to function to a greater or lesser extent while the device does not have network connectivity. This is achieved using a [service worker](/en-US/docs/Web/API/Service_Worker_API).

If an app includes a service worker, then whenever the app requests a resource controlled by the service worker (for example, because the user opened the app or clicked an internal link), the browser fires an event called {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} in the service worker's global scope. By listening for this event, the service worker can intercept the request and implement a customized response. In particular, it can return a locally cached response instead of always going to the network, or return a locally cached response if the device is offline.

This customized behavior is called a _caching strategy_. In this document we will describe how to implement some common caching strategies.

Note that the appropriate strategy is dependent on the specific request. For some resources, such as the basic user interface of the app, responsiveness may be more important than freshness. For others, freshness may be more important, even if it means the app needs to try the network every time.

This means that the `fetch` event handler might implement different strategies for different requests. It can use properties of the {{domxref("Request")}} object, such as the {{domxref("Request.url", "url")}} or {{domxref("Request.destination", "destination")}}, to select a strategy.

For example, the handler below will use the [Stale while revalidate](#stale_while_revalidate) strategy for images, and use the network for everything else:

```js
// service-worker.js

self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(stateWhileRevalidate(event.request));
  } else {
    return;
  }
});
```

## Cache-first

In this strategy:

- We first look for the resource in the cache.
  - If it is found, we return the cached resource.
- Otherwise, we try to fetch the resource from the network.
  - If the resource is successfully retrieved, we add it to the cache.
  - Either way, we return the network response.

```js
// service-worker.js

const putInCache = async (request, response) => {
  const cache = await caches.open("my-cache-v1");
  return cache.put(request, response);
};

const cacheFirst = async (request) => {
  // First try to get the resource from the cache.
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  // If the response was not found in the cache,
  // try to get the resource from the network.
  const responseFromNetwork = await fetch(request);
  // If the network request succeeded, clone the response
  if (response.ok) {
    // - put one copy in the cache, for the next time
    // - return the original to the app
    putInCache(request, responseFromNetwork.clone());
  }
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
```

This strategy is a good fit for parts of the app that are not expected to change often, and for which responsiveness is very important. For example, this strategy could be used for the main user interface of the app, as well as static resources such as JS and CSS.

## Network-first

In this strategy:

- We first ask the network for the resource.
  - If the network request succeeds, we return the response, and add it to the cache.
- Otherwise, we try to fetch the resource from the cache.
  - If the resource was found in the cache, we return it.
  - Otherwise, we return a generic error to the app.

```js
// service-worker.js

const putInCache = async (request, response) => {
  const cache = await caches.open("my-cache-v1");
  return cache.put(request, response);
};

const networkFirst = async (request) => {
  // Try to get the resource from the network.
  try {
    const responseFromNetwork = await fetch(request);
    // If the network request succeeded, clone the response
    if (response.ok) {
      // - put one copy in the cache, for the next time
      // - return the original to the app
      putInCache(request, responseFromNetwork.clone());
    }
    return responseFromNetwork;
  } catch (e) {
    // Try to get the resource from the cache.
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    } else {
      // If the resource wasn't in the cache, return an error
      return Response.error();
    }
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(networkFirst(event.request));
});
```

This is a suitable strategy for highly dynamic content, where it's important to get the freshest response possible, while still falling back to a cached value if necessary.

## Stale while revalidate

The third strategy we'll look is is a variation of "Cache-first" in which we always try to refresh the cache from the network after returning the cached value.

In this strategy:

- We first look for the resource in the cache.
- We then start a network request for the resource.
- If the resource was found in the cache, we return it, otherwise we return the pending network response.
- Asynchronously, once the network response has completed, we cache the response.

```js
const putInCache = async (request, response) => {
  const cache = await caches.open("my-cache-v1");
  return cache.put(request, response);
};

async function staleWhileRevalidate(request) {
  // Try to retrieve a response from the cache
  const responseFromCache = await caches.match(request);

  // Also send the request to the network,
  const pendingResponseFromNetwork = fetch(request);

  // ... and cache it asynchronously
  pendingResponseFromNetwork.then((response) => {
    putInCache(request, response.clone());
  });

  // Return the cached response if it was found,
  // or the pending network response otherwise
  return responseFromCache || pendingResponseFromNetwork;
}

self.addEventListener("fetch", (event) => {
  event.respondWith(staleWhileRevalidate(event.request));
});
```

With this strategy, the app stays responsive when the resource is in the cache, and we have a chance to update the cache every time the resource is requested.
