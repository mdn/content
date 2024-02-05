---
title: targetY
slug: Web/SVG/Attribute/targetY
page-type: svg-attribute
browser-compat: svg.elements.feConvolveMatrix.targetY
---

{{SVGRef}}

The **`targetY`** attribute determines the positioning in vertical direction of the convolution matrix relative to a given target pixel in the input image. The topmost row of the matrix is row number zero. The value must be such that: `0` <= `targetY` < {{SVGAttr("order")}} `Y`.

You can use this attribute with the following SVG elements:

- {{SVGElement("feConvolveMatrix")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>floor({{SVGAttr("order")}}Y / 2)</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : This value indicates the positioning in vertical direction of the convolution matrix relative to a given target pixel in the input image.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("targetX")}}
