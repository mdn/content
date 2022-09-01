---
title: 205 Reset Content
slug: Web/HTTP/Status/205
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.205
---
{{HTTPSidebar}}

The HTTP **`205 Reset Content`** response status tells the
client to reset the document view, so for example to clear the content of a form, reset
a canvas state, or to refresh the UI.

## Status

```
205 Reset Content
```

## Specifications

{{Specifications}}

## Compatibility notes

- Browser behavior differs if this response erroneously includes a body on persistent
  connections See [204 No Content](/en-US/docs/Web/HTTP/Status/204) for more
  detail.

## See also

- {{HTTPStatus(204)}} No Content
