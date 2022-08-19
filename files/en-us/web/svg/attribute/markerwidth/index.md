---
title: markerWidth
slug: Web/SVG/Attribute/markerWidth
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.marker.markerWidth
---
{{SVGRef}}

The **`markerWidth`** attribute represents the width of the viewport into which the {{SVGElement("marker")}} is to be fitted when it is rendered according to the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.

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
  - : This value defines either an absolute or a relative width of the marker.
    Relative values refer to the width specified via the {{SVGAttr("viewBox")}} and {{SVGAttr("preserveAspectRatio")}} attributes.
- `<number>`
  - : This value defines the width of the marker in the units defined by the {{SVGAttr("markerUnits")}} attribute.

A value of zero disables rendering of the element and negative values are an error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("marker")}}
- {{SVGAttr("markerHeight")}}
- {{SVGAttr("markerUnits")}}
- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
