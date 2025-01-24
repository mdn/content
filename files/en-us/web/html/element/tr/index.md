---
title: "<tr>: The Table Row element"
slug: Web/HTML/Element/tr
page-type: html-element
browser-compat: html.elements.tr
---

{{HTMLSidebar}}

The **`<tr>`** [HTML](/en-US/docs/Web/HTML) element defines a row of cells in a table. The row's cells can then be established using a mix of {{HTMLElement("td")}} (data cell) and {{HTMLElement("th")}} (header cell) elements.

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : Specifies the horizontal alignment of each row cell. The possible {{Glossary("enumerated")}} values are `left`, `center`, `right`, `justify`, and `char`. When supported, the `char` value aligns the textual content on the character defined in the [`char`](#char) attribute and on offset defined by the [`charoff`](#charoff) attribute. Use the {{cssxref("text-align")}} CSS property instead, as this attribute is deprecated.

- `bgcolor` {{deprecated_inline}}

  - : Defines the background color of each row cell. The value is an HTML color; either a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a `#`, or a [color keyword](/en-US/docs/Web/CSS/named-color). Other CSS {{cssxref("color_value", "&lt;color&gt")}} values are not supported. Use the {{cssxref("background-color")}} CSS property instead, as this attribute is deprecated.

- `char` {{deprecated_inline}}

  - : Specifies the alignment of the content to a character of each row cell. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

- `charoff` {{deprecated_inline}}

  - : Specifies the number of characters to offset the row cell content from the alignment character specified by the [`char`](#char) attribute.

- `valign` {{deprecated_inline}}

  - : Specifies the vertical alignment of each row cell. The possible {{Glossary("enumerated")}} values are `baseline`, `bottom`, `middle`, and `top`. Use the {{cssxref("vertical-align")}} CSS property instead, as this attribute is deprecated.

## Usage notes

- The `<tr>` element is valid as a child of a {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, or {{HTMLElement("tfoot")}} element only.
- If the `<tr>` is placed as a direct child of its parent {{HTMLElement("table")}} element, the `<tbody>` parent is implied and browsers will add the `<tbody>` to the markup.
- The implied `<tbody>` parent is only supported if the `<table>` otherwise has no child `<tbody>` elements, and only if the `<tr>` is included after any {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, and `<thead>` elements.
- The CSS pseudo-classes {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, and {{cssxref(":last-of-type")}} are often useful for selecting the desired set of rows and their data and header cells ({{HTMLElement("td")}} and {{HTMLElement("th")}} elements).
- When a `<tr>` is included as a direct child of the `<table>`, as the browser adds a `<tbody>` to the markup, CSS selectors such as `table > tr` may not work as expected or at all.

## Examples

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

### Basic row setup

This example demonstrates a table with four rows and three columns, where the first column contains headers for the row data cells.

#### HTML

Four `<tr>` elements are used to create four table rows. Each row contains three cells - one header cell ({{HTMLElement("th")}}) and two data cells ({{HTMLElement("td")}}) - creating three columns. The [`scope`](/en-US/docs/Web/HTML/Element/th#scope) attribute set on each header cell specifies which cells they relate to, which in this example is all data cells within the `row`.

```html
<table>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Alfa</td>
      <td>AL fah</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Bravo</td>
      <td>BRAH voh</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Charlie</td>
      <td>CHAR lee</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>Delta</td>
      <td>DELL tah</td>
    </tr>
  </tbody>
</table>
```

#### CSS

The CSS {{cssxref(":nth-of-type")}} pseudo-class is used to select every `odd` row and set the {{cssxref("background-color")}} of those rows to a slightly darker tone, creating a so-called "zebra stripe" effect. This alternating background makes the rows of data in the table easier to parse and read—imagine having many rows and columns and trying to find some data in a particular row. In addition, the row header cells ({{HTMLElement("th")}} elements) are highlighted with a {{cssxref("background-color")}} to distinguish them from the data cells ({{HTMLElement("td")}} elements).

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Result

{{EmbedLiveSample("Basic_row_setup", 650, 140)}}

### Header row

This example extends the basic table from the [previous example](#basic_row_setup) by adding a header row as the first row of the table.

#### HTML

An additional table row (`<tr>`) is added as the first row of the table with column header cells ({{HTMLElement("th")}}) providing a header for each column. We put this row in a {{HTMLElement("thead")}} grouping element to indicate this is the header of the table. The [`scope`](/en-US/docs/Web/HTML/Element/th#scope) attribute is added to each header cell (`<th>`) within this head row to explicitly specify that each header cell relates to all the cells within its own column, even though those cells are in the {{HTMLElement("tbody")}}.

```html
<table>
  <thead>
    <tr>
      <th scope="col">Symbol</th>
      <th scope="col">Code word</th>
      <th scope="col">Pronunciation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Alfa</td>
      <td>AL fah</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Bravo</td>
      <td>BRAH voh</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Charlie</td>
      <td>CHAR lee</td>
    </tr>
    <tr>
      <th scope="row">D</th>
      <td>Delta</td>
      <td>DELL tah</td>
    </tr>
  </tbody>
</table>
```

#### CSS

The CSS is nearly unchanged from the [previous example](#basic_row_setup), except for some additional styling to highlight the "header row" so that the headers of the columns stand out from the other cells.

```css
tr:nth-of-type(odd) {
  background-color: #eee;
}

tr th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}
```

#### Result

{{EmbedLiveSample("Header_row", 650, 170)}}

### Sorting rows

There are no native methods for sorting the rows (`<tr>` elements) of a {{HTMLElement("table")}}. But using {{jsxref("Array.prototype.sort()")}}, {{domxref("Node.removeChild")}}, and {{domxref("Node.appendChild")}}, a custom `sort()` function can be implemented in JavaScript to sort an {{domxref("HTMLCollection")}} of `<tr>` elements.

#### HTML

A {{HTMLElement("tbody")}} element is used in this basic table to mark the body section of the table and to include three rows (`<tr>` elements) with data ({{HTMLElement("td")}} elements), creating one column with numbers in descending order.

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

In the JavaScript code below, the created `sort()` function is attached to the {{HTMLElement("tbody")}} element so that it sorts the table cells in order of increasing value and updates the display accordingly.

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}
```

#### Result

{{EmbedLiveSample('Sorting_rows', '650', '80')}}

### Sorting rows with a click on header cells

This example extends the basic table from the [previous example](#sorting_rows) by making the sorting interactive and independent for multiple columns.

#### HTML

An additional data cell ({{HTMLElement("td")}} element) is added to each row (`<tr>` element) within the table body ({{HTMLElement("tbody")}} element) to create a second column with letters in ascending order. Using the {{HTMLElement("thead")}} element, a head section is added before the body section to introduce a head row with table header cells ({{HTMLElement("th")}} element). These header cells are used in the JavaScript code below to make them clickable and then to perform the corresponding sorting when activated per click.

```html
<table>
  <thead>
    <tr>
      <th>Numbers</th>
      <th>Letters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

A click event handler is added to each table header ({{HTMLElement("th")}} element) of each {{HTMLElement("table")}} in the {{domxref("HTMLDocument", "document")}}; it sorts all the rows (`<tr>` elements) of the {{HTMLElement("tbody")}} based on the contents of the data cells ({{HTMLElement("td")}} elements) contained in the rows.

> [!NOTE]
> This solution assumes that the {{HTMLElement("td")}} elements are populated by raw text with no descendant elements.

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 4px 8px;
}

th {
  background-color: #505050;
  color: #fff;
  cursor: pointer;
}
```

#### Result

{{EmbedLiveSample('Sorting_rows_with_a_click_on_header_cells', '650', '100')}}

> [!NOTE]
> To be usable and accessible, the header cell of each sortable column must be identifiable as a sorting button and each must define whether the column is currently sorted in ascending or descending order visually and with the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) attribute. See the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)'s [sortable table example](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/) for more information.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("td")}} and/or
        {{HTMLElement("th")}} elements;
        {{Glossary("script-supporting element", "script-supporting elements")}}
        ({{HTMLElement("script")}} and
        {{HTMLElement("template")}}) are also allowed.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        Start tag is mandatory. End tag may be omitted if the
        <code>&lt;tr&gt;</code> element is immediately followed by a
        <code>&lt;tr&gt;</code> element, or if the row is the last element
        in its parent table group ({{HTMLElement("thead")}},
        {{HTMLElement("tbody")}} or {{HTMLElement("tfoot")}})
        element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        {{HTMLElement("table")}} (only if the table has no child
        {{HTMLElement("tbody")}} element, and even then only after any
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, and
        {{HTMLElement("thead")}} elements); otherwise, the parent must
        be a {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} or
        {{HTMLElement("tfoot")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/row_role"
            >row</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLTableRowElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: HTML table basics](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}: Other table-related elements
- {{cssxref("background-color")}}: CSS property to set the background color of each row cell
- {{cssxref("border")}}: CSS property to control borders of row cells
- {{cssxref("text-align")}}: CSS property to horizontally align each row cell content
- {{cssxref("vertical-align")}}: CSS property to vertically align each row cell content
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS pseudo-classes to select the desired row cells
