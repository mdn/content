---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.406
---

{{HTTPSidebar}}

The HTTP **`406 Not Acceptable`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) headers, and that the server is unwilling to supply a default representation.

Proactive content negotiation headers include:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

If a server returns such an error status, the body of the message should contain the list of the available representations of the resources, allowing the user to choose among them.

## Status

```http
406 Not Acceptable
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
