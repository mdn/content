---
title: 200 OK
slug: Web/HTTP/Status/200
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.200
---

{{HTTPSidebar}}

The HTTP **`200 OK`** status response code indicates that a request has succeeded.
It is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses).
A `200 OK` response is cacheable by default.

The meaning of a 'successful request' and the type of response a server sends in return depends on the request method.
A `200 OK` in response to these request methods has the following meaning and results:

- {{HTTPMethod("POST")}}: The requested action has succeeded and the response has a message body that describes the result.
- {{HTTPMethod("GET")}}: A resource has been successfully retrieved by the server and it's included in the response body.
- {{HTTPMethod("HEAD")}}: The response has representation headers, but no message body.
- {{HTTPMethod("TRACE")}}: The response has a message body containing the request as received by the server.

A successful {{HTTPMethod("PUT")}} or {{HTTPMethod("DELETE")}} request often does not result in a `200 OK` response.
It is more common to see {{HTTPStatus("201")}} `Created` if the resource is uploaded or created for the first time, or {{HTTPStatus("204")}} `No Content` upon successful deletions.

## Status

```http
200 OK
```

## Examples

### Receiving a `200 OK` for a GET request

Making a successful GET request to `https://example.com` returns the following response with the HTML contained in the message body:

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
<!-- HTML content will follow here -->
```

### POST response in form submission

Assuming a form exists to send data to an endpoint for managing subscriptions at `http://example.com/subscribe`.
A `POST` request to subscribe a user may look like the following:

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

In this example, a response with a `200 OK` status could look like this:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "User subscription pending. A confirmation email has been sent.",
  "subscription": {
    "name": "Brian Smith",
    "email": "brian.smith@example.com",
    "id": 123,
    "feed": "default"
  }
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- Glossary: {{Glossary("Idempotent")}}
