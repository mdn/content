---
title: "SVGAElement: origin property"
short-title: origin
slug: Web/API/SVGAElement/origin
page-type: web-api-instance-property
browser-compat: api.SVGAElement.origin
---

{{APIRef("SVG")}}

The **`origin`** read-only property of the {{domxref("SVGAElement")}} interface returns a string containing the {{glossary("origin")}} of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}: usually its scheme, domain, and port.

The exact structure varies depending on the type of URL:

- For URLs using the `ftp:`, `http:`, `https:`, `ws:`, and `wss:` schemes, the {{domxref("SVGAElement.protocol", "protocol")}} followed by `//`, followed by the {{domxref("SVGAElement.host", "host")}}. Same as `host`, the {{domxref("SVGAElement.port", "port")}} is only included if it's not the default for the protocol.
- For URLs using the `file:` scheme, the value is browser dependent.
- For URLs using the `blob:` scheme, the origin of the URL following `blob:`, but only if that URL uses the `http:`, `https:`, or `file:` scheme. For example, `blob:https://mozilla.org` will have `https://mozilla.org`.

For all other cases, the string `"null"` is returned.

See {{domxref("URL.origin")}} for more information.

## Value

A string.

## Examples

### Getting the origin of an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.origin); // "https://example.com"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.origin")}}
