---
title: <position-area>
slug: Web/CSS/position-area_value
page-type: css-type
status:
  - experimental
browser-compat: css.properties.position-area
---

{{CSSRef}}{{SeeCompatTable}}

The **`<position-area>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) defines the cell or spanned cells of a **position-area grid**, a 3x3 grid whose center cell is an anchor element.

The `<position-area>` keyword values can be set as the value of the {{cssxref("position-area")}} property to place an anchor-positioned element in a specific location relative to its associated anchor element.

## Syntax

```plain
<position-area> = [
  [ left | center | right | span-left | span-right | x-start | x-end | span-x-start | span-x-end | x-self-start | x-self-end | span-x-self-start | span-x-self-end | span-all ]
||
  [ top | center | bottom | span-top | span-bottom | y-start | y-end | span-y-start | span-y-end | y-self-start | y-self-end | span-y-self-start | span-y-self-end | span-all ]
|
  [ block-start | center | block-end | span-block-start | span-block-end | span-all ]
||
  [ inline-start | center | inline-end | span-inline-start | span-inline-end | span-all ]
|
  [ self-block-start | self-block-end | span-self-block-start | span-self-block-end | span-all ]
||
  [ self-inline-start | self-inline-end | span-self-inline-start | span-self-inline-end | span-all ]
|
  [ start | center | end | span-start | span-end | span-all ]{1,2}
|
  [ self-start | center | self-end | span-self-start | span-self-end | span-all ]{1,2}
]
```

## Description

Position areas work on the concept of a **position-area grid**, a 3x3 grid of tiles composed of four grid lines, two on each axis, with an anchor element being the center tile:

![The position-area grid, as described below](position-area.png)

When used as the value of a positioned element's `position-area` property, the dimensions of the center tile are defined by the [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) of the element's default anchor element. The dimensions of the grid's outer edge are defined by the positioned element's containing block. Logical keyterms are generally based on the writing mode and direction of the containing block, except for the `self-*` keyterms, which are calculated from the writing mode of the anchor-positioned element.

The grid tiles are broken up into rows and columns:

- The three rows are represented by the physical values `top`, `center`, and `bottom`. They also have logical equivalents such as `block-start`, `center`, and `block-end`, and coordinate equivalents — `y-start`, `center`, and `y-end`.
- The three columns are represented by the physical values `left`, `center`, and `right`. They also have logical equivalents such as `inline-start`, `center`, and `inline-end`, and coordinate equivalents — `x-start`, `center`, and `x-end`.

`<position-area>` values contain one or two keywords defining a specific area of the position-area grid. Setting a `position-area` value on a positioned element places its containing block in the specified grid area:

```css
/* Examples: Two keywords to place the element in a single specific tile */
position-area: top left;
position-area: bottom right;
position-area: start end;
position-area: center end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center y-self-end;

/* Examples: Two keywords to span the element across two tiles */
position-area: top span-left;
position-area: span-bottom right;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Examples: Two keywords to span the element across three tiles */
position-area: top span-all;
position-area: block-end span-all;
position-area: x-self-start span-all;

/* Examples: One keyword with an implicit second keyword  */
position-area: top; /* equiv: top span-all */
position-area: inline-start; /* equiv: inline-start span-all */
position-area: center; /* equiv: center center */
position-area: span-all; /* equiv: center center */
position-area: start; /* equiv: start start */
position-area: end; /* equiv: end end */
```

The different types of keywords that can be used include:

- [Physical grid keywords](#physical_grid_keywords)
- [Generic logical row and column keywords](#generic_logical_row_and_column_keywords)
- [Explicit inline and block logical keywords](#explicit_inline_and_block_logical_keywords)
- [Coordinate grid keywords](#coordinate_grid_keywords)

> [!NOTE]
> Generally, you can't mix different types in one value, e.g. physical and logical. To do so results in invalid values. For example, `position-area: bottom inline-end` is not a valid value because it mixes physical and logical keywords.

## Physical grid keywords

The physical grid keywords specify a cell or section of the `position-area` grid using physical values. These values are not affected by {{cssxref("writing-mode")}} or {{cssxref("direction")}} settings.

With physical row and column keywords, you can specify one keyword from each of the two lists below to select a single specific grid tile:

- `top`, `center`, or `bottom`: The top, center, or bottom row of the grid.
- `left`, `center`, or `right`: The left-hand, center, or right-hand column of the grid.

For example, `top left` selects the top left tile, while `center right` selects the center tile of the right-hand column.

### Physical spanning grid keywords

The physical spanning keywords — when combined with a physical row or column keyword — specify a second grid tile for the position area to expand into. When such a combination is set as a `position-area` property value, a selected element is initially placed in the center of the specified row or column; it then spans in the direction specified in the spanning keyword, spanning two grid tiles:

- `span-left`

  - : Span the center column and the left-hand column of the grid.

- `span-right`

  - : Span the center column and the right-hand column of the grid.

- `span-top`

  - : Span the center row and the top row of the grid.

- `span-bottom`

  - : Span the center row and the bottom row of the grid.

- `span-all`

  - : Valid with all the keyword types, spans the cell listed as well as the adjacent cells in the same row or column. See [`span-all`](#span-all_2) below.

For example, `top span-left` spans the top-center and top-left grid cells.

> [!NOTE]
> Trying to pair a row or column keyword with an inappropriate spanning keyword will result in an invalid value. For example, `right span-right` is invalid — you can't select the center-right grid tile and then try to span further to the right.

### Physical grid keyword defaults

If only a single physical keyword is specified in the `position-area` value, the other value is implied as follows:

- `left`, `right`, `top`, or `bottom`

  - : The other value defaults to [`span-all`](#span-all_2), causing the element to span all three tiles of the grid or row it was initially placed in. For example, `left` is equivalent to `left span-all`.

- `center`, `span-left`, `span-right`, `span-top`, or `span-bottom`

  - : The other value defaults to `center`. For example, `span-left` is equivalent to `center span-left` and `center` is equivalent to `center center`.

## Logical grid keywords

The logical grid keywords specify an area of the position area grid using logical values. With these values, the position and direction are affected by {{cssxref("writing-mode")}} and {{cssxref("direction")}} settings on either the element's [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) or, in the case of the `self` keywords, the positioned element itself. There are two types of logical keywords; generic and explicit.

### Generic logical row and column keywords

The generic logical keywords use the same terms for the inline and block directions, with the direction determined by the position of the keyterm within a pair of `<position-area>` values. The first value defines the block direction position and the second value defines the inline value. You can specify one or two keyterms from the following list. Specifying two from this list defines a single specific grid tile. The keyword position or direction is:

- `start`

  - : The start of the grid's block or inline direction, calculated from the containing block's writing mode.

- `end`

  - : The end of the grid's block or inline direction, calculated from the containing block's writing mode.

- `self-start`

  - : The start of the grid's block or inline direction, calculated from the element's own writing mode.

- `self-end`

  - : The end of the grid's block or inline direction, calculated from the element's own writing mode.

- `center`

  - : The center of the grid's block direction (if this keyword is specified first) or inline direction (if this keyword is specified second).

For example, `start end` and `self-start self-end` both describe the position at the start of the block direction and the end of the inline direction. With `writing-mode: horizontal-tb` set, this is the top right of the anchor element, whereas with `writing-mode: vertical-rl` it is the bottom right of the anchor.

#### Generic logical spanning row and column keywords

The generic logical spanning keywords — when combined with a logical row or column keyword — specify a second grid tile for the position area to expand into. When such a combination is set as a `position-area` property value, a selected element is initially placed in the center of the specified row or column, and it then spans in the direction specified in the spanning keyword, spanning two grid tiles:

- `span-start`

  - : Span the center tile and the start tile of the grid row/column, with the direction referring to the writing mode of the element's containing block.

- `span-end`

  - : Span the center tile and the end tile of the grid row/column, with the direction referring to the writing mode of the element's containing block.

- `span-self-start`

  - : Span the center tile and the start tile of the grid row/column for the positioned element's own writing mode.

- `span-self-end`

  - : Span the center tile and the end tile of the grid row/column, calculated from the element's own writing mode.

For example, `start span-end` and `self-start span-self-end` both specify a grid position area that starts in the center of the start block row, and spans across the tiles in that row that sit in the inline center and end columns. With `writing-mode: horizontal-tb` set, this would span over the top center and top right of the anchor, whereas with `writing-mode: vertical-rl` set it would span the element over the right center and bottom right.

### Explicit inline and block logical keywords

The explicit inline and block logical row and column keywords refer explicitly to a block (row) or inline (column) position. You can specify one keyword for the block direction and one for the inline direction to select a single specific grid tile. Unlike with generic logical keyword values, the keyword order doesn't matter. However, declaring two keywords in the same axis invalidates the value.

- `block-start`

  - : The start of the grid's block direction calculated from the containing block's writing mode.

- `block-end`

  - : The end of the grid's block direction calculated from the containing block's writing mode.

- `inline-start`

  - : The start of the grid's inline direction calculated from the containing block's writing mode.

- `inline-end`

  - : The end of the grid's inline direction calculated from the containing block's writing mode.

For example, `block-start inline-end` specifies the tile at the start of the block direction and the end of the inline direction. With `writing-mode: horizontal-tb` set, this would be the tile at the top-right of the anchor, whereas with `writing-mode: vertical-rl` set this would be the tile at the bottom-right.

> [!NOTE]
> The specification defines `self` equivalents of these keywords — `block-self-start`, `block-self-end`, `inline-self-start`, and `inline-self-end`. However, these are not currently supported in any browser.

#### Explicit inline and block logical spanning keywords

The explicit logical spanning keywords — when combined with a logical row or column keyword — specify a second grid tile for the position area to expand into. When such a combination is set as a `position-area` property value, a selected element is initially placed in the center of the specified row or column, based on the containing block's writing mode, and it then spans in the direction specified in the spanning keyword, spanning two grid tiles:

- `span-block-start`

  - : Span the center tile and the block-start tile of the specified inline column.

- `span-block-end`

  - : Span the center tile and the block-end tile of the specified inline column.

- `span-inline-start`

  - : Span the center tile and the inline-start tile of the specified block row.

- `span-inline-end`

  - : Span the center tile and the inline-end tile of the specified block row.

For example, `block-end span-inline-start` selects the center tile of the end block row and spans across the tiles in that row that sit in the inline center and start columns. With `writing-mode: horizontal-tb` set, this would span the bottom-center and bottom-left grid tiles, whereas with `writing-mode: vertical-rl` set it would span the left-center and top-left grid tiles.

> [!NOTE]
> The specification defines `self` equivalents of these keywords, for example — `span-self-block-start`, `span-self-block-end`, `span-self-inline-start`, and `span-self-inline-end`. However, these are not currently supported in any browser.

> [!NOTE]
> Trying to pair a row or column keyword with an inappropriate spanning keyword will result in an invalid property value. For example, `block-end span-block-end` is invalid — you can't select the center block-end row and then try to span one tile further past the block end direction.

### Logical grid keyword defaults

If only a single logical `<position-area>` keyword is specified, the other value is implied as follows:

- `start`, `end`, `self-start`, or `self-end`

  - : The other value defaults to the same as the first value, selecting the grid cell at the start row and column, or the end row and column.

- `span-start`, `span-self-start`, `span-end`, `span-self-end`

  - : The other value defaults to `center`. For example, `span-start` is equivalent to `span-start center`.

- `block-start`, `block-end`, `inline-start`, `inline-end`

  - : The other value defaults to [`span-all`](#span-all_2), spanning all three tiles of the column or row set. For example, `block-start` is equivalent to `block-start span-all`.

- `span-block-start`, `span-block-end`, `span-inline-start`, `span-inline-end`

  - : The other value defaults to `center`. For example, `span-inline-start` is equivalent to `span-inline-start center`.

## Coordinate grid keywords

These keywords specify the cells of the `position-area` grid using x- and y-coordinate values. Its position/direction will be affected by {{cssxref("writing-mode")}} and/or {{cssxref("direction")}} settings on either an element's [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) or, in the case of the `self` keywords, the element itself.

However, the grid cells are defined according to physical axes rather than block/inline directions:

- For `writing-mode: horizontal-tb` and `vertical-lr`, the x-axis runs left-to-right and the y-axis runs top-to-bottom.
- For `writing-mode: horizontal-tb; direction: rtl` and `writing-mode: vertical-rl`, the x-axis runs right-to-left and the y-axis runs top-to-bottom.

With coordinate row and column keywords, you can specify one keyword from the x-axis and one from the y-axis to define a single specific grid tile.

The x-axis keywords include:

- `x-start`

  - : The start tile along the grid's x-axis, calculated from the containing block's writing mode.

- `x-end`

  - : The end tile along the grid's x-axis, calculated from the containing block's writing mode.

- `x-self-start`

  - : The start tile along the grid's x-axis, calculated from the element's own writing mode.

- `x-self-end`

  - : The end tile along the grid's x-axis, calculated from the element's own writing mode.

- `center`

  - : The center of the grid's x-axis, calculated from the element's own writing mode.

The y-axis keywords include:

- `y-start`

  - : The start tile along the grid's y-axis, calculated from the containing block's writing mode.

- `y-end`

  - : The end tile along the grid's y-axis, calculated from the containing block's writing mode.

- `y-self-start`

  - : The start tile along the grid's y-axis, calculated from the element's own writing mode.

- `y-self-end`

  - : The end tile along the grid's y-axis, calculated from the element's own writing mode.

- `center`

  - : The center of the grid's y-axis, calculated from the element's own writing mode.

For example, `x-end y-start` and `x-self-end y-self-start` both select the grid cell at end of the x-axis and the start of the y-axis. With `writing-mode: horizontal-tb` set, this would be the cell to the top right of the anchor, whereas with `writing-mode: vertical-rl` is at the top left.

### Coordinate spanning keywords

When combined with a coordinate row or column keyword, the coordinate-spanning keywords specify a second grid tile for the position area to expand into. When such a combination is set as a `position-area` property value, a selected element is initially placed in the center of the specified row or column, and it then spans in the direction specified in the spanning keyword, spanning two grid tiles:

- `span-x-start`

  - : Span the center tile and the x-start tile of the specified y-axis row.

- `span-x-end`

  - : Span the center tile and the x-end tile of the specified y-axis row.

- `span-y-start`

  - : Span the center tile and the y-start tile of the specified x-axis column.

- `span-y-end`

  - : Span the center tile and the y-end tile of the specified x-axis column.

For example, `y-end span-x-end` selects the tile at the center of the end y-row, and spans across the tiles in that row that sit in the x-center and x-end columns. With `writing-mode: horizontal-tb` set, the position grid area would span the grid tiles at the bottom-center and bottom-right, whereas with `writing-mode: vertical-rl` set it would span the bottom-center and bottom-left tiles.

> [!NOTE]
> The specification doesn't define separate coordinate `self` spanning keywords, but these are not needed — the spanning keywords can be used with both coordinate row and column keywords.

### Coordinate grid keyword defaults

If only a single coordinate grid `<position-area>` keyword is specified, the other value is implied as follows:

- `x-start`, `x-self-start`, `x-end`, `x-self-end`, `y-start`, `y-self-start`, `y-end`, or `y-self-end`

  - : The other value defaults to [`span-all`](#span-all_2), selecting the grid tiles spanning all three tiles of the column or row it was initially placed in. For example, `x-start` is equivalent to `x-start span-all`.

- `span-x-start`, `span-x-end`, `span-y-start`, or `span-y-end`

  - : The other value defaults to `center`. For example, `span-start` is equivalent to `span-start center`.

## `span-all`

`span-all` is a special keyword usable with all of the row and column keywords listed in the sections above. When you specify two values — a row/column keyword and `span-all`, the element is placed in the specified row or column, and it then spans all of the tiles in that row or column.

## Examples

See the {{cssxref("position-area")}} property page.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-area")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [`anchor()`](/en-US/docs/Web/CSS/anchor) function
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
