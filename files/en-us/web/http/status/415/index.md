---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.415
---

{{HTTPSidebar}}

The HTTP **`415 Unsupported Media Type`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server refused to accept the request because the message {{Glossary("HTTP Content", "content")}} format is not supported.

The format problem might be due to the request's indicated {{HTTPHeader("Content-Type")}} or {{HTTPHeader("Content-Encoding")}}, or as a result of processing the request message content.
Some servers may be strict about the expected `Content-Type` of requests.
For example, sending `UTF8` instead of `UTF-8` to specify the {{glossary("UTF-8")}} charset may cause the server to consider the media type invalid.

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
  "user": "belgin",
  "comment": "LGTM!"
}
```

If the server implementation expects at least a MIME type `Content-Type: application/json;` for the request at that endpoint, it may send the following response:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### Invalid content type

In the following example, the {{HTTPHeader("Content-Type")}} header is incorrectly set to URL-encoded form data when the {{Glossary("HTTP Content", "content")}} is in the request body instead:

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23
Content-Type: application/x-www-form-urlencoded

{
  "user": "belgin",
  "comment": "LGTM!"
}
```

In this case, the server responds with a 415, with the required content type for the request in the {{HTTPHeader("Accept-Post")}} header:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept-Post")}}
