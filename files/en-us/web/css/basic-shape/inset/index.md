---
title: inset()
slug: Web/CSS/basic-shape/inset
page-type: css-function
browser-compat: css.types.basic-shape.inset
---

{{CSSRef}}

The **`inset()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types). It defines an inset rectangle.

{{EmbedInteractiveExample("pages/css/function-inset.html")}}

## Syntax

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Values

- `<length-percentage>{1,4}`
  - : When all of the four arguments are supplied they represent the top, right, bottom and left offsets from the reference box inward that define the positions of the edges of the inset rectangle. These arguments follow the syntax of the margin shorthand, that let you set all four insets with one, two or four values.
- `<border-radius>`
  - : The optional [`<border-radius>`](/en-US/docs/Web/CSS/border-radius) argument(s) define rounded corners for the inset rectangle using the border-radius shorthand syntax.

## Examples

### Basic inset example

In the example below we have an `inset()` shape used to pull content over the floated element. Change the offset values to see how the shape changes.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
