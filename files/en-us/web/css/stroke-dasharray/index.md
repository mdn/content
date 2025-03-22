---
title: stroke-dasharray
slug: Web/CSS/stroke-dasharray
page-type: css-property
browser-compat: css.properties.stroke-dasharray
---

{{CSSRef}}

The **`stroke-dasharray`** [CSS](/en-US/docs/Web/CSS) property defines a pattern of dashes and gaps used in the painting of the [SVG](/en-US/docs/Web/SVG) shape's stroke. If present, it overrides the element's {{SVGAttr("stroke-dasharray")}} attribute.

This property applies to any SVG shape or text-content element (see {{SVGAttr("stroke-dasharray")}} for a full list), but as an inherited property, it may be applied to elements such as {{SVGElement("g")}} and still have the intended effect on descendant elements' strokes.

## Syntax

```css
/* Keywords */
stroke-dasharray: none;

/* Numeric, length, and percentage values */
stroke-dasharray: 2px, 5px;
stroke-dasharray: 20%, 50%;
stroke-dasharray: 2, 5;

/* The following two rules are equivalent */
stroke-dasharray: 2, 5, 3;
stroke-dasharray: 2, 5, 3, 2, 5, 3;

/* Global values */
stroke-dasharray: inherit;
stroke-dasharray: initial;
stroke-dasharray: revert;
stroke-dasharray: revert-layer;
stroke-dasharray: unset;
```

### Values

The value is a list of comma and/or white space separated `<number>`, `<length>`, and / or `<percentage>` values that specify the lengths of alternating dashes and gaps, or the keyword `none`. If an odd number of values are given, the entire value will be repeated in order to set an even number of values.

- `none`

  - : The stroke will be drawn without any dashes. The default value.

- {{cssxref("&lt;number&gt;")}}

  - : A number of SVG units, the size of which are defined by the current unit space. Negative values are invalid.

- {{cssxref("&lt;length&gt;")}}

  - : Pixel units are handled the same as SVG units (see `<number>`, above) and font-based lengths such as `em` are calculated with respect to the element's SVG value for the text size; the effects of other length units may depend on the browser. Negative values are invalid.

- {{cssxref("&lt;percentage&gt;")}}

  - : Percentages refer to the normalized diagonal of the current SVG viewport, which is calculated as <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Negative values are invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic dash array

This example demonstrates basic usage of the `stroke-dasharray` property using space-separated `<number>` values.

#### HTML

First, we set up a basic SVG rectangle shape. To this rectangle, a red stroke with a width of `2` is applied.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

We define a dash pattern for the stroke: ten units of dash, followed by five units of space. This means the gaps between dashes will be half the length as the dashes themselves.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Results

{{EmbedLiveSample("Basic dash array", "500", "250")}}

Where the stroke turns a corner, the pattern is carried along, as it were. At the top left corner, where the start and end of the stroke meet, the ten-unit-long starting dash appears to join with the part of the dash pattern seen at the end of the path, creating what looks like a longer-than-ten-units line bending around the corner.

### Dash array repetition

This example includes an odd-number of comma-separated `<number>` values to demonstrates how the value is repeated if an odd number of values is given in order to set an even number of values.

#### HTML

In this case, we define two rectangles.

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

To the first rectangle, we define a dasharray of `5, 5, 1`, which calls for five units of dash, five of gap, and one unit of dash. However, because this is an odd number of numbers, the entire set of numbers is repeated, thus creating a value identical to that applied to the second rectangle.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5, 5, 1;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5, 5, 1, 5, 5, 1;
}
```

#### Result

{{EmbedLiveSample("Dash array repetition", "500", "500")}}

The reason an even count of numbers is required is so that every dash array begins with a dash and ends with a gap. Thus, the pattern defined is a five-unit dash, a five-unit gap, a one-unit dash, a five-unit gap, a five-unit dash, and a one-unit gap. In the resulting stroke, every instance of a one-unit gap between two five-unit dashes indicates a place where the dash array starts over.

### Percentage and pixel values

This example demonstrates the use of `<percentage>` and `<length>` values within the `stroke-dasharray` property value.

#### HTML

As in the previous example, we define two rectangles.

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

This time, rather than collections of bare numbers, we use pixel units and percentages.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5px, 5px, 1px;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5%, 5%, 1%;
}
```

#### Results

{{EmbedLiveSample("Percentage and pixel values", "500", "500")}}

The results are essentially indistinguishable from the results in the previous example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("stroke")}}
- SVG {{SVGAttr("stroke-dasharray")}} attribute
