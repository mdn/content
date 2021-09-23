---
title: marker-mid
slug: Web/SVG/Attribute/marker-mid
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.marker-mid
---
{{SVGRef}}

The **`marker-mid`** attribute defines the arrowhead or polymarker that will be drawn at all interior vertices of the given [shape](/en-US/docs/Web/SVG/Element#Shape_elements).

The marker is rendered on every vertex other than the first and last vertices of the [path data](/en-US/docs/Web/SVG/Attribute/d#Path_commands).

> **Note:** As a presentation attribute, `marker-mid` can be used as a CSS property.

You can use this attribute with the following SVG elements:

*   {{SVGElement("circle")}}
*   {{SVGElement("ellipse")}}
*   {{SVGElement("line")}}
*   {{SVGElement("path")}}
*   {{SVGElement("polygon")}}
*   {{SVGElement("polyline")}}
*   {{SVGElement("rect")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="circle" markerWidth="8" markerHeight="8" refX="4" refY="4">
        <circle cx="4" cy="4" r="4" stroke="none" fill="#f00"/>
    </marker>
  </defs>
  <polyline fill="none" stroke="black"
      points="20,100 40,60 70,80 100,20" marker-mid="url(#circle)"/>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>none</code> | <code>&#x3C;marker-ref></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

*   `none`
    *   : Indicates that no marker symbol shall be drawn at the given vertices.
*   `<marker-ref>`
    *   : This value is a reference to a {{SVGElement("marker")}} element, which will be drawn at the given vertices. If the reference is not valid, then no marker will be drawn.

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
        {{SpecName("SVG2", "painting.html#MarkerEndProperty", "marker-mid")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>No significant change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#MarkerEndProperty", "marker-mid")}}
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
*   {{SVGAttr("marker-start")}}
*   {{SVGAttr("marker-end")}}
