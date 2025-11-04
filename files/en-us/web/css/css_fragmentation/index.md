---
title: CSS fragmentation
slug: Web/CSS/CSS_fragmentation
page-type: css-module
spec-urls: https://drafts.csswg.org/css-break/
sidebar: cssref
---

The **CSS fragmentation** module defines how content is displayed when it is broken (fragmented) and flows across multiple [pages](/en-US/docs/Web/CSS/CSS_paged_media), regions, or [columns](/en-US/docs/Web/CSS/CSS_multicol_layout). This module defines features for pagination, breaking variable fragment size and orientation, widows and orphans.

This module explains how content breaks across fragmentation containers and how such breaks can be controlled by the author. The generic term for breaking content across containers is _fragmentation_. Fragmentation occurs when an inline box wraps onto multiple lines. This can happen when using layout features such as [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout): For example, when a block spans more than one column inside a column layout container, or spans a page break when printed. Each piece of the rendering for the element is called a _fragment_.

When content is physically printed or displayed as a print preview, there are page breaks. In this paged media, as opposed to continuous media, document content can be split between one or more pages, or fragments. To avoid awkward breaks, such as halfway through a line of text or with a lone word on its own page, browsers can move content that would otherwise fall across the page break in a process is called _pagination_.

## Reference

### Properties

- {{cssxref("box-decoration-break")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

### Glossary terms

- {{glossary("Fragmentainer")}}

## Guides

- [Handling content breaks in multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Introduction to the fragmentation specification and how to control where column content breaks.

## Related concepts

- {{cssxref("overflow")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}, and {{cssxref("block-size")}} CSS properties
- {{cssxref("width")}}, {{cssxref("max-width")}}, and {{cssxref("inline-size")}} CSS properties
- [Block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context)

[CSS paged media](/en-US/docs/Web/CSS/CSS_paged_media) module

- {{cssxref("page")}}
- {{cssxref("@page")}}

[CSS display](/en-US/docs/Web/CSS/CSS_display) module

- [Principal box](/en-US/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box) term
- [Block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) guide

## Specifications

{{Specifications}}

## See also

- [`horizontal-viewport-segments`](/en-US/docs/Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments) and [`vertical-viewport-segments`](/en-US/docs/Web/CSS/Reference/At-rules/@media/vertical-viewport-segments) `@media` descriptors
- [Viewport Segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) module
