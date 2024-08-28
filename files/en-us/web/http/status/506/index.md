---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2295#section-8.1
---

{{HTTPSidebar}}

The HTTP **`506 Variant Also Negotiates`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code is returned in Transparent Content Negotiation (TCN) when there is recursive content negotiation.

Transparent content negotiation enables a client to retrieve the best variant of a given resource when the server supports multiple variants.
A server sends a `506` status code if it is sending a choice response which itself has multiple variants.
This is due to a server misconfiguration with circular references in choice responses.

## Status

```http
506 Variant Also Negotiates
```

## Specifications

{{Specifications}}

## Examples

### Resource with variants

In the following example, a client requests a page in the `fr` locale using the {{HTTPHeader("Accept-Language")}} header.

```http
GET /highlight-page HTTP/1.1
Host: example.com
Accept-Language: fr
```

Due to server misconfiguration, the variant response for `fr` points to a [type map](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) which itself causes transparent negotiation to be done:

```http
HTTP/1.1 506 Variant Also Negotiates
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 233

<html>
<head>
  <title>506 Variant Also Negotiates</title>
</head>
<body>
  <h1>Variant Also Negotiates</h1>
  <p>A variant for the requested resource is itself a negotiable resource. This indicates a configuration error.</p>
</body>
</html>
```

## See also

- {{RFC("2295")}}
- [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [Content Negotiation](https://httpd.apache.org/docs/2.4/content-negotiation.html) in Apache HTTP Server documentation
