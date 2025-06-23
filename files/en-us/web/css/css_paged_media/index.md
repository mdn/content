---
title: CSS paged media
slug: Web/CSS/CSS_paged_media
page-type: css-module
spec-urls: https://drafts.csswg.org/css-page/
---

{{CSSRef}}

The **CSS paged media** module defines the properties that control the presentation of content for print or any other media that splits content into discrete pages. It allows you to set page breaks, control printable areas, style left and right pages differently, and control breaks inside elements.

## Reference

### Properties

- {{cssxref('page')}}

### At-rules

- {{cssxref('@page')}}
  - {{cssxref('@page/page-orientation', 'page-orientation')}} descriptor
  - {{cssxref('@page/size', 'size')}} descriptor
  - [Margin descriptors](/en-US/docs/Web/CSS/margin)
- [Margin at-rules](/en-US/docs/Web/CSS/@page#margin_at-rules)

> [!NOTE]
> CSS paged media module introduces two `@page` descriptors that have not been implemented: `bleeds` and `marks`.

### Pseudo-classes

- {{cssxref(':blank')}}
- {{cssxref(':first')}}
- {{cssxref(':left')}}
- {{cssxref(':right')}}

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

- [Printing](/en-US/docs/Web/CSS/CSS_media_queries/Printing) guide
- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
- [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries) module
