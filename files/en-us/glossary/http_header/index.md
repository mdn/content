---
title: HTTP header
slug: Glossary/HTTP_header
page-type: glossary-definition
---

{{GlossarySidebar}}

An **HTTP header** is a field of an HTTP request or response that passes additional context and metadata about the request or response. For example, a request message can use headers to indicate it's preferred media formats, while a response can use header to indicate the media format of the returned body. Headers are case-insensitive, begin at the start of a line and are immediately followed by a `':'` and a header-dependent value. The value finishes at the next CRLF or at the end of the message.

The HTTP and Fetch specifications refer to a number of header categories, including:

- {{Glossary("Request header")}}: Headers containing more information about the resource to be fetched or about the client itself.
- {{Glossary("Response header")}}: Headers with additional information about the response, like its location or about the server itself (name, version, …).
- {{Glossary("Representation header")}}: metadata about the resource in the message body (e.g. encoding, media type, etc.).
- {{Glossary("Fetch metadata request header")}}: Headers with metadata about the resource in the message body (e.g. encoding, media type, etc.).

A basic request with one header:

```http
GET /example.html HTTP/1.1
Host: example.com
```

Redirects have mandatory headers ({{HTTPHeader("Location")}}):

```http
302 Found
Location: /NewPage.html
```

A typical set of headers:

```http
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```

> **Note:** Older versions of the specification referred to:
>
> - {{Glossary("General header")}}: Headers applying to both requests and responses but with no relation to the data eventually transmitted in the body.
> - {{Glossary("Entity header")}}: Headers containing more information about the body of the entity, like its content length or its MIME-type (this is a superset of what are now referred to as the Representation metadata headers)

## See also

- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- Syntax of [headers](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) in the HTTP specification
- [Glossary](/en-US/docs/Glossary)

  - {{Glossary("HTTP header")}}
  - {{Glossary("Request header")}}
  - {{Glossary("Response header")}}
  - {{Glossary("Representation header")}}
  - {{Glossary("Fetch metadata request header")}}
  - {{Glossary("Forbidden header name")}}
  - {{Glossary("Forbidden response header name")}}
  - {{Glossary("CORS-safelisted request header")}}
  - {{Glossary("CORS-safelisted response header")}}
