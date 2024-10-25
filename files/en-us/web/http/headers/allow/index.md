---
title: Allow
slug: Web/HTTP/Headers/Allow
page-type: http-header
spec-urls: https://httpwg.org/specs/rfc9110.html#field.allow
---

{{HTTPSidebar}}

The HTTP **`Allow`** {{Glossary("response header")}} lists the set of [request methods](/en-US/docs/Web/HTTP/Methods) supported by a resource.
This header must be sent if the server responds with a {{HTTPStatus("405", "405 Method Not Allowed")}} status code to indicate which request methods can be used instead.
An empty `Allow` value indicates that the resource allows no request methods, which might occur temporarily for a given resource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Allow: <http-methods>
```

## Directives

- `<http-methods>`
  - : A comma-separated list of allowed request methods supported by a resource.

## Examples

```http
Allow: GET, POST, HEAD
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("405", "405 Method Not Allowed")}} status code
- {{HTTPHeader("Server")}}
- {{HTTPMethod("OPTIONS")}}
