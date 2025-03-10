---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.504
---

{{HTTPSidebar}}

The HTTP **`504 Gateway Timeout`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code indicates that the server, while acting as a gateway or {{Glossary("Proxy_server", "proxy")}}, did not get a response in time from the upstream server in order to complete the request.
This is similar to a {{HTTPStatus("502", "502 Bad Gateway")}}, except that in a `504` status, the proxy or gateway did not receive any HTTP response from the origin within a certain time.

There are many causes of `504` errors, and fixing such problems likely requires investigation and debugging by server administrators, or the site may work again at a later time.
Exceptions are client networking errors, particularly if the service works for other visitors, and if clients use VPNs or other custom networking setups.
In such cases, clients should check network settings, firewall setup, proxy settings, DNS configuration, etc.

## Status

```http
504 Gateway Timeout
```

## Examples

### 504 gateway timeout response

The following request tries to fetch a webpage, but receives a `504` response in return.
The response body contains a page describing the server state with a link to a support page for visitors.

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 504 Gateway Timeout
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>504 Gateway Timeout</title>
</head>
<body>
  <h1>Gateway timeout</h1>
  <p>The server did not respond in time. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("502", "502 Bad Gateway")}}
