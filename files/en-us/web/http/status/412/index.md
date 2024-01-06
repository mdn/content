---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
page-type: http-status-code
browser-compat: http.status.412
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP)
**`412 Precondition Failed`** client error response code
indicates that access to the target resource has been denied. This happens with
conditional requests on methods other than {{HTTPMethod("GET")}} or
{{HTTPMethod("HEAD")}} when the condition defined by the
{{HTTPHeader("If-Unmodified-Since")}} or {{HTTPHeader("If-None-Match")}} headers is not
fulfilled. In that case, the request, usually an upload or a modification of a resource,
cannot be made and this error response is sent back.

## Status

```http
412 Precondition Failed
```

## Examples

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Avoiding mid-air collisions

With the help of the `ETag` and the {{HTTPHeader("If-Match")}} headers, you
can detect mid-air edit collisions.

For example, when editing MDN, the current wiki content is hashed and put into an
`Etag` in the response:

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

## Specifications

{{Specifications}}

## Browser compatibility

The information below has been pulled from MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat}}

## See also

- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
