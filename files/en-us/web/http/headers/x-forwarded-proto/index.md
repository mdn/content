---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The HTTP **`X-Forwarded-Proto`** (XFP) {{Glossary("request header")}} is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that a client used to connect to a {{Glossary("Proxy_server", "proxy")}} or load balancer.

Server access logs contain the protocol used between the server and the load balancer, but not the protocol used between the client and the load balancer.
To determine the protocol used between the client and the load balancer, the `X-Forwarded-Proto` request header can be used.

A standardized version of this header is the HTTP {{HTTPHeader("Forwarded")}} header, although it's much less frequently used.

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
X-Forwarded-Proto: <protocol>
```

## Directives

- `<protocol>`
  - : The forwarded protocol (`http` or `https`).

## Examples

### X-Forwarded-Proto client protocol

The following header indicates that the original request was made over HTTPS before being forwarded by a proxy or load balancer:

```http
X-Forwarded-Proto: https
```

### Non-standard forms

The following forms may be seen in request headers:

```http
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Specifications

Not part of any current specification. The standardized version of this header is {{HTTPHeader("Forwarded")}}.

## See also

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}} headers
- {{HTTPHeader("Forwarded")}}
