---
title: If-Match
slug: Web/HTTP/Headers/If-Match
tags:
  - Conditional Requests
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.If-Match
---
{{HTTPSidebar}}

The **`If-Match`** HTTP request header makes a request conditional.

A server will only return requested resources for {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}} methods, or upload resource for {{HTTPMethod("PUT")}} and other non-safe methods, if the resource matches one of the listed {{HTTPHeader("ETag")}} values.
If the conditional does not match then the {{HTTPStatus("412")}} (Precondition Failed) response is returned.

The comparison with the stored {{HTTPHeader("ETag")}} uses the _strong comparison algorithm_, meaning two files are considered identical byte by byte only.
If a listed `ETag` has the `W/` prefix indicating a weak entity tag, this comparison algorithm will never match it.

There are two common use cases:

- For {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}} methods, used in combination with a {{HTTPHeader("Range")}} header, it can guarantee that the new ranges requested
  come from the same resource as the previous one.
- For other methods, and in particular for {{HTTPMethod("PUT")}}, `If-Match` can be used to prevent the [lost update problem](https://www.w3.org/1999/04/Editing/#3.1).
  It can check if the modification of a resource that the user wants to upload will not override another change that has been done since the original resource was fetched.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## Directives

- `<etag_value>`
  - : Entity tags uniquely representing the requested resources.
    They are a string of ASCII characters placed between double quotes (like `"675af34563dc-tr34"`).
    They may be prefixed by `W/` to indicate that they are "weak", i.e. that they represent the resource semantically but not byte-by-byte.
    However, in an **`If-Match`** header, weak entity tags will never match.
- `*`
  - : The asterisk is a special value representing any resource.
    Note that this must match as `false` if the origin server does not have a current representation for the target resource.

## Examples

```http
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("412", "412 Precondition Failed")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
