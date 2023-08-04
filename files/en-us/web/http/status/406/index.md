---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
page-type: http-status-code
browser-compat: http.status.406
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`406 Not Acceptable`**
client error response code indicates that the server cannot produce a response matching
the list of acceptable values defined in the request's proactive [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) headers, and
that the server is unwilling to supply a default representation.

Proactive content negotiation headers include:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

In practice, this error is very rarely used. Instead of responding using this error
code, which would be cryptic for the end user and difficult to fix, servers ignore the
relevant header and serve an actual page to the user. It is assumed that even if the
user won't be completely happy, they will prefer this to an error code.

If a server returns such an error status, the body of the message should contain the
list of the available representations of the resources, allowing the user to choose
among them.

## Status

```http
406 Not Acceptable
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
