---
title: markerUnits
slug: Web/SVG/Attribute/markerUnits
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.marker.markerUnits
---
{{SVGRef}}

The **`markerUnits`** attribute defines the coordinate system for the {{SVGAttr("markerWidth")}} and {{SVGAttr("markerHeight")}} attributes and the contents of the {{SVGElement("marker")}}.

You can use this attribute with the following SVG elements:

*   {{SVGElement("marker")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>userSpaceOnUse</code> | <code>strokeWidth</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>strokeWidth</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `userSpaceOnUse`
    *   : This value specifies that the `markerWidth` and `markerHeight` attributes and the contents of the `<marker>` element represent values in the current user coordinate system in place for the graphic object referencing the marker (i.e., the user coordinate system for the element referencing the `<marker>` element via a {{SVGAttr("marker")}}, `marker-start`, `marker-mid`, or `marker-end` property).
*   `strokeWidth`
    *   : This value specifies that the `markerWidth` and `markerHeight` attributes and the contents of the `<marker>` element represent values in a coordinate system which has a single unit equal the size in user units of the current stroke width (see the {{SVGAttr("stroke-width")}} attribute) in place for the graphic object referencing the marker.

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
        {{SpecName("SVG2", "painting.html#MarkerUnitsAttribute", "markerUnits")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>No significant change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#MarkerUnitsAttribute", "markerUnits")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGElement("marker")}}
*   {{SVGAttr("markerWidth")}}
*   {{SVGAttr("markerHeight")}}
*   {{SVGAttr("stroke-width")}}
