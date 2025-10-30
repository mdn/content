---
title: CSS paged media
slug: Web/CSS/CSS_paged_media
page-type: css-module
spec-urls: https://drafts.csswg.org/css-page/
sidebar: cssref
---

The **CSS paged media** module defines the properties that control the presentation of content for print or any other media that splits content into discrete pages. It allows you to set page breaks, control printable areas, and style left and right pages differently.

The CSS paged media module specifies how pages are generated and laid out to hold fragmented content in a paged presentation, including content that is printed or represented as a print preview. The module defines functionality for controlling page margins, size, orientation, and headers and footers. It extends [generated content](/en-US/docs/Web/CSS/CSS_generated_content) to provide functionality for generating page numbers and running headers and footers.

The process of paginating content into generated pages and controlling breaks inside elements is covered in the [CSS fragmentation module](/en-US/docs/Web/CSS/CSS_fragmentation).

## Reference

### Properties

- {{cssxref("page")}}

### At-rules and descriptors

- {{cssxref("@page")}}
  - {{cssxref("@page/page-orientation", "page-orientation")}} descriptor
  - {{cssxref("@page/size", "size")}} descriptor
  - [Margin descriptors](/en-US/docs/Web/CSS/Reference/Properties/margin)
- [Margin at-rules](/en-US/docs/Web/CSS/@page#margin_at-rules)

The CSS paged media module also introduces the `bleeds` and `marks` descriptors of the `@page` at-rule. Currently, no browsers support these features.

### Pseudo-classes

- {{cssxref(":blank")}}
- {{cssxref(":first")}}
- {{cssxref(":left")}}
- {{cssxref(":right")}}

## Guides

- [Printing](/en-US/docs/Web/CSS/CSS_media_queries/Printing)
  - : Tips and techniques for helping improve web content printer output.

## Related concepts

- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
  - {{cssxref("break-after")}} property
  - {{cssxref("break-before")}} property
  - {{cssxref("break-inside")}} property
  - {{cssxref("orphans")}} property
  - {{cssxref("widows")}} property

## Specifications

{{Specifications}}

## See also

- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
