---
title: Accept-Query header
short-title: Accept-Query
slug: Web/HTTP/Reference/Headers/Accept-Query
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc10008.html#section-3
sidebar: http
---

The HTTP **`Accept-Query`** {{Glossary("response header")}} indicates that a resource supports the {{HTTPMethod("QUERY")}} method and identifies the query format [media types](/en-US/docs/Web/HTTP/Guides/MIME_types) that it accepts.

`Accept-Query` is a [structured field](https://www.rfc-editor.org/rfc/rfc9651.html) whose value is a list of media ranges.
The order of media ranges in the list is not significant.
Its value applies to every URI on the server with the same path, regardless of the URI's query component.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Query: <media-range>
Accept-Query: <media-range>, <media-range>
```

## Directives

- `<media-range>`
  - : A media type that the resource accepts as the content of a `QUERY` request.
    Media ranges are represented as structured field strings or tokens and can include structured field parameters.
    The `*/*` value matches every media type, and `<type>/*` matches every subtype of the indicated type.

## Examples

### Advertising supported query formats

The following response indicates that the resource supports `QUERY` requests with JSONPath or SQL content:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: "application/jsonpath", application/sql;charset="UTF-8"
```

## Specifications

{{Specifications}}

## See also

- {{HTTPMethod("QUERY")}}
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
