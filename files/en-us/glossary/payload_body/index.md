---
title: Payload body
slug: Glossary/Payload_body
page-type: glossary-definition
---

{{GlossarySidebar}}

The HTTP message **payload body** is the _information_ ("payload") part of the data that is sent in the HTTP Message Body (if any), prior to {{HTTPHeader("Transfer-Encoding","transfer encoding")}} being applied. If transfer encoding is not used, the _payload body_ and _message body_ are the same!

For example, in this response the message body contains only the payload body: "Mozilla Developer Network":

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

By contrast, the below response uses _transfer encoding_ to encode the payload body into chunks. The payload body (information) sent is still "Mozilla Developer Network", but the message body includes additional data to separate the chunks:

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

For more information see [RFC 7230, section 3.3: Message Body](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3) and [RFC 7230, section 3.3.1: Transfer-Encoding](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.1).
