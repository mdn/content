---
title: Split navigation
slug: Web/CSS/Layout_cookbook/Split_Navigation
page-type: guide
---

{{CSSRef}}

The **split navigation** is a navigation pattern where one or more elements are separated from the rest of the navigation items.

![Items separated into two groups.](split-navigation.png)

## Requirements

A common navigation pattern is to have one element pushed away from the others. We can use flexbox to achieve this, without needing to make the two sets of items into two separate flex containers.

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/split-navigation--download.html)

## Choices made

This pattern combines auto margins with flexbox to split the items.

An auto margin absorbs all available space in the direction it is applied. This is how centering a block with auto margins works — you have a margin on each side of the block trying to take up all of the space, thus pushing the block into the middle.

In this case the left auto margin takes up any available space and pushes the item over to the right. You could apply the class `push` to any item in the list.

## See also

- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- {{cssxref("display")}} property
- {{cssxref("margin")}} property
