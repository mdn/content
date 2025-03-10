---
title: 400 Bad Request
slug: Web/HTTP/Status/400
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.400
---

{{HTTPSidebar}}

The HTTP **`400 Bad Request`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server would not process the request due to something the server considered to be a client error.
The reason for a `400` response is typically due to malformed request syntax, invalid request message framing, or deceptive request routing.

Clients that receive a `400` response should expect that repeating the request without modification will fail with the same error.

## Status

```http
400 Bad Request
```

## Examples

### Malformed request syntax

Assuming a {{Glossary("REST")}} API exists with an endpoint to manage users at `http://example.com/users` and a `POST` request with the following body attempts to create a user, but uses invalid JSON with unescaped line breaks:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 38

{
  "email": "b@example.com
",
  "username": "b.smith"
}
```

If the {{Glossary("HTTP Content", "content")}} is in a valid format, we would expect a {{HTTPStatus("201", "201 Created")}} response or another success message, but instead the server responds with a `400` and the response body includes a `message` field with some context so the client can retry the action with a properly-formed request:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 71

{
  "error": "Bad request",
  "message": "Request body could not be read properly.",
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.400)
