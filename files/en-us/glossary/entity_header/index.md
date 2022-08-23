---
title: Entity header
slug: Glossary/Entity_header
tags:
  - Glossary
  - WebMechanics
---
> **Warning:** The current HTTP/1.1 specification no longer refers to entities, entity headers or entity-body. Some of the fields are now referred to as {{glossary("Representation header")}} fields.

An entity header is an {{glossary("HTTP_header", "HTTP header")}} that describes the payload of an HTTP message (i.e. metadata about the message body). Entity headers include: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, etc. Entity headers may be present in both HTTP request and response messages.

In the following example, {{HTTPHeader("Content-Length")}} is an entity header, while {{HTTPHeader("Host")}} and {{HTTPHeader("User-Agent")}} are requests headers:

```http
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## See also

- {{Glossary("Representation header")}}
