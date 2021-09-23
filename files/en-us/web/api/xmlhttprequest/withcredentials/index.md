---
title: XMLHttpRequest.withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
tags:
  - AJAX
  - API
  - Property
  - Reference
  - Security
  - XHR
  - XMLHttpRequest
  - credentials
  - withCredentials
browser-compat: api.XMLHttpRequest.withCredentials
---
{{APIRef('XMLHttpRequest')}}

The **`XMLHttpRequest.withCredentials`** property is a boolean value that indicates whether or not cross-site `Access-Control` requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting `withCredentials` has no effect on same-site requests.

In addition, this flag is also used to indicate when cookies are to be ignored in the response. The default is `false`. `XMLHttpRequest` from a different domain cannot set cookie values for their own domain unless `withCredentials` is set to `true` before making the request. The third-party cookies obtained by setting `withCredentials` to true will still honor same-origin policy and hence can not be accessed by the requesting script through [document.cookie](/en-US/docs/Web/API/Document/cookie) or from response headers.

> **Note:** This never affects same-site requests.

> **Note:** `XMLHttpRequest` responses from a different domain *cannot* set cookie values for their own domain unless `withCredentials` is set to `true` before making the request, regardless of `Access-Control-` header values.

## Example

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
