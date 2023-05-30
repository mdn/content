---
title: CSS multi-column layout
slug: Web/CSS/CSS_Columns
page-type: css-module
spec-urls: https://drafts.csswg.org/css-multicol/
---

{{CSSRef("CSS3 Multicol")}}

The **CSS multi-column layout** module lets you divide content across multiple columns, defining the preferred number and width of columns in a layout, as well as how content should flow from column to column, gap sizes between columns, and the visual appearance of optional column dividing lines (known as column rules).

## Columns in action

The 1967 speech from Canada's centennial, _A Lament for Confederation_, by Chief Dan George, is displayed across multiple columns, similar to the way articles are displayed in printed newspapers. If you have JavaScript enabled, the controls enable changing the preferred number and width of columns, the width of the gap between columns, whether the title and sample blockquote reside in a single column or span all columns, and whether breaking within the paragraphs should be avoided.

{{EmbedGHLiveSample("css-examples/modules/multicol.html", '100%', 650)}}

To see the code for this columned layout, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/multicol.html).

> **Note:** Multiple-column layout is closely related to [paged media](/en-US/docs/Web/CSS/CSS_Pages), as each column box is a fragment, much like each printed page is a fragment of a document. Properties defined in [CSS fragmentation](/en-US/docs/Web/CSS/CSS_Fragmentation) control how content breaks between columns.

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

- [Basic concepts of multi-column layout](/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
  - : An overview of the Multiple-column Layout specification
- [Styling columns](/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns)
  - : How to use column rules and manage the spacing between columns.
- [Spanning and balancing](/en-US/docs/Web/CSS/CSS_Columns/Spanning_Columns)
  - : How to make elements span across all columns and controlling the way columns are filled.
- [Handling overflow in multi-column layout](/en-US/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol)
  - : What happens when an item overflows the column it is in and what happens when there is too much columned content to fit a container.
- [Handling content breaks in multi-column layout](/en-US/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol)
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
- [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) (CSS flexbox)
- [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout)
