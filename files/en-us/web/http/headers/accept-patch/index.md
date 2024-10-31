---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc5789#section-3.1
---

{{HTTPSidebar}}

The HTTP **`Accept-Patch`** {{Glossary("response header")}} advertises which [media types](/en-US/docs/Web/HTTP/MIME_types) the server is able to understand in a {{HTTPMethod("PATCH")}} request.
For example, a server receiving a `PATCH` request with an unsupported media type could reply with {{HTTPStatus("415", "415 Unsupported Media Type")}} and an `Accept-Patch` header referencing one or more supported media types.

The header should appear in {{HTTPMethod("OPTIONS")}} requests to a resource that supports the `PATCH` method.
An `Accept-Patch` header in a response to any request method implicitly means that a `PATCH` is allowed on the target resource in the request.

> [!NOTE]
> IANA maintains [a list of official content encodings](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding).
> The `bzip` and `bzip2` encodings are non-standard but may be used in some cases, particularly for legacy support.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Patch: <media-type>/<subtype>
Accept-Patch: <media-type>/*
Accept-Patch: */*

// Comma-separated list of media types
Accept-Patch: <media-type>/<subtype>, <media-type>/<subtype>
```

## Directives

- `<media-type>/<subtype>`
  - : A single, precise [media type](/en-US/docs/Web/HTTP/MIME_types), like `text/html`.
- `<media-type>/*`
  - : A media type without a subtype.
    For example, `image/*` corresponds to `image/png`, `image/svg`, `image/gif`, and other image types.
- `*/*`
  - : Any media type.

## Examples

```http
Accept-Patch: application/json
Accept-Patch: application/json, text/plain
Accept-Patch: text/plain;charset=utf-8
```

## Specifications

{{Specifications}}

## Browser compatibility

Browser compatibility is not relevant for this header.
The server sends the header, and the specification doesn't define client behavior.

## See also

- {{HTTPHeader("Accept-Post")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- {{HTTPMethod("PATCH")}} request method
