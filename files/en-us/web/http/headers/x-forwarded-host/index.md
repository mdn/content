---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
tags:
  - HTTP
  - HTTP Header
  - Non-standard
  - Reference
  - Request header
  - header
---
{{HTTPSidebar}}

The **`X-Forwarded-Host`** (XFH) header is a de-facto standard
header for identifying the original host requested by the client in the
{{HTTPHeader("Host")}} HTTP request header.

Host names and ports of reverse proxies (load balancers, CDNs) may differ from the
origin server handling the request, in that case the `X-Forwarded-Host`
header is useful to determine which Host was originally used.

This header is used for debugging, statistics, and generating location-dependent
content and by design it exposes privacy sensitive information, such as the IP address
of the client. Therefore the user's privacy must be kept in mind when deploying this
header.

A standardized version of this header is the HTTP {{HTTPHeader("Forwarded")}} header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Forwarded-Host: <host>
```

## Directives

- \<host>
  - : The domain name of the forwarded server.

## Examples

```http
X-Forwarded-Host: id42.example-cdn.com
```

## Specifications

Not part of any current specification. The standardized version of this header is
{{HTTPHeader("Forwarded")}}.

## See also

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
