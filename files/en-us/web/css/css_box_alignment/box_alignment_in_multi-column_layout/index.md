---
title: Box alignment in multi-column layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
page-type: guide
---

{{CSSRef}}

The [box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) specification details how alignment works in various layout methods; on this page we explore how Box Alignment works in the context of [multi-column Layout](/en-US/docs/Web/CSS/CSS_multicol_layout). As this page aims to detail things which are specific to Multi-column Layout and Box Alignment, it should be read in conjunction with the main [box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) page which details the common features of Box Alignment across layout methods.

In multi-column layout the alignment container is the content box of the multicol container. The alignment subject is the column box. The properties which apply to multi-column layouts are detailed below.

> **Note:** Multi-column layout predates the box alignment specification. And the properties listed here, while specified for Multicol, may not be supported in browsers.

## align-content and justify-content

The {{cssxref("align-content")}} property applies to the block axis and {{cssxref("justify-content")}} to the inline axis. Any spacing added to the columns due to use of space distribution will be added to the gap between the columns, therefore making the gap larger than might be specified by the {{cssxref("column-gap")}} property.

Using a value of `justify-content` other than `normal` or `stretch` will cause column boxes to display at the {{cssxref("column-width")}} specified on the multicol container, and the remaining space distributed according to the value of justify-content.

## column-gap

The {{cssxref("column-gap")}} property was specified in earlier versions of the multiple-column layout specification, and has now been unified with the gap properties for other layout methods in box alignment. While other layout methods treat the initial value of column-gap as 0 multicol treats it as 1em, as in general you would not want to have no gap between columns.

## Reference

### CSS Properties

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("column-gap")}}

### Glossary Entries

- [Alignment subject](/en-US/docs/Glossary/Alignment_Subject)
- [Alignment container](/en-US/docs/Glossary/Alignment_Container)
- [Fallback alignment](/en-US/docs/Glossary/Fallback_Alignment)
