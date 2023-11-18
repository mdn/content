---
title: "<td>: The Table Data Cell element"
slug: Web/HTML/Element/td
page-type: html-element
browser-compat: html.elements.td
---

{{HTMLSidebar}}

The **`<td>`** [HTML](/en-US/docs/Web/HTML) element defines a cell of a table that contains data.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `colspan`
  - : This attribute contains a non-negative integer value that indicates for how many columns the data cell extends. Its default value is `1`. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
- `headers`
  - : This attribute contains a list of space-separated strings, each corresponding to the **id** attribute of the {{HTMLElement("th")}} elements that apply to this element.
- `rowspan`
  - : This attribute contains a non-negative integer value that indicates for how many rows the data cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `abbr` {{deprecated_inline}}

  - : This attribute contains a short abbreviated description of the data cell's content. Some user-agents, such as speech readers, may present this description before the content itself.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: you can put the abbreviated content inside the cell and place the (longer) description in the [`title`](/en-US/docs/Web/HTML/Global_attributes/title) attribute.

- `align` {{deprecated_inline}}

  - : This {{Glossary("enumerated", "enumerated")}} attribute specifies how horizontal alignment of each data cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell;
    - `center`, centering the content in the cell;
    - `right`, aligning the content to the right of the cell;
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell;
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](#char) and [`charoff`](#charoff) attributes.

    If this attribute is not set, the `left` value is assumed.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `axis` {{deprecated_inline}}

  - : This attribute contains a list of space-separated strings, each corresponding to the `id` attribute of a group of cells that this header applies to.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard.

- `bgcolor` {{deprecated_inline}}

  - : This attribute defines the background color of each data cell. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/named-color) can also be used.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("background-color")}} property instead.

- `char` {{deprecated_inline}}

  - : This attribute specifies the alignment of the content to a character in data cells. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `charoff` {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the [`char`](#char) attribute.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard.

- `height` {{deprecated_inline}}

  - : This attribute is used to define a recommended data cell height.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("height")}} property instead.

- `scope` {{deprecated_inline}}

  - : This {{Glossary("enumerated", "enumerated")}} attribute defines the cells that the header (defined in the {{HTMLElement("th")}}) element relates to.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: only use this attribute with the {{HTMLElement("th")}} element to define the row or column for which it is a header.

- `valign` {{deprecated_inline}}

  - : This attribute specifies how vertical alignment of each data cell content will be handled. Possible values are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the {{Glossary("baseline/typography", "baseline")}} of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("vertical-align")}} property instead.

- `width` {{deprecated_inline}}

  - : This attribute is used to define a recommended data cell width.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("width")}} property instead.

## Usage notes

- The `<td>` may only be used within a {{HTMLElement("tr")}} element.
- When using the [`colspan`](#colspan) and [`rowspan`](#rowspan) attributes to span data cells across multiple columns and rows, cells without these attributes defined (with a default value of `1`) are automatically fitted into free available spaces in the table structure that span 1x1 cells, as illustrated in the following figure:

  ![Illustration demonstrating column and row spanning of table cells: cells 1, 3, and 4 spanning two rows; cell 2 spanning two columns; cells 5 and 6 fitting into the available cells that are the second and third columns in the second row](column-row-span.png)

  > **Note:** These attributes must not be used to overlap cells.

## Examples

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

### Basic data cells

This example uses some table rows ({{HTMLElement("tr")}} elements) with row headers ({{HTMLElement("th")}} elements) and `<td>` elements to introduce a basic table with data about the phonetic alphabet. The {{HTMLElement("th")}} elements in each row form the first column of the table, while each corresponding `<td>` element contains data aligned with its respective column.

Some basic CSS is used to style the table and its cells. CSS [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) and the {{cssxref(":nth-of-type")}} pseudo-class are used to alternate the appearance of the cells to make the information in the table easier to understand and identify.

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
td,
th {
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
}

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
```

#### Result

{{EmbedLiveSample("Basic_data_cells", 650, 140)}}

> **Note:** Normally, a table head group with column headers would be implemented to make it easier to understand the information in the columns. The {{HTMLElement("thead")}} and {{HTMLElement("tbody")}} elements would be used to group such rows of headers and data into the respective table head and body sections. This is not implemented in the [example](#basic_data_cells) to focus on the data cells and keep the example simple.

### Column and row spanning

Keeping the table structure of the [basic example](#basic_data_cells), an additional data cell (`<td>` element) is introduced within the first row ({{HTMLElement("tr")}} element). This creates a fourth column in the table.

Using the [`rowspan`](#rowspan) attribute, the "ABC" cell is spanned across the first three rows of the table. The last data cells of the subsequent rows are spanned two columns wide using the [`colspan`](#colspan) attribute to align them correctly in the table structure and layout. Note that an additional row ({{HTMLElement("tr")}} element) is added to the table to illustrate this.

The {{cssxref(":first-of-type")}} and {{cssxref(":last-of-type")}} pseudo-classes are used in the CSS to select and style the added "ABC" data cell.

```html
<table>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td rowspan="3">ABC</td>
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
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

```css
tr:first-of-type td:last-of-type {
  width: 60px;
  background-color: #505050;
  color: #fff;
  font-weight: bold;
  text-align: center;
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

td,
th {
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
}

tr:nth-of-type(odd) td {
  background-color: #eee;
}

tr th[scope="row"] {
  background-color: #d6ecd4;
}
```

#### Result

{{EmbedLiveSample("Column_and_row_spanning", 650, 170)}}

### Associate data cells with header cells

For more complex relationships between data cells (`<td>` elements) and header cells ({{HTMLElement("th")}} elements), using {{HTMLElement("th")}} elements with the [`scope`](/en-US/docs/Web/HTML/Element/th#scope) attribute alone may not be sufficient for assistive technologies, especially screen readers.

To improve the {{Glossary("accessibility", "accessibility")}} of the [previous example](#column_and_row_spanning) and to allow screen readers, for example, to speak the headers associated with each data cell, the [`headers`](#headers) attribute can be introduced along with [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attributes. Each row header cell ({{HTMLElement("th")}} element) associated with the "ABC" data cell, i.e., the letters "A", "B", and "C", is given a unique identifier with the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute. The "ABC" data cell (`<td>` element) then uses these `id` values in a space-separated list for the [`headers`](#headers) attribute.

The [visual result](#result_2) is unchanged from the [previous example table](#column_and_row_spanning).

```html
<table>
  <tr>
    <th id="a" scope="row">A</th>
    <td>Alfa</td>
    <td>AL fah</td>
    <td headers="a b c" rowspan="3">ABC</td>
  </tr>
  <tr>
    <th id="b" scope="row">B</th>
    <td>Bravo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th id="c" scope="row">C</th>
    <td>Charlie</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td colspan="2">DELL tah</td>
  </tr>
  <tr>
    <th scope="row">E</th>
    <td>Echo</td>
    <td colspan="2">ECK oh</td>
  </tr>
</table>
```

> **Note:** It's recommended to use a more unique value for the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute. The `id` values are kept simple in the [example](#associate_data_cells_with_header_cells) to focus on the concept of the [`headers`](#headers) attribute.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>Sectioning root.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is mandatory.<br />The end tag may be omitted, if it is
        immediately followed by a {{HTMLElement("th")}} or
        {{HTMLElement("td")}} element or if there are no more data in its
        parent element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>A {{HTMLElement("tr")}} element.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Cell_Role"
            >cell</a
          ></code
        >
        if a descendant of a {{HTMLElement("table")}} element
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTableCellElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML tables tutorial](/en-US/docs/Learn/HTML/Tables)
- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<td>` element:

  - the {{cssxref("background-color")}} property to set the background color of each data cell;
  - the {{cssxref("border")}} property to control borders of data cells;
  - the {{cssxref("height")}} property to control the recommended data cell height;
  - the {{cssxref("text-align")}} property to horizontally align each data cell content;
  - the {{cssxref("vertical-align")}} property to vertically align each data cell content;
  - the {{cssxref("width")}} property to control the recommended data cell width;
  - the {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} and {{cssxref(":last-of-type")}} pseudo-classes to select the desired data cells.
