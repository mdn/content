---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.203
---

{{HTTPSidebar}}

The HTTP **`203 Non-Authoritative Information`** [successful response](/en-US/docs/Web/HTTP/Status#successful_responses) status code indicates that the request was successful, but a _transforming {{Glossary("Proxy server", "proxy")}}_ has modified the headers or enclosed content from the origin server's {{HTTPStatus("200")}} (`OK`) response.

The purpose of this status code is to allow transforming proxies to notify clients when changes have been applied to successful responses, since this may impact decisions regarding the content later.
Transformations to messages can mean modifications of headers to indicate that a resource is from a mirror or a backup, but may also mean modifying content in a way that are presumed to be desirable to the client.
These modifications might include malware filtering, format transcoding, privacy filtering, or other hints to the client about future requests.

The `203` response is similar to the [`214`](/en-US/docs/Web/HTTP/Headers/Warning#warning_codes) `Transformation Applied` value of the deprecated {{HTTPHeader("Warning")}} header, which may be applicable to responses with any status code.

## Status

```http
203 Non-Authoritative Information
```

## Examples

### Receiving a filtered message response

In this example, a user sends a `GET` request for content with ID `123` to `example.com`.

```http
GET /comments/123 HTTP/1.1
Host: example.com
```

A proxy has altered the message based on malware filtering rules for known unsafe attachments.
The response content has been modified, replacing the `attachment_url` value to a link with information about the filtering in place:

```http
HTTP/1.1 203 Non-Authoritative Information
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json
Content-Length: 123

{
  "comment": "Check out my bio!",
  "attachment_url": "https://example.com/attachment-unavailable-faq"
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
