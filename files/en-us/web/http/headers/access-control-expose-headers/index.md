---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
tags:
  - CORS
  - HTTP
  - Reference
  - header
browser-compat: http.headers.Access-Control-Expose-Headers
---
{{HTTPSidebar}}

The **`Access-Control-Expose-Headers`** response header allows a server to indicate which response headers should be made available to scripts running in the browser, in response to a cross-origin request.

Only the {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} are exposed by default. For clients to be able to access other headers, the server must list them using the `Access-Control-Expose-Headers` header.

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
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## Directives

- \<header-name>
  - : A list of zero or more comma-separated [header names](/en-US/docs/Web/HTTP/Headers) that clients are allowed to access from a response. These are _in addition_ to the {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}}.
- `*` (wildcard)
  - : The value "`*`" only counts as a special wildcard value for requests without credentials (requests without [HTTP cookies](/en-US/docs/Web/HTTP/Cookies) or HTTP authentication information). In requests with credentials, it is treated as the literal header name "`*`" without special semantics.

## Examples

The {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} are: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. To expose a non-CORS-safelisted response header, you can specify:

```http
Access-Control-Expose-Headers: Content-Encoding
```

To additionally expose a custom header, like `Kuma-Revision`, you can specify multiple headers separated by a comma:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

For requests without credentials, a server can also respond with a wildcard value:

```http
Access-Control-Expose-Headers: *
```

However, this won't wildcard the {{HTTPHeader("Authorization")}} header, so if you need to expose that, you will need to list it explicitly:

```http
Access-Control-Expose-Headers: *, Authorization
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
