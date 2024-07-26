---
title: cx
slug: Web/CSS/cx
page-type: css-property
browser-compat: css.properties.cx
---

{{CSSRef}}

The **`cx`** [CSS](/en-US/docs/Web/CSS) property defines the x-axis center point of an SVG {{SVGElement("circle")}} or {{SVGElement("ellipse")}} element. If present, it overrides the element's {{SVGAttr("cx")}} attribute.

> [!NOTE]
> While SVG the {{SVGAttr("cx")}} attribute is relevant to the SVG {{SVGElement("radialGradient")}} element, the `cx` property only applies to {{SVGElement("circle")}} and {{SVGElement("ellipse")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to `<radialGradient>` or other SVG elements nor to HTML elements or pseudo-elements.

## Syntax

```css
/* length and percentage values */
cx: 20px;
cx: 20%;

/* Global values */
cx: inherit;
cx: initial;
cx: revert;
cx: revert-layer;
cx: unset;
```

### Values

The {{cssxref("length")}} and {{cssxref("percentage")}} values denote the horizontal center of the circle or ellipse.

- {{cssxref("length")}}

  - : As an absolute or relative length, it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Negative values are invalid.

- {{cssxref("percentage")}}

  - : Percentages refer to the width of the current SVG viewport.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining the x-axis coordinate of a circle and ellipse

This example demonstrates the basic use case of `cx`, and how the CSS `cx` property takes precedence over the `cx` attribute.

#### HTML

We include two identical `<circle>` and two identical `<ellipse>` elements in an SVG; their `cx` attribute values are `50` and `150`, respectively.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

With CSS, we style only the first circle and first ellipse, allowing their twin shapes to use default styles (with ({{cssxref("fill")}} defaulting to black). We use the `cx` property to override the value of the SVG {{SVGAttr("cx")}} attribute and also give it a `fill` and {{cssxref("stroke")}} to differentiate the first shapes in each pair from their twin. The browser renders SVG images as `300px` wide and `150px` tall by default.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 180px;
  fill: pink;
  stroke: black;
}
```

#### Results

{{EmbedLiveSample("Defining the x-axis coordinate of a circle and ellipse", "300", "180")}}

The style circle's center is `30px` from the left edge of the SVG viewport and the styled ellipse is `180px` from that edge, as defined in the CSS `cx` property values. The unstyled shapes centers are `50px` and `150px` from the left edge of the SVG viewport, as defined in their SVG `cx` attribute values.

### x-axis coordinates as percentage values

This example demonstrates using percentage values for `cx`.

#### HTML

We use the same markup as the previous example.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

We use CSS which is similar to the previous example. The only difference is the CSS `cx` property value; in this case, we use percentage values of `30%` for the `<circle>` and `80%` for the `<ellipse>`.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 80%;
  fill: pink;
  stroke: black;
}
```

#### Results

{{EmbedLiveSample("x-axis coordinates as percentage values", "300", "180")}}

When using percentage values for `cx`, the values are relative to the width of the SVG viewport. Here, the x-axis coordinates of the center of the style circle and ellipse are `30%` and `80%`, respectively, of the width of the current SVG viewport. As the width defaulted to `300px`, the `cx` values are `90px` and `240px` from the SVG viewport's left edge.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("cx")}} attribute
- Geometry properties: `cx`, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} data type
