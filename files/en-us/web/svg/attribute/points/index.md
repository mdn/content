---
title: points
slug: Web/SVG/Attribute/points
tags:
  - SVG
  - SVG Attribute
spec-urls:
  - https://svgwg.org/svg2-draft/shapes.html#PolygonElementPointsAttribute
  - https://svgwg.org/svg2-draft/shapes.html#PolylineElementPointsAttribute
---
{{SVGRef}}

The **`points`** attribute defines a list of points. Each point is defined by a pair of number representing a X and a Y coordinate in the user coordinate system. If the attribute contains an odd number of coordinates, the last one will be ignored.

You can use this attribute with the following SVG elements:

- {{SVGElement("polyline")}}
- {{SVGElement("polygon")}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 220 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline is an open shape -->
  <polyline stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/>

  <!-- polygon is a closed shape -->
  <polygon stroke="black" fill="none" transform="translate(100,0)"
   points="50,0 21,90 98,35 2,35 79,90"/>

  <!--
  It is usually considered best practices to separate a X and Y
  coordinate with a comma and a group of coordinates by a space.
  It makes things more readable for human beings.
  -->
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## polyline

For {{SVGElement('polyline')}}, `points` defines a list of points, each representing a vertex of the line to be drawn. Each point is define by a X and Y coordinate in the user coordinate system.

> **Note:** A polyline is an open shape, meaning the last point is not connected to the first point.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polyline is an open shape -->
  <polyline stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90"/>
</svg>
```

{{EmbedLiveSample('polyline', '100%', 200)}}

## polygon

For {{SVGElement('polygon')}}, `points` defines a list of points, each representing a vertex of the shape to be drawn. Each point is define by a X and Y coordinate in the user coordinate system.

> **Note:** A polygon is a closed shape, meaning the last point is connected to the first point.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>[ {{cssxref("number")}}+ ]#</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- polygon is an closed shape -->
  <polygon stroke="black" fill="none"
   points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

{{EmbedLiveSample('polygon', '100%', 200)}}

## Specifications

{{Specifications}}
