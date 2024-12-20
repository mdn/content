---
title: <line>
slug: Web/SVG/Element/line
page-type: svg-element
browser-compat: svg.elements.line
---

{{SVGRef}}

The **`<line>`** [SVG](/en-US/docs/Web/SVG) element is an SVG basic shape used to create a line connecting two points.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- If you do not specify the stroke
       color the line will not be visible -->
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attributes

- {{SVGAttr('x1')}}
  - : Defines the x-axis coordinate of the line starting point.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr('x2')}}
  - : Defines the x-axis coordinate of the line ending point.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr('y1')}}
  - : Defines the y-axis coordinate of the line starting point.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr('y2')}}
  - : Defines the y-axis coordinate of the line ending point.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("pathLength")}}
  - : Defines the total path length in user units.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: _none_; _Animatable_: **yes**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other SVG basic shapes: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('polygon') }}, **{{ SVGElement('polyline') }}**, {{ SVGElement('rect') }}
