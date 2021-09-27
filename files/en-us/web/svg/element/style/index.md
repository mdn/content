---
title: <style>
slug: Web/SVG/Element/style
tags:
  - Element
  - Reference
  - SVG
browser-compat: svg.elements.style
---
{{SVGRef}}

The SVG **`<style>`** element allows style sheets to be embedded directly within SVG content.

> **Note:** SVG's `style` element has the same attributes as the corresponding element in HTML (see HTML's {{HTMLElement("style")}} element).

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    circle {
      fill: gold;
      stroke: maroon;
      stroke-width: 2px;
    }
  </style>

  <circle cx="5" cy="5" r="4" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

*   {{SVGAttr("type")}}
    *   : This attribute defines type of the style sheet language to use as a media type string.
        *Value type*: [**\<string>**](/en-US/docs/Web/SVG/Content_type#string); *Default value*: `text/css`; *Animatable*: **no**
*   {{SVGAttr("media")}}
    *   : This attribute defines to which {{cssxref('@media', 'media')}} the style applies.
        *Value type*: [**\<string>**](/en-US/docs/Web/SVG/Content_type#string); *Default value*: `all`; *Animatable*: **no**
*   {{SVGAttr("title")}}
    *   : This attribute the title of the style sheet which can be used to switch between alternate style sheets.
        *Value type*: [**\<string>**](/en-US/docs/Web/SVG/Content_type#string); *Default value*: *none*; *Animatable*: **no**

### Global attributes

*   [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
    *   : Most notably: {{SVGAttr('id')}}
*   [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
    *   : {{SVGAttr('class')}}, {{SVGAttr('style')}}
*   Event Attributes
    *   : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes)

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

*   {{HTMLElement("style", "&lt;style&gt; element in HTML")}}
