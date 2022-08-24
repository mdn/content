---
title: 206 Partial Content
slug: Web/HTTP/Status/206
tags:
  - HTTP
  - HTTP Status
  - Range Requests
  - Success
browser-compat: http.status.206
---
{{HTTPSidebar}}

The HTTP **`206 Partial Content`** success status response code
indicates that the request has succeeded and the body contains the requested ranges
of data, as described in the {{HTTPHeader("Range")}} header of the request.

If there is only one range, the {{HTTPHeader("Content-Type")}} of the whole response is
set to the type of the document, and a {{HTTPHeader("Content-Range")}} is provided.

If several ranges are sent back, the {{HTTPHeader("Content-Type")}} is set to
`multipart/byteranges` and each fragment covers one range, with
{{HTTPHeader("Content-Range")}} and {{HTTPHeader("Content-Type")}} describing it.

## Status

```
206 Partial Content
```

## Examples

A response containing one single range:

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

# 26012 bytes of partial image data…
```

A response containing several ranges:

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# the first range
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# the second range
--String_separator--
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
