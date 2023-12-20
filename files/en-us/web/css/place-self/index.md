---
title: place-self
slug: Web/CSS/place-self
page-type: css-shorthand-property
browser-compat: css.properties.place-self
---

{{CSSRef}}

The **`place-self`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) allows you to align an individual item in both the block and inline directions at once (i.e. the {{cssxref("align-self")}} and {{cssxref("justify-self")}} properties) in a relevant layout system such as [Grid](/en-US/docs/Web/CSS/CSS_grid_layout) or [Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout). If the second value is not present, the first value is also used for it.

{{EmbedInteractiveExample("pages/css/place-self.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`align-self`](/en-US/docs/Web/CSS/align-self)
- [`justify-self`](/en-US/docs/Web/CSS/justify-self)

## Syntax

```css
/* Keyword values */
place-self: auto center;
place-self: normal start;

/* Positional alignment */
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;

/* Baseline alignment */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Global values */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: revert-layer;
place-self: unset;
```

### Values

- `auto`
  - : Computes to the parent's {{cssxref("align-items")}} value.
- `normal`

  - : The effect of this keyword is dependent of the layout mode we are in:

    - In absolutely-positioned layouts, the keyword behaves like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.
    - In static position of absolutely-positioned layouts, the keyword behaves as `stretch`.
    - For flex items, the keyword behaves as `stretch`.
    - For grid items, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.
    - The property doesn't apply to block-level boxes, and to table cells.

- `self-start`
  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's start side in the cross axis.
- `self-end`
  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's end side in the cross axis.
- `flex-start`
  - : The cross-start margin edge of the flex item is flushed with the cross-start edge of the line.
- `flex-end`
  - : The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.
- `center`
  - : The flex item's margin box is centered within the line on the cross-axis. If the cross-size of the item is larger than the flex container, it will overflow equally in both directions.
- `baseline`, `first baseline`. `last baseline`
  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.
    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.
- `stretch`
  - : If the combined size of the items along the cross axis is less than the size of the alignment container and the item is `auto`-sized, its size is increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref("max-height")}}/{{cssxref("max-width")}} (or equivalent functionality), so that the combined size of all `auto`-sized items exactly fills the alignment container along the cross axis.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Simple demonstration

In the following example we have a simple 2 x 2 grid layout. Initially the grid container has [`justify-items`](/en-US/docs/Web/CSS/justify-items) and [`align-items`](/en-US/docs/Web/CSS/align-items) values of `stretch` — the defaults — which causes the grid items to stretch across the entire width of their cells.

The second, third, and fourth grid items are then given different values of `place-self`, to show how these override the default placements. These values cause the grid items to span only as wide/tall as their content width/height, and align in different positions across their cells, in the block and inline directions.

#### HTML

```html
<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
  <span>Fourth</span>
</article>
```

#### CSS

```css
html {
  font-family: helvetica, arial, sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
}

span:nth-child(2) {
  place-self: start center;
}

span:nth-child(3) {
  place-self: center start;
}

span:nth-child(4) {
  place-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}
```

#### Result

{{EmbedLiveSample('Simple_demonstration', '100%', 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)_
- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)_
- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_box_alignment)
- The {{cssxref("align-self")}} property
- The {{cssxref("justify-self")}} property
