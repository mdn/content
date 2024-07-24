---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc6585#section-3
---

{{HTTPSidebar}}

The HTTP **`428 Precondition Required`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server requires the request to be [conditional](/en-US/docs/Web/HTTP/Conditional_requests).

Typically, a 428 response means that a required precondition header such as {{HTTPHeader("If-Match")}} **is missing**.
When a precondition header does **not match** the server-side state, the response should be {{HTTPStatus("412", "412 Precondition Failed")}}.

## Status

```http
428 Precondition Required
```

## Examples

### Missing precondition in request

A client has fetched a resource `my-document` from the server, updated it locally, and then tries to send the updated document back to the server:

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
  […]
```

The server implementation requires that all {{HTTPMethod("PUT")}} requests for the specific path or type of documents must be conditional and sends a 428 response:

```http
HTTP/1.1 428 Precondition Required
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "MissingPrecondition",
  "message": "Updating documents requires a precondition header.",
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests)
- Conditional headers: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
