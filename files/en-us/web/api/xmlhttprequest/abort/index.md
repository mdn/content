---
title: "XMLHttpRequest: abort() method"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
page-type: web-api-instance-method
browser-compat: api.XMLHttpRequest.abort
---

{{APIRef('XMLHttpRequest')}}

The **`XMLHttpRequest.abort()`** method aborts the request if
it has already been sent. When a request is aborted, its
{{domxref("XMLHttpRequest.readyState", "readyState")}} is changed to
`XMLHttpRequest.UNSENT` (0) and the request's
{{domxref("XMLHttpRequest.status", "status")}} code is set to 0.

## Syntax

```js-nolint
abort()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example begins loading content from the MDN home page, then due to some condition,
aborts the transfer by calling `abort()`.

```js
const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";
xhr.open(method, url, true);

xhr.send();

if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE) {
  xhr.abort();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
