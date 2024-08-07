---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.301
---

{{HTTPSidebar}}

The HTTP **`301 Moved Permanently`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the requested resource has been definitively moved to the URL in the {{HTTPHeader("Location")}} header.
A browser redirects automatically to the new page, and the ranking value in search engines (colloquially named "link juice" in {{Glossary("SEO")}} terms) is sent to the new URL.

> [!NOTE]
> Although the [specification](#specifications) requires the request method and the body to remain unchanged when redirection is performed, not all user-agents meet this requirement.
> Use the `301` code only as a response for {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} methods and use the {{HTTPStatus("308", "308 Permanent Redirect")}} for other methods (typically {{HTTPMethod("POST")}}), as altering the method when handling `308` responses is explicitly prohibited.

## Status

```http
301 Moved Permanently
```

## Examples

### 301 response to a moved resource

The following {{HTTPMethod("GET")}} request to is made to a resource with a `301` redirection in place.
The {{HTTPHeader("Location")}} header shows the new URL in place for the resource:

```http
GET /en-US/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 301
cache-control: max-age=2592000,public
location: /en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
content-length: 97

Moved Permanently. Redirecting to /en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
```

## Specifications

{{Specifications}}

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("308", "308 Permanent Redirect")}} equivalent to `301` where the request method is not modified
- {{HTTPStatus("302", "302 Found")}} temporary redirect
