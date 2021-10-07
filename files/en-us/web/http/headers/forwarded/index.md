---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - header
browser-compat: http.headers.Forwarded
---
{{HTTPSidebar}}

The **`Forwarded`** header contains information from the [reverse proxy servers](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling) that is altered or lost when a proxy is involved in the path of the request.

The alternative and de-facto standard versions of this header are the {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} and {{HTTPHeader("X-Forwarded-Proto")}} headers.

This header is used for debugging, statistics, and generating location-dependent content, and by design, it exposes privacy sensitive information, such as the IP address of the client. Therefore, the user's privacy must be kept in mind when deploying this header.

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
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

## Directives

- \<identifier>

  - : An identifier disclosing the information that is altered or lost when using a proxy. This can be either:

    - an IP address (v4 or v6, optionally with a port, and ipv6 quoted and enclosed in square brackets),
    - an obfuscated identifier (such as "\_hidden" or "\_secret"),
    - or "unknown" when the preceding entity is not known (and you still want to indicate that forwarding of the request was made).

- by=\<identifier>
  - : The interface where the request came in to the proxy server.
- for=\<identifier>
  - : The client that initiated the request and subsequent proxies in a chain of proxies.
- host=\<host>
  - : The {{HTTPHeader("Host")}} request header field as received by the proxy.
- proto=\<http|https>
  - : Indicates which protocol was used to make the request (typically "http" or "https").

## Examples

### Using the `Forwarded` header

```
Forwarded: for="_mdn"

# case insensitive
Forwarded: For="[2001:db8:cafe::17]:4711"

# separated by semicolon
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# multiple values can be appended using a comma
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### Transitioning from `X-Forwarded-For` to `Forwarded`

If your application, server, or proxy supports the standardized `Forwarded` header, the {{HTTPHeader("X-Forwarded-For")}} header can be replaced. Note that IPv6 address is quoted and enclosed in square brackets in `Forwarded`.

```
X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, "[2001:db8:cafe::17]"
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – provides information about the proxy itself, not about the client connecting to it.
