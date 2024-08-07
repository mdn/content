---
title: 302 Found
slug: Web/HTTP/Status/302
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.302
---

{{HTTPSidebar}}

The HTTP **`302 Found`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the requested resource has been temporarily moved to the URL in the {{HTTPHeader("Location")}} header.
A browser redirects automatically to the new page, but the ranking value in search engines (colloquially named "link juice" in {{Glossary("SEO")}} terms) is **not sent** to the new URL.

> [!NOTE]
> Although the [specification](#specifications) requires the method (and the body) not to be altered when the redirection is performed, not all user-agents meet this requirement.
> Use the `302` code only as a response for {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} methods and use {{HTTPStatus("307", "307 Temporary Redirect")}} otherwise, as the method change is explicitly prohibited in that case.
>
> In cases where you want the method used to be changed to {{HTTPMethod("GET")}}, use {{HTTPStatus("303", "303 See Other")}} instead.
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
- {{HTTPStatus("307", "307 Temporary Redirect")}}, the equivalent of this status code
  where the method used never changes.
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method
  used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, a permanent redirect.
