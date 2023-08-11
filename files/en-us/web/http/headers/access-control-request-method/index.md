---
title: Access-Control-Request-Method
slug: Web/HTTP/Headers/Access-Control-Request-Method
page-type: http-header
browser-compat: http.headers.Access-Control-Request-Method
---

{{HTTPSidebar}}

The **`Access-Control-Request-Method`** request header is used
by browsers when issuing a {{glossary("preflight request")}}, to let the server know
which [HTTP method](/en-US/docs/Web/HTTP/Methods) will be used when the
actual request is made. This header is necessary as the preflight request is always an
{{HTTPMethod("OPTIONS")}} and doesn't use the same method as the actual request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Request-Method: <method>
```

## Directives

- \<method>
  - : One of the [HTTP request methods](/en-US/docs/Web/HTTP/Methods), for
    example {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, or {{HTTPMethod("DELETE")}}.

## Examples

```http
Access-Control-Request-Method: POST
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Request-Headers")}}
