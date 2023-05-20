---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
page-type: css-function
browser-compat: css.types.basic-shape.ellipse
---

{{CSSRef}}

The **`ellipse()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types).

{{EmbedInteractiveExample("pages/css/function-ellipse.html")}}

## Syntax

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

An ellipse is essentially a squashed circle and so `ellipse()` acts in a very similar way to {{cssxref("basic-shape/circle","circle()")}} except that we have to specify two radii x and y.

### Values

- `<shape-radius>`

  - : Two radii, x and y in that order. These may be a {{cssxref("length")}}, or a {{cssxref("percentage")}} or values `closest-side` and `farthest-side`.

    - `closest-side`
      - : Uses the length from the center of the shape to the closest side of the reference box. For ellipses, this is the closest side in the radius dimension.
    - `farthest-side`
      - : Uses the length from the center of the shape to the farthest side of the reference box. For ellipses, this is the farthest side in the radius dimension.

- `<position>`
  - : Moves the center of the ellipse. May be a {{cssxref("length")}}, or a {{cssxref("percentage")}}, or a values such as `left`.

## Examples

### Basic ellipse() example

This example shows an ellipse with an x radius of 40%, a y radius of 50% and the position being left. This means that the center of the ellipse is on the left edge of the box giving us a half ellipse shape to wrap our text around. You can change these values to see how the ellipse changes.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

### Using closest-side / farthest-side values

The keyword values of `closest-side` and `farthest-side` are useful to create a quick ellipse based on the size of the floated element reference box.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
