---
title: Mastering wrapping of flex items
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
page-type: guide
---

{{CSSRef}}

Flexbox was designed as a single dimensional layout, meaning that it deals with laying out items as a row or as a column — but not both at once. There is however the ability to wrap flex items onto new lines, creating new rows if {{cssxref("flex-direction")}} is `row` and new columns if `flex-direction` is `column`. In this guide I will explain how this works, what it is designed for and what situations really require [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout) rather than flexbox.

## Making things wrap

The initial value of the {{cssxref("flex-wrap")}} property is `nowrap`. This means that if you have a set of flex items that are too wide for their container, they will overflow it. If you want to cause them to wrap once they become too wide you must add the `flex-wrap` property with a value of `wrap`, or use the shorthand {{cssxref("flex-flow")}} with values of `row wrap` or `column wrap`.

Items will then wrap in the container. In the next example I have ten items all with a `flex-basis` of `160px` and the ability to grow and shrink. Once the first row gets to a point where there is not enough space to place another 160 pixel item, a new flex line is created for the items and so on until all of the items are placed. As the items can grow, they will expand larger than 160 px in order to fill each row completely. If there is only one item on the final line it will stretch to fill the entire line.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-wrap.html", '100%', 650)}}

We can see the same thing happening with columns. The container will need to have a height in order that the items will start wrapping and creating new columns, and items will stretch taller to fill each column completely.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/column-wrap.html", '100%', 810)}}

## Wrapping and flex-direction

Wrapping works as you might expect when combined with `flex-direction`. If `flex-direction` is set to `row-reverse` then the items will start from the end edge of the container and lay themselves out in reverse ordered lines.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-reverse-wrap.html", '100%', 750)}}

Note that the reversing is only happening in the inline, row direction. We start on the right then go onto the second line and again start from the right. We aren't reversing in both directions, starting from the bottom coming up the container!

## Single-dimensional layout explained

As we have seen from the above examples if our items are allowed to grow and shrink, when there are fewer items in the last row or column then those items grow to fill the available space.

There is no method in flexbox to tell items in one row to line up with items in the row above — each flex line acts like a new flex container. It deals with space distribution across the main axis. If there is only one item, and that item is allowed to grow, it will fill the axis just as if you had a single item flex container.

If you want layout in two dimensions then you probably want Grid Layout. We can compare our wrapped row example above with the CSS Grid version of that layout to see the difference. The following live sample uses CSS Grid Layout to create a layout that has as many columns of at least 160 pixels as will fit, distributing the extra space between all columns. However, in this case the items stay in their grid and don't stretch out when there are fewer of them on the final row.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/grid-example.html", '100%', 700)}}

This is the difference between one and two-dimensional layout. In a one dimensional method like flexbox, we only control the row or column. In two dimensional layout like grid we control both at the same time. If you want the space distribution row by row, use flexbox. If you don't, use Grid.

## How do flexbox-based grid systems work?

Typically flexbox-based grid systems work by taking flexbox back to the familiar world of float-based layouts. If you assign percentage widths to flex items — either as `flex-basis` or by adding a width to the item itself leaving the value of `flex-basis` as `auto` — you can get the impression of a two dimensional layout. You can see this working in the example below.

Here I have set `flex-grow` and `flex-shrink` to `0` to make inflexible flex items and I'm then controlling flexibility using percentages, just like we used to do in float layouts.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/flex-grid.html", '100%', 650)}}

If you need flex items to line up in the cross axis, controlling the width in this way will achieve that. In most cases however, adding widths to flex items in this way demonstrates that you would probably be better served by switching to grid layout for that component.

## Creating gutters between items

To create gaps or gutters between flex items, use the {{CSSXref('gap')}} property.

The gap property in CSS is a shorthand for `row-gap` and `column-gap`, specifying the size of gutters, which is the space between rows and columns within grid, flex, and multi-column layouts.

In Flexbox, the `gap` property is applied to the flex container. It creates a fixed space between adjacent flex items. However, the `gap` property is not the only thing that can put space between items. Margins, paddings, `justify-content`, and `align-content` can also increase the size of the gutter, affecting the actual size of the gap.

To see how the `gap` property differs from `margin` in both axes, try changing the `gap` value in the container `.box` and adding a `margin` value to the `.box > *` rule in the stylesheet below. Click the Reset button to revert to the previous values.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/gaps.html", '100%', 830)}}

## Collapsed items

The flexbox specification details what should happen if a flex item is collapsed by setting `visibility: collapse` on an item. See the MDN documentation for the {{cssxref("visibility")}} property. The specification describes the behavior as follows:

> "Specifying visibility:collapse on a flex item causes it to become a collapsed flex item, producing an effect similar to visibility:collapse on a table-row or table-column: the collapsed flex item is removed from rendering entirely, but leaves behind a "strut" that keeps the flex line's cross-size stable. Thus, if a flex container has only one flex line, dynamically collapsing or uncollapsing items may change the flex container's main size, but is guaranteed to have no effect on its cross size and won't cause the rest of the page's layout to "wobble". Flex line wrapping is re-done after collapsing, however, so the cross-size of a flex container with multiple lines might or might not change." - [Collapsed items](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

This behavior is useful if you want to target flex items using JavaScript to show and hide content for example. The example in the specification demonstrates one such pattern.

In the following live example I have a non-wrapped flex container. The third item has more content than the others yet is set to `visibility: collapse` and therefore the flex container is retaining a _strut_ of the height required to display this item. If you remove `visibility: collapse` from the CSS or change the value to `visible`, you will see the item disappear and the space redistribute between non-collapsed items; the height of the flex container should not change.

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
