---
title: <desc>
slug: Web/SVG/Element/desc
page-type: svg-element
browser-compat: svg.elements.desc
---

{{SVGRef}}

The **`<desc>`** [SVG](/en-US/docs/Web/SVG) element provides an accessible, long-text description of any SVG [container element](/en-US/docs/Web/SVG/Element#container_elements) or [graphics element](/en-US/docs/Web/SVG/Element#graphics_elements).

Text in a `<desc>` element is not rendered as part of the graphic. If the element can be described by visible text, it is possible to reference that text with the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute. If `aria-describedby` is used, it will take precedence over `<desc>`.

The hidden text of a `<desc>` element can also be concatenated with the visible text of other elements using multiple IDs in an `aria-describedby` value. In that case, the `<desc>` element must provide an ID for reference.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4">
    <desc>
      I'm a circle and that description is here to demonstrate how I can be
      described, but is it really necessary to describe a simple circle like me?
    </desc>
  </circle>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

This element only includes global attributes

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("title")}}
