---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc6585#section-5
---

{{HTTPSidebar}}

The HTTP **`431 Request Header Fields Too Large`** response status code
indicates that the server refuses to process the request because the request's
[HTTP headers](/en-US/docs/Web/HTTP/Headers) are too long.
The request _may_ be resubmitted after reducing the size of the request headers.

431 can be used when the **total size** of request headers is too large,
or when a **single** header field is too large. To help those running into
this error, indicate which of the two is the problem in the response body — ideally,
also include which headers are too large. This lets users attempt to fix the problem,
such as by clearing their cookies.

Servers will often produce this status if:

- The {{ httpheader("Referer") }} URL is too long
- There are too many [Cookies](/en-US/docs/Web/HTTP/Cookies) sent in the
  request

## Status

```http
431 Request Header Fields Too Large
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus(414, "414 URI Too Long")}}
- {{Glossary("Request header")}}
