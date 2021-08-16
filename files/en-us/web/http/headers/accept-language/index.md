---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
tags:
  - Accept-Language
  - Content Negotiation
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.Accept-Language
---
{{HTTPSidebar}}

The **`Accept-Language`** request HTTP header advertises which
languages the client is able to understand, and which locale variant is preferred. (By
languages, we mean natural languages, such as English, and not programming languages.)
Using [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation), the
server then selects one of the proposals, uses it and informs the client of its choice
with the {{HTTPHeader("Content-Language")}} response header. Browsers set adequate
values for this header according to their user interface language and even if a user can
change it, this happens rarely (and is frowned upon as it leads to fingerprinting).

This header is a hint to be used when the server has no way of determining the language
via another way, like a specific URL, that is controlled by an explicit user decision.
It is recommended that the server never overrides an explicit decision. The content of
the `Accept-Language` is often out of the control of the user (like when
traveling and using an Internet Cafe in a different country); the user may also want to
visit a page in another language than the locale of their user interface.

If the server cannot serve any matching language, it can theoretically send back a
{{HTTPStatus("406")}} (Not Acceptable) error code. But, for a better user experience,
this is rarely done and more common way is to ignore the `Accept-Language`
header in this case.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        yes, with the additional restriction that values can only be
        <code>0-9</code>, <code>A-Z</code>, <code>a-z</code>, space or
        <code>*,-.;=</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```html
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Directives

- `<language>`
  - : A language tag (which is sometimes referred to as a "locale identifier"). This
    consists of a 2-3 letter base language tag representing the language, optionally
    followed by additional subtags separated by `'-'`. The most common extra
    information is the country or region variant (like `'en-US'` or
    `'fr-CA'`) or the type of alphabet to use (like `'sr-Latn'`).
    Other variants like the type of orthography (`'de-DE-1996'`) are usually
    not used in the context of this header.
- `*`
  - : Any language; `'*'` is used as a wildcard.
- `;q=` (q-factor weighting)
  - : Any value placed in an order of preference expressed using a relative
    {{glossary("Quality values", "quality value")}} called _weight_.

## Examples

    Accept-Language: de

    Accept-Language: de-CH

    Accept-Language: en-US,en;q=0.5

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- Header with the result of the content negotiation:
  {{HTTPHeader("Content-Language")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
