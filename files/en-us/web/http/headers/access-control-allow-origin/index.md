---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
tags:
  - Access Control
  - Access-Control-Allow-Origin
  - CORS
  - Dealing with CORS
  - HTTP
  - HTTP Header
  - How to Fix CORS
  - Reference
  - Security
  - cross-origin issue
  - header
  - origin
browser-compat: http.headers.Access-Control-Allow-Origin
---
{{HTTPSidebar}}

The **`Access-Control-Allow-Origin`** response header indicates whether the response can be shared with requesting code from the given {{glossary("origin")}}.

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
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## Directives

- `*`
  - : For requests _without credentials_, the literal value "`*`" can be specified as a wildcard; the value tells browsers to allow requesting code from any origin to access the resource. Attempting to use the wildcard with credentials [results in an error](/en-US/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Specifies an origin. Only a single origin can be specified. If the server supports clients from multiple origins, it must return the origin for the specific client making the request.
- `null`

  - : Specifies the origin "null".

    > **Note:** `null` [should not be used](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null): "It may seem safe to return `Access-Control-Allow-Origin: "null"`, but the serialization of the Origin of any resource that uses a non-hierarchical scheme (such as `data:` or `file:`) and sandboxed documents is defined to be "null". Many User Agents will grant such documents access to a response with an `Access-Control-Allow-Origin: "null"` header, and any origin can create a hostile document with a "null" Origin. The "null" value for the ACAO header should therefore be avoided."

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

Suppose the server sends a response with an `Access-Control-Allow-Origin` value with an explicit origin (rather than the "`*`" wildcard). In that case, the response should also include a {{HTTPHeader("Vary")}} response header with the value `Origin` — to indicate to browsers that server responses can differ based on the value of the `Origin` request header.

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
- {{httpheader("Cross-Origin-Resource-Policy")}}
