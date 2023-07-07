---
title: "Cache: match() method"
short-title: match()
slug: Web/API/Cache/match
page-type: web-api-instance-method
browser-compat: api.Cache.match
---

{{APIRef("Service Workers API")}}

The **`match()`** method of the {{domxref("Cache")}} interface returns a {{jsxref("Promise")}} that resolves to the {{domxref("Response")}} associated with the first matching request in the {{domxref("Cache")}} object.
If no match is found, the {{jsxref("Promise")}} resolves to {{jsxref("undefined")}}.

## Syntax

```js-nolint
match(request)
match(request, options)
```

### Parameters

- `request`
  - : The {{domxref("Request")}} for which you are attempting to find responses in the
    {{domxref("Cache")}}. This can be a {{domxref("Request")}} object or a URL.
- `options` {{optional_inline}}

  - : An object that sets options for the `match` operation.
    The available options are:

    - `ignoreSearch`
      - : A boolean value that specifies whether to
        ignore the query string in the URL. For example, if set to
        `true` the `?value=bar` part of
        `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod`
      - : A boolean value that, when set to
        `true`, prevents matching operations from validating the
        {{domxref("Request")}} `http` method (normally only `GET`
        and `HEAD` are allowed.) It defaults to `false`.
    - `ignoreVary`
      - : A boolean value that when set to
        `true` tells the matching operation not to perform `VARY`
        header matching — i.e. if the URL matches you will get a match regardless of
        whether the {{domxref("Response")}} object has a `VARY` header. It
        defaults to `false`.

### Return value

A {{jsxref("Promise")}} that resolves to the first {{domxref("Response")}} that matches
the request or to {{jsxref("undefined")}} if no match is found.

> **Note:** `Cache.match()` is basically identical to
> {{domxref("Cache.matchAll()")}}, except that rather than resolving with an array of
> all matching responses, it resolves with the first matching response only (that is,
> `response[0]`).

## Examples

This example is taken from the [custom offline page](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js) example ([live demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)). It uses a cache to supply selected data when a request fails. A
`catch()` clause is triggered when the call to `fetch()` throws an
exception. Inside the `catch()` clause, `match()` is used to
return the correct response.

In this example, only HTML documents retrieved with the GET HTTP verb will be
cached. If our `if ()` condition is false, then this fetch handler won't
intercept the request. If there are any other fetch handlers registered, they will get a
chance to call `event.respondWith()`. If no fetch handlers call
`event.respondWith()`, the request will be handled by the browser as if there
were no service worker involvement. If `fetch()` returns a valid HTTP
response with an response code in the 4xx or 5xx range, the `catch()` will
NOT be called.

```js
self.addEventListener("fetch", (event) => {
  // We only want to call event.respondWith() if this is a GET request for an HTML document.
  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/html")
  ) {
    console.log("Handling fetch event for", event.request.url);
    event.respondWith(
      fetch(event.request).catch((e) => {
        console.error("Fetch failed; returning offline page instead.", e);
        return caches
          .open(OFFLINE_CACHE)
          .then((cache) => cache.match(OFFLINE_URL));
      }),
    );
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
