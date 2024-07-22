---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.412
---

{{HTTPSidebar}}

The HTTP **`412 Precondition Failed`** status response code indicates that access to the target resource was denied.
This happens with [conditional requests](/en-US/docs/Web/HTTP/Conditional_requests) on methods other than {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} when the condition defined by the {{HTTPHeader("If-Unmodified-Since")}} or {{HTTPHeader("If-Match")}} headers is not fulfilled.
In that case, the request (usually an upload or a modification of a resource) cannot be made and this error response is sent back.
It is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses).

## Status

```http
412 Precondition Failed
```

## Examples

### Precondition failed

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

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("428")}}
