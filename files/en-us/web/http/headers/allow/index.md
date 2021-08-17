---
title: Allow
slug: Web/HTTP/Headers/Allow
tags:
  - HTTP
  - HTTP Header
  - Response header
  - Reference
---
{{HTTPSidebar}}

The **`Allow`** header lists the set of methods supported by a resource.

This header must be sent if the server responds with a {{HTTPStatus("405")}} `Method Not Allowed` status code to indicate which request methods can be used. An empty `Allow` header indicates that the resource allows no request methods, which might occur temporarily for a given resource, for example.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Allow: <http-methods>
```

## Directives

- \<http-methods>
  - : The comma-separated list of allowed [HTTP request methods](/en-US/docs/Web/HTTP/Methods).

## Examples

```
Allow: GET, POST, HEAD
```

## Specifications

| Specification                                | Title                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Allow", "7.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPStatus("405")}}
- {{HTTPHeader("Server")}}
