---
title: circle()
slug: Web/CSS/basic-shape/circle
page-type: css-function
browser-compat: css.types.basic-shape.circle
---

{{CSSRef}}

The **`circle()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types).

{{EmbedInteractiveExample("pages/css/function-circle.html")}}

## Syntax

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### Values

- `<shape-radius>`

  - : This may be a {{cssxref("length")}}, or a {{cssxref("percentage")}} or values `closest-side` and `farthest-side`.

    - `closest-side`
      - : Uses the length from the center of the shape to the closest side of the reference box. For circles, this is the closest side in any dimension.
    - `farthest-side`
      - : Uses the length from the center of the shape to the farthest side of the reference box. For circles, this is the closest side in any dimension.

- `<position>`
  - : Moves the center of the circle. May be a {{cssxref("length")}}, or a {{cssxref("percentage")}}, or a values such as `left`.

## Examples

### Basic circle

In the example below, the {{cssxref("shape-outside")}} property has a value of `circle(50%)`, which defines a circle on a floated element for the text to flow round.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
