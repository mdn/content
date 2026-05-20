---
title: offset
slug: Web/SVG/Reference/Attribute/offset
page-type: svg-attribute
browser-compat: svg.elements.feFuncA.offset
---

{{SVGRef}}

The **`offset`** attribute defines an offset value used for color component transfer functions in SVG filter effects.

You can use this attribute with the following SVG elements:

- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}
- {{SVGElement("stop")}}

## Example

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="gamma">
      <feComponentTransfer>
        <feFuncR type="linear" slope="1" offset="0.2" />
      </feComponentTransfer>
    </filter>
  </defs>

  <rect width="200" height="100" fill="red" filter="url(#gamma)" />
</svg>