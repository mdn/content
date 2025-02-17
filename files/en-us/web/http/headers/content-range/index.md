---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
page-type: http-header
browser-compat: http.headers.Content-Range
---

{{HTTPSidebar}}

The HTTP **`Content-Range`** {{Glossary("response header")}} is used in [range requests](/en-US/docs/Web/HTTP/Range_requests) to indicate where the content of a response body belongs in relation to a complete resource.

It should only be included in {{HTTPStatus("206", "206 Partial Content")}} or {{HTTPStatus("416", "416 Range Not Satisfiable")}} responses.

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
Content-Range: <unit> <range>/<size>
Content-Range: <unit> <range>/*
Content-Range: <unit> */<size>
```

## Directives

- `<unit>`
  - : The unit for specifying ranges.
    Currently, only `bytes` is supported.
- `<range>`
  - : A range with the format `<range-start>-<range-end>`, where `<range-start>` and `<range-end>` are integers for the start and end position (zero-indexed & inclusive) of the range in the given `<unit>`, respectively.
    `*` is used in a {{HTTPStatus("416", "416 Range Not Satisfiable")}} response to indicate that the value is not a range.
- `<size>`
  - : The total length of the document (or `*` if unknown).

## Examples

### Partial content response

This {{HTTPStatus("206", "206 Partial Content")}} response shows a partial response, with the `Content-Range` indicating that it contains the first 1024 bytes of a 146515 byte file.

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(binary content)
```

### Range not satisfiable

If the server cannot satisfy the requested range request, it should respond with a {{HTTPStatus("416", "416 Range Not Satisfiable")}} status, and the `Content-Range` should specify `*` for the range along with the total size of the resource.

```http
HTTP/2 416

Content-Range: bytes */67589
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
