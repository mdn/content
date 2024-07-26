---
title: Mastering wrapping of flex items
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
page-type: guide
---

{{CSSRef}}

Flexbox was designed as a single-dimensional layout tool — it deals with laying out items as a row or column — but not both at once. It is, however, possible to wrap flex items onto new lines, creating new rows if {{cssxref("flex-direction")}} is `row` and new columns if `flex-direction` is `column`. This guide explains flexbox wrapping, what it is designed for, and what situations require [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) rather than flexbox.

## Making things wrap

The initial value of the {{cssxref("flex-wrap")}} property is `nowrap`. This means if a set of flex items is too wide for their flex container, they will overflow it. To make them wrap once they are too wide, add the `flex-wrap` property with a value of `wrap`, or use the shorthand {{cssxref("flex-flow")}} with values of `row wrap` or `column wrap`. Items will then wrap onto new lines when they overflow their container.

In this example, there are ten flex items with a `flex-basis` of `160px` that can grow and shrink. Once there is not enough space to place another 160 pixel item in a row, a new flex line is created. New lines are created as needed until all of the items are placed. As the items can grow, they will expand to fill each row completely. If there is only one item on the final line it will stretch to fill the entire line.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-wrap.html", '100%', 650)}}

The same thing happens with flex columns. To wrap and create new columns, the container needs to have a height. In the case of columns, items stretch vertically to fill each column completely.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/column-wrap.html", '100%', 810)}}

## Wrapping and flex-direction

Wrapping works as you might expect when combined with `flex-direction`. If `flex-direction` is set to `row-reverse` then the items will start from the end edge of the container and lay themselves out in reverse ordered lines.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-reverse-wrap.html", '100%', 750)}}

Note that the reversing is only happening in the inline, row direction. We start on the right then go onto the second line and again start from the right. We aren't reversing in both directions, starting from the bottom coming up the container!

## Single-dimensional layout explained

As we have seen from the above examples if our items are allowed to grow and shrink, when there are fewer items in the last row or column then those items grow to fill the available space.

There are no flexbox features to tell items in one row to line up with items in the row above — each flex line acts like a new flex container. It deals with space distribution across the main axis. If there is only one item, and that item is allowed to grow, it will fill the axis just as if you had a single item flex container. If you want layout in two dimensions then you probably want grid layout.

This example demonstrates the difference, using CSS grid layout to create a layout with as many columns of at least `160px` as will fit, distributing the extra space between all columns. We use the same HTML as the [flexbox wrapped row example](#making_things_wrap) above but set `display: grid` on it. Instead of the {{cssxref("flex")}} shorthand, which has no effect outside of flexbox, we set the item's minimum width and ability to grow directly on the container with {{cssxref("grid-template-columns")}}. With CSS grid, the last item stays in its grid cell; grid items don't stretch when there are fewer of them in the last row.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/grid-example.html", '100%', 700)}}

This is the difference between one and two-dimensional layouts. In a one-dimensional layout method like flexbox, we only control the row or column. In a two-dimensional grid layout, we control both at the same time. If you want the space distribution row by row, use Flexbox. If you don't, use CSS grid.

## How do flexbox-based grid systems work?

Flexbox-based layouts can be forced to line up as grid systems, but that is not the intended purpose of flexbox. If you assign percentage widths to flex items — either using `flex-basis` or by adding a width to the item itself and leaving the value of `flex-basis` as `auto` — you can give the impression of a two-dimensional layout.

In this example, `flex-grow` and `flex-shrink` have been set to `0` to make inflexible flex items. The flexibility is controlled via percentages.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/flex-grid.html", '100%', 650)}}

This technique allows you to line up flex items on the cross-axis. However, when you catch yourself adding widths to flex items in this way or adding empty flex items to take up space, it is a good indication you may want to switch to CSS grid layout for that component.

## Creating gutters between items

To create gaps or gutters between flex items, use the {{CSSXref("gap")}} property directly on the flex container to create a fixed space between adjacent flex items. The `gap` property is a shorthand for `row-gap` and `column-gap`. These properties specify the size of the gutters between rows and columns within grid, flex, and multi-column layouts.

The `gap` property is not the only thing that can add space between items. Margins, padding, `justify-content`, and `align-content` can also increase the size of the gutter, affecting the actual size of the gap.

To see how the `gap` property differs from `margin` in both axes, try changing the `gap` value in the container `.box` and adding a `margin` value to the `.box > *` rule in the stylesheet below. Click the "Reset" button to revert to the previous values.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/gaps.html", '100%', 830)}}

## Collapsed items

The flexbox specification details what should happen if a flex item is collapsed by setting `visibility: collapse` on an item. See the MDN documentation for the {{cssxref("visibility")}} property. The specification describes the behavior as follows:

> "Specifying visibility:collapse on a flex item causes it to become a collapsed flex item, producing an effect similar to visibility:collapse on a table-row or table-column: the collapsed flex item is removed from rendering entirely, but leaves behind a "strut" that keeps the flex line's cross-size stable. Thus, if a flex container has only one flex line, dynamically collapsing or uncollapsing items may change the flex container's main size, but is guaranteed to have no effect on its cross size and won't cause the rest of the page's layout to "wobble". Flex line wrapping is re-done after collapsing, however, so the cross-size of a flex container with multiple lines might or might not change." - [Collapsed items](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

This behavior is useful if you want to target flex items using JavaScript to show and hide content for example. The example in the specification demonstrates one such pattern.

In the following live example, I have a non-wrapped flex container. The third item has more content than the others yet is set to `visibility: collapse`; therefore, the flex container is retaining a _strut_ of the height required to display this item. If you remove `visibility: collapse` from the CSS or change the value to `visible`, you will see the item appear, and the space is redistributed between non-collapsed items; the height of the flex container should not change.

> **Note:** Use Firefox for the below two examples as Chrome and Safari treat collapse as hidden.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/visibility-collapse.html", '100%', 650)}}

When dealing with multiple-line flex containers however you need to understand that the wrapping is re-done _after_ collapsing. So the browser needs to re-do the wrapping behavior to account for the new space that the collapsed item has left in the inline direction.

This means that items might end up on a different line to the one they started on. In the case of an item being shown and hidden it could well cause the items to end up in a different row.

I have created this behavior in the next live example. You can see how the stretching changes row based on the location of the collapsed item. If you add more content to the second item, it changes row once it gets long enough. That top row then only becomes as tall as a single line of text.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/wrapped-visibility-collapse.html", '100%', 750)}}

If this causes a problem for your layout it may require a rethinking of the structure, for example putting each row into a separate flex container in order that they can't shift rows.

### Using `visibility: hidden` and `display: none`

In previous live example, try using `visibility: hidden` or `display: none` instead of `visiblity: collapse`. Using `visibility: hidden`, the item is made invisible but the box is kept in the formatting structure, so it still behaves as if it were part of the layout.
When you use `display: none`, the item is completely removed from the formatting structure. Not only is it invisible but the structure is removed as well. This means counters ignore it and things like transitions do not run.
