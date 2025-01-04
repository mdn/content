---
title: 510 Not Extended
slug: Web/HTTP/Status/510
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2774#section-7
---

{{HTTPSidebar}}

The HTTP **`510 Not Extended`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code is sent when the client request declares an HTTP Extension ({{RFC("2774")}}) that should be used to process the request, but the extension is not supported.

## Status

```http
510 Not Extended
```

## Examples

### Extension not supported

In the following example, a client sends a request with a mandatory extension specified in the `C-MAN` header.
The {{HTTPHeader("Connection")}} header specifies that these extensions are to be handled on a [hop-by-hop](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers) basis.
A {{Glossary("Proxy_server", "proxy")}} forwards the extended request, but the {{HTTPHeader("Connection")}} header is stripped out in transit.
Because the origin server doesn't receive any information about the `M-GET` method, it sends a `510` in response:

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 510 Not Extended
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
