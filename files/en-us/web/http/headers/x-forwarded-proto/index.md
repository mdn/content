---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The **`X-Forwarded-Proto`** (XFP) header is a de-facto standard
header for identifying the protocol (HTTP or HTTPS) that a client used to connect to
your proxy or load balancer. Your server access logs contain the protocol used between
the server and the load balancer, but not the protocol used between the client and the
load balancer. To determine the protocol used between the client and the load balancer,
the `X-Forwarded-Proto` request header can be used.

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
X-Forwarded-Proto: <protocol>
```

## Directives

- \<protocol>
  - : The forwarded protocol (http or https).

## Examples

```http
X-Forwarded-Proto: https
```

Other non-standard forms:

```http
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Specifications

Not part of any current specification. The standardized version of this header is
{{HTTPHeader("Forwarded")}}.

## See also

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
