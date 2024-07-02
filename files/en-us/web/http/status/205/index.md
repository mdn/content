---
title: 205 Reset Content
slug: Web/HTTP/Status/205
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.205
---

{{HTTPSidebar}}

The HTTP **`205 Reset Content`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and tells the client to reset the document view.
An instruction to "Reset Content" can mean clearing the contents of a form, resetting a canvas state, or refreshing a UI, but this is dependent on client implementations.

This response is intended to support use cases where the user receives content that supports data entry, submits entered data in a request, and then the content is reset for the next entry by the client.

There must be no payload in the response body, and this can be indicated using `Content-Length: 0` response header or `Transfer-Encoding: chunked` response header with an empty chunk.

## Status

```http
205 Reset Content
```

## Examples

### Resetting a form

A request for form submission may look like the following:

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

The server may send a response that indicates that the client should reset a form.
It's assumed that the client supports resetting the content for entering data via JavaScript on `205` responses, as this is not handled natively by browsers:

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Specifications

{{Specifications}}

## Compatibility notes

Browser behavior differs if this response erroneously includes a body on persistent connections.
See [204 No Content](/en-US/docs/Web/HTTP/Status/204) for more details.

## See also

- {{HTTPStatus(204)}} No Content
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
