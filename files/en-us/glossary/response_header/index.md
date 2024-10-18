---
title: Response header
slug: Glossary/Response_header
page-type: glossary-definition
---

{{GlossarySidebar}}

A **response header** is an {{glossary("HTTP header")}} that can be used in an HTTP response and that doesn't relate to the content of the message. Response headers, like {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} or {{HTTPHeader("Server")}} are used to give a more detailed context of the response.

Not all headers appearing in a response are categorized as _response headers_ by the specification. For example, the {{HTTPHeader("Content-Type")}} header is a {{glossary("representation header")}} indicating the original type of data in the body of the response message (prior to the encoding in the {{HTTPHeader("Content-Encoding")}} representation header being applied). However, "conversationally" all headers are usually referred to as response headers in a response message.

The following shows a few response and representation headers after a {{HTTPMethod("GET")}} request.

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: my-key=my value; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## See also

- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- Related glossary terms:
  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP header")}}
  - {{Glossary("Request header")}}
