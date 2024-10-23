---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
page-type: http-header
browser-compat: http.headers.Alt-Svc
---

{{HTTPSidebar}}

The HTTP **`Alt-Svc`** {{Glossary("response header")}} lets a server indicate that another network location (the "alternative service") can be treated as authoritative for that origin when making future requests.

Doing so allows new protocol versions to be advertised without affecting in-flight requests and can also help servers manage traffic. Using an alternative service is not visible to the end user; it does not change the URL or the origin of the request and does not introduce additional round trips.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : All alternative services of the origin are invalidated.
- `<protocol-id>`
  - : The {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}} protocol identifier. Examples include `h2` for HTTP/2 and `h3-25` for draft 25 of the HTTP/3 protocol.
- `<alt-authority>`
  - : A quoted string specifying the alternative authority, consisting of an optional host override, a colon, and a mandatory port number.
- `ma=<max-age>` {{optional_inline}}
  - : The number of seconds for which the alternative service is considered fresh.
    If omitted, it defaults to 24 hours.
    Alternative service entries can be cached for up to `<max-age>` seconds, minus the age of the response (from the {{HTTPHeader("Age")}} header).
    Once the cached entry expires, the client can no longer use this alternative service for new connections.
- `persist=1` {{optional_inline}}
  - : Entries are not deleted by network configuration changes.
    Cached alternative service entries are usually cleared on such changes.

Multiple entries can be specified in a single `Alt-Svc` header using comma as separator.
In that case, early entries are considered more preferable.

## Example

```http
Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) by HTTP Working Group chair, Mark Nottingham (2016)
