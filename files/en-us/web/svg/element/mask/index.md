---
title: <mask>
slug: Web/SVG/Element/mask
tags:
  - Element
  - SVG
  - SVG Container
browser-compat: svg.elements.mask
---
{{SVGRef}}

The **`<mask>`** element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the {{SVGAttr("mask")}} property.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-10 -10 120 120">
  <mask id="myMask">
    <!-- Everything under a white pixel will be visible -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- Everything under a black pixel will be invisible -->
    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="black" />
  </mask>

  <polygon points="-10,110 110,110 110,-10" fill="orange" />

  <!-- with this mask applied, we "punch" a heart shape hole into the circle -->
  <circle cx="50" cy="50" r="50" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Attributes

- {{SVGAttr("height")}}
  - : This attribute defines the height of the masking area.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `120%`; _Animatable_: **yes**
- {{SVGAttr("maskContentUnits")}}
  - : This attribute defines the coordinate system for the contents of the `<mask>`.
    _Value type_: `userSpaceOnUse`|`objectBoundingBox` ; _Default value_: `userSpaceOnUse`; _Animatable_: **yes**
- {{SVGAttr("maskUnits")}}
  - : This attribute defines the coordinate system for attributes {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} and {{SVGAttr("height")}} on the `<mask>`.
    _Value type_: `userSpaceOnUse`|`objectBoundingBox` ; _Default value_: `objectBoundingBox`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : This attribute defines the x-axis coordinate of the top-left corner of the masking area.
    _Value type_: [**\<coordinate>**](/en-US/docs/Web/SVG/Content_type#coordinate) ; _Default value_: `-10%`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : This attribute defines the y-axis coordinate of the top-left corner of the masking area.
    _Value type_: [**\<coordinate>**](/en-US/docs/Web/SVG/Content_type#coordinate) ; _Default value_: `-10%`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : This attribute defines the width of the masking area.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; _Default value_: `120%`; _Animatable_: **yes**

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other clipping and masking SVG elements: {{SVGElement("clipPath")}}
- Clipping and masking CSS properties: {{cssxref("mask")}}, {{cssxref("mask-image")}}, {{cssxref("mask-mode")}}, {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-clip")}}, {{cssxref("mask-origin")}}, {{cssxref("mask-composite")}}, {{cssxref("mask-size")}}, {{cssxref("pointer-events")}}
