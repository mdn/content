---
title: <ratio>
slug: Web/CSS/ratio
page-type: css-type
browser-compat: css.types.ratio
spec-urls: https://drafts.csswg.org/css-values-4/#ratio-value
---

{{CSSRef}}

The **`<ratio>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) describes the proportional relationship between two values. It mostly represents the aspect ratio, which relates width to height. For example, the `<ratio>` is used as a value for the `aspect-ratio` media feature in {{cssxref("@media")}} media queries, the `aspect-ratio` size feature in {{cssxref("@container")}} container queries, and as a value for the CSS {{cssxref("aspect-ratio")}} property.

## Syntax

The `<ratio>` data type is a {{cssxref("&lt;number&gt;")}} followed by a forward slash ('/', Unicode `U+002F SOLIDUS`) and a second {{cssxref("&lt;number&gt;")}}. Both numbers must be positive. Spaces before and after the slash are optional. The first number represents the width, while the second represents the height. In addition a single {{cssxref("&lt;number&gt;")}} as a value is allowable.

Two ratios are compared using the quotients' numeric values. For example, 16/16 is less than 16/9 because it resolves to 1 while the second resolves to 1.7. This means a tall screen's aspect ratio is smaller than a wide screen's, and portrait images have smaller aspect ratios than landscape images.

### Common aspect ratios

| Ratio                 |                                                                              | Usage                                           |
| --------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------- |
| `4/3` or `1.33333`    | ![A rectangle that is three units tall and four units wide](ratio4_3.png)    | Traditional TV format in the twentieth century. |
| `16/9` or `1.7777778` | ![A rectangle that is nine units tall and sixteen units wide](ratio16_9.png) | Modern "widescreen" TV format.                  |
| `185/100` or `1.85`   | ![A rectangle that is 1 unit tall and 1.85 units wide](ratio1_1.85.png)      | The most common movie format since the 1960s.   |
| `239/100` or `2.39`   | ![A rectangle that is 1 unit tall and 2.39 units wide](ratio1_2.39.png)      | "Widescreen," anamorphic movie format.          |

## Formal syntax

{{csssyntax}}

## Examples

### Use in a media query

```css
@media screen and (min-aspect-ratio: 16/9) {
  /* … */
}
```

### Use in a @container size query

```css
@container (aspect-ratio > 1) and (width < 20em) {
  /* … */
}
```

### Use as a CSS property value

```css
.square {
  aspect-ratio: 1 / 1;
}
.circle {
  aspect-ratio: 1;
  border-radius: 50%;
}
.portrait {
  aspect-ratio: 5 / 7;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`aspect-ratio`](/en-US/docs/Web/CSS/@media/aspect-ratio) media descriptor
- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries) guide
- [Using container size and style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries) guide
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
- [CSS containment](/en-US/docs/Web/CSS/CSS_containment) module
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module
