---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.415
---

{{HTTPSidebar}}

The HTTP **`415 Unsupported Media Type`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server refuses to accept the request because the payload is in an unsupported format.

The format problem might be due to the request's indicated {{HTTPHeader("Content-Type")}} or {{HTTPHeader("Content-Encoding")}}, or as a result of inspecting the data directly.
Some servers may be strict about the expected `Content-Type` of certain requests.
For example, sending `UTF8` instead of `UTF-8` to specify the [UTF-8 charset](https://www.rfc-editor.org/rfc/rfc3629.html) may cause the server to consider the media type invalid.

## Status

```http
415 Unsupported Media Type
```

## Examples

### Missing content type

In the following example, the {{HTTPHeader("Content-Type")}} header is missing entirely:

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23

{
  "user": "brian",
  "comment": "LGTM!"
}
```

If the server implementation expects at least a MIME type `Content-Type: application/json;` for the request at that endpoint, it may send the following response:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept: application/json; charset=UTF-8
Content-Length: 0
```

### Invalid content type

In the following example, the {{HTTPHeader("Content-Type")}} header is incorrectly set to URL-encoded form data where the payload is in the request body instead:

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23
Content-Type: application/x-www-form-urlencoded

{
  "user": "brian",
  "comment": "LGTM!"
}
```

In this case, the server responds with a 415, with the required content type for the request in the {{HTTPHeader("Accept")}} header:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept: application/json; charset=UTF-8
Content-Length: 0
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
