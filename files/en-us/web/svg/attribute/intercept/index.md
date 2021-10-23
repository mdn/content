---
title: intercept
slug: Web/SVG/Attribute/intercept
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`intercept`** attribute defines the intercept of the linear function of color component transfers when the {{SVGAttr("type")}} attribute is set to `linear`.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feFuncA")}}
*   {{SVGElement("feFuncB")}}
*   {{SVGElement("feFuncG")}}
*   {{SVGElement("feFuncR")}}

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
      <feFuncR type="linear" intercept="0"/>
      <feFuncG type="linear" intercept="0"/>
      <feFuncB type="linear" intercept="0"/>
    </feComponentTransfer>
  </filter>
  <filter id="componentTransfer2" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="linear" intercept="0.3"/>
      <feFuncG type="linear" intercept="0.1"/>
      <feFuncB type="linear" intercept="0.8"/>
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
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("Filters 1.0", "#element-attrdef-fecomponenttransfer-intercept", "intercept")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feComponentTransferInterceptAttribute", "intercept")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>
