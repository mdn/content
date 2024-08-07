---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.307
---

{{HTTPSidebar}}

The HTTP **`307 Temporary Redirect`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the resource requested has been temporarily moved to the URL given by the {{HTTPHeader("Location")}} headers.
A browser redirects automatically to the new page, but the ranking value in search engines (colloquially named "link juice" in {{Glossary("SEO")}} terms) is **not sent** to the new URL.

The method and the body of the original request are reused to perform the redirected request.
In the cases where you want the request method to be changed to {{HTTPMethod("GET")}}, use {{HTTPStatus("303", "303 See Other")}} instead.
This is useful when you want to give an answer to a {{HTTPMethod("PUT")}} method that is not the uploaded resources, but show a confirmation message like "You have successfully uploaded XYZ".

The difference between `307` and {{HTTPStatus("302")}} is that `307` guarantees that the method and the body **will not be changed** when the redirected request is made.
With `302`, older clients incorrectly changed the method to {{HTTPMethod("GET")}}.
The behavior with non-`GET` methods and `302` is therefore unpredictable on the Web, whereas the behavior with `307` is predictable.
`307` and `302` responses are identical when the request method is {{HTTPMethod("GET")}}.

## Status

```http
307 Temporary Redirect
```

## Examples

### 307 response to a moved resource

The following {{HTTPMethod("GET")}} request to is made to a resource with a `307` redirection in place.
The {{HTTPHeader("Location")}} header shows the new URL in place for the resource.

```http
GET /en-US/docs/AJAX HTTP/2
Host: developer.mozilla.org
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/2 307
location: /en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
content-type: text/plain; charset=utf-8
date: Fri, 19 Jul 2024 12:57:17 GMT
```

## Specifications

{{Specifications}}

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("302", "302 Found")}}, the equivalent of this status code, but that may change the method used when it is not a {{HTTPMethod("GET")}}.
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, a permanent redirect
