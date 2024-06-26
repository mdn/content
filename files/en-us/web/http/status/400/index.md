---
title: 400 Bad Request
slug: Web/HTTP/Status/400
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.400
---

{{HTTPSidebar}}

The HTTP **`400 Bad Request`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server cannot or will not process the request due to something that is perceived to be a client error.
This is typically due to a malformed request syntax, invalid request message framing, or deceptive request routing.

Clients that receive a `400` response should expect that repeating the request without modification will fail with the same error.

## Status

```http
400 Bad Request
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.400)
