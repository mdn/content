---
title: intercept
slug: Web/SVG/Attribute/intercept
page-type: svg-attribute
browser-compat: svg.elements.feFuncR
spec-urls: https://drafts.fxtf.org/filter-effects/#element-attrdef-fecomponenttransfer-intercept
---

{{SVGRef}}

The **`intercept`** attribute defines the intercept of the linear function of color component transfers when the {{SVGAttr("type")}} attribute is set to `linear`.

The `linear` function is defined as `slope * color + intercept`, where `color` is the color value, the `intercept` provides a base value for the result, and the [`slope`](/en-US/docs/Web/SVG/Attribute/slope) is a scaling factor.

The `intercept` attribute is supported by children of the {{SVGElement("feComponentTransfer")}} filter primitive and is used with the following SVG component transfer function elements when `type="linear"` is set:

- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : This value indicates the intercept of the linear component transfer functions.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient
      id="gradient"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="200"
      y2="0">
      <stop offset="0" stop-color="#ff0000" />
      <stop offset="0.5" stop-color="#00ff00" />
      <stop offset="1" stop-color="#0000ff" />
    </linearGradient>
  </defs>

  <filter id="componentTransfer1" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="linear" intercept="0" />
      <feFuncG type="linear" intercept="0" />
      <feFuncB type="linear" intercept="0" />
    </feComponentTransfer>
  </filter>
  <filter id="componentTransfer2" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="linear" intercept="0.3" />
      <feFuncG type="linear" intercept="0.1" />
      <feFuncB type="linear" intercept="0.8" />
    </feComponentTransfer>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    style="filter: url(#componentTransfer1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    style="filter: url(#componentTransfer2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
