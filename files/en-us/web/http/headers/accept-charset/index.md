---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
page-type: http-header
---

{{HTTPSidebar}}

> **Warning:** Do not use this header. Browsers omit this header and servers should ignore it.

The **`Accept-Charset`** request HTTP header was a header that advertised a client's supported {{glossary("character encoding", "character encodings")}}. It is no longer widely used.

UTF-8 is well-supported and the overwhelmingly preferred choice for character encoding. To [guarantee better privacy through less configuration-based entropy](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), all browsers omit the `Accept-Charset` header.

Today, `Accept-Charset` is most notable for being one of several [forbidden header names](/en-US/docs/Glossary/Forbidden_header_name).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## See also

- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- [Accept-Charset is no more](https://hsivonen.fi/accept-charset/)
- Header with the result of the content negotiation: {{HTTPHeader("Content-Type")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
