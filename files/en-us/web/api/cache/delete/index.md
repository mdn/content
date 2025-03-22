---
title: "Cache: delete() method"
short-title: delete()
slug: Web/API/Cache/delete
page-type: web-api-instance-method
browser-compat: api.Cache.delete
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`delete()`** method of the {{domxref("Cache")}} interface finds the {{domxref("Cache")}} entry whose key is the request, and if found, deletes the {{domxref("Cache")}} entry and returns a {{jsxref("Promise")}} that resolves to `true`.
If no {{domxref("Cache")}} entry is found, it resolves to `false`.

## Syntax

```js-nolint
delete(request)
delete(request, options)
```

### Parameters

- `request`
  - : The {{domxref("Request")}} you are looking to delete.
    This can be a `Request` object or a URL.
- `options` {{optional_inline}}

  - : An object whose properties control how matching is done in the `delete` operation.
    The available options are:

    - `ignoreSearch`
      - : A boolean value that specifies whether the matching process should ignore the query string in the URL.
        If set to `true`, the `?value=bar` part of `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod`
      - : A boolean value that, when set to
        `true`, prevents matching operations from validating the
        {{domxref("Request")}} `HTTP` method (normally only `GET`
        and `HEAD` are allowed.) It defaults to `false`.
    - `ignoreVary`
      - : A boolean value that, when set to
        `true`, tells the matching operation not to perform `VARY`
        header matching. In other words, if the URL matches you will get a match
        regardless of whether the {{domxref("Response")}} object has a `VARY`
        header. It defaults to `false`.
    - `cacheName`
      - : A string that represents a specific cache to search within. Note that this option is ignored by `Cache.delete()`.

### Return value

a {{jsxref("Promise")}} that resolves to `true` if the cache entry is
deleted, or `false` otherwise.

## Examples

```js
caches.open("v1").then((cache) => {
  cache.delete("/images/image.png").then((response) => {
    someUIUpdateFunction();
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} and {{domxref("WorkerGlobalScope.caches")}}
