---
title: Inline formatting context
slug: Web/CSS/Inline_formatting_context
tags:
  - CSS
  - Formatting context
  - Guide
  - Reference
---
This article explains the inline formatting context

## Core concepts

The inline formatting context is part of the visual rendering of a web page. Inline boxes are laid out one after the other, in the direction sentences run in the writing mode in use:

- In a horizontal writing mode, boxes are laid out horizontally, starting on the left.
- In a vertical writing mode they would be laid out vertically starting at the top.

In the example below, the two ({{HTMLElement("div")}}) elements with the black borders form a [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context), inside which each word participates in an inline formatting context. The boxes in the horizontal writing mode run horizontally, and the vertical writing mode boxes run vertically.

{{EmbedGHLiveSample("css-examples/inline-formatting/inline.html", '100%', 720)}}

Boxes forming a line are contained by a rectangular area called a line box. This box will be large enough to contain all of the inline boxes in that line; when there is no more room in the inline direction another line will be created. Therefore a paragraph is a set of inline line boxes, stacked in the block direction.

When an inline box is split, margins, borders, and padding have no visual effect where the split occurs. In the next example there is a ({{HTMLElement("span")}}) element wrapping a set of words wrapping onto two lines. The border on the `<span>` breaks at the wrapping point.

{{EmbedGHLiveSample("css-examples/inline-formatting/break.html", '100%', 720)}}

Margins, borders, and padding in the inline direction are respected. In the example below you can see how the margin, border, and padding on the inline `<span>` element are added.

{{EmbedGHLiveSample("css-examples/inline-formatting/mbp.html", '100%', 920)}}

> **Note:** I am using the logical, flow-relative properties — {{cssxref("padding-inline-start")}} rather than {{cssxref("padding-left")}} — so that they work in the inline dimension whether the text is horizontal or vertical. Read more about these properties in [Logical Properties and Values](/en-US/docs/Web/CSS/CSS_Logical_Properties).

## Alignment in the block direction

Inline boxes may be aligned in the block direction in different ways, using the {{cssxref("vertical-align")}} property, which will align on the block axis in vertical writing modes (therefore not vertically at all!). In the example below the large text is making the line box of the first sentence larger, therefore the `vertical-align` property can be used to align the inline boxes either side of it. I have used the value `top`, try changing it to `middle`, `bottom`, or `baseline`.

{{EmbedGHLiveSample("css-examples/inline-formatting/align.html", '100%', 920)}}

## Alignment in the inline direction

If there is additional space in the inline direction, the {{cssxref("text-align")}} property can be used to align the inline boxes within their line box. Try changing the value of `text-align` below to `end`.

{{EmbedGHLiveSample("css-examples/inline-formatting/text-align.html", '100%', 920)}}

## Effect of floats

Line boxes usually have the same size in the inline direction, therefore the same width if working in a horizontal writing mode, or height if working in a vertical writing mode. If there is a {{cssxref("float")}} within the same block formatting context however, the float will cause the line boxes that wrap the float to become shorter.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

## See also

- [Block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- [Visual Formatting Model](/en-US/docs/Web/CSS/Visual_formatting_model)
