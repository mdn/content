---
title: accumulate
slug: Web/SVG/Attribute/accumulate
tags:
  - NeedsCompatTable
  - NeedsExample
  - SVG
  - SVG Attribute
spec-urls: https://svgwg.org/specs/animations/#AccumulateAttribute
---
{{SVGRef}}

The **`accumulate`** attribute controls whether or not an animation is cumulative.

It is frequently useful for repeated animations to build upon the previous results, accumulating with each iteration. This attribute said to the animation if the value is added to the previous animated attribute's value on each iteration.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateColor")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>none</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `sum`
  - : Specifies that each repeat iteration after the first builds upon the last value of the previous iteration.
- `none`
  - : Specifies that repeat iterations are not cumulative.

This attribute is ignored if the target attribute value does not support addition, or if the animation element does not repeat.

This attribute will be ignored if the animation function is specified with only the {{SVGAttr("to")}} attribute.

## Specifications

{{Specifications}}

## See also

- [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
