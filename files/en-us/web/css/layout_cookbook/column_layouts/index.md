---
title: Column layouts
slug: Web/CSS/Layout_cookbook/Column_layouts
page-type: guide
---

{{CSSRef}}

You will often need to create a layout which has a number of columns, and CSS provides several ways to do this. Whether you use [Multi-column](/en-US/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout), or [Grid](/en-US/docs/Web/CSS/CSS_grid_layout) layout will depend on what you are trying to achieve, and in this recipe we explore these options.

![three different styles of layouts which have two columns in the container.](cookbook-multiple-columns.png)

## Requirements

There are a number of design patterns you might want to achieve with your columns:

- [A continuous thread of content broken up into newspaper-style columns](#a_continuous_thread_of_content_—_multi-column_layout).
- [A single row of items arranged as columns, with all heights being equal](#a_single_row_of_items_with_equal_heights_—_flexbox).
- [Multiple rows of columns lined up by row and column](#lining_items_up_in_rows_and_columns_—_grid_layout).

## The recipes

You need to choose different layout methods in order to achieve your requirements.

### A continuous thread of content — multi-column layout

If you create columns using multi-column layout your text will remain as a continuous stream filling each column in turn. The columns must all be the same size, and you are unable to target an individual column or the content of an individual column.

You can control the gaps between columns with the {{cssxref("column-gap")}} or {{cssxref("gap")}} properties, and add a rule between columns using {{cssxref("column-rule")}}.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-multicol.html", '100%', 720)}}

In this example, we used the {{cssxref("column-width")}} property to set a minimum width that the columns need to be before the browser adds an additional column. The {{cssxref("columns")}} shorthand property can be used to set the `column-width` and {{cssxref("column-count")}} properties, either of which can define the maximum number of columns allowed.

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-multicol--download.html)

Use multicol when:

- You want your text to display in newspaper-like columns.
- You have a set of small items you want to break into columns.
- You do not need to target individual column boxes for styling.

### A single row of items with equal heights — flexbox

Flexbox can be used to break content into columns by setting {{cssxref("display", "display: flex;")}} to make a parent element a flex-container. Just adding this one property turns all the children (child elements, pseudo-elements, and text nodes) into flex items along a single line. Setting the same {{cssxref("flex")}} shorthand property with a single numeric value distributes all the available space equally, generally making all the flex items the same size as long as none have non-wrapping content forcing the item to be larger.

Margins or the `gap` property can be used to create gaps between items, but there is currently no CSS property that adds rules between flex items.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox--download.html)

To create a layout with flex items that wrap onto new rows, set the {{cssxref("flex-wrap")}} property on the container to `wrap`. Note that each flex line distributes space for that line only. Items in one line will not necessarily line up with items on other lines, as you'll see in the example below. This is why flexbox is described as one-dimensional. It is designed for controlling layout as a row or a column, but not both at the same time.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox-wrapping.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox-wrapping--download.html)

Use flexbox:

- For single rows or columns of items.
- When you want to do alignment on the cross axis after laying out your items.
- When you are happy for wrapped items to share out space along their line only and not line up with items in other lines.

### Lining items up in rows and columns — grid layout

If you want a two-dimensional grid where items line up in rows _and_ columns, then you should choose CSS grid layout. Similar to how flexbox works on the direct children of the flex container, grid layout works on the direct children of the grid container. Just set {{cssxref("display", "display: grid;")}} on the container. Properties set on this container — like {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} — define how the items are distributed along rows and columns.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-grid.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-grid--download.html)

Use grid:

- For multiple rows or columns of items.
- When you want to be able to align the items on the block and inline axes.
- When you want items to line up in rows and columns.

## Resources on MDN

- [Guide to Multi-column Layout](/en-US/docs/Web/CSS/CSS_multicol_layout)
- [Guide to flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [Guide to CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout)
