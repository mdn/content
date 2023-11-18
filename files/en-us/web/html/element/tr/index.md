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

  - : This {{Glossary("enumerated", "enumerated")}} attribute specifies how horizontal alignment of each row cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell;
    - `center`, centering the content in the cell;
    - `right`, aligning the content to the right of the cell;
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell;
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](#char) and [`charoff`](#charoff) attributes.

    If this attribute is not set, the parent node's value is inherited.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `bgcolor` {{deprecated_inline}}

  - : This attribute defines the background color of each row cell. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/named-color) can also be used.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("background-color")}} property instead.

- `char` {{deprecated_inline}}

  - : This attribute specifies the alignment of the content to a character in row cells. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `charoff` {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the [`char`](#char) attribute.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard.

- `valign` {{deprecated_inline}}

  - : This attribute specifies how vertical alignment of each row cell content will be handled. Possible values are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the {{Glossary("baseline/typography", "baseline")}} of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("vertical-align")}} property instead.

## Usage notes

- The `<tr>` may be placed as a direct child of its parent {{HTMLElement("table")}} element, but only if the `<table>` has no child {{HTMLElement("tbody")}} elements, and only after any {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, and {{HTMLElement("thead")}} elements. Otherwise, the parent must be a {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, or {{HTMLElement("tfoot")}} element.
- The CSS pseudo-classes {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, and {{cssxref(":last-of-type")}} are often useful for selecting the desired set of rows and their header and data cells ({{HTMLElement("th")}} and {{HTMLElement("td")}} elements).

## Examples

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

### Basic row setup

This example uses `<tr>` elements to create four basic table rows. Each row contains data using one header cell ({{HTMLElement("th")}} element) and two data cells ({{HTMLElement("td")}} elements). This row setup therefore creates a total of three columns. The [`scope`](/en-US/docs/Web/HTML/Element/th#scope) attribute is used for the headers ({{HTMLElement("th")}} elements) to specify which cells they relate to, which in the example below is all data cells ({{HTMLElement("td")}} elements) in each `row`.

The CSS {{cssxref(":nth-of-type")}} pseudo-class is used to select every `odd` row and set the {{cssxref("background-color")}} of those rows to a slightly darker tone, creating a so-called "zebra stripe" effect. This alternating background makes the rows of data in the table easier to parse and read—imagine having many rows and columns and trying to find some data in a particular row. In addition, the row header cells ({{HTMLElement("th")}} elements) are highlighted with a {{cssxref("background-color")}} to distinguish them from the data cells ({{HTMLElement("td")}} elements).

```html
<table>
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
</table>
```

```css
tr:nth-of-type(odd) td {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140, 140, 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
}
```

#### Result

{{EmbedLiveSample("Basic_row_setup", 650, 140)}}

### Header row

To improve the table from the [basic example](#basic_row_setup) in a slightly more advanced way, this example introduces an additional table row (`<tr>` element) as the first row of the table with column header cells ({{HTMLElement("th")}} elements). This makes it easier to understand the information in the columns and identify the data. The [`scope`](/en-US/docs/Web/HTML/Element/th#scope) attribute is used for the headers ({{HTMLElement("th")}} elements) within the first row to specify which cells they relate to, which in the example below is all cells in each `col` (column).

The CSS is nearly unchanged from the [previous example](#basic_row_setup), except for some additional styling to highlight the "header row" so that the headings of the columns stand out from the other cells.

```html
<table>
  <tr>
    <th scope="col">Symbol</th>
    <th scope="col">Code word</th>
    <th scope="col">Pronunciation</th>
  </tr>
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
</table>
```

```css
tr:nth-of-type(odd) td {
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
  border: 2px solid rgb(140, 140, 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
}
```

#### Result

{{EmbedLiveSample("Header_row", 650, 170)}}

> **Note:** Normally, {{HTMLElement("thead")}} and {{HTMLElement("tbody")}} elements are used to group such rows into the respective table head and body sections. This is not implemented in the [example](#header_row) to focus on the rows and keep the example simple.

### Sorting rows

There are no native methods for sorting the rows (`<tr>` elements) of a {{HTMLElement("table")}}. But using {{jsxref("Array.prototype.sort()")}}, {{domxref("Node.removeChild")}}, and {{domxref("Node.appendChild")}}, a custom `sort()` function can be implemented in JavaScript to sort an {{domxref("HTMLCollection")}} of `<tr>` elements.

In the example below, the created `sort()` function is attached to the {{HTMLElement("tbody")}} element so that it sorts the table cells in order of increasing value and updates the display accordingly.

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
  border: 2px solid rgb(140, 140, 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

td {
  border: 1px solid rgb(160, 160, 160);
  padding: 4px 8px;
}
```

#### Result

{{EmbedLiveSample('Sorting_rows', '650', '80')}}

### Sorting rows with a click on header cells

The following example adds an event handler to each table header ({{HTMLElement("th")}} element) of each {{HTMLElement("table")}} in the {{domxref("HTMLDocument", "document")}}; it sorts all the rows (`<tr>` elements) of the {{HTMLElement("tbody")}} based on the contents of the data cells ({{HTMLElement("td")}} elements) contained in the rows.

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
  border: 2px solid rgb(140, 140, 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160, 160, 160);
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

> **Note:** This solution assumes that the {{HTMLElement("td")}} elements are populated by raw text with no descendant elements.

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
        {{HTMLElement("tr")}} element is immediately followed by a
        {{HTMLElement("tr")}} element, or if the row is the last element
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
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Row_Role"
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

- [HTML tables tutorial](/en-US/docs/Learn/HTML/Tables)
- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<tr>` element:

  - the {{cssxref("background-color")}} property to set the background color of each row cell;
  - the {{cssxref("border")}} property to control borders of row cells;
  - the {{cssxref("text-align")}} property to horizontally align each row cell content;
  - the {{cssxref("vertical-align")}} property to vertically align each row cell content;
  - the {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} and {{cssxref(":last-of-type")}} pseudo-classes to select the desired row cells.
