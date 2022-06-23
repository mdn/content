---
title: 409 Conflict
slug: Web/HTTP/Status/409
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
browser-compat: http.status.409
---
{{HTTPSidebar}}

The HTTP **`409 Conflict`** response status code indicates a request conflict with the current state of the target resource.

Conflicts are most likely to occur in response to a {{HTTPMethod("PUT")}} request. For example, you may get a 409 response when uploading a file that is older than the existing one on the server, resulting in a version control conflict.

## Status

```
409 Conflict
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPMethod("PUT")}}
