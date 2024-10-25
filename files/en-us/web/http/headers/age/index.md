---
title: Age
slug: Web/HTTP/Headers/Age
page-type: http-header
browser-compat: http.headers.Age
---

{{HTTPSidebar}}

The HTTP **`Age`** {{Glossary("response header")}} indicates the time in seconds for which an object was in a proxy cache.

The header value is usually close to zero.
If the value is `0`, the object was probably fetched from the origin server; otherwise, the value is usually calculated as a difference between the proxy's current date and the {{HTTPHeader("Date")}} general header included in the HTTP response.

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
Age: <delta-seconds>
```

## Directives

- `<delta-seconds>`
  - : A non-negative integer that represents the time in seconds for which the object was in a proxy cache.

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
