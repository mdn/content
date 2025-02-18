---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Status/505
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.505
---

{{HTTPSidebar}}

The HTTP **`505 HTTP Version Not Supported`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code indicates that the HTTP version used in the request is not supported by the server.

It's common to see this error when a request line is improperly formed such as `GET /path to resource HTTP/1.1` or with `\n` terminating the request line instead of `\r\n`.
For example, intermediaries such as load balancers may not handle request lines of a forwarded request as illustrated in the example below.

## Status

```http
505 HTTP Version Not Supported
```

## Examples

### A 505 due to malformed request-line

In the following example, a client requests `example.com/dog%20trainers`, but due to incorrect load balancer configuration, the {{Glossary("Percent-encoding", "percent encoding")}} in the URL is not handled properly.
In this case, the origin server sees `trainers` instead of the HTTP version, and a `505` response is returned instead.
A request identifier is contained in the response body for illustration of a way that may help server administrators narrow down the root cause of the problem:

```http
GET /dog trainers HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 505 HTTP Version Not Supported
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>505 HTTP Version Not Supported</title>
</head>
<body>
  <h1>505 HTTP Version Not Supported</h1>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
  <p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}} header
