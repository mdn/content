---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
page-type: http-status-code
browser-compat: http.status.301
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`301 Moved Permanently`** redirect status response code indicates that the requested resource has been definitively moved to the URL given by the {{HTTPHeader("Location")}} headers. A browser redirects to the new URL and search engines update their links to the resource.

> **Note:** Although the [specification](#specifications) requires the method and the body to remain unchanged when the redirection is performed, not all user-agents meet this requirement. Use the `301` code only as a response for {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} methods and use the {{HTTPStatus("308", "308 Permanent Redirect")}} for {{HTTPMethod("POST")}} methods instead, as the method change is explicitly prohibited with this status.

## Status

```http
301 Moved Permanently
```

## Example

### Client request

```http
GET /index.php HTTP/1.1
Host: www.example.org
```

### Server response

```http
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("308", "308 Permanent Redirect")}}, the equivalent of this status code
  where the method used never changes.
- {{HTTPStatus("302", "302 Found")}}, a temporary redirect
