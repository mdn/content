---
title: Alt-Used
slug: Web/HTTP/Headers/Alt-Used
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc7838
---

{{HTTPSidebar}}

The HTTP **`Alt-Used`** {{Glossary("request header")}} is used to identify the alternative service in use, just as the {{HTTPHeader("Host")}} HTTP header field identifies the host and port of the origin.

The is intended to allow alternative services to detect loops, differentiate traffic for purposes of load balancing, and generally to ensure that it is possible to identify the intended destination of traffic, since introducing this information after a protocol is in use has proven to be problematic.

When a client uses an alternative service for a request, it can indicate this to the server using the `Alt-Used` HTTP header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Alt-Used: <host>:<port>
```

## Directives

- `<host>`
  - : The domain name of the server.
- `<port>` {{optional_inline}}
  - : The TCP port number on which the server is listening.

## Examples

```http
Alt-Used: alternate.example.net
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Alt-Svc")}}
- {{HTTPHeader("Host")}}
