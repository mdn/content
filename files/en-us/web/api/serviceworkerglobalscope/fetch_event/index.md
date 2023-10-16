---
title: "ServiceWorkerGlobalScope: fetch event"
short-title: fetch
slug: Web/API/ServiceWorkerGlobalScope/fetch_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.fetch_event
---

{{APIRef("Service Workers API")}}

The **`fetch`** event is fired in the service worker's global scope when the main app thread makes a network request. It enables the service worker to intercept network requests and send customized responses (for example, from a local cache).

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("fetch", (event) => {});

onfetch = (event) => {};
```

## Description

The `fetch` event is fired in the service worker's global scope when the main app thread makes a network request. This includes not only explicit {{domxref("fetch()")}} calls from the main thread, but also implicit network requests to load pages and subresources (such as JavaScript, CSS, and images) made by the browser following page navigation.

The event handler is passed a {{domxref("FetchEvent")}} object, which provides access to the request as a {{domxref("Request")}} instance.

The `FetchEvent` also provides a {{domxref("FetchEvent.respondWith()", "respondWith()")}} method, that takes a {{domxref("Response")}} (or a `Promise` that resolves to a `Response`) as a parameter.
This enables the service worker event handler to provide the response that is returned to the request in the main thread.

For example, the service worker can return:

- A locally cached response retrieved from the {{domxref("Cache")}} interface.
- A response that the service worker synthesizes, using methods like {{domxref("Response.json()")}} or the {{domxref("Response.Response()", "Response()")}} constructor.
- A network error, using the {{domxref("Response.error_static()", "Response.error()")}} method. This will cause the `fetch()` call to reject.

The `respondWith()` method can only be called once for a given request. If multiple `fetch` event listeners are added, they will be called in the order they were registered until one of them calls `respondWith()`.

The `respondWith()` method must be called synchronously: that is, you can't call it in a `then` handler.

Typically, a `fetch` event handler will execute different strategies depending on features of the request such as its URL:

```js
function strategy1() {
  return fetch("picnic.jpg");
}

function strategy2() {
  return Response.error();
}

const pattern1 = /^\/salamander/;
const pattern2 = /^\/lizard/;

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (pattern1.test(url.pathname)) {
    event.respondWith(strategy1());
  } else if (pattern2.test(url.pathname)) {
    event.respondWith(strategy2());
  }
});
```

If `respondWith()` is not called in the handler, then the user agent automatically makes the original network request.
For example, in the code above, all requests that do not match `pattern1` or `pattern2` are made as if the service worker did not exist.

## Event type

A {{domxref("FetchEvent")}}.

## Examples

### Cache falling back to network

This `fetch` event handler first tries to find the response in the cache. If a response is found, it returns the cached response. Otherwise, it tries to fetch the resource from the network.

```js
async function cacheThenNetwork(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log("Found response in cache:", cachedResponse);
    return cachedResponse;
  }
  console.log("Falling back to network");
  return fetch(request);
}

self.addEventListener("fetch", (event) => {
  console.log(`Handling fetch event for ${event.request.url}`);
  event.respondWith(cacheThenNetwork(event.request));
});
```

### Cache only

This `fetch` event handler implements a "cache only" policy for scripts and stylesheets. If the request's {{domxref("Request.destination", "destination")}} property is `"script"` or `"style"`, the handler only looks in the cache, returning an error if the response was not found.
All other requests go through to the network.

```js
async function cacheOnly(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log("Found response in cache:", cachedResponse);
    return cachedResponse;
  }
  return Response.error();
}

self.addEventListener("fetch", (event) => {
  if (
    event.request.destination === "script" ||
    event.request.destination === "style"
  ) {
    event.respondWith(cacheOnly(event.request));
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- {{domxref("fetch()")}} method
- {{domxref("Request")}} interface
- {{domxref("Response")}} interface
