---
title: <feDropShadow>
slug: Web/SVG/Element/feDropShadow
page-type: svg-element
browser-compat: svg.elements.feDropShadow
---

{{SVGRef}}

The **`<feDropShadow>`** [SVG](/en-US/docs/Web/SVG) filter primitive creates a drop shadow of the input image. It can only be used inside a {{SVGElement('filter')}} element.

> [!NOTE]
> The drop shadow color and opacity can be changed by using the {{SVGAttr('flood-color')}} and {{SVGAttr('flood-opacity')}} presentation attributes.

Like other filter primitives, it handles color components in the `linearRGB` {{glossary("color space")}} by default. You can use {{svgattr("color-interpolation-filters")}} to use `sRGB` instead.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
    </filter>
    <filter id="shadow2">
      <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
    </filter>
    <filter id="shadow3">
      <feDropShadow
        dx="-0.8"
        dy="-0.8"
        stdDeviation="0"
        flood-color="pink"
        flood-opacity="0.5" />
    </filter>
  </defs>

  <circle cx="5" cy="50%" r="4" style="fill:pink; filter:url(#shadow);" />

  <circle cx="15" cy="50%" r="4" style="fill:pink; filter:url(#shadow2);" />

  <circle cx="25" cy="50%" r="4" style="fill:pink; filter:url(#shadow3);" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

- {{SVGAttr("dx")}}
  - : This attribute defines the x offset of the drop shadow.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Content_type#number); _Default value_: `2`; _Animatable_: **yes**
- {{SVGAttr("dy")}}
  - : This attribute defines the y offset of the drop shadow.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Content_type#number); _Default value_: `2`; _Animatable_: **yes**
- {{SVGAttr("stdDeviation")}}
  - : This attribute defines the standard deviation for the blur operation in the drop shadow.
    _Value type_: [**\<number-optional-number>**](/en-US/docs/Web/SVG/Content_type#number-optional-number); _Default value_: `2`; _Animatable_: **yes**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG Filter primitive attributes](/en-US/docs/Web/SVG/Attribute#filters_attributes) including {{SVGAttr('height')}}, {{SVGAttr('in')}}, {{SVGAttr('result')}}, {{SVGAttr('x')}}, {{SVGAttr('y')}}, and {{SVGAttr('width')}}.
- [SVG presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes), including {{SVGAttr('flood-color')}}, and {{SVGAttr('flood-opacity')}}.
