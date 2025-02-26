---
title: <circle>
slug: Web/SVG/Element/circle
page-type: svg-element
browser-compat: svg.elements.circle
---

{{SVGRef}}

The **`<circle>`** [SVG](/en-US/docs/Web/SVG) element is an [SVG basic shape](/en-US/docs/Web/SVG/Tutorial/Basic_Shapes), used to draw circles based on a center point and a radius.

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
  <circle cx="50" cy="50" r="50" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attributes

- {{SVGAttr("cx")}}
  - : The x-axis coordinate of the center of the circle.
    _Value type_: **[\<length>](/en-US/docs/Web/SVG/Content_type#length)**|**[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage)** ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("cy")}}
  - : The y-axis coordinate of the center of the circle.
    _Value type_: **[\<length>](/en-US/docs/Web/SVG/Content_type#length)**|**[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage)** ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("r")}}
  - : The radius of the circle. A value lower or equal to zero disables rendering of the circle.
    _Value type_: **[\<length>](/en-US/docs/Web/SVG/Content_type#length)**|**[\<percentage>](/en-US/docs/Web/SVG/Content_type#percentage)** ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("pathLength")}}
  - : The total length for the circle's circumference, in user units.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: _none_; _Animatable_: **yes**

> [!NOTE]
> Starting with SVG2, `cx`, `cy`, and `r` are _Geometry Properties_, meaning those attributes can also be used as CSS properties for that element.

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other SVG basic shapes: **{{ SVGElement('ellipse') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
