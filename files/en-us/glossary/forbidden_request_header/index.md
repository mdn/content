---
title: Forbidden request header
slug: Glossary/Forbidden_request_header
page-type: glossary-definition
---

{{GlossarySidebar}}

A **forbidden request header** is an [HTTP header](/en-US/docs/Web/HTTP/Reference/Headers) name-value pair that cannot be set or modified programmatically in a request. For headers forbidden to be modified in responses, see {{Glossary("forbidden response header name")}}.

Modifying such headers is forbidden because the user agent retains full control over them.
For example, the {{HTTPHeader("Date")}} header is a forbidden request header, so this code cannot set the message `Date` field:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Names starting with `Sec-` are reserved for creating new headers safe from {{glossary("API","APIs")}} that grant developers control over headers, such as {{domxref("Window/fetch", "fetch()")}}.
Forbidden headers are one of the following:

- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Permissions-Policy")}}
- `Proxy-` headers
- `Sec-` headers
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}
- `X-HTTP-Method`, but only when it contains a forbidden method name ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, but only when it contains a forbidden method name
- `X-Method-Override`, but only when it contains a forbidden method name

> [!NOTE]
> The {{HTTPHeader("User-Agent")}} header used to be forbidden, but no longer is. However, Chrome still silently drops the header from Fetch requests (see [Chromium bug 571722](https://crbug.com/571722)).

> [!NOTE]
> While the {{HTTPHeader("Referer")}} header is listed as a forbidden header [in the spec](https://fetch.spec.whatwg.org/#forbidden-request-header), the user agent does not retain full control over it and the header can be programmatically modified. For example, when using [`fetch()`](/en-US/docs/Web/API/Window/fetch), the {{HTTPHeader("Referer")}} header can be programmatically modified via the [`referrer` option](/en-US/docs/Web/API/RequestInit#referrer).

## See also

- Related glossary terms:
  - {{Glossary("Forbidden response header name")}}
