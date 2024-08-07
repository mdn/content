---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Status/505
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.505
---

{{HTTPSidebar}}

The HTTP **`505 HTTP Version Not Supported`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code indicates that the HTTP version used in the request is not supported by the server.

In some cases, this error can be the result of intermediaries such as load balancers improperly forming a request line of a forwarded request as illustrated in [the example below](#505_response_from_service_misconfiguration).

## Status

```http
505 HTTP Version Not Supported
```

## Specifications

{{Specifications}}

## Examples

### 505 response from service misconfiguration

In the following example, a client requests `example.com/dog%20trainers`, but due to incorrect load balancer configuration, the percent encoding in the URL is not handled properly.
In this case, the server sees `trainers` instead of the HTTP version, and a 505 response is returned instead.
An identifier is contained in the response body for illustration of a method that may help server administrators narrow down the root cause of the problem:

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

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}}
