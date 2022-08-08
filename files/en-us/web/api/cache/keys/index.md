---
title: Cache.keys()
slug: Web/API/Cache/keys
page-type: web-api-instance-method
tags:
  - API
  - Cache
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - keys
browser-compat: api.Cache.keys
---
{{APIRef("Service Workers API")}}

The **`keys()`** method of the {{domxref("Cache")}} interface returns a
{{jsxref("Promise")}} that resolves to an array of {{domxref("Request")}} objects
representing the keys of the {{domxref("Cache")}}.

The requests are returned in the same order that they were inserted.

> **Note:** Requests with duplicate URLs but different headers can be
> returned if their responses have the `VARY` header set on them.

## Syntax

```js
keys()
keys(request)
keys(request, options)
```

### Parameters

- `request` {{optional_inline}}
  - : The {{domxref("Request")}} want to return, if a specific key is desired. This can be
    a `Request` object or a URL.
- `options` {{optional_inline}}

  - : An object whose properties control how matching is done in the `keys`
    operation. The available options are:

    - `ignoreSearch`
      - : A boolean value that specifies whether the
        matching process should ignore the query string in the URL.  If set to
        `true`, the `?value=bar` part of
        `http://foo.com/?value=bar` would be ignored when performing a match.
        It defaults to `false`.
    - `ignoreMethod`
      - : A boolean value that, when set to
        `true`, prevents matching operations from validating the
        {{domxref("Request")}} `HTTP` method (normally only `GET`
        and `HEAD` are allowed.) It defaults to `false`.
    - `ignoreVary`
      - : A boolean value that, when set to
        `true,` tells the matching operation not to perform `VARY`
        header matching.  In other words, if the URL matches you will get a match
        regardless of whether the {{domxref("Response")}} object has a `VARY`
        header. It defaults to `false`.
    - `cacheName`
      - : A string that represents a specific
        cache to search within. Note that this option is ignored by
        `Cache.keys()`.

### Return value

A {{jsxref("Promise")}} that resolves to an array of {{domxref("Request")}}
objects.

## Examples

```js
caches.open('v1').then((cache) => {
  cache.keys().then((keys) => {
    keys.forEach((request, index, array) => {
      cache.delete(request);
    });
  });
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
