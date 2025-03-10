---
title: <position>
slug: Web/CSS/position_value
page-type: css-type
browser-compat: css.types.position
---

{{CSSRef}}

The **`<position>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) denotes a two-dimensional coordinate used to set a location relative to an element box. It is used in the {{cssxref("background-position")}}, {{cssxref("object-position")}}, {{cssxref("mask-position")}} {{cssxref("offset-position")}}, {{cssxref("offset-anchor")}} and {{cssxref("transform-origin")}} properties.

> [!NOTE]
> The final position described by the `<position>` value does not need to be inside the element's box.

## Syntax

![Grid showing placement of various values. 0 0 is the top left corner. The four values, right, right center, center left 100%, and top 50% left 100%, are all equivalent, being on the right edge in the middle vertically. The two values, top 75px left 100px and left 100px top 75px, are the same. Bottom left 25% is the same as top 100% left 25%.](position_type.png)

The `<position>` data type is specified with one or two keywords, with optional offsets.

The keyword values are `center`, `top`, `right`, `bottom`, and `left`. Each keyword represents either an edge of the element's box or the center line between two edges. Depending on the context, `center` represents either the center between the left and right edges, or the center between the top and bottom edges.

If specified, an offset can be either a relative {{cssxref("&lt;percentage&gt;")}} value or an absolute {{cssxref("&lt;length&gt;")}} value. Positive values are offset towards the right or the bottom, whichever is appropriate. Negative values are offset in the opposite directions.

If only a single offset value is specified, it defines the x-coordinate, with the value for the other axis defaulting to `center`.

```css
/* 1-value syntax */
keyword                  /* Either the horizontal or vertical position; the other axis defaults to center */
value                    /* The position on the x-axis; the y-axis defaults to 50% */

/* 2-value syntax */
keyword keyword          /* A keyword for each direction (the order is irrelevant) */
keyword value            /* A keyword for horizontal position, value for vertical position */
value keyword            /* A value for horizontal position, keyword for vertical position */
value value              /* A value for each direction (horizontal then vertical) */

/* 4-value syntax */
keyword value keyword value /* Each value is an offset from the keyword that precedes it */
```

> [!NOTE]
> The {{cssxref("background-position")}} property also accepts a three-value syntax. This is not allowed in other properties that use `<position>`.

## Interpolation

When animated, a point's abscissa and ordinate values are interpolated independently. However, because the speed of the interpolation is determined by a single [easing function](/en-US/docs/Web/CSS/easing-function) for both coordinates, the point will move in a straight line.

## Formal syntax

{{csssyntax}}

## Examples

### Valid positions

```plain example-good
center
left
center top

right 8.5%
bottom 12vmin right -6px

10% 20%
8rem 14px
```

### Invalid positions

```plain example-bad
left right
bottom top
10px 15px 20px 15px
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module
- [Learn: CSS Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- {{cssxref("background-position")}}
- {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
- {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
