---
title: XMLHttpRequest.statusText
slug: Web/API/XMLHttpRequest/statusText
tags:
  - AJAX
  - API
  - Property
  - Read-only
  - Reference
  - XMLHttpRequest
  - XMLHttpRequest Status
browser-compat: api.XMLHttpRequest.statusText
---
{{APIRef('XMLHttpRequest')}}

The read-only **`XMLHttpRequest.statusText`** property returns a [`DOMString`](/en-US/docs/Web/API/DOMString) containing the response's status message as returned by the HTTP server. Unlike [`XMLHTTPRequest.status`](/en-US/docs/Web/API/XMLHTTPRequest/status) which indicates a numerical status code, this property contains the _text_ of the response status, such as "OK" or "Not Found". If the request's [`readyState`](/en-US/docs/Web/API/XMLHttpRequest/readyState) is in `UNSENT` or `OPENED` state, the value of `statusText` will be an empty string.

If the server response doesn't explicitly specify a status text, `statusText` will assume the default value "OK".

> **Note:** Responses over an HTTP/2 connection will always have a empty string as status message as HTTP/2 does not support them.

## Value

A string.

## Examples

```js
var xhr = new XMLHttpRequest();
console.log('0 UNSENT', xhr.statusText);

xhr.open('GET', '/server', true);
console.log('1 OPENED', xhr.statusText);

xhr.onprogress = function () {
  console.log('3 LOADING', xhr.statusText);
};

xhr.onload = function () {
  console.log('4 DONE', xhr.statusText);
};

xhr.send(null);

/**
 * Outputs the following:
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- List of [HTTP response codes](/en-US/docs/Web/HTTP/Response_codes)
- [HTTP](/en-US/docs/Web/HTTP)
- [WHATWG Fetch Living Standard](https://fetch.spec.whatwg.org/#concept-response-status-message)
