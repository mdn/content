---
title: 421 Misdirected Request
slug: Web/HTTP/Status/421
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#name-421-misdirected-request
---

{{HTTPSidebar}}

The HTTP **`421 Misdirected Request`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the request was directed to a server that is not able to produce a response.
This can be sent by a server that is not configured to produce responses for the combination of [scheme](/en-US/docs/Web/URI/Reference/Schemes) and [authority](/en-US/docs/Web/URI/Reference/Authority) that are included in the request URI.

Clients may retry the request over a different connection.

## Status

```http
421 Misdirected Request
```

## Examples

### Apache SNI error

Given the following request:

```http
GET / HTTP/1.1
Host: abc.example.com
```

In cases such as a wildcard certificate (`*.example.com`) and a connection is reused for multiple domains (`abc.example.com`, `def.example.com`), the server may respond with a 421:

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [Multiple hosts and misdirected requests](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache Server documentation
- [TLS 1.3](/en-US/docs/Web/Security/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication)
- [Transport Layer Security (TLS) configuration](/en-US/docs/Web/Security/Practical_implementation_guides/TLS)
- Apache [error code `AH02032`](https://svn.apache.org/viewvc?view=revision&revision=1705672) implementation
