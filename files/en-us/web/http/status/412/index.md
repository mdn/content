---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.412
---

{{HTTPSidebar}}

The HTTP **`412 Precondition Failed`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that access to the target resource was denied.
This happens with [conditional requests](/en-US/docs/Web/HTTP/Conditional_requests) on methods other than {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} when the condition defined by the {{HTTPHeader("If-Unmodified-Since")}} or {{HTTPHeader("If-Match")}} headers is not fulfilled.
In that case, the request (usually an upload or a modification of a resource) cannot be made and this error response is sent back.

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

With the help of the `ETag` and the {{HTTPHeader("If-Match")}} headers, you can prevent conflicts or mid-air collisions.
For example, when editing some wiki pages, content is hashed and put into an `ETag` in successful responses:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

When saving changes to a wiki page (posting data), the {{HTTPMethod("POST")}} request will contain the {{HTTPHeader("If-Match")}} header containing the `ETag` values that the client stored from the last edit to check freshness of the resource on the server:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

If the hashes don't match, the document has been edited in-between and a `412 Precondition Failed` error is thrown.

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [Conditional requests](/en-US/docs/Web/HTTP/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
