---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.415
---

{{HTTPSidebar}}

The HTTP **`415 Unsupported Media Type`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server refuses to accept the request because the payload format is in an unsupported format.

The format problem might be due to the request's indicated {{HTTPHeader("Content-Type")}} or {{HTTPHeader("Content-Encoding")}}, or as a result of inspecting the data directly.

## Status

```http
415 Unsupported Media Type
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
