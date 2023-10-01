---
title: <title> — the SVG accessible name element
slug: Web/SVG/Element/title
page-type: svg-element
browser-compat: svg.elements.title
---

{{SVGRef}}

The **`<title>`** element provides an accessible, short-text description of any SVG [container element](/en-US/docs/Web/SVG/Element#container_elements) or [graphics element](/en-US/docs/Web/SVG/Element#graphics_elements).

Text in a `<title>` element is not rendered as part of the graphic, but browsers usually display it as a tooltip. If an element can be described by visible text, it is recommended to reference that text with an [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute rather than using the `<title>` element.

> **Note:** For backward compatibility with SVG 1.1, `<title>` elements should be the first child element of their parent.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <title>I'm a circle</title>
  </circle>

  <rect x="11" y="1" width="8" height="8">
    <title>I'm a square</title>
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

This element only includes global attributes

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes)

## Usage notes

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("desc")}}
