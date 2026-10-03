---
title: ping
slug: Web/SVG/Reference/Attribute/ping
page-type: svg-attribute
browser-compat: svg.elements.a.ping
sidebar: svgref
---

The **`ping`** attribute specifies a space-separated list of URLs to which `POST` requests with the body `PING` will be sent by the browser when the link is followed. You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}

## Example

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a
    href="https://example.com"
    ping="https://example.com/ping https://example.net/log">
    <text x="5" y="15">Example</text>
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
- {{domxref("SVGAElement.ping")}}
