---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
tags:
  - HTTP
  - HTTP Header
  - NeedsCompatTable
  - Reference
browser-compat: http.headers.Alt-Svc
---
{{HTTPSidebar}}

The {{HTTPHeader("Alt-Svc")}} HTTP header allows a server to indicate that a particular resource should be loaded from a different server — while still appearing to the user as if were loaded from the same server.

## Syntax

```
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : The special value ''clear" indicates that the origin requests all alternatives for
    that origin to be invalidated.
- `<protocol-id>`
  - : The {{Glossary("ALPN")}} protocol identifier. Examples include h2 for HTTP/2 and
    h3-25 for draft 25 of the HTTP/3 protocol.
- `<alt-authority>`
  - : The quoted string specifying the alternative authority which consists of an optional
    host override, a colon, and a mandatory port number.
- `ma=<max-age>`{{Optional_Inline}}
  - : The number of seconds for which the alternative service is considered fresh. If
    omitted, it defaults to 24 hours. Alternative service entries can be cached for up to
    _\<max-age>_ seconds, minus the age of the response (from the {{
    httpheader("Age") }} header). If the cached entry expires, the client can no longer
    use this alternative service for new connections.
- `persist=1`{{Optional_Inline}}
  - : Usually cached alternative service entries are cleared on network configuration
    changes. Use of the persist=1 parameter ensures that the entry is not deleted through
    such changes.

Multiple entries can be specified in a single `Alt-Svc` header using comma
as separator. In that case, early entries are considered more preferable.

## Example

```
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

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) (article about `Alt-Svc` by HTTP Working Group chair Mark Nottingham)
