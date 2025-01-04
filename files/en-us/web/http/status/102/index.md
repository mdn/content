---
title: 102 Processing
slug: Web/HTTP/Status/102
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2518.html#section-10.1
---

{{HTTPSidebar}}{{deprecated_header}}

The HTTP **`102 Processing`** [informational response](/en-US/docs/Web/HTTP/Status#informational_responses) status code indicates to client that a full request has been received and the server is working on it.
This status code is only sent if the server expects the request to take significant time.

> [!NOTE]
> Regular web servers do not return this response.
> This status code was first introduced in Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}) {{RFC("2518")}}, but it was removed from WebDAV in {{RFC("4918")}}.

## Status

```plain
102 Processing
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is deprecated and browsers will ignore this response header.

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("100")}}
- [rfc4918 '102 Processing' removal notes](https://www.rfc-editor.org/rfc/rfc4918#section-21.4)
