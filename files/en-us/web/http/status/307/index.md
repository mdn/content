---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.307
---

{{HTTPSidebar}}

{{Glossary("HTTP")}} **`307 Temporary Redirect`** redirect
status response code indicates that the resource requested has been temporarily moved to
the URL given by the {{HTTPHeader("Location")}} headers.

The method and the body of the original request are reused to perform the redirected
request. In the cases where you want the method used to be changed to
{{HTTPMethod("GET")}}, use {{HTTPStatus("303", "303 See Other")}} instead. This is
useful when you want to give an answer to a {{HTTPMethod("PUT")}} method that is not the
uploaded resources, but a confirmation message (like "You successfully uploaded XYZ").

The only difference between `307` and {{HTTPStatus("302")}} is that
`307` guarantees that the method and the body will not be changed when the
redirected request is made. With `302`, some old clients were incorrectly
changing the method to {{HTTPMethod("GET")}}: the behavior with non-`GET`
methods and `302` is then unpredictable on the Web, whereas the behavior with
`307` is predictable. For `GET` requests, their behavior is
identical.

## Status

```http
307 Temporary Redirect
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("302", "302 Found")}}, the equivalent of this status code, but that may
  change the method used when it is not a {{HTTPMethod("GET")}}.
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method
  used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, a permanent redirect
