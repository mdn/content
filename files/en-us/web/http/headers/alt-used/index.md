---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
page-type: http-header
browser-compat: http.headers.Alt-Used
---

{{HTTPSidebar}}

The {{HTTPHeader("Alt-Used")}} HTTP header is used in requests to identify the alternative service in use, just as the {{HTTPHeader("Host")}} HTTP header field identifies the host and port of the origin.

The is intended to allow alternative services to detect loops, differentiate traffic for purposes of load balancing, and generally to ensure that it is possible to identify the intended destination of traffic, since introducing this information after a protocol is in use has proven to be problematic.

When a client uses an alternative service for a request, it can indicate this to the server using the {{HTTPHeader("Alt-Used")}} HTTP header.

## Syntax

```http
Alt-Used: <host>:<port>
```

## Directives

- \<host>
  - : the domain name of the server.
- \<port> {{optional_inline}}
  - : TCP port number on which the server is listening.

## Examples

```http
Alt-Used: alternate.example.net
```

<!-- ## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}} -->

## See also

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
