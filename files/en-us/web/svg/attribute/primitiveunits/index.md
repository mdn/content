---
title: primitiveUnits
slug: Web/SVG/Attribute/primitiveUnits
page-type: svg-attribute
browser-compat: svg.elements.filter.primitiveUnits
---

{{SVGRef}}

The **`primitiveUnits`** attribute specifies the coordinate system for the various length values within the filter primitives and for the attributes that define the filter primitive subregion.

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
      <td><code>userSpaceOnUse</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- userSpaceOnUse
  - : This value indicates that any length values within the filter definitions represent values in the current user coordinate system in place at the time when the {{SVGElement("filter")}} element is referenced (i.e., the user coordinate system for the element referencing the {{SVGElement("filter")}} element via a {{SVGAttr("filter")}} attribute).
- objectBoundingBox
  - : This value indicates that any length values within the filter definitions represent fractions or percentages of the bounding box on the referencing element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
