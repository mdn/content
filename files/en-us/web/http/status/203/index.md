---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.203
---

{{HTTPSidebar}}

The HTTP **`203 Non-Authoritative Information`** status response code indicates that the request was successful but the enclosed payload has been modified by a _transforming {{Glossary("Proxy server", "proxy")}}_ from that of the origin server's {{HTTPStatus("200")}} (`OK`) response.
It is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses).

The purpose of this status code is to allow transforming proxies to notify clients when changes have been applied to successful responses, since this may impact decisions regarding the content later.
Transformations to messages typically means modifying responses in a way that are presumed to be desirable to the client, such as a malware filter, a format transcoder, or a privacy filter, or other hints to the client about future requests.

The `203` response is similar to the [`214`](/en-US/docs/Web/HTTP/Headers/Warning#warning_codes) `Transformation Applied` value of the deprecated {{HTTPHeader("Warning")}} header, which may be applicable to responses with any status code.

## Status

```http
203 Non-Authoritative Information
```

## Examples

### Filtered message response

The following `GET` request is asking for a comment with an ID `123`:

```http
GET /comments/123 HTTP/1.1
Host: example.com
```

In the case of a proxy filtering a message, a response could look like the following:

```http
HTTP/1.1 203 Non-Authoritative Information
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json
Content-Length: 123

{
  "content": "This is ridiculous!",
}
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
