---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
page-type: http-header
spec-urls: https://datatracker.ietf.org/doc/html/rfc7239
---

{{HTTPSidebar}}

The HTTP **`Forwarded`** {{Glossary("request header")}} contains information that may be added by [reverse proxy servers](/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling) (load balancers, CDNs, etc.) that would otherwise be altered or lost when proxy servers are involved in the path of the request.

For example, if a client is connecting to a web server through an HTTP proxy (or load balancer), server logs will only contain the IP address, host address, and protocol of the proxy; this header can be used to identify the IP address, host, and protocol, of the original request.
The header is optional and may be added to, modified, or removed, by any of the proxy servers on the path to the server.

This header is used for debugging, statistics, and generating location-dependent content.
By design, it exposes privacy sensitive information, such as the IP address of the client.
Therefore, the user's privacy must be kept in mind when using this header.

The alternative and de-facto standard versions of this header are the {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} and {{HTTPHeader("X-Forwarded-Proto")}} headers.

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

The syntax for the forwarding header from a single proxy is shown below.
Directives are `key=value` pairs, separated by a semicolon.

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

If there are multiple proxy servers between the client and server, they may each specify their own forwarding information.
This can be done by adding a new `Forwarded` header to the end of the header block, or by appending the information to the end of the last `Forwarded` header in a comma-separated list.

## Directives

- `by` {{optional_inline}}

  - : The interface where the request came in to the proxy server.
    The identifier can be:

    - an obfuscated identifier (such as "hidden" or "secret").
      This should be treated as the default.
    - an IP address (v4 or v6, optionally with a port, and ipv6 quoted and enclosed in square brackets)
    - "unknown" when the preceding entity is not known (and you still want to indicate that forwarding of the request was made)

- `for` {{optional_inline}}
  - : The client that initiated the request and subsequent proxies in a chain of proxies.
    The identifier has the same possible values as the `by` directive.
- `host` {{optional_inline}}
  - : The {{HTTPHeader("Host")}} request header field as received by the proxy.
- `proto` {{optional_inline}}
  - : Indicates which protocol was used to make the request (typically "http" or "https").

## Examples

### Using the `Forwarded` header

```http
Forwarded: for="_mdn"

# case insensitive
Forwarded: For="[2001:db8:cafe::17]:4711"

# separated by semicolon
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# Values from multiple proxy servers can be appended using a comma
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### Transitioning from `X-Forwarded-For` to `Forwarded`

If your application, server, or proxy supports the standardized `Forwarded` header, the {{HTTPHeader("X-Forwarded-For")}} header can be replaced.
Note that an IPv6 address is quoted and enclosed in square brackets in `Forwarded` (unlike in the {{HTTPHeader("X-Forwarded-For")}} header).

```http
X-Forwarded-For: 192.0.2.172
Forwarded: for=192.0.2.172

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – provides information about the proxy itself, not about the client connecting to it.
