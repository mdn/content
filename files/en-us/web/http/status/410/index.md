---
title: 410 Gone
slug: Web/HTTP/Status/410
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.410
---

{{HTTPSidebar}}

The HTTP **`410 Gone`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the target resource is no longer available at the origin server and that this condition is likely to be permanent.
A 410 response is cacheable by default.

Clients should not repeat requests for resources that return a 410 response, and website owners should remove or replace links that return this code.
If server owners don't know whether this condition is temporary or permanent, a {{HTTPStatus(404)}} status code should be used instead.

## Status

```http
410 Gone
```

## Examples

### Requesting an outdated resource

The following `GET` request is for a page with promotional content that is no longer valid:

```http
GET /promotions/summer-2023 HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 410 Gone
Content-Type: text/html
Content-Length: 212

<html>
  <head>
    <title>Promotion expired</title>
  </head>
  <body>
    <h1>Promotion expired</h1>
    <p>Promotion no longer active! See <a href="/offers">current offers</a>.</p>
  </body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus(404)}}
- [410 gone](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#410)
