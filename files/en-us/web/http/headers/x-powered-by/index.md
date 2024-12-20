---
title: X-Powered-By
slug: Web/HTTP/Headers/X-Powered-By
page-type: http-header
status:
  - non-standard
---

{{HTTPSidebar}}

The HTTP **`X-Powered-By`** {{Glossary("response header")}} is a non-standard header for identifying the application or framework that generated the response.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name")}}</th>
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
  - : A string describing the server application or framework.

## Examples

### Express X-Powered-By header

Express applications will usually include the `X-Powered-By` header in responses with the string `express` as the field value:

```http
X-Powered-By: express
```

## Specifications

Not part of any current specification.

## See also

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} headers
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
