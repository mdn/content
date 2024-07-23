---
title: Forbidden header name
slug: Glossary/Forbidden_header_name
page-type: glossary-definition
---

{{GlossarySidebar}}

A **forbidden header name** is the name of any [HTTP header](/en-US/docs/Web/HTTP/Headers) that cannot be modified programmatically; specifically, an HTTP **request** header name (in contrast with a {{Glossary("Forbidden response header name")}}).

Modifying such headers is forbidden because the user agent retains full control over them. Names starting with `Sec-` are reserved for creating new headers safe from {{glossary("API","APIs")}} that grant developers control over headers, such as {{domxref("fetch()")}}.

Forbidden header names start with `Proxy-` or `Sec-`, or are one of the following names:

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
- `Proxy-`
- `Sec-`
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> **Note:** The {{HTTPHeader("User-Agent")}} header is no longer forbidden, [as per spec](https://fetch.spec.whatwg.org/#terminology-headers) — see forbidden header name list (this was implemented in Firefox 43) — it can now be set in a Fetch [Headers](/en-US/docs/Web/API/Headers) object, or with the [setRequestHeader()](/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader) method of `XMLHttpRequest`. However, Chrome will silently drop the header from Fetch requests (see [Chromium bug 571722](https://crbug.com/571722)).

> **Note:** While the {{HTTPHeader("Referer")}} header is listed as a forbidden header [in the spec](https://fetch.spec.whatwg.org/#forbidden-request-header), the user agent does not retain full control over it and the header can be programmatically modified. For example, when using [`fetch()`](/en-US/docs/Web/API/Window/fetch), the {{HTTPHeader("Referer")}} header can be programmatically modified via the [`referrer` option](/en-US/docs/Web/API/RequestInit#referrer).

## See also

- Related glossary terms:
- {{Glossary("Forbidden response header name")}}
