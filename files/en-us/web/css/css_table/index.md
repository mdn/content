---
title: CSS table
slug: Web/CSS/CSS_table
page-type: css-module
spec-urls: https://www.w3.org/TR/CSS22/tables.html
---

{{CSSRef}}

The **CSS table** module helps you define how to lay out table data.

This CSS module defines styles applicable to the HTML {{htmlelement("table")}} element, used to render tabular data. By default, tables are rendered as a two-dimensional grid of table cells lined up in a series of consecutive rows and columns, generated from the table structure and sized according to their content. This module enables defining the position of the table's {{htmlelement("caption")}}, if present.

The properties introduced in this module aren't limited to the `<table>` elements; they can be applied to any element with a table-related CSS {{cssxref("display")}} value.

## Reference

### Properties

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Guides

- [CSS table layout](/en-US/docs/Learn/CSS/CSS_layout/Introduction#table_layout)

  - : An overview of CSS layouts, including setting table-related `display` values to enable using CSS table properties on any element.

- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)

  - : A building block guide to improving the appearance of HTML tables, covering table styling techniques.

- [Learn: HTML table basics](/en-US/docs/Learn/HTML/Tables/Basics)

  - : Introduction to HTML tables, including the HTML for rows and cells, headings, making cells span multiple columns and rows, and grouping cells in a column for styling purposes.

- [Learn: HTML table advanced features and accessibility](/en-US/docs/Learn/HTML/Tables/Advanced)

  - : Advanced HTML table features including captions and grouping table rows into table head, body and footer sections — as well as looking at the accessibility of tables for visually impaired users.

## Related concepts

- {{cssxref("display")}} property
- {{cssxref("vertical-align")}} property
- {{cssxref("text-align")}} property

- HTML table-related elements

  - {{htmlelement("table")}}
  - {{htmlelement("caption")}}
  - {{htmlelement("colgroup")}}
  - {{htmlelement("col")}}
  - {{htmlelement("thead")}}
  - {{htmlelement("tbody")}}
  - {{htmlelement("tfoot")}}
  - {{htmlelement("tr")}}
  - {{htmlelement("th")}}
  - {{htmlelement("td")}}

- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module

  - {{cssxref("box-sizing")}}
  - {{cssxref("height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("width")}}
  - {{cssxref("min-content")}} keyword

- [CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module
  - {{cssxref("border")}} shorthand
  - {{cssxref("border-width")}}
  - {{cssxref("border-style")}}
  - {{cssxref("border-color")}}

## Specifications

{{Specifications}}

> **Note:** The [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) specification is being developed, but is not yet ready for implementation.

## See also

- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
- [CSS flex layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
