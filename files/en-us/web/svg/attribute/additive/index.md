---
title: additive
slug: Web/SVG/Attribute/additive
page-type: svg-attribute
spec-urls: https://svgwg.org/specs/animations/#AdditiveAttribute
---

{{SVGRef}}

The **`additive`** attribute controls whether or not an animation is additive.

It is frequently useful to define animation as an offset or delta to an attribute's value, rather than as absolute values.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>replace</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- sum
  - : Specifies that the animation will add to the underlying value of the attribute and other lower priority animations.
- replace
  - : Specifies that the animation will override the underlying value of the attribute and other lower priority animations. This is the default, however the behavior is also affected by the animation value attributes {{SVGAttr("by")}} and {{SVGAttr("to")}}, as described in [SMIL Animation: How from, to and by attributes affect additive behavior](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive).

## Specifications

{{Specifications}}

## See also

- [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAttribute)
