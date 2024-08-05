---
title: 205 Reset Content
slug: Web/HTTP/Status/205
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.205
---

{{HTTPSidebar}}

The HTTP **`205 Reset Content`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code indicates that the request has been successfully processed and the client should reset the document view.

This response is intended to support use cases where the user receives content that supports data entry, submits user-edited data in a request, and the content needs to be reset for the next entry.
The instruction to "reset content" can mean clearing the contents of a form, resetting a canvas state, or refreshing a UI; the implementation depends on the client.

There must be no payload in the response body, and this can be indicated using `Content-Length: 0` response header or `Transfer-Encoding: chunked` response header with an empty chunk.

## Status

```http
205 Reset Content
```

## Examples

### Resetting a form after receiving a `205 Reset Content`

The client in this example sends a `POST` request to submit a form with the comment `Hello!`:

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

After successfully processing the form submission, the server responds with the following `205` response, indicating that the client should reset the form.

> [!NOTE]
> It's assumed that the client supports resetting the content after a `205` response.
> This is typically done via JavaScript, as resetting content after a `205` is not handled natively by browsers.

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Specifications

{{Specifications}}

## Compatibility notes

Browser behaviors differ if this response erroneously includes a body on persistent connections.
See [`204 No Content` compatibility notes](/en-US/docs/Web/HTTP/Status/204#compatibility_notes) for more details.

## See also

- {{HTTPStatus(204)}} No Content
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
