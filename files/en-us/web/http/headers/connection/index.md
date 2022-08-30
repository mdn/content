---
title: Connection
slug: Web/HTTP/Headers/Connection
tags:
  - HTTP
  - HTTP Header
  - Request header
  - Response header
  - Reference
  - Web
browser-compat: http.headers.Connection
---
{{HTTPSidebar}}

The **`Connection`** general header controls whether the
network connection stays open after the current transaction finishes. If the value sent
is `keep-alive`, the connection is persistent and not closed, allowing for
subsequent requests to the same server to be done.

> **Warning:** Connection-specific header fields such as {{HTTPHeader("Connection")}} and
> {{HTTPHeader("Keep-Alive")}} are
> [prohibited in HTTP/2](https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2.2).
> Chrome and Firefox ignore them in HTTP/2 responses, but Safari conforms to the HTTP/2
> spec requirements and does not load any response that contains them.

Except for the standard hop-by-hop headers ({{HTTPHeader("Keep-Alive")}},
{{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, {{HTTPHeader("Connection")}},
{{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}},
{{HTTPHeader("Proxy-Authorization")}} and {{HTTPHeader("Proxy-Authenticate")}}), any
hop-by-hop headers used by the message must be listed in the `Connection`
header, so that the first proxy knows it has to consume them and not forward them
further. Standard hop-by-hop headers are also required to be listed.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Connection: keep-alive
Connection: close
```

## Directives

- `close`
  - : Indicates that either the client or the server would like to close the connection.
    This is the default on HTTP/1.0 requests.
- any comma-separated list of HTTP headers \[Usually `keep-alive` only]
  - : Indicates that the client would like to keep the connection open. Keeping a connection open
    is the default on HTTP/1.1 requests. The list of headers are the
    name of the header to be removed by the first non-transparent proxy or cache
    in-between: these headers define the connection between the emitter and the first
    entity, not the destination node.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
