---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
page-type: http-header
browser-compat: http.headers.Accept-Language
---

{{HTTPSidebar}}

The HTTP **`Accept-Language`** {{Glossary("request header")}} indicates the natural language and locale that the client prefers.
The server uses [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) to select one of the proposals and informs the client of the choice with the {{HTTPHeader("Content-Language")}} response header.
Browsers set required values for this header according to their active user interface language.
Users can also configure additional preferred languages through browser settings.

The `Accept-Language` header generally lists the same locales as the {{domxref("navigator.languages")}} property, with decreasing `q` values ([quality values](/en-US/docs/Glossary/Quality_values)). Some browsers, like Chrome and Safari, add language-only fallback tags in `Accept-Language`. For example, `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7` when `navigator.languages` is `["en-US", "zh-CN"]`. For privacy purposes (reducing {{Glossary("fingerprinting")}}), both `Accept-Language` and `navigator.languages` may not include the full list of user preferences. For example, in Safari (always) and Chrome's incognito mode, only one language is listed.

This header serves as a hint when the server cannot determine the target content language otherwise (for example, use a specific URL that depends on an explicit user decision).
The server should never override an explicit user language choice. The content of `Accept-Language` is often out of a user's control (when traveling, for instance).
A user may also want to visit a page in a language different from the user interface language.

The server may send back a {{HTTPStatus("406", "406 Not Acceptable")}} error code when unable to serve content in a matching language, but this is rarely implemented.
Servers often ignore the `Accept-Language` header in such cases and send a successful response with the most appropriate resource instead for a better user experience.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        Yes*
      </td>
    </tr>
  </tbody>
</table>

\* Values can only be `0-9`, `A-Z`, `a-z`, space, or the characters `*,-.;=`.

## Syntax

```http
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the quality value syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Directives

- `<language>`
  - : A language tag (which is sometimes referred to as a "locale identifier").
    This consists of a 2-3 letter base language tag that indicates a language, optionally followed by additional subtags separated by `-`.
    The most common extra information is the country or region variant (like `en-US` or `fr-CA`) or the type of alphabet to use (like `sr-Latn`).
    Other variants, like the type of orthography (`de-DE-1996`), are usually not used in the context of this header.
- `*` (wildcard)
  - : Any language not matched by any other language present in the `Accept-Language` field.
- `;q=` (q-factor weighting)
  - : Any value placed in an order of preference expressed using a relative {{Glossary("Quality values", "quality value")}} called _weight_.
    The quality value defaults to `1`.

## Examples

### Using Accept-Language headers

The following request has a preference for German using the `de` base language:

```http
Accept-Language: de
```

### Using quality values in Accept-Language

The following request indicates a stronger preference for Danish, but accepts British English and other types of English at a lower priority:

```http
Accept-Language: da, en-gb;q=0.8, en;q=0.7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- A header with the result of the content negotiation: {{HTTPHeader("Content-Language")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
