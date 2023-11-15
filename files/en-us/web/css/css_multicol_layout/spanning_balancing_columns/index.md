---
title: Spanning and balancing columns
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
page-type: guide
---

{{CSSRef}}

In this guide, we look at how to make elements span across columns inside the multi-column (_multicol_) container and how to control how the columns are filled.

## Spanning the columns

To cause an item to span across columns, use the {{cssxref("column-span")}} property with a value of `all`. This will cause the element to become a _spanner_, spanning all the columns.

Any descendant element of the multicol container may be turned into a spanner, including both direct and indirect children. For example, a heading nested directly inside the container could become a spanner, as could a heading nested inside a {{HTMLElement("section")}} nested inside the multicol container.

In the example below, the `<h2>` element is set to `column-span: all` and spans all of the columns.

{{EmbedGHLiveSample("css-examples/multicol/spanning/h2-span.html", '100%', 800)}}

In this second example, the heading is inside an {{HTMLElement("article")}} element, yet still spans the content as expected.

{{EmbedGHLiveSample("css-examples/multicol/spanning/nested-h2-span.html", '100%', 800)}}

When a spanner is introduced, it breaks the flow of columns; columns restart after the spanner, effectively creating a new set of column boxes. The content does not jump over a spanning element.

### Limitations of column-span

The `column-span` can have only two values. The initial value `none` means the item does not span and remains within a column. The value `all` means the item spans all of the columns. There are no values that enable partial spanning, such as having an item span two out of three columns.

### Things to watch out for

If the spanning element is inside another element with margins, padding, and a border or background color, the box may appear above the spanner with the rest of the content being displayed below. For this reason, care should be taken when setting an element to span all the columns, ensuring this scenario is accounted for.

{{EmbedGHLiveSample("css-examples/multicol/spanning/mpb-span.html", '100%', 800)}}

Additionally, if a spanning element appears later in the content, it can cause unexpected or unwanted behavior when there is not enough content to create columns after the spanner. Use spanning carefully and test at various breakpoints to make sure you get the effect you intended.

## Filling and balancing columns

A balanced set of columns is where all columns have approximately the same amount of content. Filling and balancing are relevant when the amount of content does not match the amount of space provided, such as when a {{CSSXref("height")}} is declared on the container.

The initial value for {{cssxref("column-fill")}} is `balance`. The value of `balance` means all columns are as balanced as possible. In fragmented contexts, such as [paged media](/en-US/docs/Web/CSS/CSS_paged_media), only the last fragment is balanced. This means that on the last page, the final set of column boxes is balanced.

The other balancing value, `balance-all`, balances all columns in fragmented contexts.

The columns in this example contain an image and some text, which are balanced. The image, which cannot break, is in the first column. The other columns are balanced, filling with equal amounts of text.

{{EmbedGHLiveSample("css-examples/multicol/balancing/balance.html", '100%', 550)}}

The `auto` value for `column-fill` fills a column sequentially, filling the first column in the inline-start direction, before placing content in subsequent columns, rather than balancing and filling all the columns equally. In this example, we changed `column-fill` to `auto`. The columns are filled to the height of the container, leaving empty columns at the end.

{{EmbedGHLiveSample("css-examples/multicol/balancing/auto.html", '100%', 550)}}

## Next steps

In the next guide, you will learn [how multicol handles overflow](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout) within columns and when there are more columns than can fit in the container.
