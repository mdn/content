---
title: Flow layout and overflow
slug: Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow
tags:
  - CSS
  - Flow Layout
  - Guide
  - Intermediate
  - Layout
  - Visibility
  - overflow
  - text-overflow
---
When there is more content than can fit into a container, an overflow situation occurs. Understanding how overflow behaves is important in dealing with any element with a constrained size in CSS. This guide explains how overflow works when working with normal flow.

## What is overflow?

Giving an element a fixed height and width, then adding significant content to the box, creates a basic overflow example:

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

The content goes into the box. Once it fills the box, it continues to overflow in a visible way, displaying content outside the box, potentially displaying under subsequent content. The property that controls how overflow behaves is the [`overflow`](/en-US/docs/Web/CSS/overflow) property which has an initial value of `visible`. This is why we can see the overflow content.

## Controlling overflow

There are other values that control how overflow content behaves. To hide overflowing content use a value of `hidden`. This may cause some of your content to not be visible.

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

Using a value of `scroll` contains the content in its box and add scrollbars to enable viewing it. Scrollbars will be added even if the content fits in the box.

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

Using a value of `auto` will display the content with no scrollbars if the content fits inside the box. If it doesn't fit then scrollbars will be added. Comparing the next example with the example for `overflow: scroll` you should see `overflow scroll` has horizontal and vertical scrollbars when it only needs vertical scrolling. The `auto` example below only adds the scrollbar in the direct we need to scroll.

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

As we have already learned, using any of these values, other than the default of `visible,` will create a new Block Formatting Context.

Note: In the [Working Draft of Overflow Level 3](https://www.w3.org/TR/css-overflow-3/), there is an additional value `overflow: clip`. This will act like `overflow: hidden` however it does not allow for programmatic scrolling, the box becomes non-scrollable. In addition it does not create a Block Formatting Context.

The overflow property is in reality a shorthand for the [`overflow-x`](/en-US/docs/Web/CSS/overflow-x) and [`overflow-y`](/en-US/docs/Web/CSS/overflow-y) properties. If you specify only one value for overflow, this value is used for both axes. However, you can specify both values in which case the first is used for `overflow-x` and therefore the horizontal direction, and the second for `overflow-y` and the vertical direction. In the below example, I have only specified `overflow-y: scroll` so we do not get the unwanted horizontal scrollbar.

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## Flow Relative Properties

In the guide to [Writing Modes and Flow Layout](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes), we looked at the newer properties of `block-size` and `inline-size` which make more sense when working with different writing modes than tying our layout to the physical dimensions of the screen. The Level 3 Overflow Module also includes flow relative properties for overflow - [`overflow-block`](/en-US/docs/Web/CSS/@media/overflow-block) and [`overflow-inline`](/en-US/docs/Web/CSS/@media/overflow-inline). These correspond to `overflow-x` and `overflow-y` but the mapping depends on the writing mode of the document.

These properties currently do not have implementations in browsers, so you will need to use the physical properties at the present time and adjust for your writing mode.

## Indicating Overflow

In the Level 3 Overflow specification we have some properties which can help improve the way content looks in an overflow situation.

### Inline-Axis Overflow

The [`text-overflow`](/en-US/docs/Web/CSS/text-overflow) property deals with text overflowing in the inline direction. It takes one of two values `clip`, in which case content is clipped when it overflows, this is the initial value and therefore the default behavior. We also have `ellipsis` which renders an ellipsis, which may be replaced with a better character for the language or writing mode in use.

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### Block-Axis Overflow

There is also a proposal for a `block-overflow` property, although at the time of writing the name is still up for discussion. This proposal would enable the adding of an ellipsis when text overflows in the block dimension.

This is useful in the situation where you have a listing of articles, for example, and you display the listings in fixed height boxes which only take a limited amount of text. It may not be obvious to the reader that there is more content to click through to when clicking the box or the title. An ellipsis indicates clearly the fact there is more content. The specification would allow a string of content or a regular ellipsis to be inserted.

## Summary

Whether you are in continuous media on the web or in a Paged Media format such as print or EPUB, understanding how content overflows is useful when dealing with any layout method. By understanding how overflow works in normal flow, you should find it easier to understand the implications of overflow content in layout methods such as grid and flexbox.

{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/CSS_Flow_Layout/")}}
