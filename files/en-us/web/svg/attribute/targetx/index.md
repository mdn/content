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

*   {{SVGElement("feConvolveMatrix")}}

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

*   `<integer>`
    *   : This value indicates the positioning in horizontal direction of the convolution matrix relative to a given target pixel in the input image.

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
        {{SpecName("Filters 1.0", "#element-attrdef-feconvolvematrix-targetx", "targetX")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feConvolveMatrixElementTargetXAttribute", "targetX")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGAttr("targetY")}}
