---
title: tableValues
slug: Web/SVG/Attribute/tableValues
page-type: svg-attribute
spec-urls: https://drafts.fxtf.org/filter-effects/#element-attrdef-fecomponenttransfer-tablevalues
---

{{SVGRef}}

The **`tableValues`** attribute defines a list of numbers defining a lookup table of values for a color component transfer function.

You can use this attribute with the following SVG elements:

- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}

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
      <feFuncR type="table" tableValues="0 1" />
      <feFuncG type="table" tableValues="0 1" />
      <feFuncB type="table" tableValues="0 1" />
    </feComponentTransfer>
  </filter>
  <filter id="componentTransfer2" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="1 0" />
      <feFuncG type="table" tableValues="1 0" />
      <feFuncB type="table" tableValues="1 0" />
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

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#list-of-ts"
            >&#x3C;list-of-numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Empty list resulting in identity transfer</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<list-of-numbers>`

  - : This value holds a comma- and/or space-separated list of {{cssxref("number")}}s, which define a lookup table for the color component transfer function. Each number can be between `0` and `1`.

    An empty list results in an identity transfer function.

## Specifications

{{Specifications}}
