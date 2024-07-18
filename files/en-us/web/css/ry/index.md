---
title: ry
slug: Web/CSS/ry
page-type: css-property
browser-compat: css.properties.ry
---

{{CSSRef}}

The **`ry`** [CSS](/en-US/docs/Web/CSS) property defines the y-axis, or vertical, radius of an SVG {{SVGElement("ellipse")}} and the vertical curve of the corners of an SVG {{SVGElement("rect")}} rectangle. If present, it overrides the shape's {{SVGAttr("ry")}} attribute.

> [!NOTE]
> The `ry` property only applies to {{SVGElement("ellipse")}} and {{SVGElement("rect")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG elements or HTML elements or pseudo-elements.

## Syntax

```css
/* Initial value */
ry: auto;

/* Length and percentage values */
ry: 30px;
ry: 30%;
ry: 30;

/* Global values */
ry: inherit;
ry: initial;
ry: revert;
ry: revert-layer;
ry: unset;
```

### Values

The {{cssxref("length")}}, {{cssxref("percentage")}}, or `auto` keyword value denotes the vertical radius of ellipses and the vertical border-radius of rectangles.

- {{cssxref("length")}}

  - : Absolute or relative lengths can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Unitless and `px` values are SVG coordinate units if the {{SVGAttr("viewBox")}} attribute is included; otherwise, CSS pixel units are used. Negative values are invalid.

- {{cssxref("percentage")}}

  - : Percentages refer to the height of the current SVG viewport. The used value for a `<rect>` is never more than 50% of the height of the rectangle.

- `auto`

  - : When set or defaulting to `auto`, the `ry` value equals the absolute length value used for {{cssxref("rx")}}. If both `ry` and `rx` have a computed value of `auto`, the used value is `0`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating rounded corners

This example demonstrates creating rectangles with rounded corners by applying the `ry` property to SVG `<rect>` elements.

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

With CSS, we set an `ry` value on four of the rectangles:

```css
svg {
  border: 1px solid;
}

rect:nth-of-type(2) {
  ry: 10px;
  fill: red;
}

rect:nth-of-type(3) {
  ry: 2em;
  fill: blue;
}

rect:nth-of-type(4) {
  ry: 5%;
  fill: orange;
}

rect:nth-of-type(5) {
  ry: 80%;
  fill: green;
}
```

#### Results

{{EmbedLiveSample("Creating rounded corners", "300", "180")}}

The first rectangle defaults to `auto`; as all the `rx` values in this example also default to `auto`, the used value of `ry` is `0`. The red and blue rectangles have `10px` and `2em` rounded corners, respectively. As the SVG viewport defaults to 300px by 150px, the orange rectangle's `5%` value creates a `7.5px` radius. The green rectangle has `ry: 80%` set. However, as the value of `ry` is never more than `50%` of the height of the rectangle, the effect is as if `ry: 50%; rx: 50%` was set.

### Defining the vertical radius of an ellipse

This basic `<ellipse>` example demonstrates the CSS `ry` property taking precedence over an SVG `ry` attribute to define the shape's vertical radius.

#### HTML

We include two identical `<ellipse>` elements in an SVG; each with the `ry` attribute set to `20`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

We only style the first ellipse, letting its twin use default user agent styles (with {{cssxref("fill")}} defaulting to black). The geometric `ry` property overrides the value of the SVG {{SVGAttr("ry")}} attribute. We also set the `fill` and {{cssxref("stroke")}} properties to differentiate the styled shape from its twin.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  ry: 80px;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Results

{{EmbedLiveSample("Defining the vertical radius of an ellipse", "300", "180")}}

The styled ellipse's vertical radius is `80px`, as defined in the CSS `ry` property value. The unstyled ellipse's vertical radius is `20px`, which was defined by the `ry` attribute [unitless value declaration](#using_unitless_values).

### Ellipse vertical radius percentage values

This example demonstrates using percentage values for `ry`.

#### HTML

We use the same markup as the previous example.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

The CSS is similar to the previous example, with the only difference being the `ry` property value; in this case, we use a percentage value.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  ry: 30%;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Results

{{EmbedLiveSample("Ellipse vertical radius percentage values", "300", "180")}}

When using percentage values for `ry`, the values are relative to the height of the SVG viewport. Here, the size of the styled ellipse vertical radius is `30%` of the height of the current SVG viewport. As the height defaulted to `150px`, the `ry` value is `45px`, making the ellipse `90px` tall.

### Using unitless values

This example demonstrates the effects of the viewBox attribute on unitless `ry` value declarations.

#### HTML

We include three SVG images, each with the same two ellipses as seen in the previous examples. The only difference is the `viewBox` attribute included in the second and third images.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
<svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

We set all three images to be `150px` tall. We style only the first ellipse in each SVG, allowing the second ellipse to use default styles.

We include a unitless `ry` value of `30`.

```css
svg {
  border: 1px solid;
  height: 150px;
}

ellipse:first-of-type {
  ry: 30;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Results

The effect of the CSS `ry` property values differs depending on whether the `viewBox` is defined.

{{EmbedLiveSample("Using unitless values", "300", "460")}}

When the `viewBox` is omitted, CSS pixels are used, and the `30` is equal to `30px`; the vertical radius of magenta ellipse in the first SVG is `30` CSS pixels.

The `viewBox` attribute is defined in the second and third SVG images as `50` and `100` SVG units tall, respectively. This makes `30` the equivalent of `60%` of the second SVG's viewbox height and `30%` of the third SVG's viewbox height. Both SVGs are `150px` tall when displayed, meaning the ellipses y-axis radius is the equivalent of `90px` and `45px`. Another way to understand the value is to consider that the second SVG image is rendered scaled up by 300% (30 _ 300% = 90) and the third one by 150% (30 _ 150% = 45).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Geometry properties: `ry`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("height")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} shorthand property
- {{cssxref("radial-gradient")}}
- {{cssxref("basic-shape")}} data type
