---
title: Cache
slug: Web/API/Cache
page-type: web-api-interface
browser-compat: api.Cache
---

{{APIRef("Service Workers API")}}

The **`Cache`** interface provides a persistent storage mechanism for {{domxref("Request")}} / {{domxref("Response")}} object pairs that are cached in long lived memory. How long a `Cache` object lives is browser dependent, but a single origin's scripts can typically rely on the presence of a previously populated `Cache` object. Note that the `Cache` interface is exposed to windowed scopes as well as workers. You don't have to use it in conjunction with service workers, even though it is defined in the service worker spec.

An origin can have multiple, named `Cache` objects. You are responsible for implementing how your script (e.g. in a {{domxref("ServiceWorker")}}) handles `Cache` updates. Items in a `Cache` do not get updated unless explicitly requested; they don't expire unless deleted. Use {{domxref("CacheStorage.open", "CacheStorage.open()")}} to open a specific named `Cache` object and then call any of the `Cache` methods to maintain the `Cache`.

You are also responsible for periodically purging cache entries. Each browser has a hard limit on the amount of cache storage that a given origin can use. `Cache` quota usage estimates are available via the {{domxref("StorageManager.estimate()")}} method. The browser does its best to manage disk space, but it may delete the `Cache` storage for an origin. The browser will generally delete all of the data for an origin or none of the data for an origin. Make sure to version caches by name and use the caches only from the version of the script that they can safely operate on. See [Deleting old caches](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#deleting_old_caches) for more information.

> **Note:** The key matching algorithm depends on the [VARY header](https://www.fastly.com/blog/best-practices-using-vary-header) in the value. So matching a new key requires looking at both key and value for entries in the `Cache` object.

> **Note:** The caching API doesn't honor HTTP caching headers.

{{AvailableInWorkers}}

{{securecontext_header}}

## Instance methods

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : Returns a {{jsxref("Promise")}} that resolves to the response associated with the first matching request in the `Cache` object.
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an array of all matching responses in the `Cache` object.
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : Takes a URL, retrieves it and adds the resulting response object to the given cache. This is functionally equivalent to calling `fetch()`, then using `put()` to add the results to the cache.
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : Takes an array of URLs, retrieves them, and adds the resulting response objects to the given cache.
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : Takes both a request and its response and adds it to the given cache.
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : Finds the `Cache` entry whose key is the request, returning a {{jsxref("Promise")}} that resolves to `true` if a matching `Cache` entry is found and deleted. If no `Cache` entry is found, the promise resolves to `false`.
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an array of `Cache` keys.

## Examples

This code snippet is from the [service worker selective caching sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (see [selective caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) The code uses {{domxref("CacheStorage.open()")}} to open any `Cache` objects with a `Content-Type` header that starts with `font/`.

The code then uses {{domxref("Cache.match()")}} to see if there's already a matching font in the cache, and if so, returns it. If there isn't a matching font, the code fetches the font from the network and uses {{domxref("Cache.put()")}} to cache the fetched resource.

The code handles exceptions thrown from the {{domxref("fetch()")}} operation. Note that an HTTP error response (e.g., 404) will not trigger an exception. It will return a normal response object that has the appropriate error code.

The code snippet also shows a best practice for versioning caches used by the service worker. Though there's only one cache in this example, the same approach can be used for multiple caches. It maps a shorthand identifier for a cache to a specific, versioned cache name. The code also deletes all caches that aren't named in `CURRENT_CACHES`.

In the code example, `caches` is a property of the {{domxref("ServiceWorkerGlobalScope")}}. It holds the `CacheStorage` object, by which it can access the {{domxref("CacheStorage")}} interface.

> **Note:** In Chrome, visit `chrome://inspect/#service-workers` and click on the "inspect" link below the registered service worker to view logging statements for the various actions the [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) script is performing.

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  font: `font-cache-v${CACHE_VERSION}`,
};

self.addEventListener("activate", (event) => {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic
  // will handle the case where there are multiple versioned caches.
  const expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCacheNamesSet.has(cacheName)) {
            // If this cache name isn't present in the set of
            // "expected" cache names, then delete it.
            console.log("Deleting out of date cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.open(CURRENT_CACHES.font).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            // If there is an entry in the cache for event.request,
            // then response will be defined and we can just return it.
            // Note that in this example, only font resources are cached.
            console.log(" Found response in cache:", response);

            return response;
          }

          // Otherwise, if there is no entry in the cache for event.request,
          // response will be undefined, and we need to fetch() the resource.
          console.log(
            " No response for %s found in cache. About to fetch " +
              "from network…",
            event.request.url,
          );

          // We call .clone() on the request since we might use it
          // in a call to cache.put() later on.
          // Both fetch() and cache.put() "consume" the request,
          // so we need to make a copy.
          // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
          return fetch(event.request.clone()).then((response) => {
            console.log(
              "  Response for %s from network is: %O",
              event.request.url,
              response,
            );

            if (
              response.status < 400 &&
              response.headers.has("content-type") &&
              response.headers.get("content-type").match(/^font\//i)
            ) {
              // This avoids caching responses that we know are errors
              // (i.e. HTTP status code of 4xx or 5xx).
              // We also only want to cache responses that correspond
              // to fonts, i.e. have a Content-Type response header that
              // starts with "font/".
              // Note that for opaque filtered responses
              // https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
              // we can't access to the response headers, so this check will
              // always fail and the font won't be cached.
              // All of the Google Web Fonts are served from a domain that
              // supports CORS, so that isn't an issue here.
              // It is something to keep in mind if you're attempting
              // to cache other resources from a cross-origin
              // domain that doesn't support CORS, though!
              console.log("  Caching the response to", event.request.url);
              // We call .clone() on the response to save a copy of it
              // to the cache. By doing so, we get to keep the original
              // response object which we will return back to the controlled
              // page.
              // https://developer.mozilla.org/en-US/docs/Web/API/Request/clone
              cache.put(event.request, response.clone());
            } else {
              console.log("  Not caching the response to", event.request.url);
            }

            // Return the original response object, which will be used to
            // fulfill the resource request.
            return response;
          });
        })
        .catch((error) => {
          // This catch() will handle exceptions that arise from the match()
          // or fetch() operations.
          // Note that a HTTP error response (e.g. 404) will NOT trigger
          // an exception.
          // It will return a normal response object that has the appropriate
          // error code set.
          console.error("  Error in fetch handler:", error);

          throw error;
        });
    }),
  );
});
```

### Cookies and Cache objects

The [Fetch API](/en-US/docs/Web/API/Fetch_API) requires {{httpheader("Set-Cookie")}} headers to be stripped before returning a {{domxref("Response")}} object from {{domxref("fetch()")}}. So a `Response` stored in a `Cache` won't contain `Set-Cookie` headers, and therefore won't cause any cookies to be stored.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
