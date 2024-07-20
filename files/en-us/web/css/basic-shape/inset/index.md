---
title: inset()
slug: Web/CSS/basic-shape/inset
page-type: css-function
browser-compat: css.types.basic-shape.inset
---

{{CSSRef}}

The **`inset()`** [CSS](/en-US/docs/Web/CSS) function defines a rectangle at the specified inset distances from each side of the reference box. It is a basic shape function used to define one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types).

{{EmbedInteractiveExample("pages/css/function-inset.html")}}

## Syntax

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Values

- `<length-percentage>{1,4}`

  - : When all of the four arguments are supplied they represent the top, right, bottom, and left offsets from the reference box inward that define the positions of the edges of the inset rectangle. These arguments follow the syntax of the margin shorthand, which let you set all
    four insets with one, two, or four values.

    If a pair of insets for a dimension adds up to more than 100% of that dimension, both values are proportionally reduced so their sum equals 100%. For example, the value `inset(90% 10% 60% 10%)` has a top inset of `90%` and a bottom inset of `60%`. These values are reduced proportionally to `inset(60% 10% 40% 10%)`. Shapes such as this, that enclose no area and have no {{cssxref("shape-margin")}}, do not affect wrapping.

- `<border-radius>`
  - : The optional [`<border-radius>`](/en-US/docs/Web/CSS/border-radius) argument(s) define rounded corners for the inset rectangle using the border-radius shorthand syntax.

## Formal syntax

{{csssyntax}}

## Examples

### Basic inset example

In the example below we have an `inset()` shape used to pull content over the floated element. Change the offset values to see how the shape changes.

```html
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

```css
.box {
  width: 400px;
  margin: 0 auto;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  clip-path: inset(45px 50px 15px 0 round 50px);
  shape-outside: inset(40px 40px 10px 0 round 50px);
  background-color: coral;
  border-radius: 20px;
  margin: 0;
  padding: 20px;
}
```

{{EmbedLiveSample("Basic inset example", '100%', 280)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- [Guide to basic shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
