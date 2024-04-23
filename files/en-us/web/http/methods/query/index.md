---
title: QUERY
slug: Web/HTTP/Methods/QUERY
page-type: http-method
# browser-compat: http.methods.QUERY
---

{{HTTPSidebar}}

The **HTTP `QUERY` method** requests a representation of the specified resource. Requests using `QUERY` may use a request content of any media type with the `QUERY` method, provided that it has appropriate query semantics. The content returned in response to a QUERY cannot be assumed to be a representation of the resource identified by the effective request URI.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>YES</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Allowed in HTML forms</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
POST /test
```

## Example

```http
QUERY /test HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded

q=foo&limit=10&sort=-date
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Headers](/en-US/docs/Web/HTTP/Headers)
- {{HTTPHeader("Range")}}
- {{HTTPMethod("GET")}}
- {{HTTPMethod("POST")}}
