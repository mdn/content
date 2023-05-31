---
title: CSS multi-column layout
slug: Web/CSS/CSS_multicol_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-multicol/
---

{{CSSRef("CSS3 Multicol")}}

The **CSS multi-column layout** module provides support for multi-column layouts, including support for establishing the number of columns in a layout, how content should flow from column to column, gap sizes between columns, and column dividing lines (known as column rules) along with their appearance.

## Basic example

In the following example, the {{cssxref("column-count")}} property has been applied to the `<div>` element with the class `container`. As the value of `column-count` is `3`, the content is arranged into three columns of the same size.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

## Relationship to fragmentation

Multi-column layout is closely related to [paged media](/en-US/docs/Web/CSS/CSS_paged_media), in that each column box becomes a fragment, much like a printed page becomes a fragment of an overall document. Therefore, the properties now defined in the [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) specification are required to control how content breaks between columns.

## Reference

### Properties for multi-column layout

- {{cssxref("column-count")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-span")}}
- {{cssxref("column-width")}}
- {{cssxref("columns")}}

### Properties related to CSS fragmentation

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

## Guides

- [Basic concepts of multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : An overview of the Multiple-column Layout specification
- [Styling columns](/en-US/docs/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : How to use column rules and manage the spacing between columns.
- [Spanning and balancing](/en-US/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : How to make elements span across all columns and controlling the way columns are filled.
- [Handling overflow in multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : What happens when an item overflows the column it is in and what happens when there is too much columned content to fit a container.
- [Handling content breaks in multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Introduction to the Fragmentation specification and how to control where column content breaks.

## Specifications

{{Specifications}}

## See also

Other CSS layout technologies include:

- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) (CSS flexbox)
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout)
