---
title: Range
slug: Web/HTTP/Headers/Range
page-type: http-header
browser-compat: http.headers.Range
---

{{HTTPSidebar}}

The **`Range`** HTTP request header indicates the parts of a resource that the server should return.
Several parts can be requested at the same time in one `Range` header, and the server may send back these ranges in a multipart document.
If the server sends back ranges, it uses the {{HTTPStatus("206", "206 Partial Content")}} for the response.
If the ranges are invalid, the server returns the {{HTTPStatus("416", "416 Range Not Satisfiable")}} error.
The server can also ignore the `Range` header and return the whole resource with a {{HTTPStatus("200")}} status code.

Currently only [`bytes` units are registered](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) which are _offsets_ (zero-indexed & inclusive).
If the requested data has a [content coding](/en-US/docs/Web/HTTP/Headers/Content-Encoding) applied, each byte range represents the encoded sequence of bytes, not the bytes that would be obtained after decoding.

The header is a [CORS-safelisted request header](/en-US/docs/Glossary/CORS-safelisted_request_header) when the directive specifies a single byte range.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=-<suffix-length>
```

## Directives

- \<unit>
  - : The unit in which ranges are specified.
- \<range-start>
  - : An integer in the given unit indicating the start position of the request range.
- \<range-end>
  - : An integer in the given unit indicating the end position of the requested range.
    This value is optional and, if omitted, the end of the resource is used as the end of the range.
- \<suffix-length>
  - : An integer indicating the number of units at the end of the resource to return.

## Examples

The following examples show how to make requests using the `Range` header for CORS-safelisted requests, and for requesting multiple ranges.
Other examples can be found in the [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests) guide.

### Single byte ranges and CORS-safelisted requests

The `Range` header is a [CORS-safelisted request header](/en-US/docs/Glossary/CORS-safelisted_request_header) when the value is a single byte range.
This means that it can be used in cross-origin requests without triggering a [preflight](/en-US/docs/Glossary/Preflight_request) request, which is useful for requesting media and resuming downloads.

The following example requests the first 500 bytes of a resource:

```http
Range: bytes=0-499
```

To request the second 500 bytes:

```http
Range: bytes=500-999
```

Omitting the end position requests all remaining units of the resource, so the last 100 bytes of a resource with a length of 1000 bytes can be requested using:

```http
Range: bytes=900-
```

Alternatively, if it's unknown how large a resource is, the last `n` bytes can be requested using a suffix range of `-n`:

```http
Range: bytes=-100
```

### Requesting multiple ranges

Given a resource with a length of 10000 bytes, the following example requests three separate ranges; `200`-`999` (800 bytes), `2000`-`2499` (500 bytes), and finally `9500-`.
The ranges-specifier value `9500-` omits an end position which indicates that all bytes from 9500 onward are part of the third range (500 bytes).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

This example requests the first 500 and last 500 bytes of the file.
The request may be rejected by the server if these ranges overlap (if the requested resource was less than 1000 bytes long, for instance).

```http
Range: bytes=0-499, -499
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests) guide
- [CORS-safelisted request header](/en-US/docs/Glossary/CORS-safelisted_request_header)
