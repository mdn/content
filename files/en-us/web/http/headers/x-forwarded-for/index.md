---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
tags:
  - HTTP
  - HTTP Header
  - Non-standard
  - Reference
  - Request header
  - header
browser-compat: http.headers.X-Forwarded-For
---
{{HTTPSidebar}}

The **`X-Forwarded-For`** (XFF) header is a de-facto standard
header for identifying the originating IP address of a client connecting to a web server
through an HTTP proxy or a load balancer. When traffic is intercepted between clients
and servers, server access logs contain the IP address of the proxy or load balancer
only. To see the original IP address of the client, the `X-Forwarded-For`
request header is used.

This header is used for debugging, statistics, and generating location-dependent
content and by design it exposes privacy sensitive information, such as the IP address
of the client. Therefore the user's privacy must be kept in mind when deploying this
header.

A standardized version of this header is the HTTP {{HTTPHeader("Forwarded")}} header.

`X-Forwarded-For` is also an email-header indicating that an email-message
was forwarded from another account.

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

```
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

## Directives

- \<client>
  - : The client IP address
- \<proxy1>, \<proxy2>
  - : If a request goes through multiple proxies, the IP addresses of each successive
    proxy is listed. This means, the right-most IP address is the IP address of the most
    recent proxy and the left-most IP address is the IP address of the originating client.

## Examples

```
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
```

Other non-standard forms:

```
# Used for some Google services
X-ProxyUser-Ip: 203.0.113.19
```

## Specifications

Not part of any current specification. The standardized version of this header is
{{HTTPHeader("Forwarded")}}.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
