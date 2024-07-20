---
title: <g>
slug: Web/SVG/Element/g
page-type: svg-element
browser-compat: svg.elements.g
---

{{SVGRef}}

The **`<g>`** [SVG](/en-US/docs/Web/SVG) element is a container used to group other SVG elements.

Transformations applied to the `<g>` element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the {{SVGElement("use")}} element.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Using g to inherit presentation attributes -->
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
