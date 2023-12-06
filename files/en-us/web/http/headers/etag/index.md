---
title: ETag
slug: Web/HTTP/Headers/ETag
page-type: http-header
browser-compat: http.headers.ETag
---

{{HTTPSidebar}}

The **`ETag`** (or **entity tag**) HTTP response header is an identifier for a
specific version of a resource. It lets caches be more efficient and save bandwidth, as
a web server does not need to resend a full response if the content was not changed.
Additionally, etags help to prevent simultaneous updates of a resource from overwriting
each other (["mid-air collisions"](#avoiding_mid-air_collisions)).

If the resource at a given URL changes, a new `Etag` value _must_ be
generated. A comparison of them can determine whether two representations of a resource
are the same.

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
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## Directives

- `W/` {{optional_inline}}
  - : `'W/'` (case-sensitive) indicates that a [weak validator](/en-US/docs/Web/HTTP/Conditional_requests#weak_validation)
    is used. Weak etags are easy to generate, but are far less useful for comparisons.
    Strong validators are ideal for comparisons but can be very difficult to generate
    efficiently. Weak `ETag` values of two representations of the same
    resources might be semantically equivalent, but not byte-for-byte identical. This
    means weak etags prevent caching when [byte range requests](/en-US/docs/Web/HTTP/Headers/Accept-Ranges) are used,
    but strong etags mean range requests can still be cached.
- "\<etag_value>"
  - : Entity tag that uniquely represents the requested resource. It is a string of {{Glossary("ASCII")}}
    characters placed between double quotes, like `"675af34563dc-tr34"`. The
    method by which `ETag` values are generated is not specified. Typically, the ETag value
    is a hash of the content, a hash of the last modification timestamp, or just a revision number.
    For example, a wiki engine can use a hexadecimal hash of the documentation article content.

## Examples

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Avoiding mid-air collisions

With the help of the `ETag` and the {{HTTPHeader("If-Match")}} headers, you
can detect mid-air edit collisions.

For example, when editing a wiki, the current wiki content may be hashed
and put into an `Etag` header in the response:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

When saving changes to a wiki page (posting data), the {{HTTPMethod("POST")}} request
will contain the {{HTTPHeader("If-Match")}} header containing the `ETag`
values to check freshness against.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

If the hashes don't match, it means that the document has been edited in-between and a
{{HTTPStatus("412")}} `Precondition Failed` error is thrown.

### Caching of unchanged resources

Another typical use of the `ETag` header is to cache resources that are
unchanged. If a user visits a given URL again (that has an `ETag` set), and
it is _stale_ (too old to be considered usable), the client will send the value
of its `ETag` along in an {{HTTPHeader("If-None-Match")}} header field:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

The server compares the client's `ETag` (sent with
`If-None-Match`) with the `ETag` for its current version of the
resource, and if both values match (that is, the resource has not changed), the server
sends back a {{HTTPStatus("304")}} `Not Modified` status, without a body,
which tells the client that the cached version of the response is still good to use
(_fresh_).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304", "304 Not Modified")}}
- {{HTTPStatus("412", "Precondition Failed")}}
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
