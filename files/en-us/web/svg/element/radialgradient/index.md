---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
page-type: svg-element
browser-compat: svg.elements.radialGradient
---

{{SVGRef}}

The **`<radialGradient>`** [SVG](/en-US/docs/Web/SVG) element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.

> [!NOTE]
> Don't be confused with CSS {{cssxref('gradient/radial-gradient', 'radial-gradient()')}} as CSS gradients can only apply to HTML elements where SVG gradient can only apply to SVG elements.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="myGradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
  </defs>

  <!-- using my radial gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

- {{SVGAttr("cx")}}
  - : This attribute defines the x coordinate of the end circle of the radial gradient.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `50%`; _Animatable_: **yes**
- {{SVGAttr("cy")}}
  - : This attribute defines the y coordinate of the end circle of the radial gradient.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `50%`; _Animatable_: **yes**
- {{SVGAttr("fr")}}
  - : This attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% {{SVGElement('stop','gradient stop')}} is mapped to the perimeter of the start circle.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `0%`; _Animatable_: **yes**
- {{SVGAttr("fx")}}
  - : This attribute defines the x coordinate of the start circle of the radial gradient.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: Same as `cx`; _Animatable_: **yes**
- {{SVGAttr("fy")}}
  - : This attribute defines the y coordinate of the start circle of the radial gradient.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: Same as `cy`; _Animatable_: **yes**
- {{SVGAttr("gradientUnits")}}
  - : This attribute defines the coordinate system for attributes `cx`, `cy`, `r`, `fx`, `fy`, `fr`
    _Value type_: `userSpaceOnUse`|`objectBoundingBox` ; _Default value_: `objectBoundingBox`; _Animatable_: **yes**
- {{SVGAttr("gradientTransform")}}
  - : This attribute provides additional [transformation](/en-US/docs/Web/SVG/Attribute/transform) to the gradient coordinate system.
    _Value type_: [**\<transform-list>**](/en-US/docs/Web/SVG/Content_type#transform-list) ; _Default value_: _identity transform_; _Animatable_: **yes**
- {{SVGAttr("href")}}
  - : This attribute defines a reference to another `<radialGradient>` element that will be used as a template.
    _Value type_: [**\<URL>**](/en-US/docs/Web/SVG/Content_type#url) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("r")}}
  - : This attribute defines the radius of the end circle of the radial gradient. The gradient will be drawn such that the 100% {{SVGElement('stop','gradient stop')}} is mapped to the perimeter of the end circle.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `50%`; _Animatable_: **yes**
- {{SVGAttr("spreadMethod")}}
  - : This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
    _Value type_: `pad`|`reflect`|`repeat` ; _Default value_: `pad`; _Animatable_: **yes**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : An [\<IRI>](/en-US/docs/Web/SVG/Content_type#iri) reference to another `<radialGradient>` element that will be used as a template.
    _Value type_: [**\<IRI>**](/en-US/docs/Web/SVG/Content_type#iri) ; _Default value_: none; _Animatable_: **yes**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
