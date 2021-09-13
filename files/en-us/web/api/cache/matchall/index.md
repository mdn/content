---
title: Cache.matchAll()
slug: Web/API/Cache/matchAll
tags:
  - API
  - Cache
  - Experimental
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - matchAll
browser-compat: api.Cache.matchAll
---
{{APIRef("Service Workers API")}}

The **`matchAll()`** method of the {{domxref("Cache")}}
interface returns a {{jsxref("Promise")}} that resolves to an array of all matching
responses in the {{domxref("Cache")}} object.

## Syntax

```js
cache.matchAll(request, {options}).then(function(response) {
  // do something with the response array
});
```

### Parameters

- request {{optional_inline}}
  - : The {{domxref("Request")}} for which you are attempting to find responses in the
    {{domxref("Cache")}}. This can be a `Request` object or a URL. If this
    argument is omitted, you will get a copy of all responses in this cache.
- options {{optional_inline}}

  - : An options object allowing you to set specific control options for the matching
    performed. The available options are:

    - `ignoreSearch`: A boolean value that specifies whether the
      matching process should ignore the query string in the url.  If set to
      `true`, the `?value=bar` part of
      `http://foo.com/?value=bar` would be ignored when performing a match.
      It defaults to `false`.
    - `ignoreMethod`: A boolean value that, when set to
      `true`, prevents matching operations from validating the
      {{domxref("Request")}} `http` method (normally only `GET`
      and `HEAD` are allowed.) It defaults to `false`.
    - `ignoreVary`: A boolean value that when set to
      `true` tells the matching operation not to perform `VARY`
      header matching — i.e. if the URL matches you will get a match regardless of the
      {{domxref("Response")}} object having a `VARY` header or not. It
      defaults to `false`.

### Return value

A {{jsxref("Promise")}} that resolves to an array of all matching responses in the
{{domxref("Cache")}} object.

> **Note:** {{domxref("Cache.match()")}} is basically identical to
> `Cache.matchAll()`, except that rather than resolving with an array of all
> matching responses, it resolves with the first matching response only (that is,
> `response[0]`).

## Examples

```js
caches.open('v1').then(function(cache) {
  cache.matchAll('/images/').then(function(response) {
    response.forEach(function(element, index, array) {
      cache.delete(element);
    });
  });
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("caches")}}
