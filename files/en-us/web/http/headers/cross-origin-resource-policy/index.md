---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Resource-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Resource-Policy`** {{Glossary("response header")}} indicates that the browser should block no-cors cross-origin or cross-site requests to the given resource.

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
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Examples

### Disallowing cross-origin no-cors requests

The `Cross-Origin-Resource-Policy` header below will cause compatible user agents to disallow cross-origin no-cors requests:

```http
Cross-Origin-Resource-Policy: same-origin
```

For more examples, see https://resourcepolicy.fyi/.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cross-Origin Resource Policy (CORP) explainer](/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [Consider deploying Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Access-Control-Allow-Origin")}}
