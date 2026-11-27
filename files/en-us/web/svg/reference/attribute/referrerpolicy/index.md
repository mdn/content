---
title: referrerpolicy
slug: Web/SVG/Reference/Attribute/referrerpolicy
page-type: svg-attribute
browser-compat:
  - svg.elements.a.referrerpolicy
  - svg.elements.feImage.referrerpolicy
  - svg.elements.image.referrerpolicy
  - svg.elements.script.referrerpolicy
sidebar: svgref
---

The **`referrerpolicy`** attribute sets the [referrer policy](/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy) for a request made by an SVG element.
The policy controls how much referrer information is sent in the {{HTTPHeader("Referer")}} header with the request.
This works the same way as the `referrerpolicy` attribute for the HTML {{HTMLElement("a", "", "#referrerpolicy")}}, {{HTMLElement("img", "", "#referrerpolicy")}}, and {{HTMLElement("script", "", "#referrerpolicy")}} elements.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
  - : Sets the policy used when following the link.
- {{SVGElement("feImage")}} {{non-standard_inline}}
  - : Sets the policy used when fetching the image referenced by the element's {{SVGAttr("href")}} attribute.
- {{SVGElement("image")}}
  - : Sets the policy used when fetching the image referenced by the element's {{SVGAttr("href")}} attribute.
- {{SVGElement("script")}}
  - : Sets the policy used when fetching the script referenced by the element's {{SVGAttr("href")}} attribute.

If the attribute isn't set, or its value isn't one of the values listed below, the request uses the document's referrer policy.
A document's policy can be set using the {{HTTPHeader("Referrer-Policy")}} HTTP header.

## Examples

### Setting the referrer policy of a link

This example sets the `referrerpolicy` of an `<a>` element to `origin`.
When the link is followed, the `Referer` header only contains the origin of the document, such as `https://example.com/`.

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com" referrerpolicy="origin">
    <text x="5" y="15">Website</text>
  </a>
</svg>
```

{{EmbedLiveSample("Setting the referrer policy of a link", "300", "100")}}

### Setting the referrer policy of an image

This example sets the `referrerpolicy` of an `<image>` element to `no-referrer`.
The image is fetched without a `Referer` header.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <image
    href="https://example.com/logo.png"
    width="200"
    height="200"
    referrerpolicy="no-referrer" />
</svg>
```

### Setting the referrer policy of a script

This example sets the `referrerpolicy` of a `<script>` element to `same-origin`.
The full referrer is sent if the script is on the same origin as the document, but no referrer is sent if the script is on another origin.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <script href="https://example.com/script.js" referrerpolicy="same-origin" />
</svg>
```

### Setting the referrer policy of a filter image

This example sets the `referrerpolicy` of an `<feImage>` element in a filter to `strict-origin`.
The origin of the document is sent as the referrer, unless the image is fetched over HTTP from an HTTPS document, in which case no referrer is sent.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="texture">
    <feImage
      href="https://example.com/texture.png"
      referrerpolicy="strict-origin" />
  </filter>
  <rect width="200" height="200" filter="url(#texture)" />
</svg>
```

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
      <td><em>none</em></td>
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
  - : Sends the full URL when performing a {{glossary("Same-origin_policy", "same-origin")}} request, but only sends the {{glossary("origin")}} for cross-origin requests, and sends no header to a less secure destination (HTTPS→HTTP).
- `same-origin`
  - : Only sends the full URL to a {{glossary("Same-origin_policy", "same-origin")}} request, but sends no header for cross-origin requests.
- `strict-origin`
  - : Sends only the {{glossary("origin")}} when the protocol security level stays the same, but sends no header to a less secure destination.
- `strict-origin-when-cross-origin`
  - : Sends the full URL when performing a {{glossary("Same-origin_policy", "same-origin")}} request, but only sends the {{glossary("origin")}} for cross-origin requests, and sends no {{HTTPHeader("Referer")}} header to a less secure destination.
    This is the policy used if neither the element nor the document sets one.
- `unsafe-url`
  - : Sends the full URL when performing any task regardless of security.
    > [!WARNING]
    > This policy will potentially leak private information when navigating from HTTPS to HTTP.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAElement.referrerPolicy")}}
- {{domxref("SVGFEImageElement.referrerPolicy")}}
- {{domxref("SVGImageElement.referrerPolicy")}}
- {{domxref("SVGScriptElement.referrerPolicy")}}
- {{HTTPHeader("Referrer-Policy")}} header
- {{SVGAttr("href")}}
