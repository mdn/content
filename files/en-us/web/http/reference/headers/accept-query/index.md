---
title: Accept-Query header
short-title: Accept-Query
slug: Web/HTTP/Reference/Headers/Accept-Query
page-type: http-header
spec-urls: https://www.rfc-editor.org/info/rfc10008/#name-the-accept-query-header-fie
sidebar: http
---

The HTTP **`Accept-Query`** {{Glossary("response header")}} indicates that a resource supports the {{HTTPMethod("QUERY")}} method and identifies the query format [media types](/en-US/docs/Web/HTTP/Guides/MIME_types) that it accepts.

`Accept-Query` is a structured field whose value is a list of media ranges (a media type that might include wildcards), each represented as a structured field string or token and optionally including structured field parameters.
The order of media types in the list is not significant.
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
Accept-Query: <media-type>/<subtype>
Accept-Query: <media-type>/*
Accept-Query: */*

// Comma-separated list of media ranges in any order
Accept-Query: <media-type>/<subtype>, <media-type>/<subtype-2>, <media-type-2>/*
```

## Directives

- `<media-type>/<subtype>`
  - : A [media type](/en-US/docs/Web/HTTP/Guides/MIME_types) with a subtype that the resource accepts as `QUERY` request content, such as `application/json`.
- `<media-type>/*`
  - : A media type that accepts any subtype.
    For example, `image/*` corresponds to `image/png`, `image/svg`, `image/gif`, and other image types.
- `*/*`
  - : Any media type.

## Examples

### Advertising supported query formats

The following response indicates that the resource supports `QUERY` requests with `application/x-www-form-urlencoded` or `application/sql` content:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: application/x-www-form-urlencoded, application/sql
```

## Specifications

{{Specifications}}

## Browser compatibility

Browser compatibility is not relevant for this header.
Browsers have no built-in handling of `Accept-Query`; it's up to the client sending `QUERY` requests to read the header and use it to select a supported media type for the request content.

## See also

- {{HTTPMethod("QUERY")}} request method
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Location")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
