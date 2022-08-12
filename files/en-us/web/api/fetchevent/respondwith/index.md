---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
page-type: web-api-instance-method
tags:
  - API
  - FetchEvent
  - Method
  - Offline
  - Reference
  - Service Workers
  - Workers
  - respondWith
browser-compat: api.FetchEvent.respondWith
---
{{APIRef("Service Workers API")}}

The **`respondWith()`** method of
{{domxref("FetchEvent")}} prevents the browser's default fetch handling, and
allows you to provide a promise for a {{domxref("Response")}} yourself.

In most cases you can provide any response that the receiver understands. For example,
if an {{HTMLElement('img')}} initiates the request, the response body needs to be
image data. For security reasons, there are a few global rules:

- You can only return {{domxref("Response")}} objects of {{domxref("Response.type",
  "type")}} "`opaque`" if the {{domxref("fetchEvent.request")}} object's
  {{domxref("request.mode", "mode")}} is "`no-cors`". This prevents the
  leaking of private data.
- You can only return {{domxref("Response")}} objects of {{domxref("Response.type",
  "type")}} "`opaqueredirect`" if the {{domxref("fetchEvent.request")}}
  object's {{domxref("request.mode", "mode")}} is "`manual`".
- You cannot return {{domxref("Response")}} objects of {{domxref("Response.type",
  "type")}} "`cors`" if the {{domxref("fetchEvent.request")}} object's
  {{domxref("request.mode", "mode")}} is "`same-origin`".

### Specifying the final URL of a resource

From Firefox 59 onwards, when a service worker provides a {{domxref("Response")}} to
{{domxref("FetchEvent.respondWith()")}}, the {{domxref("Response.url")}} value will be
propagated to the intercepted network request as the final resolved URL. If the
{{domxref("Response.url")}} value is the empty string, then the
{{domxref("Request.url","FetchEvent.request.url")}} is used as the final URL.

In the past the {{domxref("Request.url","FetchEvent.request.url")}} was used as the
final URL in all cases. The provided {{domxref("Response.url")}} was effectively
ignored.

This means, for example, if a service worker intercepts a stylesheet or worker script,
then the provided {{domxref("Response.url")}} will be used to resolve any relative
{{cssxref("@import")}} or
{{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} subresource loads
({{bug(1222008)}}).

For most types of network request this change has no impact because you can't observe
the final URL. There are a few, though, where it does matter:

- If a {{domxref("fetch()")}} is intercepted,
  then you can observe the final URL on the result's {{domxref("Response.url")}}.
- If a [worker](/en-US/docs/Web/API/Web_Workers_API) script is
  intercepted, then the final URL is used to set
  [`self.location`](/en-US/docs/Web/API/WorkerGlobalScope/location)
  and used as the base URL for relative URLs in the worker script.
- If a stylesheet is intercepted, then the final URL is used as the base URL for
  resolving relative {{cssxref("@import")}} loads.

Note that navigation requests for {{domxref("Window","Windows")}} and
{{domxref("HTMLIFrameElement","iframes")}} do NOT use the final URL. The way the HTML
specification handles redirects for navigations ends up using the request URL for the
resulting {{domxref("Window.location")}}. This means sites can still provide an
"alternate" view of a web page when offline without changing the user-visible URL.

## Syntax

```js
respondWith(response)
```

### Parameters

- `response`
  - : A {{domxref("Response")}} or a {{jsxref("Promise")}} that resolves to a
`Response`. Otherwise, a network error is returned to Fetch.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NetworkError` {{domxref("DOMException")}}
  - : Returned if a network error is triggered on certain combinations of
    {{domxref("Request.mode","FetchEvent.request.mode")}} and
    {{domxref("Response.type")}} values, as hinted at in the "global rules"
    listed above.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the event has not been dispatched or `respondWith()` has
    already been invoked.

## Examples

This fetch event tries to return a response from the cache API, falling back to the
network otherwise.

```js
addEventListener('fetch', (event) => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith((async () => {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);
    // Return it if we found one.
    if (cachedResponse) return cachedResponse;
    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  })());
});
```

> **Note:** {{domxref("CacheStorage.match()", "caches.match()")}} is a
> convenience method. Equivalent functionality is to call
> {{domxref("cache.match()")}} on each cache (in the order returned by
> {{domxref("CacheStorage.keys()", "caches.keys()")}}) until a
> {{domxref("Response")}} is returned.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
