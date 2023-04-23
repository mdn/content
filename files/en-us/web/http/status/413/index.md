---
title: 413 Content Too Large
slug: Web/HTTP/Status/413
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.413
---

{{HTTPSidebar}}

The HTTP **`413 Content Too Large`** response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a {{HTTPHeader("Retry-After")}} header field.

Prior to RFC 9110 the response phrase for the status was **`Payload Too Large`**. That name is still widely used.

## Status

```http
413 Content Too Large
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
