---
title: Forbidden header name
slug: Glossary/Forbidden_header_name
tags:
  - Fetch
  - Glossary
  - HTTP
  - Headers
  - forbidden
---
A **forbidden header name** is the name of any [HTTP header](/en-US/docs/Web/HTTP/Headers) that cannot be modified programmatically; specifically, an HTTP **request** header name (in contrast with a {{Glossary("Forbidden response header name")}}).

Modifying such headers is forbidden because the user agent retains full control over them. Names starting with `Sec-` are reserved for creating new headers safe from {{glossary("API","APIs")}} using [Fetch](/en-US/docs/Web/API/Fetch_API) that grant developers control over headers, such as {{domxref("XMLHttpRequest")}}.

Forbidden header names start with `Proxy-` or `Sec-`, or are one of the following names:

- `Accept-Charset`
- `Accept-Encoding`
- `Access-Control-Request-Headers`
- `Access-Control-Request-Method`
- `Connection`
- `Content-Length`
- `Cookie`
- `Cookie2`
- `Date`
- `DNT`
- `Expect`
- `Feature-Policy`
- `Host`
- `Keep-Alive`
- `Origin`
- `Proxy-`
- `Sec-`
- `Referer`
- `TE`
- `Trailer`
- `Transfer-Encoding`
- `Upgrade`
- `Via`

> **Note:** The `User-Agent` header is no longer forbidden, [as per spec](https://fetch.spec.whatwg.org/#terminology-headers) — see forbidden header name list (this was implemented in Firefox 43) — it can now be set in a Fetch [Headers](/en-US/docs/Web/API/Headers) object, or via XHR [setRequestHeader()](/en-US/docs/Web/API/XMLHttpRequest#setrequestheader%28%29).  However, Chrome will silently drop the header from Fetch requests (see [Chromium bug 571722](https://bugs.chromium.org/p/chromium/issues/detail?id=571722)).

## See also

{{Glossary("Forbidden response header name")}} (Glossary)
