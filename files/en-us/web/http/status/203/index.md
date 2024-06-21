---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.203
---

{{HTTPSidebar}}

The HTTP **`203 Non-Authoritative Information`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and indicates that the request was successful but the enclosed payload has been modified by a transforming {{Glossary("Proxy server", "proxy")}} from that of the origin server's {{HTTPStatus("200")}} (`OK`) response.

The `203` response is similar to the value [`214`](/en-US/docs/Web/HTTP/Headers/Warning#warning_codes), meaning `Transformation Applied`, of the {{HTTPHeader("Warning")}} header code, which has the additional advantage of being applicable to responses with any status code.

## Status

```http
203 Non-Authoritative Information
```

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
