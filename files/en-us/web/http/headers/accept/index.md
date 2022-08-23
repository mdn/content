---
title: Accept
slug: Web/HTTP/Headers/Accept
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.Accept
---
{{HTTPSidebar}}

The **`Accept`** request HTTP header indicates which content types, expressed as [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), the client is able to understand. The server uses [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) to select one of the proposals and informs the client of the choice with the {{HTTPHeader("Content-Type")}} response header. Browsers set required values for this header based on the context of the request. For example, a browser uses different values in a request when fetching a CSS stylesheet, image, video, or a script.

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
        yes, with the additional restriction that values can't contain a
        <em>CORS-unsafe request header byte</em>: 0x00-0x1F (except 0x09 (HT)),
        <code>"():&#x3C;>?@[\]{}</code>, and 0x7F (DEL).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Directives

- `<MIME_type>/<MIME_subtype>`
  - : A single, precise [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), like `text/html`.
- `<MIME_type>/*`
  - : A MIME type, but without a subtype. `image/*` corresponds to `image/png`, `image/svg`, `image/gif`, and other image types.
- `*/*`
  - : Any MIME type
- `;q=` (q-factor weighting)
  - : A value used is placed in an order of preference expressed using a relative [quality value](/en-US/docs/Glossary/Quality_values) called the _weight_.

## Examples

```http
Accept: text/html

Accept: image/*

// General default
Accept: */*

// Default for navigation requests
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- [List of default Accept values](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- A header with the result of the content negotiation: {{HTTPHeader("Content-Type")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
