---
title: HTTP Content
slug: Glossary/HTTP_Content
page-type: glossary-definition
---

{{GlossarySidebar}}

In HTTP messages, the **content** describes the 'information' conveyed in the message body (which follows the header section), after any message framing from HTTP/1.1 chunked transfer encoding has been removed.
This was referred to as a "payload" in HTTP/1.1, but message "content" distinguishes from frame payloads in HTTP/2 and HTTP/3 where the data in a single frame could be header data, body data, or other control information.

The purpose of message content in HTTP requests and responses depends on the request method and response status code.
For example, in a {{HTTPMethod("PUT")}} request, the content represents the desired state of the resource, but in a {{HTTPMethod("POST")}} request, it is information to be processed.
A {{HTTPStatus("200", "200 OK")}} response to a {{HTTPMethod("GET")}} request shows the current state of the resource, while an error response describes the error.

Some responses, like those to {{HTTPMethod("HEAD")}} requests or {{HTTPStatus("204", "204 No Content")}} and {{HTTPStatus("204", "304 Not Modified")}} status codes, do not include content at all.

In the following HTTP/1.1 response, the message body contains the content `Mozilla Developer Network`:

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Mozilla Developer Network
```

In the next HTTP/1.1 response, transfer encoding encodes the data into chunks.
The content is still `Mozilla Developer Network` in the end, but the message body includes different message data to separate the chunks:

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

## See also

- {{HTTPHeader("Content-Location")}}
- {{HTTPStatus("413", "413 Content Too Large")}}
- {{Glossary("Content header")}}
- [RFC 9110, section 6.4: Content](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (obsoletes [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload Semantics)
  - [Changes from RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
