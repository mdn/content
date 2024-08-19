---
title: stroke-dasharray
slug: Web/CSS/stroke-dasharray
page-type: css-property
browser-compat: css.properties.stroke-dasharray
---

{{CSSRef}}

The **`stroke-dasharray`** [CSS](/en-US/docs/Web/CSS) property defines a pattern of dashes and gaps used in the painting of a shape's stroke. It applies to any SVG shape or text-content element (see {{SVGAttr("stroke-dasharray")}} for a full list), but as an inherited property, it may be applied to elements such as {{SVGElement("g")}} and still have the intended effect on descendant elements' strokes.

## Syntax

```css
stroke-dasharray: none;
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

- `none`

  - : The stroke will be drawn without any dashes. The default value.

- {{cssxref("&lt;number&gt;")}}

  - : A number of SVG units, the size of which defined by the current unit space. The value given, if other than `0`, moves the starting point from the start of the dash array to another point within it. If an odd number of values are given, the entire value will be repeated in order to set an even number of values. Negative values are invalid.

- {{cssxref("&lt;length-percentage&gt;")}}

  - : Pixel units are handled the same as SVG units (see `<number>`, above) and font-based lengths such as `em` are calculated with repect to the element's SVG value for the text size; the effects of other length units may depend on the browser. Percentages are defined to be calculated as a percentage of the current SVG viewport. If an odd number of values are given, the entire value will be repeated in order to set an even number of values. Negative values are invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic dash array

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

Via CSS, we define a dash pattern for the stroke: six units of dash, followed by six units of space. This means the gaps between dashes will be the same length as the dashes themselves.

```css
rect {
  stroke-dasharray: 6, 6;
}
```

Where the stroke turns a corner, the pattern is carried along, as it were. At the top left corner, where the start and end of the stroke meet, the six-unit-long starting dash appears to join with the part of the dash pattern seen at the end of the path, creating what looks like a longer-than-six-units line bending around the corner.

{{EmbedLiveSample("Basic dash array", "500", "250")}}

### Dash array repetition

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

To the first rectangle, we define a dasharray of `5,5,1`, which calls for five units of dash, five of gap, and one unit of dash. However, because this is an odd number of numbers, the entire set of numbers is repeated, thus creating a value identical to that applied to the second rectangle.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5, 5, 1;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5, 5, 1, 5, 5, 1;
}
```

The reason an even count of numbers is required is so that every dash array begins with a dash and ends with a gap. Thus, the pattern defined is a five-unit dash, a five-unit gap, a one-unit dash, a five-unit gap, a five-unit dash, and a one-unit gap. In the resulting stroke, every instance of a one-unit gap between two five-unit dashes indicates a place where the dash array starts over.

{{EmbedLiveSample("Dash array repetition", "500", "500")}}

### Percentage and pixel values

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

This time, rather than collections of bare numbers, we use pixel units and percentages.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5px, 5px, 1px;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5%, 5%, 1%;
}
```

The results are essentially indistinguishable from the results in the previous example.

{{EmbedLiveSample("Percentage and pixel values", "500", "500")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("stroke-dasharray")}} attribute
- CSS {{CSSxref("stroke-dashoffset")}} property
- CSS {{CSSxref("stroke")}} property
