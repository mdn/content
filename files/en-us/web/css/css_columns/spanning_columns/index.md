---
title: Spanning and balancing columns
slug: Web/CSS/CSS_Columns/Spanning_Columns
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
---
{{CSSRef}}

In this guide, we look at how to make elements span across columns inside the multi-column (_multicol_) container and how to control how the columns are filled.

> **Note:** The spanning and balancing functionality covered in this guide is not as well supported across browsers as the functionality covered in the previous two sections in this guide.

## Spanning the columns

To cause an item to span across columns use the property {{cssxref("column-span")}} with a value of `all`. This will cause the element to span all of the columns.

Any descendant element of the multicol container may become a _spanner_ including both direct and indirect children. For example, a heading nested directly inside the container could become a spanner, as could a heading nested inside a section nested inside the multicol container.

In the example below, the h2 element is set to `column-span: all` and spans all of the columns.

{{EmbedGHLiveSample("css-examples/multicol/spanning/h2-span.html", '100%', 800)}}

In this second example, the heading is inside an {{HTMLElement("article")}} element, yet still spans the content as expected.

{{EmbedGHLiveSample("css-examples/multicol/spanning/nested-h2-span.html", '100%', 800)}}

When a spanner is introduced, it breaks the flow of columns and columns restart after the spanner, effectively creating a new set of column boxes. The content does not jump over a spanning element.

### Limitations of column-span

In the current level 1 specification, there are only two allowable values for `column-span`. The value `none` is the initial value and means that the item does not span and remains within a column. The value `all` means that the item spans all of the columns. This means that, for example, you cannot cause an item to span two out of three columns.

### Things to watch out for

If the spanning element is inside another element which has margins, padding and a border or a background color, it is possible to end up with the top of the box appearing above the spanner and the rest displaying below, as shown in the next example. For this reason, some care should be taken when deciding to make an element a spanner and ensure this scenario is accounted for.

{{EmbedGHLiveSample("css-examples/multicol/spanning/mpb-span.html", '100%', 800)}}

Additionally, if a spanning element appears later in the content it can cause unexpected or unwanted behavior when there is not enough content to create columns after the spanner. Use spanning carefully and test at various breakpoints to make sure you get the intended effect.

## Filling and balancing columns

A balanced set of columns is where all columns have approximately the same amount of content. Filling and balancing comes into play when the amount of content does not match the amount of space provided, such as when a height is declared on the container.

The initial value of multicol for {{cssxref("column-fill")}} is `balance`. The value of balance means all columns are as balanced as is possible. In fragmented contexts such as [Paged Media](/en-US/docs/Web/CSS/CSS_Pages), only the last fragment is balanced. This means that on the last page the final set of column boxes will be balanced.

There is a second value for balancing, `balance-all`, which attempts to balance all columns in fragmented contexts and not just the columns on the final fragment.

In this example, we have columns containing an image and some text which are balanced. The image cannot break and so goes into the first column and the other columns fill with equal amounts of text.

{{EmbedGHLiveSample("css-examples/multicol/balancing/balance.html", '100%', 550)}}

The other value for `column-fill` is `auto`. In this case, rather than filling all the columns equally so their heights are balanced, the columns are filled sequentially. In the example below we have changed `column-fill` to `auto` and the columns are now filled, in order, to the height of the multicol container, leaving some columns empty at the end.

{{EmbedGHLiveSample("css-examples/multicol/balancing/auto.html", '100%', 550)}}

Note that column balancing is not supported by all browsers. Check that you are getting the sort of effect that you expect in the browsers you support.

## Next steps

In the next guide, you will learn [how multicol handles overflow](/en-US/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol), both within columns and where there are more columns than will fit the container.
