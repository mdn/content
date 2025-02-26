---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
page-type: css-function
browser-compat: css.types.basic-shape.ellipse
---

{{CSSRef}}

The **`ellipse()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types).

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
  - : Moves the center of the ellipse. May be a {{cssxref("length")}}, or a {{cssxref("percentage")}}, or a values such as `left`. The `<position>` value defaults to center if omitted.

## Formal syntax

{{csssyntax}}

## Examples

### Basic ellipse() example

This example shows an ellipse that is floated left that has a horizontal radius of 40%, a vertical radius of 50%, and a left position. This means that the center of the ellipse is on the left edge of the box giving us a half ellipse shape to wrap our text around.
Click "Play" in the code blocks to change these values to see how the ellipse changes:

```html live-sample___ellipse
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### Using closest-side / farthest-side values

The keyword values of `closest-side` and `farthest-side` are useful to create a quick ellipse based on the size of the floated element reference box.

```html live-sample___ellipse-keywords
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
