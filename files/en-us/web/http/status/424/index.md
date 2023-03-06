---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.4
---

{{HTTPSidebar}}

The HTTP **`424 Failed Dependency`** client error response code indicates that the method could not be performed on the resource because the requested action depended on another action, and that action failed.

Regular web servers will normally not return this status code. But some other protocols, like {{Glossary("WebDAV")}}, can return it. For example, in {{Glossary("WebDAV")}}, if a `PROPPATCH` request was issued, and one command fails then automatically every other command will also fail with `424 Failed Dependency`.

## Status

{{Specifications}}

## See also

- {{HTTPStatus("403")}} (Forbidden)
