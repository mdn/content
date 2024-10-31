---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
page-type: http-header
spec-urls: https://www.w3.org/TR/ldp/#header-accept-post
---

{{HTTPSidebar}}

The HTTP **`Accept-Post`** {{Glossary("response header")}} advertises which [media types](/en-US/docs/Web/HTTP/MIME_types) are accepted by the server in a {{HTTPMethod("POST")}} request.
For example, a server receiving a `POST` request with an unsupported media type could reply with {{HTTPStatus("415", "415 Unsupported Media Type")}} and an `Accept-Post` header referencing one or more supported media types.

The header should appear in {{HTTPMethod("OPTIONS")}} requests to a resource that supports the `POST` method.
An `Accept-Post` header in a response to any request method implicitly means that a `POST` is allowed on the target resource in the request.

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
Accept-Post: <media-type>/<subtype>
Accept-Post: <media-type>/*
Accept-Post: */*

// Comma-separated list of media types
Accept-Post: <media-type>/<subtype>, <media-type>/<subtype>
```

> [!NOTE]
> The `Accept-Post` header specifies a media range in the same way as {{HTTPHeader("Accept")}}, except that it has no notion of preference via `q` ({{Glossary("quality values")}}) arguments.
> This is because `Accept-Post` is a response header while `Accept` is a request header.

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
Accept-Post: application/json, text/plain
Accept-Post: image/webp
Accept-Post: */*
```

## Specifications

{{Specifications}}

## Browser compatibility

Browser compatibility is not relevant for this header.
The header is sent by the server and the specification does not define client behavior.

## See also

- {{HTTPHeader("Accept-Patch")}}
- {{HTTPMethod("POST")}} request method
