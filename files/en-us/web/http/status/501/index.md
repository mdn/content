---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.501
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`501 Not Implemented`** server error response code means that **the server does not support the functionality required to fulfill the request**.

This status can also send a {{HTTPHeader("Retry-After")}} header, telling the requester when to check back to see if the functionality is supported by then.

`501` is the appropriate response when the server does not recognize the request method and is incapable of supporting it for any resource. The only methods that servers are required to support (and therefore that must not return `501`) are {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}}.

If the server _does_ recognize the method, but intentionally does not support it, the appropriate response is {{HTTPStatus(405, "405 Method Not Allowed")}}.

> **Note:**
>
> - A 501 error is not something you can fix, but requires a fix by the web server you are trying to access.
> - A 501 response is cacheable by default; that is, unless caching headers instruct otherwise.

## Status

```http
501 Not Implemented
```

## Specifications

{{Specifications}}
