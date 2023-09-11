---
title: CORS-safelisted request header
slug: Glossary/CORS-safelisted_request_header
page-type: glossary-definition
---

{{GlossarySidebar}}

A [CORS-safelisted request header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) is one of the following [HTTP headers](/en-US/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}},
- {{HTTPHeader("Accept-Language")}},
- {{HTTPHeader("Content-Language")}},
- {{HTTPHeader("Content-Type")}},
- {{HTTPHeader("Range")}}.

When containing only these headers (and values that meet the additional requirements laid out below), a request doesn't need to send a {{glossary("preflight request")}} in the context of [CORS](/en-US/docs/Glossary/CORS).

You can safelist more headers using the {{HTTPHeader("Access-Control-Allow-Headers")}} header and also list the above headers there to circumvent the following additional restrictions.

## Additional restrictions

CORS-safelisted headers must also fulfill the following requirements in order to be a CORS-safelisted request header:

- {{HTTPHeader("Accept-Language")}} and {{HTTPHeader("Content-Language")}} can only have values consisting of `0-9`, `A-Z`, `a-z`, space or `*,-.;=`.
- {{HTTPHeader("Accept")}} and {{HTTPHeader("Content-Type")}} can't contain a _CORS-unsafe request header byte_: `0x00-0x1F` (except for `0x09 (HT)`, which is allowed), `"():<>?@[\]{}`, and `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} needs to have a MIME type of its parsed value (ignoring parameters) of either `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`.
- {{HTTPHeader("Range")}} needs to have a value of a single byte range in the form of `bytes=[0-9]+-[0-9]*`.
  See the {{HTTPHeader("Range")}} header documentation for more details.
- For any header: the value's length can't be greater than 128.

## See also

- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Request header")}}
