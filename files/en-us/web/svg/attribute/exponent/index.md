---
title: exponent
slug: Web/SVG/Attribute/exponent
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
spec-urls: https://drafts.fxtf.org/filter-effects/#element-attrdef-fecomponenttransfer-exponent
---
{{SVGRef}}

The **`exponent`** attribute defines the exponent of the gamma function.

You can use this attribute with the following SVG elements:

- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" gradientUnits="userSpaceOnUse"
        x1="0" y1="0" x2="200" y2="0">
      <stop offset="0" stop-color="#ff0000" />
      <stop offset="0.5" stop-color="#00ff00" />
      <stop offset="1" stop-color="#0000ff" />
    </linearGradient>
  </defs>

  <filter id="componentTransfer1" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="gamma" exponent="1"/>
      <feFuncG type="gamma" exponent="1"/>
      <feFuncB type="gamma" exponent="1"/>
    </feComponentTransfer>
  </filter>
  <filter id="componentTransfer2" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="gamma" exponent="5"/>
      <feFuncG type="gamma" exponent="5"/>
      <feFuncB type="gamma" exponent="5"/>
    </feComponentTransfer>
  </filter>

  <rect x="0" y="0" width="200" height="200" fill="url(#gradient)"
      style="filter: url(#componentTransfer1);" />
  <rect x="0" y="0" width="200" height="200" fill="url(#gradient)"
      style="filter: url(#componentTransfer2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : If the {{SVGAttr("type")}} attribute of the component element is set to `gamma`, this value specifies the exponent of the gamma function

## Specifications

{{Specifications}}
