---
title: Accept-Patch
slug: Web/HTTP/Headers/Accept-Patch
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc5789#section-3.1
---

{{HTTPSidebar}}

The **`Accept-Patch`** response HTTP header advertises which media-type the server is able to understand in a PATCH request.

**`Accept-Patch`** in response to any method means that PATCH is allowed on the resource identified by the Request-URI. Two common cases lead to this:

A server receiving a PATCH request with an unsupported media type could reply with {{HTTPStatus("415")}} `Unsupported Media Type` and an Accept-Patch header referencing one or more supported media types.

> [!NOTE]
> An IANA registry maintains [a list of media types](https://www.iana.org/assignments/media-types/media-types.xhtml).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## Directives

None

## Examples

```http
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## Specifications

{{Specifications}}

## Browser compatibility

Browser compatibility is not relevant for this header (header is sent by server, and the specification does not define client behavior).

## See also

- Http method {{HTTPMethod("PATCH")}}
- HTTP Semantic and context {{RFC("7231", "PUT", "4.3.4")}}
