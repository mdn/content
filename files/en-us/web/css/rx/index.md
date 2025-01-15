---
title: rx
slug: Web/CSS/rx
page-type: css-property
browser-compat: css.properties.rx
---

{{CSSRef}}

The **`rx`** [CSS](/en-US/docs/Web/CSS) property defines the x-axis, or horizontal, radius of an SVG {{SVGElement("ellipse")}} and the horizontal curve of the corners of an SVG {{SVGElement("rect")}} rectangle. If present, it overrides the shape's {{SVGAttr("rx")}} attribute.

> [!NOTE]
> The `rx` property only applies to {{SVGElement("ellipse")}} and {{SVGElement("rect")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG elements or HTML elements or pseudo-elements.

## Syntax

```css
/* Initial value */
rx: auto;

/* Length and percentage values */
rx: 20px;
rx: 20%;

/* Global values */
rx: inherit;
rx: initial;
rx: revert;
rx: revert-layer;
rx: unset;
```

### Values

The {{cssxref("length")}}, {{cssxref("percentage")}}, or `auto` keyword value denotes the horizontal radius of ellipses and the horizontal border-radius of rectangles.

- {{cssxref("length")}}

  - : Absolute or relative lengths can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Negative values are invalid.

- {{cssxref("percentage")}}

  - : Percentages refer to the width of the current SVG viewport. The used value for a `<rect>` is never more than 50% of the width of the rectangle.

- `auto`

  - : When set or defaulting to `auto`, the `rx` value equals the absolute length value used for {{cssxref("ry")}}. If both `rx` and `ry` have a computed value of `auto`, the used value is `0`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating rounded corners

This example demonstrates creating rectangles with rounded corners by applying the `rx` property to SVG `<rect>` elements.

#### HTML

We include an SVG image with four `<rect>` elements; all the rectangles are the same except for their {{SVGAttr("x")}} attribute value, which positions them along the x-axis.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="50" height="120" y="5" x="5" />
  <rect width="50" height="120" y="5" x="60" />
  <rect width="50" height="120" y="5" x="115" />
  <rect width="50" height="120" y="5" x="170" />
  <rect width="50" height="120" y="5" x="225" />
</svg>
```

#### CSS

With CSS, we set an `rx` value on four of the rectangles:

```css
svg {
  border: 1px solid;
}

rect:nth-of-type(2) {
  rx: 10px;
  fill: red;
}

rect:nth-of-type(3) {
  rx: 2em;
  fill: blue;
}

rect:nth-of-type(4) {
  rx: 5%;
  fill: orange;
}

rect:nth-of-type(5) {
  rx: 80%;
  fill: green;
}
```

#### Results

{{EmbedLiveSample("Creating rounded corners", "300", "180")}}

The first rectangle defaults to `auto`; as all the `ry` values in this example also default to `auto`, the used value of `rx` is `0`. The red and blue rectangles have `10px` and `2em` rounded corners, respectively. As the SVG viewport defaults to 300px by 150px, the orange rectangle's `5%` value creates a `15px` radius. The green rectangle has `rx: 80%` set. However, as the value of `rx` is never more than `50%` of the width of the rectangle, the effect is as if `rx: 50%; ry: 50%` was set.

### Defining the horizontal radius of an ellipse

This basic `<ellipse>` example demonstrates the CSS `rx` property taking precedence over an SVG `rx` attribute to define the shape's horizontal radius.

#### HTML

We include two identical `<ellipse>` elements in an SVG; each with the `rx` attribute set to `20`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

We only style the first ellipse, letting its twin use default user agent styles (with {{cssxref("fill")}} defaulting to black). The geometric `rx` property overrides the value of the SVG {{SVGAttr("rx")}} attribute. We also set the `fill` and {{cssxref("stroke")}} properties to differentiate the styled shape from its twin.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 80px;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Results

{{EmbedLiveSample("Defining the horizontal radius of an ellipse", "300", "180")}}

The styled ellipse's horizontal radius is `80px`, as defined in the CSS `rx` property value. The unstyled ellipse's horizontal radius is `20px`, which was defined by the `rx` attribute.

### Ellipse horizontal radius percentage values

This example demonstrates using percentage values for `rx`.

#### HTML

We use the same markup as the previous example.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

The CSS is similar to the previous example, with the only difference being the `rx` property value; in this case, we use a percentage value.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 30%;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Results

{{EmbedLiveSample("Ellipse horizontal radius percentage values", "300", "180")}}

When using percentage values for `rx`, the values are relative to the width of the SVG viewport. Here, the size of the styled ellipse horizontal radius is `30%` of the width of the current SVG viewport. As the width defaulted to `300px`, the `rx` value is `90px`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Geometry properties: `rx`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} data type
- SVG {{SVGAttr("rx")}} attribute
