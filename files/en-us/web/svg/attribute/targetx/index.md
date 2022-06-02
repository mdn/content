---
title: targetX
slug: Web/SVG/Attribute/targetX
tags:
  - Filters
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feConvolveMatrix.targetX
---
{{SVGRef}}

The **`targetX`** attribute determines the positioning in horizontal direction of the convolution matrix relative to a given target pixel in the input image. The leftmost column of the matrix is column number zero. The value must be such that: `0` <= `targetX` < {{SVGAttr("order")}}`X`.

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
      <td><code>floor({{SVGAttr("order")}}X / 2)</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : This value indicates the positioning in horizontal direction of the convolution matrix relative to a given target pixel in the input image.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("targetY")}}
