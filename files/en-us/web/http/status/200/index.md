---
title: 200 OK
slug: Web/HTTP/Status/200
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.200
---

{{HTTPSidebar}}

The HTTP **`200 OK`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code indicates that a request has succeeded.
A `200 OK` response is cacheable by default.

A `200 OK` response has a different meaning and format depending on the HTTP request method.
Here's how they vary for different methods:

- {{HTTPMethod("GET")}}: A resource was retrieved by the server and included in the response body.
- {{HTTPMethod("POST")}}: An action succeeded; the response has a message body describing the result.
- {{HTTPMethod("HEAD")}}: Identical to `GET`, except there is no message body.
- {{HTTPMethod("TRACE")}}: The response has a message body containing the request as received by the server.

Although possible, successful {{HTTPMethod("PUT")}} or {{HTTPMethod("DELETE")}} requests often do not result in a `200 OK` response.
It is more common to see {{HTTPStatus("201", "201 Created")}} if the resource is uploaded or created for the first time, or {{HTTPStatus("204", "204 No Content")}} upon successful deletion of a resource.

## Status

```http
200 OK
```

## Examples

### Receiving a `200 OK` for a `GET` request

In this example, a successful `GET` request to `https://example.com` returns a `200 OK` response.
The response includes representation headers and a message body with the HTML content:

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
<!-- HTML content follows here -->
```

### Receiving a `200 OK` for a `POST` request in form submission

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
