---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
browser-compat: http.headers.Cross-Origin-Resource-Policy
---
{{HTTPSidebar}}

The HTTP **`Cross-Origin-Resource-Policy`** response header
conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the
given resource.

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
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Examples

The response header below will cause compatible user agents to disallow cross-origin
no-cors requests:

```http
Cross-Origin-Resource-Policy: same-origin
```

For more examples, see <https://resourcepolicy.fyi/>.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cross-Origin Resource Policy (CORP) explainer](</en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>)
- [Consider deploying Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{httpheader("Access-Control-Allow-Origin")}}
