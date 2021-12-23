---
title: <svg>
slug: Web/SVG/Element/svg
tags:
  - Element
  - Reference
  - SVG
  - SVG Container
  - Web
browser-compat: svg.elements.svg
---
{{SVGRef}}

The `svg` element is a container that defines a new coordinate system and [viewport](/en-US/docs/Web/SVG/Attribute/viewBox). It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.

> **Note:** The `xmlns` attribute is only required on the outermost `svg` element of *SVG documents*. It is unnecessary for inner `svg` elements or inside HTML documents.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

*   {{SVGAttr("baseProfile")}} {{deprecated_inline}}
    *   : The minimum SVG language profile that the document requires.
        *Value type*: **\<string>** ; *Default value*: none; *Animatable*: **no**
*   {{SVGAttr("contentScriptType")}} {{deprecated_inline}}
    *   : The default scripting language used by the SVG fragment.
        *Value type*: **\<string>** ; *Default value*: `application/ecmascript`; *Animatable*: **no**
*   {{SVGAttr("contentStyleType")}} {{deprecated_inline}}
    *   : The default style sheet language used by the SVG fragment.
        *Value type*: **\<string>** ; *Default value*: `text/css`; *Animatable*: **no**
*   {{SVGAttr("height")}}
    *   : The displayed height of the rectangular viewport. (Not the height of its coordinate system.)
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `auto`; *Animatable*: **yes**
*   {{SVGAttr("preserveAspectRatio")}}
    *   : How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.
        *Value type*: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; *Default value*: `xMidYMid meet`; *Animatable*: **yes**
*   {{SVGAttr("version")}} {{deprecated_inline}}
    *   : Which version of SVG is used for the inner content of the element.
        *Value type*: **[\<number>](/en-US/docs/Web/SVG/Content_type#number)** ; *Default value*: none; *Animatable*: **no**
*   {{SVGAttr("viewBox")}}
    *   : The SVG viewport coordinates for the current SVG fragment.
        *Value type*: **[\<list-of-numbers>](/en-US/docs/Web/SVG/Content_type#list-of-ts)** ; *Default value*: none; *Animatable*: **yes**
*   {{SVGAttr("width")}}
    *   : The displayed width of the rectangular viewport. (Not the width of its coordinate system.)
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `auto`; *Animatable*: **yes**
*   {{SVGAttr("x")}}
    *   : The displayed x coordinate of the svg container. No effect on outermost `svg` elements.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `0`; *Animatable*: **yes**
*   {{SVGAttr("y")}}
    *   : The displayed y coordinate of the svg container. No effect on outermost `svg` elements.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `0`; *Animatable*: **yes**

> **Note:** Starting with SVG2, `x`, `y`, `width`, and `height` are *Geometry Properties*, meaning these attributes can also be used as CSS properties.

### Global attributes

*   [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
    *   : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
*   [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
    *   : {{SVGAttr('class')}}, {{SVGAttr('style')}}
*   [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
    *   : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
*   Event Attributes
    *   : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Graphical event attributes](/en-US/docs/Web/SVG/Attribute/Events#graphical_event_attributes), [Document event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes)
*   [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
    *   : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
*   Aria Attributes
    *   : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
