---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.101
---

{{HTTPSidebar}}

The HTTP **`101 Switching Protocols`** response code indicates
a protocol to which the server switches.
The protocol is specified in the {{HTTPHeader("Upgrade")}} request header received from a client.

The server includes in this response an {{HTTPHeader("Upgrade")}} response header to
indicate the protocol it switched to. The process is described in the following article:
[Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Status

```http
101 Switching Protocols
```

## Examples

Switching protocols might be used with [WebSockets](/en-US/docs/Web/API/WebSockets_API).

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
- {{HTTPStatus("426")}} `Upgrade Required`
