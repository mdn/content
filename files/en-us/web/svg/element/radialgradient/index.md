---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
tags:
  - Element
  - SVG
  - SVG Gradient
browser-compat: svg.elements.radialGradient
---
{{SVGRef}}

The **`<radialGradient>`** element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.

> **Note:** Don't be confused with CSS {{cssxref('radial-gradient()')}} as CSS gradients can only apply to HTML elements where SVG gradient can only apply to SVG elements.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"
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

*   {{SVGAttr("cx")}}
    *   : This attribute defines the x coordinate of the end circle of the radial gradient.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `50%`; *Animatable*: **yes**
*   {{SVGAttr("cy")}}
    *   : This attribute defines the y coordinate of the end circle of the radial gradient.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `50%`; *Animatable*: **yes**
*   {{SVGAttr("fr")}}
    *   : This attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% {{SVGElement('stop','gradient stop')}} is mapped to the perimeter of the start circle.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `0%`; *Animatable*: **yes**
*   {{SVGAttr("fx")}}
    *   : This attribute defines the x coordinate of the start circle of the radial gradient.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: Same as `cx`; *Animatable*: **yes**
*   {{SVGAttr("fy")}}
    *   : This attribute defines the y coordinate of the start circle of the radial gradient.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: Same as `cy`; *Animatable*: **yes**
*   {{SVGAttr("gradientUnits")}}
    *   : This attribute defines the coordinate system for attributes `cx`, `cy`, `r`, `fx`, `fy`, `fr`
        *Value type*: `userSpaceOnUse`|`objectBoundingBox` ; *Default value*: `objectBoundingBox`; *Animatable*: **yes**
*   {{SVGAttr("gradientTransform")}}
    *   : This attribute provides additional [transformation](/en-US/docs/Web/SVG/Attribute/transform) to the gradient coordinate system.
        *Value type*: **[\<transform-list>](/en-US/docs/Web/SVG/Content_type#transform-list)** ; *Default value*: *identity transform*; *Animatable*: **yes**
*   {{SVGAttr("href")}}
    *   : This attribute defines a reference to another `<radialGradient>` element that will be used as a template.
        *Value type*: [**\<URL>**](/en-US/docs/Web/SVG/Content_type#url) ; *Default value*: none; *Animatable*: **yes**
*   {{SVGAttr("r")}}
    *   : This attribute defines the radius of the end circle of the radial gradient. The gradient will be drawn such that the 100% {{SVGElement('stop','gradient stop')}} is mapped to the perimeter of the end circle.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `50%`; *Animatable*: **yes**
*   {{SVGAttr("spreadMethod")}}
    *   : This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
        *Value type*: `pad`|`reflect`|`repeat` ; *Default value*: `pad`; *Animatable*: **yes**
*   {{SVGAttr("xlink:href")}}
    *   : {{Deprecated_Header}}An [\<IRI>](/en-US/docs/Web/SVG/Content_type#iri) reference to another `<radialGradient>` element that will be used as a template.
        *Value type*: [**\<IRI>**](/en-US/docs/Web/SVG/Content_type#iri) ; *Default value*: none; *Animatable*: **yes**

### Global attributes

*   [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
    *   : Most notably: {{SVGAttr('id')}}
*   [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
    *   : {{SVGAttr('class')}}, {{SVGAttr('style')}}
*   Event Attributes
    *   : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes)
*   [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
    *   : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
*   XLink Attributes
    *   : {{SVGAttr("xlink:href")}}, {{SVGAttr("xlink:title")}}

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
