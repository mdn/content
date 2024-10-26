---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.101
---

{{HTTPSidebar}}

The HTTP **`101 Switching Protocols`** [informational response](/en-US/docs/Web/HTTP/Status#informational_responses) status code indicates the protocol that a server has switched to.
The protocol is specified in the {{HTTPHeader("Upgrade")}} request header received from a client.

The server includes an {{HTTPHeader("Upgrade")}} header in this response to indicate the protocol it has agreed to switch to.
The process is described in detail in the [Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism) guide.

## Status

```http
101 Switching Protocols
```

## Examples

### Switching protocols to WebSockets

The following example shows how switching protocols might be used with [WebSockets](/en-US/docs/Web/API/WebSockets_API).
A client sends a {{HTTPMethod("GET")}} HTTP request with an {{HTTPHeader("Upgrade")}} header which must also be listed in the {{HTTPHeader("Connection")}} header.
The server agrees to switch protocols, returning a 101 response meaning the connection has switched from HTTP to WebSocket.
At this point, the client and server can now start exchanging WebSocket data.
Information about how to set `Sec-WebSocket-*` headers for handshake negotiation can be found in [WebSocket-specific headers](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism#websocket-specific_headers).

```http
GET /notifications HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
```

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Specifications

{{Specifications}}

## See also

- [Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/en-US/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
