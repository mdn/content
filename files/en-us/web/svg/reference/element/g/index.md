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
However, SVG-specific element rules supersede inheritance.
Geometric attributes specific to certain elements are ignored on a `<g>` container and **not** inherited by its children.

These non-inherited attributes include:
* {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}: {{SVGElement("circle")}}, {{SVGElement("ellipse")}}
* {{SVGAttr("rx")}}, {{SVGAttr("ry")}}: {{SVGElement("ellipse")}}, {{SVGElement("rect")}}
* {{SVGAttr("d")}}: {{SVGElement("path")}}
* {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}: {{SVGElement("foreignObject")}}, {{SVGElement("image")}}, {{SVGElement("rect")}}, {{SVGElement("svg")}}, {{SVGElement("symbol")}}, {{SVGElement("use")}}

In addition, non-presentation attributes valid on `<g>` (such as {{SVGAttr("id")}} or {{SVGAttr("class")}}) are not inherited by its children.

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
