---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2295#section-8.1
---

{{HTTPSidebar}}

The HTTP **`506 Variant Also Negotiates`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code may be given in the context of [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation).
The pattern of content negotiation enables a client to retrieve the best variant of a given resource, where the server supports multiple variants.

The **`Variant Also Negotiates`** status code indicates an internal server configuration error in which the chosen variant is itself configured to engage in content negotiation.
To avoid this misconfiguration, final resources or files should be target entities and not participate in content negotiation to avoid recursive conflicts.

## Status

```http
506 Variant Also Negotiates
```

## Specifications

{{Specifications}}

## Examples

### Resource with variants

In the following example, a client requests a page in the `fr` locale using the {{HTTPHeader("Accept-Language")}} header.
The server

```http
GET /highlight-page HTTP/1.1
Host: example.com
Accept-Language: fr
```

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
  <p>The server has an internal configuration error with the request: /highlight-page with <code>Accept-Language: fr</code>.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## See also

- [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [Content Negotiation](https://httpd.apache.org/docs/2.4/content-negotiation.html) in Apache HTTP Server documentation
