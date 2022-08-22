---
title: orient
slug: Web/SVG/Attribute/orient
tags:
  - SVG
  - SVG Attr
browser-compat: svg.elements.marker.orient
---
{{SVGRef}}

The **`orient`** attribute indicates how a marker is rotated when it is placed at its position on the shape.

You can use this attribute with the following SVG elements:

- {{SVGElement("marker")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <marker id="dataArrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="-65deg">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
    </marker>
  </defs>

  <polyline points="10,10 10,90 90,90" fill="none" stroke="black"
      marker-start="url(#arrow)" marker-end="url(#arrow)" />

  <polyline points="15,80 29,50 43,60 57,30 71,40 85,15" fill="none" stroke="grey"
      marker-start="url(#dataArrow)" marker-mid="url(#dataArrow)"
      marker-end="url(#dataArrow)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>auto-start-reverse</code> |
        {{cssxref("angle")}} | {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes (non-additive)</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : This value indicates that the marker is oriented such that its positive x-axis is pointing in a direction relative to the path at the position the marker is placed.
- `auto-start-reverse`
  - : If placed by {{SVGAttr("marker-start")}}, the marker is oriented 180° different from the orientation that would be used if `auto` were specified. For all other markers, `auto-start-reverse` means the same as `auto`.

    > **Note:** This allows a single arrowhead marker to be defined that can be used for both the start and end of a path, i.e. which points outwards from both ends.
- `<angle>`
  - : This value indicates that the marker is oriented such that the specified angle is that measured between the shape's positive x-axis and the marker's positive x-axis.

    > **Note:** For example, if a value of `45` is given, then the marker's positive x-axis would be pointing down and right in the shape's coordinate system.
- `<number>`
  - : This value indicates an angle in degrees. The marker is oriented such that the specified angle is that measured between the shape's positive x-axis and the marker's positive x-axis.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
