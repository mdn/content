---
title: List group with badges
slug: Web/CSS/Layout_cookbook/List_group_with_badges
page-type: guide
---

{{CSSRef}}

In this recipe we will create a list group pattern with badges that indicate a count.

![A list of items with a badge indicating a count displayed to the right of the text.](list-group-badges.png)

## Requirements

The list items should be displayed with the badges. The badge should be aligned right and vertically centered. The badge must be centered vertically whether there is a single line of content or multiple lines of text.

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/list-group-badges.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/list-group-badges--download.html)

## Choices made

Flexbox makes this particular pattern straightforward and also facilitates making changes to the layout.

To ensure the text and badge line up correctly, I use the {{cssxref("justify-content")}} property with a value of `space-between`. This places any extra space between the items. In the live example, if you remove this property, you will see the badge move to the end of the text on items with text shorter than the one line.

To align the content horizontally, I use the {{cssxref("align-items")}} property to align the text and badge on the cross axis. If you want the badge to align to the top of the content instead, change this to `align-items: flex-start`.

## See also

- [Box alignment in Flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
