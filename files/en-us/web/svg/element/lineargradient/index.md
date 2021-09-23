---
title: <linearGradient>
slug: Web/SVG/Element/linearGradient
tags:
  - Element
  - SVG
  - SVG Gradient
browser-compat: svg.elements.linearGradient
---
{{SVGRef}}

The **`<linearGradient>`** element lets authors define linear gradients that can be applied to fill or stroke of graphical elements.

> **Note:** Don't be confused with CSS {{cssxref('linear-gradient()')}} as CSS gradients can only apply to HTML elements where SVG gradient can only apply to SVG elements.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%"  stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

*   {{SVGAttr("gradientUnits")}}
    *   : This attribute defines the coordinate system for attributes `x1`, `x2`, `y1`, `y2`
        *Value type*: `userSpaceOnUse`|`objectBoundingBox` ; *Default value*: `objectBoundingBox`; *Animatable*: **yes**
*   {{SVGAttr("gradientTransform")}}
    *   : This attribute provides additional [transformation](/en-US/docs/Web/SVG/Attribute/transform) to the gradient coordinate system.
        *Value type*: **[\<transform-list>](/en-US/docs/Web/SVG/Content_type#transform-list)** ; *Default value*: *identity transform*; *Animatable*: **yes**
*   {{SVGAttr("href")}}
    *   : This attribute defines a reference to another `<linearGradient>` element that will be used as a template.
        *Value type*: [**\<URL>**](/en-US/docs/Web/SVG/Content_type#url) ; *Default value*: none; *Animatable*: **yes**
*   {{SVGAttr("spreadMethod")}}
    *   : This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
        *Value type*: `pad`|`reflect`|`repeat` ; *Default value*: `pad`; *Animatable*: **yes**
*   {{SVGAttr("x1")}}
    *   : This attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `0%`; *Animatable*: **yes**
*   {{SVGAttr("x2")}}
    *   : This attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `100%`; *Animatable*: **yes**
*   {{SVGAttr("xlink:href")}}
    *   : {{Deprecated_Header}}An [\<IRI>](/en-US/docs/Web/SVG/Content_type#iri) reference to another `<linearGradient>` element that will be used as a template.
        *Value type*: [**\<IRI>**](/en-US/docs/Web/SVG/Content_type#iri) ; *Default value*: none; *Animatable*: **yes**
*   {{SVGAttr("y1")}}
    *   : This attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `0%`; *Animatable*: **yes**
*   {{SVGAttr("y2")}}
    *   : This attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length) ; *Default value*: `0%`; *Animatable*: **yes**

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
