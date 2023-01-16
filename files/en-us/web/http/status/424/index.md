---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Client Error
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.4
---

{{HTTPSidebar}}

The HTTP **`424 Failed Dependency`** client error response code indicates that the method could not be performed on the resource because the requested action depended on another action and that action failed.

If a request was issued, and one property update failed (with for example {{HTTPStatus(403)}} Forbidden) then automatically every other property update will also fail with 424 Failed Dependency.

## Status

{{Specifications}}

## See also

- {{HTTPStatus(403)}} (Forbidden)
