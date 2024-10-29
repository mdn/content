---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
page-type: http-header
browser-compat: http.headers.Content-Range
---

{{HTTPSidebar}}

The HTTP **`Content-Range`** {{Glossary("response header")}} is used in [range requests](/en-US/docs/Web/HTTP/Range_requests) to indicate where the content of a response body belongs in relation to a complete resource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}},
        {{Glossary("Content header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## Directives

- `<unit>`
  - : The unit for specifying ranges.
    Currently, only `bytes` is supported.
- `<range-start>`
  - : An integer in the given unit indicating the start position (zero-indexed & inclusive) of the request range.
- `<range-end>`
  - : An integer in the given unit indicating the end position (zero-indexed & inclusive) of the requested range.
- `<size>`
  - : The total length of the document (or `*` if unknown).

## Examples

```http
Content-Range: bytes 200-1000/67589
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP range requests](/en-US/docs/Web/HTTP/Range_requests) guide
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} headers
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} status codes
