---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
page-type: http-header
browser-compat: http.headers.Access-Control-Allow-Origin
---

{{HTTPSidebar}}

The HTTP **`Access-Control-Allow-Origin`** {{Glossary("response header")}} indicates whether the response can be shared with requesting code from the given {{Glossary("origin")}}.

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
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## Directives

- `*` (wildcard)
  - : The requesting code from any origin is allowed to access the resource.
    For requests _without credentials_, the literal value `*` can be specified as a wildcard.
    Attempting to use the wildcard with credentials [results in an error](/en-US/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Specifies a single origin. If the server supports clients from multiple origins, it must return the origin for the specific client making the request.
- `null`
  - : Specifies the origin "null".
    > [!NOTE]
    > The value `null` should not be used. It may seem safe to return `Access-Control-Allow-Origin: "null"`; however, the origin of resources that use a non-hierarchical scheme (such as `data:` or `file:`) and sandboxed documents is serialized as `null`.
    > Many browsers will grant such documents access to a response with an `Access-Control-Allow-Origin: null` header, and any origin can create a hostile document with a `null` origin.
    > Therefore, the `null` value for the `Access-Control-Allow-Origin` header should be avoided.

## Examples

A response that tells the browser to allow code from any origin to access a resource will include the following:

```http
Access-Control-Allow-Origin: *
```

A response that tells the browser to allow requesting code from the origin `https://developer.mozilla.org` to access a resource will include the following:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Limiting the possible `Access-Control-Allow-Origin` values to a set of allowed origins requires code on the server side to check the value of the {{HTTPHeader("Origin")}} request header, compare that to a list of allowed origins, and then if the {{HTTPHeader("Origin")}} value is in the list, set the `Access-Control-Allow-Origin` value to the same value as the {{HTTPHeader("Origin")}} value.

### CORS and caching

Suppose the server sends a response with an `Access-Control-Allow-Origin` value with an explicit origin (rather than the `*` wildcard). In that case, the response should also include a {{HTTPHeader("Vary")}} response header with the value `Origin` — to indicate to browsers that server responses can differ based on the value of the `Origin` request header.

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
