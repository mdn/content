---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Client Error
browser-compat: http.status.424
---

{{HTTPSidebar}}

The HTTP **`424 Failed Dependency`** client error response code indicates that the method could not be performed on the resource because the requested action depended on another action and that action failed.

If a request was issued, and one property update failed (with for example {{HTTPStatus(403)}} Forbidden) then automatically every other property update will also fail with 424 Failed Dependency.

## Status

```
424 Failed Dependency
```

## Specifications

| Specification                          | Status   | Comments           |
| -------------------------------------- | -------- | ------------------ |
| {{RFC(4918, "424 Failed Dependency")}} | IETF RFC | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus(403)}}
