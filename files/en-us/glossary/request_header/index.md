---
title: Request header
slug: Glossary/Request_header
tags:
  - Glossary
  - WebMechanics
---
A **request header** is an {{glossary("HTTP header")}} that can be used in an HTTP request to provide information about the request context, so that the server can tailor the response. For example, the {{HTTPHeader("Accept", "Accept-*")}} headers indicate the allowed and preferred formats of the response. Other headers can be used to supply authentication credentials (e.g.  {{HTTPHeader("Authorization")}}), to control caching, or to get information about the user agent or referrer, etc.

Not all headers that can appear in a request are referred to as _request headers_ by the specification. For example, the {{HTTPHeader("Content-Type")}} header is referred to as a {{glossary("representation header")}}.

In addition, [CORS](/en-US/docs/Glossary/CORS) defines a subset of request headers as {{glossary('simple header', 'simple headers')}}, request headers that are always considered authorized and are not explicitly listed in responses to {{glossary("preflight request", "preflight")}} requests.

The HTTP message below shows a few request headers after a {{HTTPMethod("GET")}} request:

```bash
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

## See also

- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- [RFC 7231, section 5: Request header fields](https://datatracker.ietf.org/doc/html/rfc7231#section-5)
