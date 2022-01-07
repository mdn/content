---
title: How to center an item
slug: Learn/CSS/Howto/Center_an_item
tags:
  - Basic
  - Beginner
  - CSS
  - CSS:Getting_Started
  - Guide
  - Web
---
{{LearnSidebar}}

In this guide you can find out how to center an item inside another element, both horizontally and vertically.

## Center a box

To center one box inside another using CSS you will need to use [CSS box alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment) properties on the parent container. As these alignment properties do not yet have browser support for block and inline layout you will need to make the parent a [flex](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) or [grid](/en-US/docs/Web/CSS/CSS_Grid_Layout) container to turn on the ability to use alignment.

In the example below we have given the parent container `display: flex`; then set {{cssxref("justify-content")}} to center to align it horizontally, and {{cssxref("align-items")}} to center to align it vertically.

{{EmbedGHLiveSample("css-examples/howto/center.html", '100%', 700)}}

> **Note:** You can use this technique to do any kind of alignment of one or more elements inside another. In the example above you can try changing the values to any valid values for {{cssxref("justify-content")}} and {{cssxref("align-items")}}.

## See also

- [Box alignment in Flexbox](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox)
- [Box alignment in Grid layout](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout)
