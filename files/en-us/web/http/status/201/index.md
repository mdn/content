---
title: 201 Created
slug: Web/HTTP/Status/201
page-type: http-status-code
browser-compat: http.status.201
---

{{HTTPSidebar}}

The HTTP **`201 Created`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and indicates that the request has led to the creation of a resource.
The new resource or a description and link to the new resource is created before the response is returned and the newly-created items are returned in the body of the message, located at either the URL of the request, or at the URL in the value of the {{HTTPHeader("Location")}} header.

This status code is commonly sent as the result of a {{HTTPMethod("POST")}} request.

## Status

```http
201 Created
```

## Examples

### Response indicating new user created

Assuming a REST API exists with an endpoint to manage users at `http://example.com/users` and a `POST` request with the following body will create a user:

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

A generic 201 response may look like this:

```http
HTTP/1.1 201 CREATED
Content-Type: application/json

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

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
