---
title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Headers/Cross-Origin-Resource-Policy
page-type: http-header
browser-compat: http.headers.Cross-Origin-Resource-Policy
---

{{HTTPSidebar}}

The HTTP **`Cross-Origin-Resource-Policy`** {{Glossary("response header")}} (CORP) indicates that the browser should block [`no-cors`](/en-US/docs/Web/API/RequestInit#no-cors) cross-origin or cross-site requests to the given resource.

It specifies resource owner's policy for what sites/origins should be allowed to load this resource.

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

### Directives

- `same-site`

  - : Resources can only be loaded from the same site.

- `same-origin`

  - : Resources can only be loaded from the same origin.

- `cross-origin`
  - : Resources can be loaded by any other origin/website.

## Examples

For more examples, see https://resourcepolicy.fyi/.

### Disallowing cross-origin no-cors requests

The `Cross-Origin-Resource-Policy` header below will cause compatible user agents to disallow cross-origin no-cors requests:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Cross-Origin Resource Policy (CORP) explainer](/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy)
- [Consider deploying Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
