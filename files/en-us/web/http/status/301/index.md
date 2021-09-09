---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
tags:
  - HTTP
  - Redirect
  - Reference
  - Status code
browser-compat: http.status.301
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`301 Moved Permanently`** redirect status response code indicates that the resource requested has been definitively moved to the URL given by the {{HTTPHeader("Location")}} headers. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL).

Even if the specification requires the method (and the body) not to be altered when the redirection is performed, not all user-agents align with it - you can still find this type of bugged software out there. It is therefore recommended to use the `301` code only as a response for {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} methods and to use the {{HTTPStatus("308", "308 Permanent Redirect")}} for {{HTTPMethod("POST")}} methods instead, as the method change is explicitly prohibited with this status.

## Status

```
301 Moved Permanently
```

## Example

### Client request

```
GET /index.php HTTP/1.1
Host: www.example.org
```

### Server response

```
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("302", "302 Found")}}, the temporary redirect
