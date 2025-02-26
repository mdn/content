---
title: Box alignment in multi-column layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
page-type: guide
---

{{CSSRef}}

The [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module details how alignment works in various layout methods; in this guide, we explore how box alignment works in the context of [multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout). As this guide aims to detail things that are specific to both modules, it should be read in conjunction with the [box alignment overview](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment) guide, which details the common features of box alignment across layout methods.

In [multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Basic_concepts), the {{glossary("alignment container")}} is the content box of the multicol container. The {{glossary("alignment subject")}} is the column box. The properties which apply to multi-column layouts are detailed below.

## align-content and justify-content

The {{cssxref("align-content")}} property applies to the block axis and {{cssxref("justify-content")}} to the inline axis. Any spacing added to the columns due to use of space distribution will be added to the gap between the columns, therefore making the gap larger than might be specified by the {{cssxref("column-gap")}} (or {{cssxref("gap")}} shorthand) property.

Using a value of `justify-content` other than `normal` or `stretch` will cause column boxes to display at the {{cssxref("column-width")}} specified on the multicol container, and the remaining space distributed according to the value of `justify-content`.

## column-gap

The {{cssxref("column-gap")}} property was originally specified in the multiple-column layout specification and then later unified with the gap properties for other layout methods in box alignment. While other layout methods treat the initial value of `column-gap` as `0`, multi-column layout treats it as `1em` — you generally want a gap between columns.

## See also

- [Box alignment overview](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box alignment in CSS grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box alignment for block, absolutely positioned and table layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)
