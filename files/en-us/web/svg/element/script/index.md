---
title: <script>
slug: Web/SVG/Element/script
tags:
  - Element
  - Reference
  - SVG
browser-compat: svg.elements.script
---
The SVG `script` element allows to add scripts to an SVG document.

> **Note:** While SVG's `script` element is equivalent to the HTML {{HTMLElement('script')}} element, it has some discrepancies, like it uses the {{SVGAttr('href')}} attribute instead of {{htmlattrxref('src','script')}} and it doesn't support ECMAScript modules so far (See browser compatibility below for details)

## Example

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <script>
  // <![CDATA[
  window.addEventListener('DOMContentLoaded', () => {
    function getColor () {
      const R = Math.round(Math.random() * 255).toString(16).padStart(2,'0')
      const G = Math.round(Math.random() * 255).toString(16).padStart(2,'0')
      const B = Math.round(Math.random() * 255).toString(16).padStart(2,'0')
      return `#${R}${G}${B}`
    }

    document.querySelector('circle').addEventListener('click', (e) => {
      e.target.style.fill = getColor()
    })
  })
  // ]]>
  </script>

  <circle cx="5" cy="5" r="4" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

*   {{htmlattrxref("crossorigin", "script")}}
    *   : This attribute defines [CORS settings](/en-US/docs/Web/HTML/Attributes/crossorigin) as define for the HTML {{HTMLElement('script')}} element.
        *Value type*: [**\<string>**](/en-US/docs/Web/SVG/Content_type#string); *Default value*: `?`; *Animatable*: **yes**
*   {{SVGAttr("href")}}
    *   : The {{Glossary("URL")}} to the script to load.
        *Value type*: **[\<URL>](/en-US/docs/Web/SVG/Content_type#url)** ; *Default value*: *none*; *Animatable*: **no**
*   {{SVGAttr("type")}}
    *   : This attribute defines type of the script language to use.
        *Value type*: [**\<string>**](/en-US/docs/Web/SVG/Content_type#string); *Default value*: `application/ecmascript`; *Animatable*: **no**
*   {{SVGAttr("xlink:href")}} {{deprecated_inline}}
    *   : The {{Glossary("URL")}} to the script to load.
        *Value type*: **[\<URL>](/en-US/docs/Web/SVG/Content_type#url)** ; *Default value*: *none*; *Animatable*: **no**

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

*   [`script` element in HTML](/en-US/docs/Web/HTML/Element/script)

{{SVGRef}}
