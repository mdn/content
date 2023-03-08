---
title: <stop>
slug: Web/SVG/Element/stop
page-type: svg-element
browser-compat: svg.elements.stop
---

{{SVGRef}}

The SVG **`<stop>`** element defines a color and its position to use on a gradient. This element is always a child of a {{SVGElement("linearGradient")}} or {{SVGElement("radialGradient")}} element.

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
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

- {{SVGAttr("offset")}}
  - : This attribute defines where the gradient stop is placed along the gradient vector.
    _Value type_: [**\<number>**](/en-US/docs/Web/SVG/Content_type#number)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage); _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("stop-color")}}
  - : This attribute defines the color of the gradient stop. It can be used as a CSS property.
    _Value type_: `currentcolor`|[**\<color>**](/en-US/docs/Web/SVG/Content_type#color)|[**\<icccolor>**](/en-US/docs/Web/SVG/Content_type#icccolor); _Default value_: `black`; _Animatable_: **yes**
- {{SVGAttr("stop-opacity")}}
  - : This attribute defines the opacity of the gradient stop. It can be used as a CSS property.
    _Value type_: [**\<opacity>**](/en-US/docs/Web/SVG/Content_type#opacity_value); _Default value_: `1`; _Animatable_: **yes**

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes)
- [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('color')}}, {{SVGAttr('display')}}, {{SVGAttr('stop-color')}}, {{SVGAttr('stop-opacity')}}, {{SVGAttr('visibility')}}

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
