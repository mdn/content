---
title: <textPath>
slug: Web/SVG/Element/textPath
tags:
  - Element
  - Reference
  - SVG
  - SVG Text Content
browser-compat: svg.elements.textPath
---
{{SVGRef}}

To render text along the shape of a {{SVGElement("path")}}, enclose the text in a **`<textPath>`** element that has an {{SVGAttr("href")}} attribute with a reference to the {{SVGElement("path")}} element.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

  <!-- to hide the path, it is usually wrapped in a <defs> element -->
  <!-- <defs> -->
  <path id="MyPath" fill="none" stroke="red"
        d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <!-- </defs> -->

  <text>
    <textPath href="#MyPath">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>

</svg>
```

{{EmbedLiveSample('Example', 200, 200)}}

## Attributes

- {{SVGAttr("href")}}
  - : The URL to the path or basic shape on which to render the text. If the `path` attribute is set, `href` has no effect.
    _Value type_: [**\<URL>**](/en-US/docs/Web/SVG/Content_type#url) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("lengthAdjust")}}
  - : Where length adjustment should be applied to the text: the space between glyphs, or both the space and the glyphs themselves.
    _Value type_: `spacing`|`spacingAndGlyphs`; _Default value_: `spacing`; _Animatable_: **yes**
- {{SVGAttr("method")}}
  - : Which method to render individual glyphs along the path.
    _Value type_: `align`|`stretch` ; _Default value_: `align`; _Animatable_: **yes**
- {{SVGAttr("path")}}
  - : The path on which the text should be rendered.
    _Value type_: [**\<path_data>**](/en-US/docs/Web/SVG/Content_type#path_data) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("side")}}
  - : Which side of the path the text should be rendered.
    _Value type_: `left`|`right` ; _Default value_: `left`; _Animatable_: **yes**
- {{SVGAttr("spacing")}}
  - : How space between glyphs should be handled.
    _Value type_: `auto`|`exact` ; _Default value_: `exact`; _Animatable_: **yes**
- {{SVGAttr("startOffset")}}
  - : How far the beginning of the text should be offset from the beginning of the path.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("textLength")}}
  - : The width of the space into which the text will render.
    _Value type_: [**\<length>**](/en-US/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/en-US/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/en-US/docs/Web/SVG/Content_type#number) ; _Default value_: _auto_; _Animatable_: **yes**

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/en-US/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Graphical event attributes](/en-US/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [Presentation Attributes](/en-US/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`
- XLink Attributes
  - : {{SVGAttr("xlink:title")}}

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
