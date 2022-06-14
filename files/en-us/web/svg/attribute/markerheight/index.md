---
title: markerHeight
slug: Web/SVG/Attribute/markerHeight
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.marker.markerHeight
---
{{SVGRef}}

The **`markerHeight`** attribute represents the height of the viewport into which the {{SVGElement("marker")}} is to be fitted when it is rendered according to the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.

You can use this attribute with the following SVG elements:

- {{SVGElement("marker")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("length-percentage")}} |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>3</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<length-percentage>`
  - : This value defines either an absolute or a relative height of the marker.
    Relative values refer to the height specified via the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.
- `<number>`
  - : This value defines the height of the marker in the units defined by the {{SVGAttr("markerUnits")}} attribute.

A value of zero disables rendering of the element and negative values are an error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("marker")}}
- {{SVGAttr("markerWidth")}}
- {{SVGAttr("markerUnits")}}
- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
