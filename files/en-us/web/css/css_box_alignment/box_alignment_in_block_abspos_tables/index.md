---
title: Box alignment for block, absolutely positioned, and table layouts
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables
page-type: guide
---

The [box alignment specification](/en-US/docs/Web/CSS/CSS_box_alignment) details how alignment works in various layout methods. In this page we explore how box alignment works in the context of block layout, including floated, positioned, and table elements. As this page aims to detail things which are specific to block layout and box alignment, it should be read in conjunction with the main [box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) page, which details the common features of box alignment across layout methods.

> **Note:** At the time of writing (May 2018), there is no real support for the box alignment properties in block layout. This document details how the specification expects these properties to be implemented for completeness, and is likely to change as the specification and browser implementations develop.

## align-content and justify-content

The {{cssxref("justify-content")}} property does not apply to block containers or table cells.

The {{cssxref("align-content")}} property applies to the block axis in order to align the contents of the box within its container. If a content distribution method such as `space-between`, `space-around` or `space-evenly` is requested then the fallback alignment will be used, as the content is treated as a single [alignment subject](/en-US/docs/Glossary/Alignment_Subject).

## justify-self

The {{cssxref("justify-self")}} property is used to align an item inside its containing block on the inline axis.

This property does not apply to floated elements or table cells.

## align-self

The {{cssxref("align-self")}} property does not apply to block-level boxes (including floats), because there is more than one item in the block axis. It also does not apply to table cells.

### Absolutely positioned elements

The alignment container is the positioned block, accounting for the offset values of top, left, bottom, and right. The normal keyword resolves to `stretch`, unless the positioned item is a replaced element, in which case it resolves to `start`.

## Aligning in these layout methods today

As we do not currently have browser support for box alignment in block layout, your options for alignment are either to use one of the existing alignment methods or, to make even a single item inside a container a flex item in order to use the alignment properties as specified in flexbox.

Alignment of blocks horizontally prior to flexbox was typically achieved by way of setting auto margins on the block. A {{cssxref("margin")}} of `auto` will absorb all available space in that dimension, therefore setting a left and right margin of auto, you can push a block into the center:

```css
.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
```

In table layout, you have access to the {{cssxref("vertical-align")}} property to align the contents of a cell inside that cell.

For many use cases, turning the block container into a flex item will give you the alignment capability that you are looking for. In the example below, a container with a single item inside has been turned into a flex container for the purpose of being able to use the alignment properties.

{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}

## Reference

### CSS Properties

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}

### Glossary Entries

- [Alignment subject](/en-US/docs/Glossary/Alignment_Subject)
- [Alignment container](/en-US/docs/Glossary/Alignment_Container)
- [Fallback alignment](/en-US/docs/Glossary/Fallback_Alignment)

{{CSSRef}}
