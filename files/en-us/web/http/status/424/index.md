---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.4
---

{{HTTPSidebar}}

The HTTP **`424 Failed Dependency`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the method could not be performed on the resource because the requested action depended on another action, and that action failed.

Regular web servers typically do not return this status code, but some protocols like {{Glossary("WebDAV")}} can return it.
For example, in {{Glossary("WebDAV")}}, if a `PROPPATCH` request was issued, and one command fails then automatically every other command will also fail with `424 Failed Dependency`.

## Status

```http
424 Failed Dependency
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("403")}} (Forbidden)
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
