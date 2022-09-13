---
title: Cache.add()
slug: Web/API/Cache/add
page-type: web-api-instance-method
tags:
  - API
  - Cache
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
browser-compat: api.Cache.add
---

{{APIRef("Service Workers API")}}

The **`add()`** method of the {{domxref("Cache")}} interface takes a URL, retrieves it, and adds the resulting response object to the given cache.

The `add()` method is functionally equivalent to the following:

```js
fetch(url).then((response) => {
  if (!response.ok) {
    throw new TypeError("bad response status");
  }
  return cache.put(url, response);
});
```

For more complex operations, you'll need to use {{domxref("Cache.put","Cache.put()")}} directly.

> **Note:** `add()` will overwrite any key/value pair previously stored in the cache that matches the request.

## Syntax

```js
add(request);
```

### Parameters

- `request`
  - : The request you want to add to the cache. This can be a {{domxref("Request")}} object or a URL.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined`.

### Exceptions

- {{jsxref("TypeError")}}

  - : The URL scheme is not `http` or `https`.

    The Response status is not in the 200 range (i.e., not a successful response.) This occurs if the request does not return successfully, but also if the request is a _cross-origin no-cors_ request (in which case the reported status is always 0.)

## Examples

This code block waits for an {{domxref("InstallEvent")}} to fire, then calls {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} to handle the install process for the app. This consists of calling {{domxref("CacheStorage.open")}} to create a new cache, then using {{domxref("Cache.add")}} to add an asset to it.

```js
this.addEventListener("install", (event) => {
  event.waitUntil(caches.open("v1").then((cache) => cache.add("/index.html")));
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
