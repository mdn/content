---
title: radius
slug: Web/SVG/Attribute/radius
tags:
  - Filters
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feMorphology.radius
---
{{SVGRef}}

The **`radius`** attribute represents the radius (or radii) for the operation on a given {{SVGElement("feMorphology")}} filter primitive.

If two numbers are provided, the first number represents the x-radius and the second one the y-radius. If one number is provided, then that value is used for both x and y. The values are in the coordinate system established by the {{SVGAttr("primitiveUnits")}} attribute on the {{SVGElement("filter")}} element.

A negative or zero value disables the effect of the given filter primitive (i.e., the result is the filter input image).

You can use this attribute with the following SVG elements:

- {{SVGElement("feMorphology")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/SVG/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
        >
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
