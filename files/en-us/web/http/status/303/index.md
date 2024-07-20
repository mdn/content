---
title: 303 See Other
slug: Web/HTTP/Status/303
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.303
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`303 See Other`**
redirect status response code indicates that the redirects don't link to the requested resource itself, but to another page (such as a confirmation page, a representation of a real-world object — see [HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14) — or an upload-progress page). This response code is often sent back as a result of
{{HTTPMethod("PUT")}} or {{HTTPMethod("POST")}}. The method used to display this
redirected page is always {{HTTPMethod("GET")}}.

## Status

```http
303 See Other
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("302", "302 Found")}}, a temporary redirect
- {{HTTPStatus("307", "307 Temporary Redirect")}}, a temporary redirect
  where the method used never changes.
