---
title: "<thead>: The Table Head element"
slug: Web/HTML/Element/thead
page-type: html-element
browser-compat: html.elements.thead
---

{{HTMLSidebar}}

The **`<thead>`** [HTML](/en-US/docs/Web/HTML) element encapsulates a set of table rows ({{HTMLElement("tr")}} elements), indicating that they comprise the head of a table with information about the table's columns. This is usually in the form of column headers ({{HTMLElement("th")}} elements).

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : Specifies the horizontal alignment of each head cell. The possible {{Glossary("enumerated")}} values are `left`, `center`, `right`, `justify`, and `char`. When supported, the `char` value aligns the textual content on the character defined in the [`char`](#char) attribute and the offset defined by the [`charoff`](#charoff) attribute. Use the {{cssxref("text-align")}} CSS property instead, as this attribute is deprecated.

- `bgcolor` {{deprecated_inline}}

  - : Defines the background color of each head cell. The value is an HTML color; either a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a `#`, or a [color keyword](/en-US/docs/Web/CSS/named-color). Other CSS {{cssxref("color_value", "&lt;color&gt")}} values are not supported. Use the {{cssxref("background-color")}} CSS property instead, as this attribute is deprecated.

- `char` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the alignment of the content to a character of each head cell. If [`align`](#align) is not set to `char`, this attribute is ignored.

- `charoff` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the number of characters to offset the head cell content from the alignment character specified by the [`char`](#char) attribute.

- `valign` {{deprecated_inline}}

  - : Specifies the vertical alignment of each head cell. The possible {{Glossary("enumerated")}} values are `baseline`, `bottom`, `middle`, and `top`. Use the {{cssxref("vertical-align")}} CSS property instead, as this attribute is deprecated.

## Usage notes

- The `<thead>` is placed after any {{HTMLElement("caption")}} and {{HTMLElement("colgroup")}} elements, but before any {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, and {{HTMLElement("tr")}} elements.
- Along with its related {{HTMLElement("tbody")}} and {{HTMLElement("tfoot")}} elements, the `<thead>` element provides useful {{Glossary("semantics", "semantic")}} information and can be used when rendering for either screen or print. Specifying such table content groups also provides valuable contextual information for assistive technologies, including screen readers and search engines.
- When printing a document, in the case of a multipage table, the table head usually specifies information that remains the same on each page.

## Examples

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

### Basic head structure

This example demonstrates a table divided into a head section with column headers and a body section with the table's main data.

#### HTML

The `<thead>` and {{HTMLElement("tbody")}} elements are used to structure the table rows into {{Glossary("semantics", "semantic")}} sections. The `<thead>` element represents the head section of the table, which contains a row ({{HTMLElement("tr")}}) of column headers cells ({{HTMLElement("th")}}).

```html
<table>
  <thead>
    <tr>
      <th>Student ID</th>
      <th>Name</th>
      <th>Major</th>
      <th>Credits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Jones, Martha</td>
      <td>Computer Science</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Nim, Victor</td>
      <td>Russian Literature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Petrov, Alexandra</td>
      <td>Astrophysics</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Some basic CSS is used to style and highlight the table head so that the headings of the columns stand out from the data in the table body.

```css
thead {
  border-bottom: 2px solid rgb(160 160 160);
  text-align: center;
  background-color: #2c5e77;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
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

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Result

{{EmbedLiveSample("Basic_head_structure", 650, 140)}}

### Multiple head rows

This example demonstrates a table head section with two rows.

#### HTML

We extend the markup the table from the [basic example](#basic_head_structure) in this example by including two table rows ({{HTMLElement("tr")}}) within the `<thead>` element creating a multi-row table head. We included an additional column, splitting the student names into first and last names.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Student ID</th>
      <th colspan="2">Student</th>
      <th rowspan="2">Major</th>
      <th rowspan="2">Credits</th>
    </tr>
    <tr>
      <th>First name</th>
      <th>Last name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3741255</td>
      <td>Martha</td>
      <td>Jones</td>
      <td>Computer Science</td>
      <td>240</td>
    </tr>
    <tr>
      <td>3971244</td>
      <td>Victor</td>
      <td>Nim</td>
      <td>Russian Literature</td>
      <td>220</td>
    </tr>
    <tr>
      <td>4100332</td>
      <td>Alexandra</td>
      <td>Petrov</td>
      <td>Astrophysics</td>
      <td>260</td>
    </tr>
  </tbody>
</table>
```

#### Cell spanning

In order to associate and line up the header cells with the correct columns and rows, the [`colspan`](/en-US/docs/Web/HTML/Element/th#colspan) and [`rowspan`](/en-US/docs/Web/HTML/Element/th#rowspan) attributes are used on the {{HTMLElement("th")}} elements. The values set in these attributes specify how many cells each header cell ({{HTMLElement("th")}}) spans. Due to the way these attributes are set, the two second-row header cells are lined up with the columns they head. These each span one row and one column as the default values for the [`colspan`](/en-US/docs/Web/HTML/Element/th#colspan) and [`rowspan`](/en-US/docs/Web/HTML/Element/th#rowspan) attributes are both `1`.

The column and row spanning demonstrated by this example are illustrated in the following figure:

![Illustration demonstrating column and row spanning of table cells: cells 1, 3, and 4 spanning one column and two rows each; cell 2 spanning two columns and one row; cells 5 and 6 span a single row and column each, fitting into the available cells that are the second and third columns in the second row](column-row-span.png)

#### CSS

The CSS is unchanged from the [previous example](#basic_head_structure).

```css hidden
thead {
  border-bottom: 2px solid rgb(160 160 160);
  background-color: #2c5e77;
  color: #fff;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

tbody {
  background-color: #e4f0f5;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

tbody > tr > td:last-of-type {
  text-align: center;
}
```

#### Result

{{EmbedLiveSample("Multiple_head_rows", 650, 180)}}

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
      <td>Zero or more {{HTMLElement("tr")}} elements.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is mandatory. The end tag may be omitted if the
        <code>&lt;thead&gt;</code> element is immediately followed by a
        {{HTMLElement("tbody")}} or {{HTMLElement("tfoot")}}
        element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("table")}} element. The
        <code>&lt;thead&gt;</code> must appear after any
        {{HTMLElement("caption")}} and
        {{HTMLElement("colgroup")}} elements, even implicitly defined,
        but before any {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}}, and {{HTMLElement("tr")}}
        elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role"
            >rowgroup</a
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
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: HTML table basics](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}}: Other table-related elements
- {{cssxref("background-color")}}: CSS property to set the background color of each head cell
- {{cssxref("border")}}: CSS property to control borders of head cells
- {{cssxref("text-align")}}: CSS property to horizontally align each head cell content
- {{cssxref("vertical-align")}}: CSS property to vertically align each head cell content
