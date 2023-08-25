---
title: Range
slug: Web/HTTP/Headers/Range
page-type: http-header
browser-compat: http.headers.Range
---

{{HTTPSidebar}}

The **`Range`** HTTP request header indicates the parts of a document that the server should return.
Several parts can be requested at the same time in one `Range` header, and the server may send back these ranges in a multipart document.
If the server sends back ranges, it uses the {{HTTPStatus("206", "206 Partial Content")}} for the response.
If the ranges are invalid, the server returns the {{HTTPStatus("416", "416 Range Not Satisfiable")}} error.
The server can also ignore the `Range` header and return the whole document with a {{HTTPStatus("200")}} status code.
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
    This `bytes` for byte ranges (currently no other [range units are registered](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)).
- \<range-start>
  - : An integer indicating the beginning of the request range, in the given unit.
- \<range-end>
  - : An integer indicating the end of the requested range, in the given unit.
    This value is optional and, if omitted, the end of the document is taken as the end of the range.
- \<suffix-length>
  - : An integer indicating the number of (given) units at the end of the file to return.

## Examples

The following examples show how to make requests using the `Range` header for CORS-safelisted requests, and for requesting multiple ranges.
Other examples can be found in the [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests) guide.

### Making CORS-safelisted requests

The `Range` header is a [CORS-safelisted request header](/en-US/docs/Glossary/CORS-safelisted_request_header) when the value is a single byte range.
This means that it can be used in cross-origin requests without triggering a [preflight](/en-US/docs/Glossary/Preflight_request) request, which is useful for requesting media and resuming downloads.

This example requests the bytes from 100 to 200 of the resource:

```http
Range: bytes=100-200
```

The following example requests the last 500 bytes of the resource:

```http
Range: bytes=-500
```

### Requesting multiple ranges

The following example requests three separate parts of a file, from `200`-`1000` (the first 800 bytes), `2000`-`6576` (the bytes from 2000 to 6576), and finally `19000-`.
The ranges-specifier value `19000-` specifies `19000` as the first position, and omits any last position in order to indicate that all bytes from 19000 onward are part of the third range.

```http
Range: bytes=200-1000, 2000-6576, 19000-
```

This example requests the first 500 and last 500 bytes of the file.
The request may be rejected by the server if these ranges overlap (i.e. the file is less than 1000 bytes long).

```http
Range: bytes=0-499, -500
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
