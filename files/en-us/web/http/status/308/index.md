---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
page-type: http-status-code
browser-compat: http.status.308
---

{{HTTPSidebar}}

The HTTP **`308 Permanent Redirect`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the resource requested has been definitively moved to the URL given by the {{HTTPHeader("Location")}} headers.
A browser redirects automatically to the new page, and the ranking value in search engines (colloquially named "link juice" in {{Glossary("SEO")}} terms) is sent to the new URL.

The request method and the body will not be altered, whereas {{HTTPStatus("301")}} may incorrectly sometimes be changed to a {{HTTPMethod("GET")}} method.

> [!NOTE]
> Some Web applications may use the `308 Permanent Redirect` in a non-standard way and for different purposes.
> For example, Google Drive uses a `308 Resume Incomplete` response to indicate to the client when an unfinished upload has stalled.
> See [Perform a resumable download](https://developers.google.com/drive/api/guides/manage-uploads) on the Google Drive documentation for more information.

## Status

```http
308 Permanent Redirect
```

## Examples

### 308 response to a moved resource

```http
GET /featured HTTP/1.1
Host: www.example.org
```

```http
HTTP/1.1 308 Permanent Redirect
Location: http://www.example.com/featured
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}, the equivalent of this status code, but that may change the method used when it is not a {{HTTPMethod("GET")}}.
- {{HTTPStatus("302", "302 Found")}}, a temporary redirect
