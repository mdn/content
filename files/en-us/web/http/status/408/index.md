---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.408
---

{{HTTPSidebar}}

The HTTP **`408 Request Timeout`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server would like to shut down this unused connection.
A `408` is sent on an idle connection by some servers, _even without any previous request by the client_.

A server should send the {{HTTPHeader("Connection", "Connection: close")}} header field in the response, since `408` implies that the server has decided to close the connection rather than continue waiting.

This response is used much more since some browsers, like Chrome and Firefox, use HTTP pre-connection mechanisms to speed up surfing.

> [!NOTE]
> Some servers will shut down a connection without sending this message.

## Status

```http
408 Request Timeout
```

## Examples

### Timeout in form submission

The following example shows what a client may send when an [`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file) element uses an image on form submission with `method="post"`:

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----Boundary1234
Content-Length: 4012345

------Boundary1234
Content-Disposition: form-data; name="file"; filename="myImage.jpg"
Content-Type: image/jpeg

\xFF\xD8\xFF\xE0\x00...(binary data)
------Boundary1234--
```

If the data is not received in full due to network issues or latency, the server may timeout the connection.
Clients may repeat the request again, and a new connection will be used:

```http
HTTP/1.1 408 Request Timeout
Content-Type: text/html

<html>
<head>
    <title>408 Request Timeout</title>
</head>
<body>
    <h1>408 Request Timeout</h1>
    <p>Failed to process request in time. Please try again.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
