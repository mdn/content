---
title: Early-Data
slug: Web/HTTP/Headers/Early-Data
tags:
  - Early-Data
  - Client hints
  - HTTP
  - HTTP Header
  - Request header
  - Reference
  - Experimental
browser-compat: http.headers.Early-Data
---
{{SeeCompatTable}}{{HTTPSidebar}}

The **`Early-Data`** header is set by
an intermediary to indicate that the request has been conveyed in [TLS early data](/en-US/docs/Web/Security/Transport_Layer_Security#tls_1.3),
and also indicates that the intermediary understands the {{HTTPStatus("425", "425 (Too Early)")}} status code.

The `Early-Data` header is **not** set by the originator of the
request (i.e., a browser).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Early-Data: 1
```

## Examples

```http
GET /resource HTTP/1.0
Host: example.com
Early-Data: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
