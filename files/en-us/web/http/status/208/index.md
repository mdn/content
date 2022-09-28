---
title: 208 Already Reported
slug: Web/HTTP/Status/208
tags:
  - HTTP
  - Status code
  - Reported
browser-compat: http.status.208
---

{{HTTPSidebar}}

The HTTP **`208 Already Reported`** response code is used inside DAV: propstat response element. This uses Bindings, so to avoid mapping of internal members of multiple binding to a collection inside the request's scope, only one will be reported with {{HTTPStatus(200)}} while other responses for all other bindings will use {{HTTPStatus(208)}} so no conflicts are created.

## Status

```
208 Already Reported
```

## Specifications

| Specification                         | Status   | Comments           |
| ------------------------------------- | -------- | ------------------ |
| {{RFC(5842, "208 Already Reported")}} | IETF RFC | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus(200)}}
