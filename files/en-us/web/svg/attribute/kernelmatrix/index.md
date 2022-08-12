---
title: kernelMatrix
slug: Web/SVG/Attribute/kernelMatrix
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feConvolveMatrix.kernelMatrix
---
{{SVGRef}}

The **`kernelMatrix`** attribute defines the list of numbers that make up the kernel matrix for the {{SVGElement("feConvolveMatrix")}} element.

Values are separated by space characters and/or a comma. The number of entries in the list must equal to `<orderX>` by `<orderY>` as defined in the {{SVGAttr("order")}} attribute.

You can use this attribute with the following SVG elements:

- {{SVGElement("feConvolveMatrix")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="convolveMatrix1" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="1 1 0 0 0 0 0 0 -1"/>
  </filter>
  <filter id="convolveMatrix2" x="0" y="0" width="100%" height="100%">
    <feConvolveMatrix kernelMatrix="-1 0 0 0 0 0 0 0 1"/>
  </filter>

  <image xlink:href="mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#convolveMatrix1);"/>
  <image xlink:href="mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#convolveMatrix2); transform:translateX(220px);"/>
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#List-of-Ts"
            >&#x3C;list of numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<list of numbers>`
  - : The list of {{cssxref("number")}}s that make up the kernel matrix for the convolution. Values are separated by space characters and/or a comma. The number of entries in the list must equal `<orderX>` times `<orderY>`.

    If the result of `orderX` \* `orderY` is not equal to the number of entries in the value list, the filter primitive acts as a pass through filter.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
