---
title: filterUnits
slug: Web/SVG/Attribute/filterUnits
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
  - SVG Filter
browser-compat: svg.elements.filter.filterUnits
---
{{SVGRef}}

The **`filterUnits`** attribute defines the coordinate system for the attributes {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} and {{SVGAttr("height")}}.

You can use this attribute with the following SVG elements:

- {{SVGElement("filter")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} and {{SVGAttr("height")}} represent values in the current coordinate system that results from taking the current user coordinate system in place at the time when the {{SVGElement("filter")}} element is referenced (i.e., the user coordinate system for the element referencing the {{SVGElement("filter")}} element via a {{SVGAttr("filter")}} attribute).
- `objectBoundingBox`
  - : In that case, {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} and {{SVGAttr("height")}} represent fractions or percentages of the bounding box on the referencing element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
