---
title: Range
slug: Web/HTTP/Headers/Range
tags:
  - HTTP
  - HTTP Header
  - Range Requests
  - Reference
  - Request header
browser-compat: http.headers.Range
---
{{HTTPSidebar}}

The **`Range`** HTTP request header indicates the part of a document that the server should return. Several parts can be requested with one `Range` header at once, and the server may send back these ranges in a multipart document. If the server sends back ranges, it uses the {{HTTPStatus("206", "206 Partial Content")}} for the response. If the ranges are invalid, the server returns the {{HTTPStatus("416", "416 Range Not Satisfiable")}} error. The server can also ignore the `Range` header and return the whole document with a {{HTTPStatus("200")}} status code.

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
  - : The unit in which ranges are specified. This is usually `bytes`.
- \<range-start>
  - : An integer in the given unit indicating the beginning of the request range.
- \<range-end>
  - : An integer in the given unit indicating the end of the requested range. This value is optional and, if omitted, the end of the document is taken as the end of the range.
- \<suffix-length>
  - : An integer in the given unit indicating the number of units at the end of the file to return.

## Examples

Requesting three ranges from the file.

```http
Range: bytes=200-1000, 2000-6576, 19000-
```

Requesting the first 500 and last 500 bytes of the file. The request may be rejected by the server if the ranges overlap.

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
