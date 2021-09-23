---
title: refY
slug: Web/SVG/Attribute/refY
tags:
  - NeedsBrowserCompatibility
  - NeedsExample
---
{{SVGRef}}

The **`refY`** attribute defines the y coordinate of an element’s reference point.

You can use this attribute with the following SVG elements:

*   {{SVGElement("marker")}}
*   {{SVGElement("symbol")}}

## marker

For {{SVGElement("marker")}}, `refY` defines the y coordinate of the marker’s reference point, which is to be placed exactly at the marker’s position on the shape.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}} | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
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

*   `<length-percentage>`
    *   : Lengths are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.

        Percentage values are interpreted as being a percentage of the {{SVGAttr("viewBox")}} height.
*   `<number>`
    *   : Numbers are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.
*   `top`
    *   : The reference point of the marker is placed at the top edge of the shape.
*   `center`
    *   : The reference point of the marker is placed at the vertical center of the shape.
*   `bottom`
    *   : The reference point of the marker is placed at the bottom edge of the shape.

## symbol

For {{SVGElement("symbol")}}, `refY` defines the y coordinate of the symbol, which is defined by the cumulative effect of the {{SVGAttr("y")}} attribute and any transformations on the {{SVGElement("symbol")}} and its host {{SVGElement("use")}} element.

Unlike other positioning attributes, `refY` is interpreted as being in the coordinate system of the symbol contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes. If the attribute is not specified, no vertical adjustment is made, and the top side of the symbol’s rectangular viewport region (regardless of the `viewBox` coordinate) is positioned at the y coordinate.

> **Note:** For backwards compatibility, the behavior when `refY` is not specified on a `<symbol>` element is different from when it is specified with a value of `0`, and therefore different from the behavior when an equivalent attribute is not specified on a {{SVGElement("marker")}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("length")}} | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `<length-percentage>`
    *   : Lengths are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.

        Percentage values are interpreted as being a percentage of the {{SVGAttr("viewBox")}} height.
*   `<number>`
    *   : Numbers are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.
*   `top`
    *   : The reference point of the marker is placed at the top edge of the shape.
*   `center`
    *   : The reference point of the marker is placed at the vertical center of the shape.
*   `bottom`
    *   : The reference point of the marker is placed at the bottom edge of the shape.

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
        {{SpecName("SVG2", "painting.html#MarkerElementRefYAttribute", "refY")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Added keywords <code>left</code>, <code>center</code>, and
        <code>right</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "struct.html#SymbolElementRefYAttribute", "refY")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Initial definition for <code>&#x3C;symbol></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#MarkerElementRefYAttribute", "refY")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;marker></code></td>
    </tr>
  </tbody>
</table>

## See also

*   {{SVGAttr("refX")}}
