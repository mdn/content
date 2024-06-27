---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.416
---

{{HTTPSidebar}}

The HTTP **`416 Range Not Satisfiable`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that a server cannot serve the requested ranges.
The most likely reason is that the document doesn't contain such ranges, or that the {{HTTPHeader("Range")}} header value, though syntactically correct, doesn't make sense.

The `416` response message contains a {{HTTPHeader("Content-Range")}} indicating an unsatisfied range (that is a `'*'`) followed by a `'/'` and the current length of the resource, e.g., `Content-Range: bytes */12777`

Faced with this error, browsers usually either abort the operation (for example, a download will be considered as non-resumable) or ask for the whole document again.

## Status

```http
416 Range Not Satisfiable
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
