---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
page-type: web-api-interface
browser-compat: api.NavigationPreloadManager
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`NavigationPreloadManager`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) provides methods for managing the preloading of resources in parallel with service worker bootup.

If supported, an object of this type is returned by {{domxref("ServiceWorkerRegistration.navigationPreload")}}.
The result of a preload fetch request is waited on using the promise returned by {{domxref("FetchEvent.preloadResponse")}}.

## Instance methods

- {{domxref("NavigationPreloadManager.enable()")}}
  - : Enables navigation preloading, returning a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.disable()")}}
  - : Disables navigation preloading, returning a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.
- {{domxref("NavigationPreloadManager.setHeaderValue()")}}
  - : Sets the value of the {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP header sent in preloading requests and returns an empty {{jsxref("Promise")}}.
- {{domxref("NavigationPreloadManager.getState()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to an object with properties that indicate whether preloading is enabled, and what value will be sent in the {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP header in preloading requests.

## Description

Service workers handle {{domxref("Window/fetch", "fetch()")}} events on behalf of a site, for pages within a given scope.
When a user navigates to a page that uses a service worker, the browser boots up the worker (if it isn't already running), then sends it a fetch event and waits for the result.
On receiving an event, the worker returns the resource from a cache if it is present, or otherwise fetches the resource from the remote server (storing a copy for returning in future requests).

A service worker cannot process events from the browser until it has booted.
This is unavoidable, but usually doesn't have much impact.
Service workers are often already started (they remain active for some time after processing other requests).
Even if a service worker does have to boot, much of the time it may be returning values from a cache, which is very fast.
However, in those cases where a worker has to boot before it can start fetching a remote resource, then the delay can be significant.

The `NavigationPreloadManager` provides a mechanism to allow fetching of the resources to run in parallel with service worker boot, so that by the time the worker is able to handle the fetch request from the browser, the resource may already have been fully or partially downloaded.
This makes the case where the worker has to start up "no worse" than when the worker is already started, and in some cases better.

The preload manager sends the {{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP header with preload requests, allowing responses to be customized for preload requests.
This might be used, for example, to reduce the data sent to just part of the original page, or to customize the response based on the user's log-in state.

## Examples

The examples here are from [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com).

### Feature detection and enabling navigation preloading

Below we enable navigation preloading in the service worker's `activate` event handler, after first using {{domxref("ServiceWorkerRegistration.navigationPreload")}} to determine if the feature is supported (this returns either the `NavigationPreloadManager` for the service worker or `undefined` if the feature is not supported).

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

### Using a preloaded response

The following code shows a service worker fetch event handler that uses a preloaded response ({{domxref("FetchEvent.preloadResponse")}}).

The `fetch` event handler calls {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} to pass a promise back to the controlled page.
This promise will resolve with the requested resource, which may be from the cache, a preloaded fetch request, or a new network request.

If there is a matching URL request in the {{domxref("Cache")}} object, then the code returns a resolved promise for fetching the response from the cache.
If no match is found in the cache, the code returns the resolved preloaded response ({{domxref("FetchEvent.preloadResponse")}}).
If there is no matching cache entry or preloaded response, the code starts a new fetch operation from the network and returns the (unresolved) promise for that fetch operation.

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Respond from the cache if we can
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // Else, use the preloaded response, if it's there
      const response = await event.preloadResponse;
      if (response) return response;

      // Else try the network.
      return fetch(event.request);
    })(),
  );
});
```

### Custom responses

The browser sends the HTTP header {{HTTPHeader("Service-Worker-Navigation-Preload")}} with preload requests, with a default directive value of `true`.
This allows servers to differentiate between normal and preload fetch requests, and to send different responses in each case if required.

> [!NOTE]
> If the response from preload and normal fetch operations can be different, then the server must set `Vary: Service-Worker-Navigation-Preload` to ensure that the different responses are cached.

The header value can be changed to any other string value using {{domxref("NavigationPreloadManager.setHeaderValue()")}} in order to provide additional context for the prefetch operation.
For example, you might set the value to the ID of your most recently cached resource, so that the server won't return any resources unless they are actually needed.
Similarly, you could configure the returned information based on authentication status instead of using cookies.

The code below shows how to set the value of the header directive to some variable `newValue`.

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => {
    console.log("Done!");
  });
```

[Speed up Service Worker with Navigation Preloads > Custom responses for preloads](https://web.dev/blog/navigation-preload) provides a more complete example of a site where the response for an article web page is constructed from a cached header and footer, so that only the article content is returned for a prefetch.

### Getting the state

You can use {{domxref("NavigationPreloadManager.getState()")}} to check whether navigation preloading is enabled and to determine what directive value is sent with the
{{HTTPHeader("Service-Worker-Navigation-Preload")}} HTTP header for preload requests.

The code below shows how to get the promise that resolves to a `state` object and log the result.

```js
navigator.serviceWorker.ready
  .then((registration) => registration.navigationPreload.getState())
  .then((state) => {
    console.log(state.enabled); // boolean
    console.log(state.headerValue); // string
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com)
