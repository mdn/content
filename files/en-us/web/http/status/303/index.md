---
title: 303 See Other
slug: Web/HTTP/Status/303
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.303
---

{{HTTPSidebar}}

The HTTP **`303 See Other`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the browser should redirect to the URL in the {{HTTPHeader("Location")}} header instead of rendering the requested resource.

This response code is often sent back as a result of {{HTTPMethod("PUT")}} or {{HTTPMethod("POST")}} methods so the client may retrieve a confirmation, or view a representation of a real-world object (see [HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14)).
The method to retrieve the redirected resource is always {{HTTPMethod("GET")}}.

## Status

```http
303 See Other
```

## Examples

### 303 response on form submission

The client in this example sends a {{HTTPMethod("POST")}} request to submit a form to a generic subscription.

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

The server may send back a response with a `303` status and a confirmation page in the {{HTTPHeader("Location")}} header, so the user is redirected there after receiving the response.

```http
HTTP/1.1 303 See Other
Location: https://www.example.com/confirmation/event/123
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## Specifications

{{Specifications}}

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("302", "302 Found")}}, a temporary redirect
- {{HTTPStatus("307", "307 Temporary Redirect")}}, a temporary redirect where the request method is not modified
