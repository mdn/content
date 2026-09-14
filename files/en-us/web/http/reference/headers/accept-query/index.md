---
title: Accept-Query header
short-title: Accept-Query
slug: Web/HTTP/Reference/Headers/Accept-Query
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc10008.html#name-the-accept-query-header-fie
sidebar: http
---

The HTTP **`Accept-Query`** {{Glossary("response header")}} indicates that a resource supports the {{HTTPMethod("QUERY")}} method and identifies the query format [media types](/en-US/docs/Web/HTTP/Guides/MIME_types) that it accepts.
Despite its name, `Accept-Query` is sent by the server in a response, not by the client in a request: it tells clients what they may send as the content of a subsequent `QUERY` request.

`Accept-Query` is a structured field whose value is a list of media ranges (a media type that might include wildcards), each represented as a structured field string or token and optionally including structured field parameters.
The order of media types in the list is not significant.
Its value applies to every URI on the server with the same path, regardless of the URI's query component.
If requests to the same resource return differing `Accept-Query` values, the most recently received value that is still fresh applies.

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
// As a token, or as an equivalent quoted string
Accept-Query: <media-type>/<subtype>
Accept-Query: "<media-type>/<subtype>"

Accept-Query: <media-type>/*
Accept-Query: */*

// Comma-separated list of media ranges in any order, mixing tokens and strings
Accept-Query: <media-type>/<subtype>, "<media-type-2>/<subtype-2>", <media-type-3>/*

// Media type parameters are expressed as structured field parameters
Accept-Query: <media-type>/<subtype>;<parameter>=<value>
Accept-Query: <media-type>/<subtype>;<parameter>="<value>"
```

> [!NOTE]
> Although its value looks similar to {{HTTPHeader("Accept")}}, `Accept-Query` is a structured field ({{rfc("9651", "Structured Field Values for HTTP")}}) and must be parsed as one.
> In particular, it has no notion of preference via `q` ({{Glossary("quality values")}}) arguments: every media range in the list is equally acceptable, and the order of the list is not significant.
> This is because `Accept-Query` is a response header while `Accept` is a request header.

## Directives

- `<media-type>/<subtype>`
  - : A [media type](/en-US/docs/Web/HTTP/Guides/MIME_types) with a subtype that the resource accepts as `QUERY` request content, such as `application/json`.
    Expressed as a structured field token.
- `"<media-type>/<subtype>"`
  - : The same value expressed as a structured field string.
    The choice between a token and a string carries no meaning, so recipients must not treat the two forms differently.
    A string is required where the media range is not a valid token, such as when the type begins with a digit.
- `<media-type>/*`
  - : A media type that accepts any subtype.
    For example, `image/*` corresponds to `image/png`, `image/svg`, `image/gif`, and other image types.
- `*/*`
  - : Any media type.
    Together with `<media-type>/*`, this is one of only two wildcard forms the header allows.
    A wildcard type with a concrete subtype, such as `*/json`, is not permitted.
- `;<parameter>=<value>`
  - : A media type parameter, such as `;charset="UTF-8"`, mapped to a structured field parameter on the preceding media range.
    Parameter values are themselves tokens or strings.
    The media range itself is always written without its parameters.

## Examples

### Advertising supported query formats

The following response indicates that the resource supports `QUERY` requests with `application/x-www-form-urlencoded` or `application/sql` content:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: application/x-www-form-urlencoded, application/sql
```

### Using strings and media type parameters

Media ranges may equally be written as quoted strings, and the two forms can be mixed in one list.
Here the resource accepts JSONPath queries, and SQL queries that are encoded as UTF-8:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: "application/jsonpath", application/sql;charset="UTF-8"
```

Because the response depends on the content of the `QUERY` request, a server may also send a {{HTTPHeader("Vary")}} header naming the fields involved:

```http
HTTP/1.1 200 OK
Content-Type: text/csv
Accept-Query: "application/sql", "application/xslt+xml"
Vary: Accept-Query, Content-Encoding, Content-Type
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
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
