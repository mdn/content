---
title: Accept
slug: Web/HTTP/Headers/Accept
page-type: http-header
browser-compat: http.headers.Accept
---

{{HTTPSidebar}}

The HTTP **`Accept`** request header indicates which content types, expressed as [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), the client is able to understand. The server uses [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) to select one of the proposals and informs the client of the choice with the {{HTTPHeader("Content-Type")}} response header. Browsers set required values for this header based on the context of the request. For example, a browser uses different values in a request when fetching a CSS stylesheet, image, video, or a script.

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

\* Values can't contain a [CORS-unsafe request header byte](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte): `"():<>?@[\]{},`, Delete `0x7F`, and control characters `0x00` to `0x19` except for Tab `0x09`.

## Syntax

```http
Accept: <media-type>/<MIME_subtype>
Accept: <media-type>/*
Accept: */*

// Multiple types, weighted with the quality value syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Directives

- `<media-type>/<subtype>`
  - : A single, precise [media type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), like `text/html`.
- `<media-type>/*`
  - : A media type, but without a subtype.
    `image/*` corresponds to `image/png`, `image/svg`, `image/gif`, and other image types.
- `*/*`
  - : Any media type.
- `;q=` (q-factor weighting)
  - : A value used is placed in an order of preference expressed using a relative [quality value](/en-US/docs/Glossary/Quality_values) called the _weight_.

## Examples

### Default accept request headers

HTTP requests made using command line tools such as [curl](https://curl.se/) and [wget](https://www.gnu.org/software/wget/) use `*/*` as the default `Accept` value:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

Browser navigation typically has the following `Accept` request header value:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

After receiving the document, the default `Accept` values in requests for images on the `developer.mozilla.org` example looks like this:

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### Accept values for JSON content

Systems that involve API interaction commonly request `application/json` responses.
Here's an example of a {{HTTPMethod("GET")}} request where the client specifically requests a JSON response:

```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
Accept: application/json
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
