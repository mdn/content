---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
tags:
  - HTTP
  - HTTP Header
  - Privacy
  - Reference
  - Referrer-Policy
  - Response
  - Response Header
  - referrer
browser-compat: http.headers.Referrer-Policy
---
{{HTTPSidebar}}

The **`Referrer-Policy`** {{glossary("HTTP header")}} controls how much [referrer information](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (sent via the {{HTTPHeader("Referer")}} header) should be included with requests. Aside from the HTTP header, you can [set this policy in HTML](#integration_with_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

> **Note:** The original header name {{HTTPHeader("Referer")}} is a misspelling of the word "referrer". The `Referrer-Policy` header does not share this misspelling.

## Directives

- `no-referrer`
  - : The {{HTTPHeader("Referer")}} header will be omitted entirely. No referrer information is sent along with requests.
- `no-referrer-when-downgrade`
  - : Send the {{glossary("origin")}}, path, and querystring in {{HTTPHeader("Referer")}} when the protocol security level stays the same or improves (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Don't send the {{HTTPHeader("Referer")}} header for requests to less secure destinations (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Send the {{glossary("origin")}} (only) in the {{HTTPHeader("Referer")}} header.
    For example, a document at `https://example.com/page.html` will send the referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Send the {{glossary("origin")}}, path, and query string when performing a {{glossary("Same-origin_policy", "same-origin")}} request to the same protocol level. Send origin (only) for cross origin requests and requests to less secure destinations.
- `same-origin`
  - : Send the {{glossary("origin")}}, path, and query string for {{glossary("Same-origin_policy", "same-origin")}} requests. Don't send the {{HTTPHeader("Referer")}} header for cross-origin requests.
- `strict-origin`
  - : Send the origin (only) when the protocol security level stays the same (HTTPS→HTTPS). Don't send the {{HTTPHeader("Referer")}} header to less secure destinations (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (default)

  - : Send the origin, path, and querystring when performing a same-origin request. For cross-origin requests send the origin (only) when the protocol security level stays same (HTTPS→HTTPS). Don't send the {{HTTPHeader("Referer")}} header to less secure destinations (HTTPS→HTTP).

    > **Note:** This is the default policy if no policy is specified, or if the provided value is invalid (see spec revision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Previously the default was `no-referrer-when-downgrade`.

- `unsafe-url`

  - : Send the origin, path, and query string when performing any request, regardless of security.

    > **Warning:** This policy will leak potentially-private information from HTTPS resource URLs to insecure origins. Carefully consider the impact of this setting.

## Integration with HTML

You can also set referrer policies inside HTML. For example, you can set the referrer policy for the entire document with a {{HTMLElement("meta")}} element with a [name](/en-US/docs/Web/HTML/Element/meta#attr-name) of `referrer`:

```html
<meta name="referrer" content="origin">
```

Or set it for individual requests with the `referrerpolicy` attribute on {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, or {{HTMLElement("link")}} elements:

```html
<a href="http://example.com" referrerpolicy="origin">
```

Alternatively, a `noreferrer` [link relation](/en-US/docs/Web/HTML/Link_types) on an `a`, `area`, or `link` element can be set:

```html
<a href="http://example.com" rel="noreferrer">
```

> **Warning:** As seen above, the `noreferrer` link relation is written without a dash — `noreferrer`. When the referrer policy is specified for the entire document with a {{HTMLElement("meta")}} element, it's written _with_ a dash: `<meta name="referrer" content="no-referrer">`.

## Integration with CSS

CSS can fetch resources referenced from stylesheets. These resources follow a referrer policy as well:

- External CSS stylesheets use the default policy (`strict-origin-when-cross-origin`), unless it's overwritten via a `Referrer-Policy` HTTP header on the CSS stylesheet's response.
- For {{HTMLElement("style")}} elements or [`style` attributes](/en-US/docs/Web/API/HTMLElement/style), the owner document's referrer policy is used.

## Examples

### `no-referrer`

| From document            | Navigation to | Referrer used   |
| ------------------------ | ------------- | --------------- |
| https://example.com/page | _anywhere_    | _(no referrer)_ |

### `no-referrer-when-downgrade`

| From document            | Navigation to                 | Referrer used            |
| ------------------------ | ----------------------------- | ------------------------ |
| https://example.com/page | https://example.com/otherpage | https://example.com/page |
| https://example.com/page | https://mozilla.org           | https://example.com/page |
| https://example.com/page | **http**://example.com        | _(no referrer)_          |

### `origin`

| From document            | Navigation to | Referrer used        |
| ------------------------ | ------------- | -------------------- |
| https://example.com/page | _anywhere_    | https://example.com/ |

### `origin-when-cross-origin`

| From document            | Navigation to                 | Referrer used            |
| ------------------------ | ----------------------------- | ------------------------ |
| https://example.com/page | https://example.com/otherpage | https://example.com/page |
| https://example.com/page | https://mozilla.org           | https://example.com/     |
| https://example.com/page | **http**://example.com/page   | https://example.com/     |

### `same-origin`

| From document            | Navigation to                 | Referrer used            |
| ------------------------ | ----------------------------- | ------------------------ |
| https://example.com/page | https://example.com/otherpage | https://example.com/page |
| https://example.com/page | https://mozilla.org           | _(no referrer)_          |

### `strict-origin`

| From document               | Navigation to          | Referrer used        |
| --------------------------- | ---------------------- | -------------------- |
| https://example.com/page    | https://mozilla.org    | https://example.com/ |
| https://example.com/page    | **http**://example.com | _(no referrer)_      |
| **http**://example.com/page | _anywhere_             | http://example.com/  |

### `strict-origin-when-cross-origin`

| From document            | Navigation to                 | Referrer used            |
| ------------------------ | ----------------------------- | ------------------------ |
| https://example.com/page | https://example.com/otherpage | https://example.com/page |
| https://example.com/page | https://mozilla.org           | https://example.com/     |
| https://example.com/page | **http**://example.com        | _(no referrer)_          |

### `unsafe-url`

| From document                  | Navigation to | Referrer used                  |
| ------------------------------ | ------------- | ------------------------------ |
| https://example.com/page?q=123 | _anywhere_    | https://example.com/page?q=123 |

### Specifying a fallback policy

If you want to specify a fallback policy in any case the desired policy hasn't got wide enough browser support, use a comma-separated list with the desired policy specified last:

```
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In the above scenario, `no-referrer` will only be used if `strict-origin-when-cross-origin` is not supported by the browser.

> **Note:** Specifying multiple values is only supported in the `Referrer-Policy` HTTP header, and not in the `referrerpolicy` attribute.

## Browser-specific preferences/settings

### Firefox preferences

Firefox preferences can be used to configure the _default_ referrer policy. The preference names are version specific:

- Firefox version 59 and later: `network.http.referer.defaultPolicy` (and `network.http.referer.defaultPolicy.pbmode` for private networks)
- Firefox versions 53 to 58: `network.http.referer.userControlPolicy`

All of these settings take the same set of values: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web security > Referer header: privacy and security concerns](/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- {{interwiki("wikipedia", "HTTP_referer", "HTTP referer on Wikipedia")}}
- When using [Fetch](/en-US/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- The obsolete {{HTTPHeader("Content-Security-Policy")}}'s {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}} {{deprecated_inline}} directive.
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
