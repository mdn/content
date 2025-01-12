---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
page-type: http-header
browser-compat: http.headers.Access-Control-Allow-Methods
---

{{HTTPSidebar}}

The HTTP **`Access-Control-Allow-Methods`** {{Glossary("response header")}} specifies one or more [HTTP request methods](/en-US/docs/Web/HTTP/Methods) allowed when accessing a resource in response to a {{glossary("preflight request")}}.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Directives

- `<method>`
  - : A comma-separated list of the allowed request methods. `GET`, `HEAD`, and `POST` are always allowed, regardless of whether they are specified in this header, as they are defined as [CORS-safelisted method](https://fetch.spec.whatwg.org/#cors-safelisted-method)s.
- `*` (wildcard)
  - : All HTTP methods.
    It has this meaning only for requests without credentials (requests without [HTTP cookies](/en-US/docs/Web/HTTP/Cookies) or HTTP authentication information). In requests with credentials, it is
    treated as the literal method name `*` without special semantics.

## Examples

```http
Access-Control-Allow-Methods: PUT, DELETE
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
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
