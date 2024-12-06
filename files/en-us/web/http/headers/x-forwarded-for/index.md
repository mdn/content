---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The HTTP **`X-Forwarded-For`** (XFF) {{Glossary("request header")}} is a de-facto standard header for identifying the originating IP address of a client connecting to a web server through a {{Glossary("proxy server")}}.

A standardized version of this header is the HTTP {{HTTPHeader("Forwarded")}} header, although it's much less frequently used.

> [!WARNING]
> Improper use of this header can be a security risk.
> For details, see the [Security and privacy concerns](#security_and_privacy_concerns) section.

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
X-Forwarded-For: <client>, <proxy>
X-Forwarded-For: <client>, <proxy>, …, <proxy>
```

For example, an IPV6 client IP in the first header, an IPV4 client IP in the second header, and an IPV4 client IP and an IPV6 proxy IP in the third example:

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348
X-Forwarded-For: 203.0.113.195
X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348
```

## Directives

- `<client>`
  - : The client IP address.
- `<proxy>`
  - : A proxy IP address.
    If a request goes through multiple proxies, the IP addresses of each successive proxy are listed.
    This means that the rightmost IP address is the IP address of the most recent proxy and the leftmost IP address is the address of the originating client (assuming well-behaved client and proxies).

## Description

When a client connects directly to a server, the client's IP address is sent to the server and is often written to server access logs.
If a client connection passes through any forward or reverse proxies, the server only sees the final proxy's IP address, which is often of little use.
That's especially true if the final proxy is a load balancer which is part of the same deployment as the server.
To provide a more useful client IP address to the server, the `X-Forwarded-For` request header is used.

For detailed guidance on using `X-Forwarded-For`, see the [Parsing](#parsing) and [Selecting an IP address](#selecting_an_ip_address) sections.

### Security and privacy concerns

This header exposes privacy-sensitive information by design, such as the IP address of the client.
Therefore, the user's privacy must be kept in mind when using this header.

The `X-Forwarded-For` header is untrustworthy when no **trusted reverse proxy** (e.g., a load balancer) is between the client and server.
If the client and all proxies are trusted and well-behaved, the list of IP addresses in the header has the meaning described in the [Directives](#directives) section.
If there's any risk that the client or any proxy is malicious or misconfigured, it's possible a part or all of the header may be spoofed, may have an unexpected format or contents.

If trusted reverse proxies are between the client and server, the final `X-Forwarded-For` IP addresses (one for each trusted proxy) are trustworthy, as they were added by trusted proxies.
This is true as long as the server is _only_ accessible through those proxies and not also directly from the internet.

Any security-related use of `X-Forwarded-For` (such as for rate limiting or IP-based access control) _must only_ use IP addresses added by a trusted proxy.
Using untrustworthy values can result in rate-limiter avoidance, access-control bypass, memory exhaustion, or other negative security or availability consequences.

Conversely, leftmost (untrusted) values must only be used for cases where there is no negative impact from the possibility of using spoofed values.

### Parsing

Improper parsing of the `X-Forwarded-For` header can result in spoofed values being used for security-related purposes, resulting in the negative consequences mentioned above.

There may be multiple `X-Forwarded-For` headers present in a request.
The IP addresses in these headers must be treated as a single list, starting with the first IP address of the first header and continuing to the last IP address of the last header.
There are two ways of making this single list:

- Join the `X-Forwarded-For` full header values with commas and then split by comma into a list, or
- split each `X-Forwarded-For` header by comma into lists and then join the lists.

It is insufficient to use only one of multiple `X-Forwarded-For` headers.

Some reverse proxies will automatically join multiple `X-Forwarded-For` headers into one, but it is safest to not assume that this is the case.

### Selecting an IP address

When selecting an address, the full list of IPs (from all `X-Forwarded-For` headers) must be used.

When choosing the `X-Forwarded-For` IP address closest to the client (untrustworthy and _not_ for security-related purposes), the first IP from the leftmost that is _a valid address_ and _not private/internal_ should be selected.

> [!NOTE]
> We say "a valid address" above because spoofed values may not be actual IP addresses.
> Additionally, we say "not internal/private" because clients may have used proxies on their internal network, which may have added addresses from the [private IP space](https://en.wikipedia.org/wiki/Private_network).

When choosing the first _trustworthy_ `X-Forwarded-For` client IP address, additional configuration is required.
There are two common methods:

- Trusted proxy count
  - : The count of reverse proxies between the internet and the server is configured.
    The `X-Forwarded-For` IP list is searched from the rightmost by that count minus one.
    For example, if there is only one reverse proxy, that proxy will add the client's IP address, so the rightmost address should be used.
    If there are three reverse proxies, the last two IP addresses will be internal.
- Trusted proxy list
  - : The IPs or IP ranges of the trusted reverse proxies are configured.
    The `X-Forwarded-For` IP list is searched from the rightmost, skipping all addresses that are on the trusted proxy list.
    The first non-matching address is the target address.

The first trustworthy `X-Forwarded-For` IP address may belong to an untrusted intermediate proxy rather than the actual client computer, but it is the only IP suitable for security uses.

> [!NOTE]
> If the server can be directly connected to from the internet — even if it is also behind a trusted reverse proxy — **no part** of the `X-Forwarded-For` IP list can be considered trustworthy or safe for security-related uses.

## Examples

### Client and proxy IPs

From the following `X-Forwarded-For` request header, we can infer that the client IP address is `203.0.113.195`, and the request has passed through two proxies.
The first proxy has an IPv6 address of `2001:db8:85a3:8d3:1319:8a2e:370:7348` and the last proxy in the request chain has an IPv4 address of `198.51.100.178`:

```http
X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Specifications

Not part of any current specification. The standardized version of this header is {{HTTPHeader("Forwarded")}}.

## See also

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} headers
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
