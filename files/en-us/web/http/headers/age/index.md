---
title: Age
slug: Web/HTTP/Headers/Age
tags:
  - Caching
  - HTTP
  - Response
  - header
browser-compat: http.headers.Age
---
{{HTTPSidebar}}

The **`Age`** header contains the time in seconds the object was in a proxy cache.

The `Age` header is usually close to zero. If it is `Age: 0`, it was probably fetched from the origin server; otherwise, it was usually calculated as
a difference between the proxy's current date and the {{HTTPHeader("Date")}} general header included in the HTTP response.

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

```http
Age: <delta-seconds>
```

## Directives

- \<delta-seconds>
  - : A non-negative integer that is time in seconds the object was in a proxy cache.

## Examples

```http
Age: 24
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
