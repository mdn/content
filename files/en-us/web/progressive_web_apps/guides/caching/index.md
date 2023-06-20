---
title: Caching
slug: Web/Progressive_web_apps/Guides/Caching
---

{{PWASidebar}}

When a user opens and interacts with a website, all the resources that the website needs, including the HTML, JavaScript, CSS, images, fonts, as well as any data explicitly requested by the app, are retrieved by making HTTP(S) requests. One of the most fundamental features of a PWA is the ability to explicitly cache some of the app's resources on the device, meaning that they can be retrieved without needing to send a request to the network.

There are two main benefits to caching resources locally: **offline operation** and **responsiveness**.

- **Offline operation**: Caching enables a PWA to function to a greater or lesser extent while the device does not have network connectivity.
- **Responsiveness**: Even if the device is online, a PWA will usually be much more responsive if its user interface is fetched from the cache, rather than the network.

The main drawback, of course, is **freshness**: caching is less appropriate for resources which need to be up to date. Also, for some types of requests, such as [POST](/en-US/docs/Web/HTTP/Methods/POST) requests, caching is never appropriate.

This means that whether and when you should cache a resource is very dependent on the resource in question, and a PWA will typically adopt different strategies for different resources. In this guide we'll look at some common caching strategies for PWAs, and see which strategies make sense for which resources.

## Caching technology overview

The main technologies on which a PWA can build a caching strategy are the [Fetch API](/en-US/docs/Web/API/Fetch_API), the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API), and the [Cache API](/en-US/docs/Web/API/Cache).

### Fetch API

The Fetch API defines a global function {{domxref("fetch()")}} for fetching a network resource, and {{domxref("Request")}} and {{domxref("Response")}} interfaces that represent network requests and responses. The `fetch()` function takes a `Request` or a URL as an argument, and returns a {{jsxref("Promise")}} that resolves to a `Response`.

The `fetch()` function is available to service workers as well as to the main app thread.

### Service Worker API

A service worker is a part of a PWA: it's a separate script that runs in its own thread, separate from the app's main thread.

When a service worker is installed, the browser fires an event called {{domxref("ServiceWorkerGlobalScope.install_event", "install")}} in the service worker's global scope. At this point the service worker can _precache_ resources, fetching them from the network and storing them in the cache. This ensures that they will already be available locally the first time they are needed.

Once the service worker is active, then whenever the app requests a network resource controlled by the service worker, the browser fires an event called {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} in the service worker's global scope. This event is fired not only for explicit `fetch()` calls from the main thread, but also implicit network requests to load pages and subresources (such as JavaScript, CSS, and images) made by the browser following page navigation.

By listening for the `fetch` event, the service worker can intercept the request and return a customized `Response`. In particular, it can return a locally cached response instead of always going to the network, or return a locally cached response if the device is offline.

### Cache API

The {{domxref("Cache")}} interface provides persistent storage for `Request`/`Response` pairs. It provides methods to add and delete `Request`/`Response` pairs, and to look up a cached `Response` matching a given `Request`. The cache is available in both the main app thread and the service worker: so it is possible for one thread to add a response there, and the other to retrieve it.

Most commonly, the service worker will add resources to the cache in its `install` or `fetch` event handlers.

## Caching strategies

A caching strategy is an algorithm for when to cache a resource, when to serve a cached resource, and when to get the resource from the network. In this section we'll summarize some common strategies.

This isn't an exhaustive list: it's just intended to illustrate the kinds of approaches a PWA can take. Each PWA must consider its own specific needs when deciding which strategies to use for which resources.

### Cache only

In this strategy, the service worker precaches some resources in its `install` event handler:

```js
const cacheName = "MyCache_1";
const precachedResources = ["/", "/app.js", "/style.css"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});
```

Note that in the `install` event handler, we pass the result of the caching operation into the event's {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} method. This means that if caching fails for any reason, the installation fails: so conversely, when the service worker intercepts a request for a precached resource, it can be assured that the resource exists in the cache.

When the resource is requested, we look at the URL of the request. If the URL matches one of the precached resources, we implement a "cache only" strategy: we retrieve the resource from the cache, and return the result. If there wasn't a match, this will be treated like a network error.

```js
async function cacheOnly(request) {
  return caches.match(request);
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheOnly(event.request));
  }
});
```

This is an appropriate stategy for resources that the PWA is certain to need, that will not change for this version of the app, and that need to be fetched as quickly as possible. That includes, for example, the basic user interface of the app. If this is precached, then the app's UI can be rendered on launch without needing any network requests.

Note that in the example above, `respondWith()` is only called for requests in `precachedResources`. If `respondWith()` is not called for a given request, the request is sent to the network as if the service worker had not intercepted it. So this strategy actually implements "cache only" for precached resources, and "network only" for all other requests.

### Cache first

This is an extension to the previous strategy. In the `fetch` event handler, if the resource is cachable, we:

- Look in the cache for the resource, and return the resource if it is found.
- Otherwise, go to the network. If the network request succeeds, cache the resource for next time.

If the resource is not cachable, we only use the network, as before. The definition of "cachable" is specific to the PWA, but again includes the idea that the resource should not change for this version of the app. In this example, everything except requests for JSON data is treated as cachable.

```js
function isCachable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (isCachable(event.request)) {
    event.respondWith(cacheFirst(event.request));
  }
});
```

Note also that when we add `networkResponse` to the cache, we must clone the response and add the copy to the cache, returning the original. This is because `Response` objects are streamable, so may only be read once.

### Stale while revalidate

The drawback of "cache first" is that once a response is in the cache, it is never refreshed until a new version of the app is installed.

The "stale while revalidate" strategy is similar to "cache first", except that we always send the request to the network, even after a cache hit, and use the response to refresh the cache. This means we get the responsiveness of "cache first", but get a fairly fresh response (as long as the request is made reasonably often).

```js
function isCachable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  const fetchedResponse = fetch(request);

  fetchedResponse.then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });

  return cachedResponse || fetchedResponse;
}

self.addEventListener("fetch", (event) => {
  if (isCachable(event.request)) {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});
```

Note that we update the cache asynchronously (in a `then()` handler), so the app does not have to wait for the network response to be received before it can use the cached response.

This is a good choice when responsiveness is important, and freshness is somewhat important but not essential.

### Network first

The last strategy we'll look at, "network first", is the inverse of cache first: we try to retrieve the resource from the network. If the network request succeeds, we return the response and update the cache. If it fails, we try the cache.

```js
function isCachable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("MyCache_1");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  if (isCachable(event.request)) {
    event.respondWith(networkFirst(event.request));
  }
});
```

This is useful for requests for which it is important to get the most fresh response possible, but for which a cached resource is better than nothing. A messaging app's list of recent messages might fall into this category.

There are still requests for which no response is better than a possibly-outdated response, and for which only a "network only" strategy is appropriate. For example, if an app is showing the list of available products, it will be frustrating to users if the list is out of date.

## Deleting cached data

Caches have a limited amount of storage space, and the browser may evict an app's cached data if the limit is exceeded. The specific limits and behavior are browser-specific: see [Storage quotas and eviction criteria](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) for details. In practice, eviction of cached data is a very rare event. The user can also clear an app's cache at any time.

A PWA should clean up any old versions of its cache in the service worker's {{domxref("ServiceWorkerGlobalScope.activate_event", "activate")}} event: when this event fires, the service worker can be sure that no previous versions of the service worker are running, so old cached data is no longer needed.

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Storage quotas and eviction criteria](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)
- [Strategies for service worker caching](https://developer.chrome.com/docs/workbox/caching-strategies-overview) on developer.chrome.com (September 24, 2021)
- [The Offline Cookbook](https://web.dev/offline-cookbook/) on web.dev (September 28, 2020)
