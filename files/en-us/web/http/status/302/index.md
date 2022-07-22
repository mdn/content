---
title: 302 Found
slug: Web/HTTP/Status/302
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - redirects
browser-compat: http.status.302
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`302 Found`** redirect
status response code indicates that the resource requested has been temporarily moved to
the URL given by the {{HTTPHeader("Location")}} header. A browser redirects to this page
but search engines don't update their links to the resource (in 'SEO-speak', it is said
that the 'link-juice' is not sent to the new URL).

Even if the specification requires the method (and the body) not to be altered when the
redirection is performed, not all user-agents conform here - you can still find this
type of bugged software out there. It is therefore recommended to set the
`302` code only as a response for {{HTTPMethod("GET")}} or
{{HTTPMethod("HEAD")}} methods and to use {{HTTPStatus("307", "307 Temporary
  Redirect")}} instead, as the method change is explicitly prohibited in that case.

In the cases where you want the method used to be changed to {{HTTPMethod("GET")}}, use
{{HTTPStatus("303", "303 See Other")}} instead. This is useful when you want to give a
response to a {{HTTPMethod("PUT")}} method that is not the uploaded resource but a
confirmation message such as: 'you successfully uploaded XYZ'.

## Status

```
302 Found
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("307", "307 Temporary Redirect")}}, the equivalent of this status code
  where the method used never changes.
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method
  used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, a permanent redirect.
