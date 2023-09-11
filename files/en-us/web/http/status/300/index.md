---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.300
---

{{HTTPSidebar}}

The HTTP **`300 Multiple Choices`** redirect status response code indicates that the request has more than one possible response.
The user-agent or the user should choose one of them.
As there is no standardized way of choosing one of the responses, this response code is very rarely used.

If the server has a preferred choice, it should generate a {{HTTPHeader("Location")}} header.

## Status

```http
300 Multiple Choices
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, the temporary redirect
- {{HTTPStatus("308")}} `Permanent Redirect`
