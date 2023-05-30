---
title: CSS multi-column layout
slug: Web/CSS/CSS_multicol_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-multicol/
---

{{CSSRef("CSS3 Multicol")}}

The **CSS multi-column layout** module lets you divide content across multiple columns, defining the preferred number and width of columns in a layout, as well as how content should flow from column to column, gap sizes between columns, and the visual appearance of optional column dividing lines (known as column rules).

## Columns in action

In the following example, the {{cssxref("column-count")}} property has been applied to the {{HTMLElement("div")}} element with the class `container`. As the value of `column-count` is `3`, the content is arranged into three columns of the same size.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

> **Note:** Multiple-column layout is closely related to [paged media](/en-US/docs/Web/CSS/CSS_Pages), as each column box is a fragment, much like each printed page is a fragment of a document. Properties defined in [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) control how content breaks between columns.

## Reference

### Properties

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-span")}}
- {{cssxref("column-rule")}} shorthand
  - {{cssxref("column-rule-color")}}
  - {{cssxref("column-rule-style")}}
  - {{cssxref("column-rule-width")}}
- {{cssxref("columns")}} shorthand
  - {{cssxref("column-count")}}
  - {{cssxref("column-width")}}

> **Note:** Setting container height and line length can pose challenges for people with visual or cognitive disabilities. WCAG Success Criterion state that, even when the text size is doubled, content should not need to be scrolled.

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

## Related concepts

- {{cssxref("orphans")}} CSS property
- {{cssxref("widows")}} CSS property
- {{cssxref("overflow")}} CSS property
- {{cssxref("gap")}} CSS property
- {{cssxref("height")}}, {{cssxref("max-height")}}, and {{cssxref("block-size")}} CSS properties
- {{cssxref("width")}}, {{cssxref("max-width")}}, and {{cssxref("inline-size")}} CSS properties
- {{cssxref("line-style")}} enumerated data type
- [Block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context) guide

## Specifications

{{Specifications}}

## See also

- [CSS paged media](/en-US/docs/Web/CSS/CSS_Pages) module
- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_Fragmentation) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) (CSS flexbox)
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout)
