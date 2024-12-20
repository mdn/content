---
title: circle()
slug: Web/CSS/basic-shape/circle
page-type: css-function
browser-compat: css.types.basic-shape.circle
---

{{CSSRef}}

The **`circle()`** CSS [function](/en-US/docs/Web/CSS/CSS_Functions) defines a circle using a radius and a position. It is one of the {{cssxref("&lt;basic-shape&gt;")}} data types.

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
      - : Uses the length from the center of the shape to the farthest side of the reference box. For circles, this is the farthest side in any dimension.

- `<position>`
  - : Moves the center of the circle. May be a {{cssxref("length")}}, or a {{cssxref("percentage")}}, or a values such as `left`. The `<position>` value defaults to center if omitted.

## Formal syntax

{{csssyntax}}

## Examples

### Basic circle

In the example below, the {{cssxref("shape-outside")}} property has a value of `circle(50%)`, which defines a circle on a floated element for the text to flow round.

```html live-sample___circle
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
