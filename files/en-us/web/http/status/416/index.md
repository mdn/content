---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
page-type: http-status-code
browser-compat: http.status.416
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`416 Range Not Satisfiable`** error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the {{HTTPHeader("Range")}} header value, though syntactically correct, doesn't make sense.

The `416` response message contains a {{HTTPHeader("Content-Range")}} indicating an unsatisfied range (that is a `'*'`) followed by a `'/'` and the current length of the resource. E.g. `Content-Range: bytes */12777`

Faced with this error, browsers usually either abort the operation (for example, a download will be considered as non-resumable) or ask for the whole document again.

## Status

```http
416 Range Not Satisfiable
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
