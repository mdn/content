---
title: polygon()
slug: Web/CSS/basic-shape/polygon
page-type: css-function
browser-compat: css.types.basic-shape.polygon
---

{{CSSRef}}

The **`polygon()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types). It's used to draw a [polygon](https://en.wikipedia.org/wiki/Polygon) by providing one or more pairs of coordinates, each of which represents a vertex of the shape.

{{EmbedInteractiveExample("pages/css/function-polygon.html")}}

## Syntax

```css
clip-path: polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%);
clip-path: polygon(0px 0px, 200px 100px, 0px 200px);
clip-path: polygon(0% 0px, 100% 100px, 0px 100%);
clip-path: polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%);
```

### Values

- [`<fill-rule>`](/en-US/docs/Web/SVG/Attribute/fill-rule)
  - : An optional value of `nonzero` (the default when omitted) or `evenodd`, which specifies the filling rule.
- {{cssxref("length-percentage")}}
  - : Each vertex of the polygon is represented with a pair of `<length-percentage>` values, which give the coordinates of the vertex relative to the shape's [reference box](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box).

### Formal syntax

{{csssyntax}}

## Examples

### Setting a polygon for shape-outside

In this example a shape is created for text to follow using the {{cssxref("shape-outside")}} property. We've drawn the reference box for the shape, to help understand how the polygon is calculated.

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
  width: 300px;
}

.shape {
  float: left;
  shape-outside: polygon(0px 0px, 80.67% 17.17%, 200px 150px, 0px 189px) border-box;
  width: 200px;
  height: 200px;
  border: 1px solid red;
}

p {
  font-size: 0.8rem;
}
```

{{EmbedLiveSample("Setting a polygon for shape-outside", '100%', 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
