---
title: <g>
slug: Web/SVG/Reference/Element/g
page-type: svg-element
browser-compat: svg.elements.g
sidebar: svgref
---

The **`<g>`** [SVG](/en-US/docs/Web/SVG) element is a container used to group other SVG elements.

Transformations applied to the `<g>` element are performed on its child elements, and most of its presentation attributes are inherited by its children. It can also group multiple elements to be referenced later with the {{SVGElement("use")}} element.

## Usage context

{{svginfo}}

## Attributes

This element only includes global attributes.

Most of the [presentation attributes](/en-US/docs/Web/SVG/Reference/Attribute#presentation_attributes) applied to the element are inherited by its children.
However, it is important to note that this inheritance rule is superseded by SVG's rules for which element supports which attribute.
This means that geometric attributes which are specific to one or several elements will be ignored on a <g> element and not inherited by its children. Such attributes include:
- cx and cy, which are specific to <circle> and <ellipse>
- height, width, x and y, which are specific to <foreignObject>, <image>, <rect>, <svg>, <symbol> and <use>
- r, which is specific to <circle>
- rx and ry, which are specific to <ellipse> and <rect>
- d, which is specific to <path>

Other attributes taken by <g>, such as id or class, are not inherited.

## DOM Interface

This element implements the {{domxref("SVGGElement")}} interface.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
