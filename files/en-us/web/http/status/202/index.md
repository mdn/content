---
title: 202 Accepted
slug: Web/HTTP/Status/202
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.202
---

{{HTTPSidebar}}

The HTTP **`202 Accepted`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and indicates that a request has been accepted for processing, but processing has not been completed or may even not have started yet.
The request may or may not eventually be acted upon, as it may be disallowed when processing begins.

202 is non-committal, meaning that there is no way to later send an asynchronous HTTP response indicating the outcome of processing the request.
It is intended for cases where another process or server handles the request, or for batch processing.

## Status

```http
202 Accepted
```

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
