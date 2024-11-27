---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
page-type: http-header
browser-compat: http.headers.If-None-Match
---

{{HTTPSidebar}}

The HTTP **`If-None-Match`** {{Glossary("request header")}} makes a request [conditional](/en-US/docs/Web/HTTP/Conditional_requests).
The server returns the requested resource in {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}} methods with a {{HTTPStatus("200")}} status, only if it doesn't have an {{HTTPHeader("ETag")}} matching the ones in the `If-None-Match` header.
For other methods, the request will be processed only if the eventually existing resource's {{HTTPHeader("ETag")}} doesn't match any of the values listed.

When the condition fails for {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}} methods, the server must return a {{HTTPStatus("304", "304 Not Modified")}} and any of the following header fields that would have been sent in a 200 response to the same request: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires`, and `Vary`.
For methods that apply server-side changes, the {{HTTPStatus("412", "412 Precondition Failed")}} is used when the condition fails.

The comparison with the stored ETag uses the _weak comparison algorithm_, meaning two files are considered identical if the content is equivalent — they don't have to be identical byte-by-byte.
For example, two pages that differ by their creation date in the footer would still be considered identical.

When used in combination with {{HTTPHeader("If-Modified-Since")}}, `If-None-Match` has precedence if the server supports it.

There are two common cases for using `If-None-Match` in requests:

- For {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}} methods, to update a cached entity that has an associated ETag.
- For other methods, and in particular for {{HTTPMethod("PUT")}}, `If-None-Match` used with the `*` value can be used to save a file only if it does not already exist, guaranteeing that the upload won't accidentally overwrite another upload and lose the data of the previous `PUT`; this problem is a variation of the [lost update problem](https://www.w3.org/1999/04/Editing/#3.1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## Directives

- `<etag_value>`
  - : Entity tags uniquely representing the requested resources. They are a string of {{Glossary("ASCII")}} characters placed between double quotes (Like `"675af34563dc-tr34"`) and may be prefixed by `W/` to indicate that the weak comparison algorithm should be used (this is useless with `If-None-Match` as it only uses that algorithm).
- `*`
  - : The asterisk is a special value representing any resource. They are only useful when uploading a resource, usually with {{HTTPMethod("PUT")}}, to check if another resource with the identity has already been uploaded before.

## Examples

```http
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}} conditional request headers
- {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}} response status codes
