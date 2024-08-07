---
title: 201 Created
slug: Web/HTTP/Status/201
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.201
---

{{HTTPSidebar}}

The HTTP **`201 Created`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code indicates that the HTTP request has led to the creation of a resource.
This status code is commonly sent as the result of a {{HTTPMethod("POST")}} request.

The new resource, or a description and link to the new resource, is created before the response is returned.
The newly-created items are returned in the body of the message, located at either the **URL of the initial request** or the URL in the value of the {{HTTPHeader("Location")}} header in the response.

## Status

```http
201 Created
```

## Examples

### Receiving a response indicating user creation

Let's assume there's a REST API for managing users with an endpoint at `http://example.com/users`. In this example, we send a `POST` request with the following body to create a user:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "firstName": "Brian",
  "lastName": "Smith",
  "email": "brian.smith@example.com"
}
```

After successful user creation, the `201 Created` response will look like this:

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123

{
  "message": "New user created",
  "user": {
    "id": 123,
    "firstName": "Brian",
    "lastName": "Smith",
    "email": "brian.smith@example.com"
  }
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
