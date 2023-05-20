---
title: polygon()
slug: Web/CSS/basic-shape/polygon
page-type: css-function
browser-compat: css.types.basic-shape.polygon
---

{{CSSRef}}

The **`polygon()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Types).

{{EmbedInteractiveExample("pages/css/function-polygon.html")}}

## Syntax

```css
clip-path: polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%);
```

### Values

- `<fill-rule>`
  - : An optional value of `nonzero` (the default when omitted) or `evenodd`, which specifies the [filling rule](/en-US/docs/Web/SVG/Attribute/fill-rule).
- `[<length-percentage><length-percentage>]#`
  - : Three or more pairs of values (a polygon must at least draw a triangle). These values are co-ordinates drawn with reference to the reference box.

## Examples

### Basic polygon() example

In this example a shape is created for text to follow using the `polygon()`, you can change any of the values to see how the shape is changed.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/polygon.html", '100%', 800)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
