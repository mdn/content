---
title: 102 Processing
slug: Web/HTTP/Status/102
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2518.html#section-10.1
---

{{HTTPSidebar}}{{deprecated_header}}

The HTTP **`102 Processing`** informational status response code indicates to client that a full request has been received and the server is working on it.

This status code is only sent if the server expects the request to take significant time. It tells the client that your request is not dead yet.

> **Note:** This status code is deprecated and shouldn't be sent any more. Clients may still accept it, but simply ignore them.

## Status

```plain
102 Processing
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Expect")}}
- {{HTTPStatus("100")}}
