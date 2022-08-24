---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
tags:
  - CORS
  - HTTP
  - Reference
  - header
browser-compat: http.headers.Access-Control-Allow-Methods
---
{{HTTPSidebar}}

The **`Access-Control-Allow-Methods`** response header
specifies one or more methods allowed when accessing a resource in response to a
{{glossary("preflight request")}}.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Directives

- \<method>
  - : A comma-delimited list of the allowed [HTTP request methods](/en-US/docs/Web/HTTP/Methods).
- `*` (wildcard)
  - : The value "`*`" only counts as a special wildcard value for requests
    without credentials (requests without [HTTP cookies](/en-US/docs/Web/HTTP/Cookies) or HTTP authentication information). In requests with credentials, it is
    treated as the literal method name "`*`" without special semantics.

## Examples

```http
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Methods: *
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
