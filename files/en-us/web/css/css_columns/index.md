---
title: CSS Multi-column Layout
slug: Web/CSS/CSS_Columns
tags:
  - CSS
  - CSS Multi-column Layout
  - Guide
  - Layout
  - Overview
  - Reference
---
{{CSSRef("CSS3 Multicol")}}

**CSS Multi-column Layout** is a module of CSS that adds support for multi-column layouts. Support is included for establishing the number of columns in a layout, as well as how content should flow from column to column, gap sizes between columns, and column dividing lines (known as column rules) along with their appearance.

## Basic example

In the following example the {{cssxref("column-count")}} property has been applied to the element with a class of container. As the value of `column-count` is `3`, the content is arranged into 3 columns of equal size.

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

## Relationship to Fragmentation

Multiple-column Layout is closely related to [Paged Media](/en-US/docs/Web/CSS/CSS_Pages), in that each column box becomes a fragment, much like a printed page becomes a fragment of an overall document. Therefore the properties now defined in the [CSS Fragmentation](/en-US/docs/Web/CSS/CSS_Fragmentation) specification are required in order to control how content breaks between columns.

## Reference

### Multiple-column Layout Properties

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

### Related CSS Fragmentation Properties

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

## Guides

- [Basic Concepts of Multicol](/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
  - : An overview of the Multiple-column Layout specification
- [Styling Columns](/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns)
  - : How to use column rules and manage the spacing between columns.
- [Spanning and Balancing](/en-US/docs/Web/CSS/CSS_Columns/Spanning_Columns)
  - : How to make elements span across all columns and controlling the way columns are filled.
- [Handling Overflow in Multicol](/en-US/docs/Web/CSS/CSS_Columns/Handling_Overflow_in_Multicol)
  - : What happens when an item overflows the column it is in and what happens when there is too much columned content to fit a container.
- [Content Breaks in Multicol](/en-US/docs/Web/CSS/CSS_Columns/Handling_content_breaks_in_multicol)
  - : Introduction to the Fragmentation specification and how to control where column content breaks.

## Specifications

| Specification                            | Status                               | Comment            |
| ---------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('CSS3 Multicol')}} | {{Spec2('CSS3 Multicol')}} | Initial definition |

## See also

Other CSS layout technologies include:

- [CSS Flexible Box Layout](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) (CSS flexbox)
- [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout)
