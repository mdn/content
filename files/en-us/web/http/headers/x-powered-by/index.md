---
title: X-Powered-By
slug: Web/HTTP/Headers/X-Powered-By
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The HTTP **`X-Powered-By`** {{Glossary("Response header")}} is a non-standard header for identifying the application or framework that generated the response.

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
X-Powered-By: <application>
```

## Directives

- `<application>`
  - : The server application or framework.

## Examples

### Express response headers

```http
X-Powered-By: express
```

## Specifications

Not part of any current specification.

## See also

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
