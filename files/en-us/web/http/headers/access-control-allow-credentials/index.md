---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
page-type: http-header
browser-compat: http.headers.Access-Control-Allow-Credentials
---

{{HTTPSidebar}}

The HTTP **`Access-Control-Allow-Credentials`** {{Glossary("response header")}} tells browsers whether the server allows credentials to be included in cross-origin HTTP requests.

Credentials include cookies, {{glossary("TLS", "Transport Layer Security (TLS)")}} client certificates, or authentication headers containing a username and password.
By default, these credentials are not sent in cross-origin requests, and doing so can make a site vulnerable to {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}} attacks.

A client can ask for credentials to be included in cross-site requests in several ways:

- Using {{domxref("Window/fetch", "fetch()")}}, by setting the [`credentials`](/en-US/docs/Web/API/RequestInit#credentials) option to `"include"`.
- Using {{domxref("XMLHttpRequest")}}, by setting the {{domxref("XMLHttpRequest.withCredentials")}} property to `true`.
- Using {{domxref("EventSource()")}}, by setting the {{domxref("EventSource.withCredentials")}} property to `true`.

When credentials are included:

- For {{glossary("Preflight_request", "preflighted")}} requests: The preflight request does not include credentials.
  If the server's response to the preflight request sets the `Access-Control-Allow-Credentials` header to `true`, then the real request will include credentials; otherwise, the browser reports a network error.
- For non-preflighted requests: The request will include credentials, and if the server's response does not set the `Access-Control-Allow-Credentials` header to `true`, the browser reports a network error.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Credentials: true
```

## Directives

- `true`
  - : The server allows credentials to be included in cross-origin HTTP requests.
    This is the only valid value for this header and is case-sensitive.
    If you don't need credentials, omit this header entirely rather than setting its value to `false`.

## Examples

Allow credentials:

```http
Access-Control-Allow-Credentials: true
```

Using {{domxref("Window/fetch", "fetch()")}} with credentials:

```js
fetch(url, {
  credentials: "include",
});
```

Using {{domxref("XMLHttpRequest")}} with credentials:

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
