---
title: 202 Accepted
slug: Web/HTTP/Status/202
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.202
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`202 Accepted`**
response status code indicates that the request has been accepted for processing, but
the processing has not been completed; in fact, processing may not have started yet. The
request might or might not eventually be acted upon, as it might be disallowed when
processing actually takes place.

202 is non-committal, meaning that there is no way for the HTTP to later send an
asynchronous response indicating the outcome of processing the request. It is intended
for cases where another process or server handles the request, or for batch processing.

## Status

```http
202 Accepted
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Accept")}}
