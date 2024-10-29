---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.503
---

{{HTTPSidebar}}

The HTTP **`503 Service Unavailable`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code indicates that the server is not ready to handle the request.

Common causes are that a server is down for maintenance or overloaded.
During maintenance, server administrators may temporarily route all traffic to a `503` page, or this may happen automatically during software updates.
In overload cases, some server-side applications will reject requests with a `503` status when resource thresholds like memory, CPU, or connection pool limits are met.
Dropping incoming requests creates backpressure that prevents the server's compute resources from being exhausted, avoiding more severe failures.
If requests from specific clients are being restricted due to {{Glossary("Rate_limit", "rate limiting")}}, the appropriate response is {{HTTPStatus("429", "429 Too Many Requests")}}.

This response should be used for temporary conditions and the {{HTTPHeader("Retry-After")}} HTTP header should contain the estimated time for the recovery of the service, if possible.

A user-friendly page explaining the problem should be sent along with this response.

> [!NOTE]
> Caching-related headers sent with this response require special attention; a `503` indicates a temporary issue and responses shouldn't usually be cached as clients may receive outdated error pages after a fix has been deployed.

## Status

```http
503 Service Unavailable
```

## Examples

### 503 server error response

The following request tries to fetch a webpage, but receives a `503` response.
The response body contains a page describing the server state with a link to a support page for visitors.
An identifier is contained in the response body for illustration of a method that may help server administrators narrow down the root cause of the problem:

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 503 Service Unavailable
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>503 Service Unavailable</title>
</head>
<body>
  <h1>503 Service Unavailable</h1>
  <p>The server was unable to complete your request. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
  <p>Server logs contain details of this error with request ID: ABC-123.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Retry-After")}}
