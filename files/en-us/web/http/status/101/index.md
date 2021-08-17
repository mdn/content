---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
tags:
  - HTTP
  - HTTP Status Code
  - Informational
  - Reference
  - WebSockets
---
{{HTTPSidebar}}

The HTTP **`101 Switching Protocols`** response code indicates
the protocol the server is switching to as requested by a client which sent the message
including the {{HTTPHeader("Upgrade")}} request header.

The server includes in this response an {{HTTPHeader("Upgrade")}} response header to
indicate the protocol it switched to. The process is described in detail in the article
[Protocol upgrade
mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Status

```
101 Switching Protocols
```

## Examples

Switching protocols might be used with [WebSockets](/en-US/docs/Web/API/WebSockets_API).

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Specifications

| Specification                                                        | Title                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "101 Switching Protocol" , "6.2.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- [Protocol upgrade
  mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/en-US/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426")}} `Upgrade Required`
