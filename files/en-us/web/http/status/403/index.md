---
title: 403 Forbidden
slug: Web/HTTP/Status/403
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.403
---

{{HTTPSidebar}}

The HTTP **`403 Forbidden`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server understands the request but refuses to process it.

This status is similar to {{HTTPStatus("401")}}, but for a **`403 Forbidden`** response, authenticating or re-authenticating makes no difference.
The request failure is tied to application logic, such as insufficient permissions to a resource or action.

Clients that receive a `403` response should expect that repeating the request without modification will fail with the same error.
Server owners may decided to send a {{HTTPStatus("404")}} response instead of a 403 if acknowledging the existence of a resource to clients with insufficient privileges is not desired.

## Status

```http
403 Forbidden
```

## Examples

### Request failed due to insufficient permissions

The following example request is made to an API for user management.
The request contains an {{HTTPHeader("Authorization")}} header using `Bearer` [authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes) containing an access token:

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

The server has authenticated the request, but the action fails due to insufficient rights and the response body contains a reason for the failure:

```http
HTTP/1.1 403 Forbidden
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 88

{
  "error": "InsufficientPermissions",
  "message": "Deleting users requires the 'admin' role."
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("401")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.403)
