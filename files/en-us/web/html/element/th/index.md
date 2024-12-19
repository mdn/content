---
title: "<th>: The Table Header element"
slug: Web/HTML/Element/th
page-type: html-element
browser-compat: html.elements.th
---

{{HTMLSidebar}}

The **`<th>`** [HTML](/en-US/docs/Web/HTML) element defines a cell as the header of a group of table cells and may be used as a child of the {{HTMLElement("tr")}} element. The exact nature of this group is defined by the [`scope`](#scope) and [`headers`](#headers) attributes.

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `abbr`
  - : A short, abbreviated description of the header cell's content provided as an alternative label to use for the header cell when referencing the cell in other contexts. Some user-agents, such as speech readers, may present this description before the content itself.
- `colspan`
  - : A non-negative integer value indicating how many columns the header cell spans or extends. The default value is `1`. User agents dismiss values higher than 1000 as incorrect, defaulting such values to `1`.
- `headers`
  - : A list of space-separated strings corresponding to the `id` attributes of the `<th>` elements that provide the headers for this header cell.
- `rowspan`
  - : A non-negative integer value indicating how many rows the header cell spans or extends. The default value is `1`; if its value is set to `0`, the header cell will extends to the end of the table grouping section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, even if implicitly defined), that the `<th>` belongs to. Values higher than `65534` are clipped at `65534`.
- `scope`

  - : Defines the cells that the header (defined in the `<th>`) element relates to. Possible {{Glossary("enumerated", "enumerated")}} values are:

    - `row`: the header relates to all cells of the row it belongs to;
    - `col`: the header relates to all cells of the column it belongs to;
    - `rowgroup`: the header belongs to a rowgroup and relates to all of its cells;
    - `colgroup`: the header belongs to a colgroup and relates to all of its cells.

    If the `scope` attribute is not specified, or its value is not `row`, `col`, `rowgroup`, or `colgroup`, then browsers automatically select the set of cells to which the header cell applies.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : Specifies the horizontal alignment of the header cell. The possible {{Glossary("enumerated")}} values are `left`, `center`, `right`, `justify`, and `char`. When supported, the `char` value aligns the textual content on the character defined in the [`char`](#char) attribute and the offset defined by the [`charoff`](#charoff) attribute. Use the {{cssxref("text-align")}} CSS property instead, as this attribute is deprecated.

- `axis` {{deprecated_inline}}

  - : Contains a list of space-separated strings, each corresponding to the `id` attribute of a group of cells that the header cell applies to. Use the [`scope`](#scope) attribute instead, as this attribute is deprecated.

- `bgcolor` {{deprecated_inline}}

  - : Defines the background color of the header cell. The value is an HTML color; either a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a `#`, or a [color keyword](/en-US/docs/Web/CSS/named-color). Other CSS {{cssxref("color_value", "&lt;color&gt")}} values are not supported. Use the {{cssxref("background-color")}} CSS property instead, as this attribute is deprecated.

- `char` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the alignment of the content to a character of the header cell. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

- `charoff` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the number of characters to offset the header cell content from the alignment character specified by the [`char`](#char) attribute.

- `height` {{deprecated_inline}}

  - : Defines a recommended header cell height. Use the {{cssxref("height")}} CSS property instead, as this attribute is deprecated.

- `valign` {{deprecated_inline}}

  - : Specifies the vertical alignment of the header cell. The possible {{Glossary("enumerated")}} values are `baseline`, `bottom`, `middle`, and `top`. Use the {{cssxref("vertical-align")}} CSS property instead, as this attribute is deprecated.

- `width` {{deprecated_inline}}

  - : Defines a recommended header cell width. Use the {{cssxref("width")}} CSS property instead, as this attribute is deprecated.

## Usage notes

- The `<th>` may only be used within a {{HTMLElement("tr")}} element.
- In simple contexts, using the [`scope`](#scope) attribute on header cells (`<th>` elements) is redundant because [`scope`](#scope) is inferred. However, certain assistive technologies may fail to infer correctly, so specifying header scope may improve user experiences.
- When using the [`colspan`](#colspan) and [`rowspan`](#rowspan) attributes to span header cells across multiple columns and rows, cells without these attributes defined (with a default value of `1`) are automatically fitted into free available spaces in the table structure that span 1x1 cells, as illustrated in the following figure:

  ![Illustration demonstrating column and row spanning of table cells: cells 1, 3, and 4 spanning two rows; cell 2 spanning two columns; cells 5 and 6 fitting into the available cells that are the second and third columns in the second row](column-row-span.png)

  > [!NOTE]
  > These attributes must not be used to overlap cells.

## Examples

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

### Basic column and row headers

This example uses `<th>` elements to introduce column and row headers in a basic table structure.

#### HTML

The first row ({{HTMLElement("tr")}} element) contains the column headers (`<th>` elements), which act as "titles" for the columns to make it easier to understand the information in the columns and identify the data. To indicate that each column header relates to all cells in the corresponding column, the [`scope`](#scope) attribute is set to `col` (column).

The remaining rows contain the main data of the table. Each of these rows has a row header (`<th>` element) introduced as the first cell. This creates a column with row headers as the first column of the table. Similar to the column headers, the [`scope`](#scope) attribute is set to `row` to specify which cells each row header relates to, which in the example below are all data cells ({{HTMLElement("td")}} elements) in each `row`.

> [!NOTE]
> Normally, the grouping elements {{HTMLElement("thead")}} and {{HTMLElement("tbody")}} are used to group rows with headers into the respective table head and body sections. These elements are omitted in this example to reduce complexity and enable focusing on the use of header cells.

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

#### CSS

Some basic CSS is used to style the table and its cells. We use CSS [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) to target header cells based on their [`scope`](#scope) attribute values, highlighting column and row headers (`<th>` elements) and differentiating them each other and from the data cells ({{HTMLElement("td")}}).

```css
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

tr:nth-of-type(odd) td {
  background-color: #eee;
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
```

#### Result

{{EmbedLiveSample("Basic_column_and_row_headers", 650, 170)}}

### Column and row spanning

This example extends and enhances the basic table from the [previous example](#basic_column_and_row_headers) by adding a second row for additional column headers.

#### HTML

An additional table row ({{HTMLElement("tr")}} element) is added as the second header row of the table with two additional column headers (`<th>` elements). In this way, the "Pronunciation" column is split into two columns, one for the IPA (International Phonetic Alphabet) notation and one for the respelling (the original pronunciation column). The corresponding data cells ({{HTMLElement("td")}} elements) are added to each subsequent row.

As shown in the [usage notes](#usage_notes), the [`colspan`](#colspan) and [`rowspan`](#rowspan) attributes can be used for the `<th>` elements to allocate the header cells to the correct columns and rows. To achieve a "two-row" header in the table structure, the first two header cells within the first {{HTMLElement("tr")}} element are spanned across two rows. The third header cell is spanned two columns wide (remaining in the first row). This setup leaves two available areas in the third and fourth columns in the second row, where the two headers within the second {{HTMLElement("tr")}} element are automatically placed, with the default value being `1` for the [`colspan`](#colspan) and [`rowspan`](#rowspan) attributes.

> [!NOTE]
> Normally, {{HTMLElement("thead")}} and {{HTMLElement("tbody")}} elements are used to group rows with headers into the respective table head and body sections. This is not implemented in this example to focus on the headers and spanning and reduce the example's complexity.

```html
<table>
  <tr>
    <th scope="col" rowspan="2">Symbol</th>
    <th scope="col" rowspan="2">Code word</th>
    <th scope="col" colspan="2">Pronunciation</th>
  </tr>
  <tr>
    <th scope="col">IPA</th>
    <th scope="col">Respelling</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>ˈælfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>ˈbraːˈvo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>ˈtʃɑːli</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>ˈdeltɑ</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### CSS

The CSS is unchanged from the [previous example](#basic_column_and_row_headers).

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

th[scope="col"] {
  background-color: #505050;
  color: #fff;
}

th[scope="row"] {
  background-color: #d6ecd4;
}

tr:nth-of-type(odd) td {
  background-color: #eee;
}
```

#### Result

{{EmbedLiveSample("Column_and_row_spanning", 650, 200)}}

### Associate header cells with other header cells

For more complex relationships between header cells, using `th` elements with the [`scope`](#scope) attribute alone may not be sufficient for assistive technologies, especially screen readers.

#### HTML

To improve the {{Glossary("accessibility", "accessibility")}} of the [previous example](#column_and_row_spanning) and to allow screen readers, for example, to speak the headers associated with each header cell, the [`headers`](#headers) attribute can be introduced along with [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attributes. Because of the way the "Pronunciation" column is split into two columns in the example, introducing a "two row" header, assistive technologies such as screen readers may not be able to identify which additional header cells (`th` elements) the "Pronunciation" header cell is related to and vice versa. Therefore, the [`headers`](#headers) attribute is used on the "Pronunciation", "IPA", and "Respelling" header cells to associate the related header cells based on the values of the unique identifiers from the added [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attributes in the form of a space-separated list.

> [!NOTE]
> It's recommended to use more descriptive and useful values for the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute. Each `id` in a document must be unique to that document. In this example, the `id` values are single characters to maintain focus on the concept of the [`headers`](#headers) attribute.

```html
<table>
  <tr>
    <th scope="col" rowspan="2">Symbol</th>
    <th scope="col" rowspan="2">Code word</th>
    <th scope="col" colspan="2" id="p" headers="i r">Pronunciation</th>
  </tr>
  <tr>
    <th scope="col" id="i" headers="p">IPA</th>
    <th scope="col" id="r" headers="p">Respelling</th>
  </tr>
  <tr>
    <th scope="row">A</th>
    <td>Alfa</td>
    <td>ˈælfa</td>
    <td>AL fah</td>
  </tr>
  <tr>
    <th scope="row">B</th>
    <td>Bravo</td>
    <td>ˈbraːˈvo</td>
    <td>BRAH voh</td>
  </tr>
  <tr>
    <th scope="row">C</th>
    <td>Charlie</td>
    <td>ˈtʃɑːli</td>
    <td>CHAR lee</td>
  </tr>
  <tr>
    <th scope="row">D</th>
    <td>Delta</td>
    <td>ˈdeltɑ</td>
    <td>DELL tah</td>
  </tr>
</table>
```

#### Result

The [visual result](#result_2) is unchanged from the [previous example table](#column_and_row_spanning).

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >, but with no header, footer, sectioning content, or heading content
        descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is mandatory.<br />The end tag may be omitted, if it is
        immediately followed by a <code>&lt;th&gt;</code> or
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
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role"><code>columnheader</code></a> or <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role"><code>rowheader</code></a>
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

- [Learn: HTML table basics](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Other table-related elements
- {{cssxref("background-color")}}: CSS property to set the background color of each header cell
- {{cssxref("border")}}: CSS property to control borders of header cells
- {{cssxref("height")}}: CSS property to control the recommended header cell height
- {{cssxref("text-align")}}: CSS property to horizontally align each header cell content
- {{cssxref("vertical-align")}}: CSS property to vertically align each header cell content
- {{cssxref("width")}}: CSS property to control the recommended header cell width
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS pseudo-classes to select the desired header cells
