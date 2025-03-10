---
title: 302 Found
slug: Web/HTTP/Status/302
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.302
---

{{HTTPSidebar}}

The HTTP **`302 Found`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the requested resource has been temporarily moved to the URL in the {{HTTPHeader("Location")}} header.

A browser receiving this status will automatically request the resource at the URL in the `Location` header, redirecting the user to the new page.
Search engines receiving this response will not attribute links to the original URL to the new resource, meaning no {{Glossary("SEO")}} value is transferred to the new URL.

> [!NOTE]
> In the [Fetch Standard](https://fetch.spec.whatwg.org/#http-redirect-fetch), when a user agent receives a `302` in response to a {{HTTPMethod("POST")}} request, it uses the {{HTTPMethod("GET")}} method in the subsequent redirection request, as permitted by the HTTP [specification](#specifications).
> To avoid user agents modifying the request, use {{HTTPStatus("307", "307 Temporary Redirect")}} instead, as altering the method after a `307` response is prohibited.
>
> In cases where you want any request method to be changed to {{HTTPMethod("GET")}}, use {{HTTPStatus("303", "303 See Other")}}.
> This is useful when you want to give a response to a {{HTTPMethod("PUT")}} method that is not the uploaded resource but a confirmation message such as: "you successfully uploaded XYZ".

## Status

```http
302 Found
```

## Examples

### 302 response with new URL

```http
GET /profile HTTP/1.1
Host: www.example.com
```

```http
HTTP/1.1 302 Found
Location: https://www.example.com/new-profile-url
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## Specifications

{{Specifications}}

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("307", "307 Temporary Redirect")}}, equivalent to `302` but the request method is not modified
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method to {{HTTPMethod("GET")}}
- {{HTTPStatus("301", "301 Moved Permanently")}}, a permanent redirect.
