---
title: 103 Early Hints
slug: Web/HTTP/Status/103
tags:
  - Draft
  - HTTP
  - Informational
  - NeedsCompatTable
  - NeedsContent
  - Status code
browser-compat: http.status.103
---
{{HTTPSidebar}}{{Draft}}

The HTTP **`103 Early Hints`** information response status code
is primarily intended to be used with the {{HTTPHeader("Link")}} header to allow the
user agent to start preloading resources while the server is still preparing a response.

## Syntax

```
103 Early Hints
```

## Specifications

| Specification                                | Status   | Comments           |
| -------------------------------------------- | -------- | ------------------ |
| {{RFC(8297, "103 Early Hints")}} | IETF RFC | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Link")}}
