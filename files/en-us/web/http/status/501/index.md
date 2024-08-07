---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.501
---

{{HTTPSidebar}}

The HTTP **`501 Not Implemented`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code means that the server does not support the functionality required to fulfill the request.
This status may also include a {{HTTPHeader("Retry-After")}} header, telling the client when to retry the request to check if the functionality is supported by then.
A 501 response is cacheable by default unless caching headers instruct otherwise.

`501` is the appropriate response when the server does not recognize the request method and is incapable of supporting it for any resource.
If the server _does_ recognize the method, but intentionally does not support it, the appropriate response is {{HTTPStatus(405, "405 Method Not Allowed")}}.
Servers are required to support {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}}, and therefore must not return `501` in response to requests with these methods.

A `501` response can occur if proxies cannot not handle request methods used in the context of HTTP Extension Framework ({{RFC("2774")}}) applications.
Additionally, this status can occur in Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) when a HTTP method (`SEARCH`, `PROPFIND`) does not have a URL handler configured to process it.

## Status

```http
501 Not Implemented
```

## Examples

### Extension method not supported

In the following HTTP Extension Framework example, a client sends a request with a mandatory extension specified in the `C-MAN` header.
The {{HTTPHeader("Connection")}} header specifies that these extensions are to be handled on a [hop-by-hop](/en-US/docs/Web/HTTP/Headers#hop-by-hop_headers) basis.
A proxy refuses to forward the `M-GET` method, and sends a `501` error in response:

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 501 Not Implemented
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP 501 errors](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications) in Microsoft ASP.NET documentation
