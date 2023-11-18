---
title: "<th>: The Table Header element"
slug: Web/HTML/Element/th
page-type: html-element
browser-compat: html.elements.th
---

{{HTMLSidebar}}

The **`<th>`** [HTML](/en-US/docs/Web/HTML) element defines a cell as the header of a group of table cells. The exact nature of this group is defined by the [`scope`](#scope) and [`headers`](#headers) attributes.

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `abbr`
  - : This attribute contains a short abbreviated description of the header cell's content. Some user-agents, such as speech readers, may present this description before the content itself.
- `colspan`
  - : This attribute contains a non-negative integer value that indicates for how many columns the header cell extends. Its default value is `1`. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
- `headers`
  - : This attribute contains a list of space-separated strings, each corresponding to the **id** attribute of the `<th>` elements that apply to this element.
- `rowspan`
  - : This attribute contains a non-negative integer value that indicates for how many rows the header cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.
- `scope`

  - : This {{Glossary("enumerated", "enumerated")}} attribute defines the cells that the header (defined in the `<th>`) element relates to. Possible values are:

    - `row`: the header relates to all cells of the row it belongs to;
    - `col`: the header relates to all cells of the column it belongs to;
    - `rowgroup`: the header belongs to a rowgroup and relates to all of its cells;
    - `colgroup`: the header belongs to a colgroup and relates to all of its cells.

    If the `scope` attribute is not specified, or its value is not `row`, `col`, `rowgroup`, or `colgroup`, then browsers automatically select the set of cells to which the header cell applies.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : This {{Glossary("enumerated", "enumerated")}} attribute specifies how horizontal alignment of each header cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell;
    - `center`, centering the content in the cell;
    - `right`, aligning the content to the right of the cell;
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell;
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](#char) and [`charoff`](#charoff) attributes.

    If this attribute is not set, the `left` value is assumed.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `axis` {{deprecated_inline}}

  - : This attribute contains a list of space-separated strings, each corresponding to the `id` attribute of a group of cells that this header applies to.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the [`scope`](#scope) attribute instead.

- `bgcolor` {{deprecated_inline}}

  - : This attribute defines the background color of each header cell. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/named-color) can also be used.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("background-color")}} property instead.

- `char` {{deprecated_inline}}

  - : This attribute specifies the alignment of the content to a character in header cells. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `charoff` {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the [`char`](#char) attribute.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard.

- `height` {{deprecated_inline}}

  - : This attribute is used to define a recommended header cell height.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("height")}} property instead.

- `valign` {{deprecated_inline}}

  - : This attribute specifies how vertical alignment of each header cell content will be handled. Possible values are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the {{Glossary("baseline/typography", "baseline")}} of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("vertical-align")}} property instead.

- `width` {{deprecated_inline}}

  - : This attribute is used to define a recommended header cell width.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("width")}} property instead.

## Usage notes

- The `<th>` may only be used within a {{HTMLElement("tr")}} element.
- In simple contexts, using the [`scope`](#scope) attribute on header cells (`<th>` elements) is redundant because [`scope`](#scope) is inferred. However, certain assistive technologies may fail to infer correctly, so specifying header scope may improve user experiences.
- When using the [`colspan`](#colspan) and [`rowspan`](#rowspan) attributes to span header cells across multiple columns and rows, cells without these attributes defined (with a default value of `1`) are automatically fitted into free available spaces in the table structure that span 1x1 cells, as illustrated in the following figure:

  ![Illustration demonstrating column and row spanning of table cells: cells 1, 3, and 4 spanning two rows; cell 2 spanning two columns; cells 5 and 6 fitting into the available cells that are the second and third columns in the second row](column-row-span.png)

  > **Note:** These attributes must not be used to overlap cells.

## Examples

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

### Basic column and row headers

This example uses `<th>` elements to introduce column and row headers in a basic table structure.

The first row ({{HTMLElement("tr")}} element) contains the column headers (`<th>` elements), which act as "titles" for the columns to make it easier to understand the information in the columns and identify the data. To indicate that each column header relates to all cells in the corresponding column, the [`scope`](#scope) attribute is set to `col` (column).

The remaining rows contain the main data of the table. Each of these rows has a row header (`<th>` element) introduced as the first cell. This creates a column with row headers as the first column of the table. Similar to the column headers, the [`scope`](#scope) attribute is set to `row` to specify which cells each row header relates to, which in the example below are all data cells ({{HTMLElement("td")}} elements) in each `row`.

Some basic CSS is used to style the table and its cells. Using the [`scope`](#scope) attributes of the headers, CSS [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) are used to highlight the column and row headers (`<th>` elements) so that they stand out from the data cells ({{HTMLElement("td")}} elements).

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
th,
td {
  border: 1px solid rgb(160, 160, 160);
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
  border: 2px solid rgb(140, 140, 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### Result

{{EmbedLiveSample("Basic_column_and_row_headers", 650, 170)}}

> **Note:** Normally, {{HTMLElement("thead")}} and {{HTMLElement("tbody")}} elements are used to group such rows with headers into the respective table head and body sections. This is not implemented in the [example](#basic_column_and_row_headers) to focus on the headers and keep the example simple.

### Column and row spanning

To markup the table from the [basic example](#basic_column_and_row_headers) in a slightly more advanced way, this example introduces an additional table row ({{HTMLElement("tr")}} element) as the second header row of the table with two additional column headers (`<th>` elements). In this way, the "Pronunciation" column is split into two columns, one for the IPA (International Phonetic Alphabet) notation and one for the respelling (the original pronunciation column). The corresponding data cells ({{HTMLElement("td")}} elements) are added to each subsequent row.

As shown in the [usage notes](#usage_notes), the [`colspan`](#colspan) and [`rowspan`](#rowspan) attributes can be used for the `<th>` elements to allocate the header cells to the correct columns and rows. To achieve a "two-row" header in the table structure, the first two header cells within the first {{HTMLElement("tr")}} element are spanned across two rows. The third header cell is spanned two columns wide (remaining in the first row). This setup leaves two available areas in the third and fourth columns in the second row, where the two headers within the second {{HTMLElement("tr")}} element are automatically placed, with the default value being `1` for the [`colspan`](#colspan) and [`rowspan`](#rowspan) attributes.

The CSS is unchanged from the [previous example](#basic_column_and_row_headers).

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

> **Note:** Normally, {{HTMLElement("thead")}} and {{HTMLElement("tbody")}} elements are used to group such rows with headers into the respective table head and body sections. This is not implemented in the [example](#column_and_row_spanning) to focus on the headers and spanning and keep the example simple.

### Associate header cells with other header cells

For more complex relationships between header cells, using `th` elements with the [`scope`](#scope) attribute alone may not be sufficient for assistive technologies, especially screen readers.

To improve the {{Glossary("accessibility", "accessibility")}} of the [previous example](#column_and_row_spanning) and to allow screen readers, for example, to speak the headers associated with each header cell, the [`headers`](#headers) attribute can be introduced along with [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attributes. Because of the way the "Pronunciation" column is split into two columns in the example, introducing a "two row" header, assistive technologies such as screen readers may not be able to identify which additional header cells (`th` elements) the "Pronunciation" header cell is related to and vice versa. Therefore, the [`headers`](#headers) attribute is used on the "Pronunciation", "IPA", and "Respelling" header cells to associate the related header cells based on the values of the unique identifiers from the added [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attributes in the form of a space-separated list.

The [visual result](#result_2) is unchanged from the [previous example table](#column_and_row_spanning).

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

> **Note:** It's recommended to use a more unique value for the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attribute. The `id` values are kept simple in the [example](#associate_header_cells_with_other_header_cells) to focus on the concept of the [`headers`](#headers) attribute.

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

- [HTML tables tutorial](/en-US/docs/Learn/HTML/Tables)
- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<th>` element:

  - the {{cssxref("background-color")}} property to set the background color of each header cell;
  - the {{cssxref("border")}} property to control borders of header cells;
  - the {{cssxref("height")}} property to control the recommended header cell height;
  - the {{cssxref("text-align")}} property to horizontally align each header cell content;
  - the {{cssxref("vertical-align")}} property to vertically align each header cell content;
  - the {{cssxref("width")}} property to control the recommended header cell width;
  - the {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} and {{cssxref(":last-of-type")}} pseudo-classes to select the desired header cells.
