---
title: y
slug: Web/CSS/y
page-type: css-property
browser-compat: css.properties.y
---

{{CSSRef}}

The **`y`** [CSS](/en-US/docs/Web/CSS) property defines the y-axis coordinate of the top left corner of the SVG {{SVGElement("rect")}} shape, {{SVGElement("image")}} image, {{SVGElement("foreignObject")}} viewport and nested {{SVGElement("svg")}} viewport relative to the nearest `<svg>` ancestor's user [coordinate system](/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems). If present, it overrides the element's {{SVGAttr("y")}} attribute.

> [!NOTE]
> The `y` property only applies to {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}}, and {{SVGElement("svg")}} elements nested in an `<svg>`. It has no effect on outermost `<svg>` elements and does not apply to other SVG elements nor to HTML elements or pseudo-elements.

## Syntax

```css
/* length and percentage values */
y: 10px;
y: 10%;

/* Global values */
y: inherit;
y: initial;
y: revert;
y: revert-layer;
y: unset;
```

### Values

The {{cssxref("length")}} and {{cssxref("percentage")}} values denote the y-axis coordinate position of the top left corner of the SVG element.

- {{cssxref("length")}}

  - : As an absolute or relative length, it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type.

- {{cssxref("percentage")}}

  - : Percentages refer to the height of the SVG {{SVGAttr("viewBox")}}, if declared, otherwise, the percentage refers to the height of the current SVG viewport.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the y-axis coordinates of SVG shapes

This example demonstrates the basic use case of `y`, and how the CSS `y` property takes precedence over the `y` attribute.

#### HTML

We include four identical SVG `<rect>` elements; their {{SVGAttr("x")}} and `y` attributes values are all `10`, meaning the four rectangles are all in the same location, `10px` from the top and left corner of the SVG viewport.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

We style all the rectangles to have a black border and be slightly transparent, so overlapping rectangles are visible. We provide the rectangle with different {{cssxref("fill")}} and `y` values.

```css
svg {
  border: 1px solid;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  y: -20px;
  fill: red;
}

rect:nth-of-type(3) {
  y: 4em;
  fill: yellow;
}

rect:nth-of-type(4) {
  y: 60%;
  fill: orange;
}
```

#### Results

{{EmbedLiveSample("Defining the y-axis coordinate of SVG shapes", "300", "180")}}

The top edges of the rectangles are at `10` (from the attribute), `-20px`, `4em`, and `60%`, respectively. The rectangle is `40px` tall, so the `-20px` places half the red rectangle outside the viewport. The SVG is `150px` tall, so the orange rectangle's top side is `90px` from the top of the SVG viewport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("y")}} attribute
- Geometry properties: `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} data type
