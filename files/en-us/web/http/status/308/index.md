---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - redirects
browser-compat: http.status.308
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP)
**`308 Permanent Redirect`** redirect status response code
indicates that the resource requested has been definitively moved to the URL given by
the {{HTTPHeader("Location")}} headers. A browser redirects to this page and search
engines update their links to the resource (in 'SEO-speak', it is said that the
'link-juice' is sent to the new URL).

The request method and the body will not be altered, whereas {{HTTPStatus("301")}} may
incorrectly sometimes be changed to a {{HTTPMethod("GET")}} method.

> **Note:** Some Web applications may use the
> `308 Permanent Redirect` in a non-standard way and for other purposes. For
> example, Google Drive uses a `308 Resume Incomplete` response to indicate
> to the client when an incomplete upload stalled. (See [Perform a resumable download](https://developers.google.com/drive/api/guides/manage-uploads) on Google Drive documentation.)

## Status

```
308 Permanent Redirect
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("301", "301 Moved Permanently")}}, the equivalent of this status code, but that may
  change the method used when it is not a {{HTTPMethod("GET")}}.
- {{HTTPStatus("302", "302 Found")}}, a temporary redirect
