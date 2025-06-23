---
title: CSS table
slug: Web/CSS/CSS_table
page-type: css-module
spec-urls: https://www.w3.org/TR/CSS22/tables.html
---

{{CSSRef}}

The **CSS table** module helps you define how to lay out table data.

This CSS module defines styles applicable to the HTML {{htmlelement("table")}} element, which is used to render tabular data. By default, tables are rendered as a two-dimensional grid with cells lined up in a series of consecutive rows and columns. This layout is generated from the table structure and sized according to the content of the cells. This module also enables defining the position of the table's {{htmlelement("caption")}}, if present.

The properties introduced in this module aren't limited to the `<table>` elements; they can be applied to any element with a table-related CSS {{cssxref("display")}} value.

## Reference

### Properties

- {{cssxref("border-collapse")}}
- {{cssxref("border-spacing")}}
- {{cssxref("caption-side")}}
- {{cssxref("empty-cells")}}
- {{cssxref("table-layout")}}

## Guides

- [Learn: Styling tables](/en-US/docs/Learn_web_development/Core/Styling_basics/Tables)

  - : A guide to improving the appearance of HTML tables, covering table styling techniques.

- [Learn: HTML table basics](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

  - : An introduction to HTML tables, including the HTML for creating rows and cells, headings, and making cells span multiple columns and rows.

- [Learn: HTML table accessibility](/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)

  - : A look at advanced HTML table features, including captions and grouping table rows into table head, body and footer sections — as well as looking at the accessibility of tables for visually impaired users.

## Related concepts

- {{cssxref("display")}} property
- {{cssxref("vertical-align")}} property
- {{cssxref("text-align")}} property

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

- HTML table-related elements:

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

## Specifications

{{Specifications}}

> [!NOTE]
> The CSS 2.2 specification defines stable standards for web styling, including detailed specifications for table formatting. The [CSS Table Module Level 3](https://drafts.csswg.org/css-tables-3/) specification seeks to expand these capabilities with advanced features for table layout and rendering. However, the table module specification is still being developed and is not yet ready for implementation.

## See also

- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS fragmentation](/en-US/docs/Web/CSS/CSS_fragmentation) module
