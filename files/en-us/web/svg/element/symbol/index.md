---
title: <symbol>
slug: Web/SVG/Element/symbol
tags:
  - SVG
  - SVG Container
browser-compat: svg.elements.symbol
---
{{SVGRef}}

The **`<symbol>`** element is used to define graphical template objects which can be instantiated by a {{SVGElement("use")}} element.

The use of `<symbol>` elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg">
  <!-- Our symbol in its own coordinate system -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>

   <!-- A grid to materialize our symbol positioning -->
  <path d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20" fill="none" stroke="pink" />

  <!-- All instances of our symbol -->
  <use href="#myDot" x="5"  y="5" style="opacity:1.0" />
  <use href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

*   {{SVGAttr("height")}}
    *   : This attribute determines the height of the symbol.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `auto`; *Animatable*: **yes**
*   {{SVGAttr("preserveAspectRatio")}}
    *   : This attribute defines how the svg fragment must be deformed if it is embedded in a container with a different aspect ratio.
        *Value type*: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; *Default value*: `xMidYMid meet`; *Animatable*: **yes**
*   {{SVGAttr("refX")}}
    *   : This attribute determines the x coordinate of the reference point of the symbol.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|`left`|`center`|`right` ; *Default value*: `0`; *Animatable*: **yes**
*   {{SVGAttr("refY")}}
    *   : This attribute determines the y coordinate of the reference point of the symbol.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|`top`|`center`|`bottom` ; *Default value*: `0`; *Animatable*: **yes**
*   {{SVGAttr("viewBox")}}
    *   : This attribute defines the bound of the SVG viewport for the current symbol.
        *Value type*: **[\<list-of-numbers>](/en-US/docs/Web/SVG/Content_type#list-of-ts)** ; *Default value*: none; *Animatable*: **yes**
*   {{SVGAttr("width")}}
    *   : This attribute determines the width of the symbol.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `auto`; *Animatable*: **yes**
*   {{SVGAttr("x")}}
    *   : This attribute determines the x coordinate of the symbol.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `0`; *Animatable*: **yes**
*   {{SVGAttr("y")}}
    *   : This attribute determines the y coordinate of the symbol.
        *Value type*: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage) ; *Default value*: `0`; *Animatable*: **yes**

### Global attributes

*   [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
    *   : Most notably: {{SVGAttr('id')}}
*   [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
    *   : {{SVGAttr('class')}}, {{SVGAttr('style')}}
*   Event Attributes
    *   : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes), [Graphical event attributes](/en-US/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
*   [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
    *   : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
*   Aria Attributes
    *   : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

> **Note:** A `<symbol>` element itself is not meant to be rendered. Only instances of a `<symbol>` element (i.e., a reference to a `<symbol>` by a {{SVGElement("use")}} element) are rendered. That means that some browsers could refuse to directly display a `<symbol>` element even if the CSS {{cssxref('display')}} property tells otherwise.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
