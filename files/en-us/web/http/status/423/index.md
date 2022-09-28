---
title: 423 Locked
slug: Web/HTTP/Status/423
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Client Error
browser-compat: http.status.423
---

{{HTTPSidebar}}

The HTTP **`423 Locked`** client error response code indicates that either the source or the destination of a method is locked. It should contain some conditions such that the accessible resources are not locked in order to access them or to prevent any modifications they must be locked.

We can use appropriate precondition or postcondition code, such as 'lock-token-submitted' or 'no-conflicting-lock'.

## Status

```
423 Locked
```

## Specifications

| Specification               | Status   | Comments           |
| --------------------------- | -------- | ------------------ |
| {{RFC(4918, "423 Locked")}} | IETF RFC | Initial definition |

## Browser compatibility

{{Compat}}

## See also
