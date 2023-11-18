---
title: "<tfoot>: The Table Foot element"
slug: Web/HTML/Element/tfoot
page-type: html-element
browser-compat: html.elements.tfoot
---

{{HTMLSidebar}}

The **`<tfoot>`** [HTML](/en-US/docs/Web/HTML) element encapsulates a set of table rows ({{HTMLElement("tr")}} elements), indicating that they comprise the foot of a table with information about the table's columns. This is usually a summary of the columns, e.g., a sum of the given numbers in a column.

{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : This {{Glossary("enumerated", "enumerated")}} attribute specifies how horizontal alignment of each foot cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell;
    - `center`, centering the content in the cell;
    - `right`, aligning the content to the right of the cell;
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell;
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](#char) and [`charoff`](#charoff) attributes.

    If this attribute is not set, the `left` value is assumed.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `bgcolor` {{deprecated_inline}}

  - : This attribute defines the background color of each foot cell. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/named-color) can also be used.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("background-color")}} property instead.

- `char` {{deprecated_inline}}

  - : This attribute specifies the alignment of the content to a character in foot cells. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("text-align")}} property instead.

- `charoff` {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the [`char`](#char) attribute.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard.

- `valign` {{deprecated_inline}}

  - : This attribute specifies how vertical alignment of each foot cell content will be handled. Possible values are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the {{Glossary("baseline/typography", "baseline")}} of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("vertical-align")}} property instead.

## Usage notes

- The `<tfoot>` is placed after any {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, and {{HTMLElement("tr")}} elements.
- Along with its related {{HTMLElement("thead")}} and {{HTMLElement("tbody")}} elements, the `<tfoot>` element provides useful {{Glossary("semantics", "semantic")}} information and can be used when rendering for either screen or print. Specifying such table content groups also provides valuable contextual information for assistive technologies, including screen readers and search engines.
- When printing a document, in the case of a multipage table, the table foot usually specifies information that is output as an intermediate summary on each page.

## Example

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

This example uses a {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, and `<tfoot>` element to structure a basic table into {{Glossary("semantics", "semantic")}} sections. The `<tfoot>` element represents the foot section of the table, which contains a row ({{HTMLElement("tr")}} element) representing the calculated average of the values in the "Credits" column.

To allocate the cells in the foot to the correct columns, the [`colspan`](/en-US/docs/Web/HTML/Element/th#colspan) attribute is used on the {{HTMLElement("th")}} element to span it across the first three table columns. The data cell ({{HTMLElement("td")}} element) in the foot is automatically placed in the correct location, i.e., the fourth column, with the default value being `1` for the [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute. Additionally, the [`scope`](/en-US/docs/Web/HTML/Element/th#scope) attribute is set to `row` on the header ({{HTMLElement("th")}} element) in the foot to indicate to the browser which cells the foot header relates to, which in our example is the data cell in the foot row that contains the calculated average.

Some basic CSS is used to style and highlight the table foot so that the foot cells stand out from the data in the table body.

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
  <tfoot>
    <tr>
      <th colspan="3" scope="row">Average Credits</th>
      <td>240</td>
    </tr>
  </tfoot>
</table>
```

```css
tfoot {
  border-top: 3px dotted rgb(160, 160, 160);
  background-color: #2c5e77;
  color: #fff;
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
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

thead {
  border-bottom: 2px solid rgb(160, 160, 160);
  background-color: #2c5e77;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
}

th,
td {
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
}

tr > td:last-of-type {
  text-align: center;
}
```

#### Result

{{EmbedLiveSample("Example", 650, 180)}}

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
        The start tag is mandatory. The end tag may be omitted if there is no
        more content in the parent {{HTMLElement("table")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("table")}} element. The
        {{HTMLElement("tfoot")}} must appear after any
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}}, and {{HTMLElement("tr")}}
        elements. Note that this is the requirement in HTML.<br />Originally, in HTML4, the opposite was true: the {{HTMLElement("tfoot")}} element could not be placed after any
        {{HTMLElement("tbody")}} and {{HTMLElement("tr")}}
        elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role"
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

- [HTML tables tutorial](/en-US/docs/Learn/HTML/Tables)
- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties that may be specially useful to style the `<tfoot>` element:

  - the {{cssxref("background-color")}} property to set the background color of each foot cell;
  - the {{cssxref("border")}} property to control borders of foot cells;
  - the {{cssxref("text-align")}} property to horizontally align each foot cell content;
  - the {{cssxref("vertical-align")}} property to vertically align each foot cell content.
