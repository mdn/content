---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The **`X-Forwarded-Host`** (XFH) header is a de-facto standard
header for identifying the original host requested by the client in the
{{HTTPHeader("Host")}} HTTP request header.

Host names and ports of reverse proxies (load balancers, CDNs) may differ from the
origin server handling the request, in that case the `X-Forwarded-Host`
header is useful to determine which Host was originally used.

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

Not part of any current specification.

## See also

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
