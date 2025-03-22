---
title: x
slug: Web/CSS/x
page-type: css-property
browser-compat: css.properties.x
---

{{CSSRef}}

The **`x`** [CSS](/en-US/docs/Web/CSS) property defines the x-axis coordinate of the top left corner of the SVG {{SVGElement("rect")}} shape, {{SVGElement("image")}} image, {{SVGElement("foreignObject")}} viewport or nested {{SVGElement("svg")}} viewport relative to the nearest `<svg>` ancestor's user [coordinate system](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems). If present, it overrides the element's {{SVGAttr("x")}} attribute.

> [!NOTE]
> The `x` property only applies to {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}}, and {{SVGElement("svg")}} elements nested in an {{SVGElement("svg")}}. It has no effect on the outermost `<svg>` elements itself, and does not apply to other SVG elements nor to HTML elements or pseudo-elements.

## Syntax

```css
/* length and percentage values */
x: 40px;
x: 40%;

/* Global values */
x: inherit;
x: initial;
x: revert;
x: revert-layer;
x: unset;
```

### Values

The {{cssxref("length")}} and {{cssxref("percentage")}} values denote the x-axis coordinate position of the top left corner of the SVG element container.

- {{cssxref("length")}}

  - : As an absolute or relative length, it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type.

- {{cssxref("percentage")}}

  - : Percentages refer to the width of the SVG {{SVGAttr("viewBox")}}, if declared, otherwise, the percentage refers to the width of the current SVG viewport.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the x-axis coordinates of SVG shapes

This example demonstrates the basic use case of `x`, and how the CSS `x` property takes precedence over the `x` attribute.

#### HTML

We include four identical SVG `<rect>` elements; their `x` and {{SVGAttr("y")}} attributes values are all `10`, meaning the four rectangles are all in the same location, `10px` from the top and left corner of the SVG viewport.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

We style all the rectangles to have a black border and be slightly transparent, so overlapping rectangles are visible. We provide each rectangle with different fill and `x` values.

```css
svg {
  border: 1px solid;
  width: 300px;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  x: 3em;
  fill: red;
}

rect:nth-of-type(3) {
  x: 180px;
  fill: yellow;
}

rect:nth-of-type(4) {
  x: 50%;
  fill: orange;
}
```

#### Results

{{EmbedLiveSample("Defining the x-axis coordinate of SVG shapes", "300", "180")}}

The left edges of the rectangles are at `10` (from the attribute), `3em`, `180px`, and `50%`, respectively. The SVG is `300px` wide, so the last rectangle's left side is at the `150px` mark.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("x")}} attribute
- Geometry properties: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} data type
