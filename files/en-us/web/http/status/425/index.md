---
title: 425 Too Early
slug: Web/HTTP/Status/425
page-type: http-status-code
browser-compat: http.status.425
---

{{HTTPSidebar}}

The HTTP **`425 Too Early`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server was unwilling to risk processing a request that might be replayed to avoid potential replay attacks.

If a client has interacted with a server recently, early data (also known as zero round-trip time [(0-RTT) data](/en-US/docs/Web/Security/Transport_Layer_Security#tls_1.3)) allows the client to send data to a server in the first round trip of a connection, without waiting for the TLS [handshake](/en-US/docs/Glossary/TCP_handshake) to complete.
A client that sends a request in early data does not need to include the `Early-Data` header.
See {{HTTPHeader("Early-Data")}} for more information.

## Status

```http
425 Too Early
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [TLS 1.3](/en-US/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- {{HTTPHeader("Early-Data")}}
