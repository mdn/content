---
title: Masonry layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
page-type: guide
status:
  - experimental
browser-compat:
  - css.properties.grid-template-columns.masonry
  - css.properties.grid-template-rows.masonry
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 of the [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) specification includes a `masonry` value for {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}}. This guide details what masonry layout is and how to use it.

Masonry layout is a layout method where one axis uses a typical strict grid layout, most often columns, and the other a masonry layout. On the masonry axis, rather than sticking to a strict grid with gaps being left after shorter items, the items in the following row rise up to completely fill the gaps.

## Creating a masonry layout

To create the most common masonry layout, your columns will be the grid axis and the rows the masonry axis. Define this layout with `grid-template-columns` and `grid-template-rows`:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

The child elements of this container will now lay out item by item along the rows, as they would with regular grid layout automatic placement. However, as they move onto a new row the items will display according to the masonry algorithm. Items will load into the column with the most room causing a tightly packed layout without strict row tracks.

{{EmbedGHLiveSample("css-examples/grid/masonry/block-axis.html", '100%', 800)}}

It is also possible to create a masonry layout with items loading into rows.

{{EmbedGHLiveSample("css-examples/grid/masonry/inline-axis.html", '100%', 1000)}}

## Controlling the grid axis

On the grid axis, things will work just as you expect them to in grid layout. You can cause items to span multiple tracks while remaining in auto-placement, using the `span` keyword. Items may also be positioned using line-based positioning.

### Masonry layout with spanning items

In this example two of the items span two tracks, and the masonry items work around them.

{{EmbedGHLiveSample("css-examples/grid/masonry/spanners.html", '100%', 800)}}

This example includes an item which has positioning for columns. Items with definite placement are placed before the masonry layout happens.

{{EmbedGHLiveSample("css-examples/grid/masonry/positioned.html", '100%', 1000)}}

## masonry-auto-flow

The `masonry-auto-flow` property gives you a way to change how the masonry algorithm behaves. Give it a value of `next` and items will display in order on the grid axis, rather than going into whichever track has the most free space. The value `positioned` will ignore items with definite placement and place items in order-modified document order.

{{EmbedGHLiveSample("css-examples/grid/masonry/masonry-auto-flow.html", '100%', 1000)}}

## Fallback

In browsers [that do not support masonry](#browser_compatibility), regular grid auto-placement will be used instead.

## Browser compatibility

{{Compat}}

## See also

- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
