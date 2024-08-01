---
title: refX
slug: Web/SVG/Attribute/refX
page-type: svg-attribute
spec-urls:
  - https://svgwg.org/svg2-draft/painting.html#MarkerElementRefXAttribute
  - https://svgwg.org/svg2-draft/struct.html#SymbolElementRefXAttribute
---

{{SVGRef}}

The **`refX`** attribute defines the x coordinate of an element's reference point.

You can use this attribute with the following SVG elements:

- {{SVGElement("marker")}}
- {{SVGElement("symbol")}}

## marker

For {{SVGElement("marker")}}, `refX` defines the x coordinate of the marker's reference point, which is to be placed exactly at the marker's position on the shape.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}} | <code>left</code> | <code>center</code> |
        <code>right</code>
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

- `<length-percentage>`

  - : Lengths are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.

    Percentage values are interpreted as being a percentage of the {{SVGAttr("viewBox")}} width.

- `<number>`
  - : Numbers are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.
- `left`
  - : The reference point of the marker is placed at the left edge of the shape.
- `center`
  - : The reference point of the marker is placed at the horizontal center of the shape.
- `right`
  - : The reference point of the marker is placed at the right edge of the shape.

## symbol

For {{SVGElement("symbol")}}, `refX` defines the x coordinate of the symbol, which is defined by the cumulative effect of the {{SVGAttr("x")}} attribute and any transformations on the {{SVGElement("symbol")}} and its host {{SVGElement("use")}} element.

Unlike other positioning attributes, `refX` is interpreted as being in the coordinate system of the symbol contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes. If the attribute is not specified, no horizontal adjustment is made, and the left side of the symbol's rectangular viewport region (regardless of the `viewBox` coordinate) is positioned at the x coordinate.

> [!NOTE]
> For backwards compatibility, the behavior when `refX` is not specified on a `<symbol>` element is different from when it is specified with a value of `0`, and therefore different from the behavior when an equivalent attribute is not specified on a {{SVGElement("marker")}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("length")}} | <code>left</code> | <code>center</code> |
        <code>right</code>
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

- `<length-percentage>`

  - : Lengths are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.

    Percentage values are interpreted as being a percentage of the {{SVGAttr("viewBox")}} width.

- `<number>`
  - : Numbers are interpreted as being in the coordinate system of the marker contents, after application of the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.
- `left`
  - : The reference point of the marker is placed at the left edge of the shape.
- `center`
  - : The reference point of the marker is placed at the horizontal center of the shape.
- `right`
  - : The reference point of the marker is placed at the right edge of the shape.

## Specifications

{{Specifications}}

## See also

- {{SVGAttr("refY")}}
