---
title: gradientUnits
slug: Web/SVG/Attribute/gradientUnits
page-type: svg-attribute
spec-urls:
  - https://svgwg.org/svg2-draft/pservers.html#RadialGradientElementGradientUnitsAttribute
  - https://svgwg.org/svg2-draft/pservers.html#LinearGradientElementGradientUnitsAttribute
---

{{SVGRef}}

The **`gradientUnits`** attribute defines the coordinate system used for attributes specified on the gradient elements.

You can use this attribute with the following SVG elements:

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## linearGradient

For {{SVGElement("linearGradient")}}, `gradientUnits` defines the coordinate system used for the attributes {{SVGAttr("x1")}}, {{SVGAttr("y1")}}, {{SVGAttr("x2")}}, and {{SVGAttr("y2")}}.

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
  - : This value indicates that the attributes represent values in the coordinate system that results from taking the current user coordinate system in place at the time when the gradient element is referenced (i.e., the user coordinate system for the element referencing the gradient element via a {{SVGAttr("fill")}} or {{SVGAttr("stroke")}} property) and then applying the transform specified by attribute {{SVGAttr("gradientTransform")}}.
    Percentages represent values relative to the current SVG viewport.
- `objectBoundingBox`

  - : This value indicates that the user coordinate system for the attributes is established using the bounding box of the element to which the gradient is applied and then applying the transform specified by attribute `gradientTransform`.

    Percentages represent values relative to the bounding box for the object.

    With this value and `gradientTransform` being the identity matrix, the normal of the linear gradient is perpendicular to the gradient vector in object bounding box space (i.e., the abstract coordinate system where (0,0) is at the top/left of the object bounding box and (1,1) is at the bottom/right of the object bounding box). When the object's bounding box is not square, the gradient normal which is initially perpendicular to the gradient vector within object bounding box space may render non-perpendicular relative to the gradient vector in user space. If the gradient vector is parallel to one of the axes of the bounding box, the gradient normal will remain perpendicular. This transformation is due to application of the non-uniform scaling transformation from bounding box space to user space.

## radialGradient

For {{SVGElement("radialGradient")}}, `gradientUnits` defines the coordinate system used for the attributes {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, and {{SVGAttr("fr")}}.

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
  - : {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, and {{SVGAttr("fr")}} represent values in the coordinate system that results from taking the current user coordinate system in place at the time when the gradient element is referenced (i.e., the user coordinate system for the element referencing the gradient element via a {{SVGAttr("fill")}} or {{SVGAttr("stroke")}} property) and then applying the transform specified by attribute {{SVGAttr("gradientTransform")}}.
- `objectBoundingBox`
  - : for {{SVGElement("radialGradient")}}: the user coordinate system for attributes {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, and {{SVGAttr("fr")}} is established using the bounding box of the element to which the gradient is applied (see Object bounding box units) and then applying the transform specified by attribute `gradientTransform`.
    With this value and `gradientTransform` being the identity matrix, the rings of the radial gradient are circular with respect to the object bounding box space (i.e., the abstract coordinate system where (0,0) is at the top/left of the object bounding box and (1,1) is at the bottom/right of the object bounding box). When the object's bounding box is not square, the rings that are conceptually circular within object bounding box space will render as elliptical due to application of the non-uniform scaling transformation from bounding box space to user space.

## Specifications

{{Specifications}}
