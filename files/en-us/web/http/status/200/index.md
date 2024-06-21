---
title: 200 OK
slug: Web/HTTP/Status/200
page-type: http-status-code
browser-compat: http.status.200
---

{{HTTPSidebar}}

The HTTP **`200 OK`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and indicates that a request has succeeded.
A 200 response is cacheable by default.

The meaning of success depends on the HTTP request method used:

- {{HTTPMethod("GET")}}: The resource has been retrieved and is included in the response body.
- {{HTTPMethod("HEAD")}}: The response has representation headers, but no message body.
- {{HTTPMethod("POST")}}: The response has a message body that describes the result of the action.
- {{HTTPMethod("TRACE")}}: The response has a message body with the request message as received by the server.

The successful result of a {{HTTPMethod("PUT")}} or a {{HTTPMethod("DELETE")}} is often not `200 OK`, but {{HTTPStatus("204")}} `No Content`, or {{HTTPStatus("201")}} `Created` if the resource is uploaded for the first time.

## Status

```http
200 OK
```

## Examples

### Requesting a website

Making a successful GET request to `https://example.com` returns the following response:

```http
HTTP/1.1 200 OK
Accept-Ranges: bytes
Age: 294510
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Etag: "3147526947"
Expires: Fri, 28 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECAcc (nyd/D10E)
X-Cache: HIT
Content-Length: 1256

<!doctype html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{Glossary("Idempotent")}} Glossary entry
