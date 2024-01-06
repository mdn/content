---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
page-type: http-status-code
browser-compat: http.status.503
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`503 Service Unavailable`** server error response code indicates that the server is not ready to handle the request.

Common causes are a server that is down for maintenance or that is overloaded. This response should be used for temporary conditions and the {{HTTPHeader("Retry-After")}} HTTP header should, if possible, contain the estimated time for the recovery of the service.

> **Note:** together with this response, a user-friendly page explaining the problem should be sent.

Caching-related headers that are sent along with this response should be taken care of, as a 503 status is often a temporary condition and responses shouldn't usually be cached.

## Status

```http
503 Service Unavailable
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Retry-After")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.503)
