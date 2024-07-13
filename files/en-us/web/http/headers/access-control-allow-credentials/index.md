---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
page-type: http-header
browser-compat: http.headers.Access-Control-Allow-Credentials
---

{{HTTPSidebar}}

The **`Access-Control-Allow-Credentials`** response header tells browsers whether the server allows cross-origin HTTP requests to include credentials.

Credentials are cookies, {{glossary("TLS")}} client certificates, or authentication headers containing a username and password. By default, these credentials are not sent in cross-origin requests, and doing so can make a site vulnerable to {{glossary("CSRF")}} attacks.

A client can ask that credentials should be included in cross-site requests in several ways:

- Using {{domxref("fetch()")}}, by setting the [`credentials`](/en-US/docs/Web/API/RequestInit#credentials) option to `"include"`.
- Using {{domxref("XMLHttpRequest")}}, by setting the {{domxref("XMLHttpRequest.withCredentials")}} property to `true`.
- Using {{domxref("EventSource()")}}, by setting the {{domxref("EventSource.withCredentials")}} property to `true`.

If the client has asked for credentials to be included:

- If the request is {{glossary("Preflight_request", "preflighted")}}, then the preflight request does not include credentials. If the server's response to the preflight request sets the `Access-Control-Allow-Credentials` header to `true`, then the real request will include credentials: otherwise, the browser reports a network error.

- If the request is not preflighted, then the request will include credentials, and if the server's response does not set the `Access-Control-Allow-Credentials` header to `true`, the browser reports a network error.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Allow-Credentials: true
```

## Directives

- `true`
  - : The only valid value for this header is `true` (case-sensitive). If you
    don't need credentials, omit this header entirely (rather than setting its value to
    `false`).

## Examples

Allow credentials:

```http
Access-Control-Allow-Credentials: true
```

Using {{domxref("fetch()")}} with credentials:

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
