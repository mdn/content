---
title: <polygon>
slug: Web/SVG/Reference/Element/polygon
page-type: svg-element
browser-compat: svg.elements.polygon
sidebar: svgref
---

The **`<polygon>`** [SVG](/en-US/docs/Web/SVG) element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.

For open shapes, see the {{SVGElement("polyline")}} element.

## Usage context

{{svginfo}}

## Attributes

- {{SVGAttr('points')}}
  - : This attribute defines the list of points (pairs of `x,y` absolute coordinates) required to draw the polygon.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Guides/Content_type#number)+; _Default value_: `""`; _Animatable_: **yes**
- {{SVGAttr("pathLength")}}
  - : This attribute lets specify the total length for the path, in user units.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Guides/Content_type#number); _Default value_: _none_; _Animatable_: **yes**

## DOM Interface

This element implements the {{domxref("SVGPolygonElement")}} interface.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Example of a polygon with the default fill -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- Example of the same polygon shape with stroke and no fill -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG presentation attributes](/en-US/docs/Web/SVG/Reference/Attribute#presentation_attributes) including {{SVGAttr("fill")}} and {{SVGAttr("stroke")}}

- **Other SVG basic shapes:**

  - {{ SVGElement('circle') }}
  - {{ SVGElement('ellipse') }}
  - {{ SVGElement('line') }}
  - {{ SVGElement('polyline') }}
  - {{ SVGElement('rect') }}
