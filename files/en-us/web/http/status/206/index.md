---
title: 206 Partial Content
slug: Web/HTTP/Status/206
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.206
---

{{HTTPSidebar}}

The HTTP **`206 Partial Content`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code is sent in response to a [range request](/en-US/docs/Web/HTTP/Range_requests).
The response body contains the requested ranges of data as specified in the {{HTTPHeader("Range")}} header of the request.

The format of the response depends on the number of ranges requested.
If a single range is requested, the {{HTTPHeader("Content-Type")}} of the entire response is set to the type of the document, and a {{HTTPHeader("Content-Range")}} is provided.
If several ranges are requested, the {{HTTPHeader("Content-Type")}} is set to `multipart/byteranges`, and each fragment covers one range, with its own {{HTTPHeader("Content-Range")}} and {{HTTPHeader("Content-Type")}} headers describing it.

## Status

```http
206 Partial Content
```

## Examples

### Receiving a `206` response for a single requested range

The following is a sample `206` response when a single range of `21010-` (bytes 21010 to the end of file) of an image file is requested.
The response contains {{HTTPHeader("Content-Type")}} of `image/gif` and the {{HTTPHeader("Content-Range")}} is provided:

```http
GET /z4d4kWk.gif HTTP/1.1
Host: images.example.com
Range: bytes=21010-
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif
ETag: "abc123"
Accept-Ranges: bytes

# 26012 bytes of partial image data…
```

### Receiving a `206` response for multiple requested ranges

Following is a sample `206` response when two ranges of a PDF file are requested.
The response contains the `multipart/byteranges` {{HTTPHeader("Content-Type")}} with a separate {{HTTPHeader("Content-Type")}} (`application/pdf`) and {{HTTPHeader("Content-Range")}} for each range.

```http
GET /price-list.pdf HTTP/1.1
Host: example.com
Range: bytes=234-639,4590-7999
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator
ETag: "abc123"
Accept-Ranges: bytes

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# content of first range (406 bytes)
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# content of second range (3410 bytes)
--String_separator--
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
