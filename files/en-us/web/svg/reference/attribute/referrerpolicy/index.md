---
title: referrerPolicy
slug: Web/SVG/Reference/Attribute/referrerPolicy
page-type: svg-attribute
browser-compat: svg.elements.a.referrerpolicy
sidebar: svgref
---

The **`referrerPolicy`** attribute indicates which referrer information to send when fetching resources or navigating using an SVG element. You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>no-referrer</code> | <code>no-referrer-when-downgrade</code> |
        <code>origin</code> | <code>origin-when-cross-origin</code> |
        <code>same-origin</code> | <code>strict-origin</code> |
        <code>strict-origin-when-cross-origin</code> | <code>unsafe-url</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>strict-origin-when-cross-origin</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `no-referrer`
  - : The {{HTTPHeader("Referer")}} header will not be sent.
- `no-referrer-when-downgrade`
  - : Sends the full URL ({{glossary("origin")}}, path, and query string) when the protocol security level is the same or better (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS), but sends no header to a less secure destination (HTTPS→HTTP).
- `origin`
  - : The {{HTTPHeader("Referer")}} header will only send the {{glossary("origin")}} of the URL. For example, a document at `https://example.com/page.html` will send `https://example.com/` as the referrer.
- `origin-when-cross-origin`
  - : Sends the full URL when performing a {{glossary("Same-origin_policy", "same-origin")}} request, but only sends the {{glossary("origin")}} for cross-origin requests, and sends no header to a less secure destination (HTTPS → HTTP).
- `same-origin`
  - : Only sends the full URL to a {{glossary("Same-origin_policy", "same-origin")}} request, but sends no header for cross-origin requests.
- `strict-origin`
  - : Sends only the {{glossary("origin")}} when the protocol security level stays the same, but sends no header to a less secure destination.
- `strict-origin-when-cross-origin`
  - : Default value. Sends the full URL when performing {{glossary("Same-origin_policy", "same-origin")}} request, but only sends the {{glossary("origin")}} for cross-origin requests, and sends no {{HTTPHeader("Referer")}} header to a less secure destination.
- `unsafe-url`
  - : Sends the full URL when performing any task regardless of security.
    > [!WARNING]
    > This policy will potentially leak private information when navigating from HTTPS to HTTP.

## Example

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com" referrerpolicy="origin">
    <text x="5" y="15">Website</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("href")}}
- {{HTTPHeader("Referrer-Policy")}} header
