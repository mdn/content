---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.426
---

{{HTTPSidebar}}

The HTTP **`426 Upgrade Required`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server refused to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.

The server sends an {{HTTPHeader("Upgrade")}} header with this response to indicate the required protocol(s).

## Status

```http
426 Upgrade Required
```

## Examples

### Upgrade required from HTTP/1.1

Given a GET request to a system:

```http
GET /resources HTTP/1.1
Host: example.com
```

The origin server expects that requests must be made in [HTTP/3](/en-US/docs/Glossary/HTTP_3):

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol.
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101", "101 Switching Protocols")}}
