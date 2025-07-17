---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.205
sidebar: http
---

The HTTP **`205 Reset Content`** [successful response](/en-US/docs/Web/HTTP/Reference/Status#successful_responses) status code indicates that the request has been successfully processed and the client should reset the document view.

This response is intended to support use cases where the user receives content that supports data entry, submits user-edited data in a request, and the content needs to be reset for the next entry.
The instruction to "reset content" can mean clearing the contents of a form, resetting a canvas state, or refreshing a UI; the implementation depends on the client.

> [!NOTE]
> In web applications that use the `205` status, it's assumed that the client handles resetting content after a `205` response.
> This is typically done via JavaScript, as resetting content such as forms after a `205` response is not handled natively by browsers.

Note that the response must not include any content or the {{HTTPHeader("Content-Length")}} header (browsers may reject responses that include content).
The empty response may also be indicated using the {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}} header with an empty chunk.

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

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus(204)}} No Content
- [HTTP request methods](/en-US/docs/Web/HTTP/Reference/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Reference/Status)
