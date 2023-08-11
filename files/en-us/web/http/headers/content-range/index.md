---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
page-type: http-header
browser-compat: http.headers.Content-Range
---

{{HTTPSidebar}}

The **`Content-Range`** response HTTP header indicates where in
a full body message a partial message belongs.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}},
        {{Glossary("Payload header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted
        response-header")}}
      </th>
      <td>no</td>
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

- \<unit>
  - : The unit in which ranges are specified. This is usually `bytes`.
- \<range-start>
  - : An integer in the given unit indicating the start position (zero-indexed & inclusive) of the request range.
- \<range-end>
  - : An integer in the given unit indicating the end position (zero-indexed & inclusive) of the requested range.
- \<size>
  - : The total length of the document (or `'*'` if unknown).

## Examples

```http
Content-Range: bytes 200-1000/67589
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
