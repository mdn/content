---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
spec-urls: https://www.rfc-editor.org/rfc/rfc6585#section-4
---
{{HTTPSidebar}}

The HTTP **`429 Too Many Requests`** response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").

A {{HTTPHeader("Retry-After")}} header might be included to this response indicating how long to wait before making a new request.

## Status

```
429 Too Many Requests
```

## Example

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Retry-After")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- Python solution: [How to avoid HTTP error 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
