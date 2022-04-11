---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
tags:
  - API
  - Error
  - Property
  - Reference
  - XMLHttpRequest
  - XMLHttpRequest Status
  - result
  - status
browser-compat: api.XMLHttpRequest.status
---
{{APIRef('XMLHttpRequest')}}

The read-only **`XMLHttpRequest.status`** property returns the numerical HTTP [status code](/en-US/docs/Web/HTTP/Status) of the `XMLHttpRequest`'s response.

Before the request completes, the value of `status` is 0. Browsers also report a status of 0 in case of `XMLHttpRequest` errors.

## Value

A number.

## Examples

```js
var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
  console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- List of [HTTP response codes](/en-US/docs/Web/HTTP/Response_codes)
- [HTTP](/en-US/docs/Web/HTTP)
