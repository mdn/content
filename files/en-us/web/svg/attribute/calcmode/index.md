---
title: calcMode
slug: Web/SVG/Attribute/calcMode
tags:
  - NeedsCompatTable
  - NeedsExample
  - SVG
  - SVG Attribute
spec-urls: https://svgwg.org/specs/animations/#CalcModeAttribute
---
{{SVGRef}}

The **`calcMode`** attribute specifies the {{Glossary("interpolation")}} mode for the animation.

The default mode is `linear`, however if the attribute does not support linear interpolation (e.g. for strings), the `calcMode` attribute is ignored and discrete interpolation is used.

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
      <td>
        <code>discrete</code> | <code>linear</code> | <code>paced</code> |
        <code>spline</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>linear</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `discrete`
  - : This specifies that the animation function will jump from one value to the next without any interpolation.
- `linear`
  - : Simple linear interpolation between values is used to calculate the animation function. Except for {{SVGElement("animateMotion")}}, this is the default value.
- `paced`
  - : Defines interpolation to produce an even pace of change across the animation. This is only supported for values that define a linear numeric range, and for which some notion of "distance" between points can be calculated (e.g. position, width, height, etc.). If paced is specified, any {{SVGAttr("keyTimes")}} or {{SVGAttr("keySplines")}} will be ignored. For {{SVGElement("animateMotion")}}, this is the default value.
- `spline`
  - : Interpolates from one value in the {{SVGAttr("values")}} list to the next according to a time function defined by a cubic Bézier spline. The points of the spline are defined in the {{SVGAttr("keyTimes")}} attribute, and the control points for each interval are defined in the {{SVGAttr("keySplines")}} attribute.

## Specifications

{{Specifications}}

## See also

- [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
