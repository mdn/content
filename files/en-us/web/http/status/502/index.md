---
title: 502 Bad Gateway
slug: Web/HTTP/Status/502
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.502
---

{{HTTPSidebar}}

The HTTP **`502 Bad Gateway`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code indicates that a server was acting as a gateway or {{Glossary("Proxy_server", "proxy")}} and that it received an invalid response from the upstream server.

This response is similar to a {{HTTPStatus("500", "500 Internal Server Error")}} response in the sense that it is a generic "catch-call" for server errors.
The difference is that it is specific to the point in the request chain that the error has occurred.
If the origin server sends a valid HTTP error response to the gateway, the response should be passed on to the client instead of a `502` to make the failure reason transparent.
If the proxy or gateway did not receive any HTTP response from the origin, it instead sends a {{HTTPStatus("504", "504 Gateway Timeout")}} to the client.

There are many causes of `502` errors, and fixing such problems probably requires investigation by server owners or administrators.
Exceptions are client networking errors, particularly if the service works for other visitors, and if clients use VPNs or other custom networking setups.
In such cases, clients should check network settings, firewall setup, proxy settings, DNS configuration, etc.

## Status

```http
502 Bad Gateway
```

## Examples

### 502 gateway error response

The following request tries to fetch a webpage, but receives a `502` response in return.
The response body contains a page describing the server state with a link to a support page for visitors.

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 502 Bad Gateway
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>502 Bad Gateway</title>
</head>
<body>
  <h1>Bad Gateway</h1>
  <p>The server was unable to complete your request. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("504", "504 Gateway Timeout")}}
