---
title: <rect>
slug: Web/SVG/Element/rect
page-type: svg-element
browser-compat: svg.elements.rect
---

{{SVGRef}}

The **`<rect>`** [SVG](/en-US/docs/Web/SVG) element is a [basic SVG shape](/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Regular rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attributes

- {{SVGAttr("x")}}
  - : The x coordinate of the rect.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The y coordinate of the rect.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : The width of the rect.
    _Value type_: `auto`|[**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("height")}}
  - : The height of the rect.
    _Value type_: `auto`|[**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("rx")}}
  - : The horizontal corner radius of the rect. Defaults to `ry` if it is specified.
    _Value type_: `auto`|[**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("ry")}}
  - : The vertical corner radius of the rect. Defaults to `rx` if it is specified.
    _Value type_: `auto`|[**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("pathLength")}}
  - : The total length of the rectangle's perimeter, in user units.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: _none_; _Animatable_: **yes**

> [!NOTE]
> Starting with SVG2, `x`, `y`, `width`, `height`, `rx` and `ry` are _Geometry Properties_, meaning those attributes can also be used as CSS properties for that element.

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes) including {{SVGAttr("fill")}} and {{SVGAttr("stroke")}}
- Other basic SVG shapes: {{SVGElement('circle')}}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polygon') }}**, {{ SVGElement('polyline') }}
