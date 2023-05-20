---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.408
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP)
**`408 Request Timeout`** response status code means that the
server would like to shut down this unused connection. It is sent on an idle connection
by some servers, _even without any previous request by the client_.

A server should send the "close" {{HTTPHeader("Connection")}} header field in the
response, since `408` implies that the server has decided to close the
connection rather than continue waiting.

This response is used much more since some browsers, like Chrome, Firefox 27+, and IE9,
use HTTP pre-connection mechanisms to speed up surfing.

> **Note:** some servers merely shut down the connection without sending
> this message.

## Status

```http
408 Request Timeout
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
