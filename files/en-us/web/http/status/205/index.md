---
title: 205 Reset Content
slug: Web/HTTP/Status/205
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.205
---

{{HTTPSidebar}}

The HTTP **`205 Reset Content`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and tells the client to reset the document view.
An instruction to "Reset Content" can mean clearing the contents of a form, resetting a canvas state, or refreshing a UI, for example.

## Status

```http
205 Reset Content
```

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

Browser behavior differs if this response erroneously includes a body on persistent connections.
See [204 No Content](/en-US/docs/Web/HTTP/Status/204) for more details.

## See also

- {{HTTPStatus(204)}} No Content
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
