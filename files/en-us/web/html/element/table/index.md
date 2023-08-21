---
title: "<table>: The Table element"
slug: Web/HTML/Element/table
page-type: html-element
browser-compat: html.elements.table
---

{{HTMLSidebar}}

The **`<table>`** [HTML](/en-US/docs/Web/HTML) element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        In this order:
        <ol>
          <li>an optional {{HTMLElement("caption")}} element,</li>
          <li>zero or more {{HTMLElement("colgroup")}} elements,</li>
          <li>an optional {{HTMLElement("thead")}} element,</li>
          <li>
            either one of the following:
            <ul>
              <li>zero or more {{HTMLElement("tbody")}} elements</li>
              <li>one or more {{HTMLElement("tr")}} elements</li>
            </ul>
          </li>
          <li>an optional {{HTMLElement("tfoot")}} element</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that accepts flow content</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role"
            >table</a
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
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

- `align` {{Deprecated_inline}}

  - : This [enumerated](/en-US/docs/Glossary/Enumerated) attribute indicates how the table must be aligned inside the containing document. It may have the following values:

    - `left`: the table is displayed on the left side of the document;
    - `center`: the table is displayed in the center of the document;
    - `right`: the table is displayed on the right side of the document.

    Set {{cssxref("margin-left")}} and {{cssxref("margin-right")}} to achieve an effect that is similar to the align attribute:

    - `left`: `margin-right: auto; margin-left: 0;`
    - `center`: `margin-right: auto; margin-left: auto;`
    - `right`: `margin-right: 0; margin-left: auto;`

- `bgcolor` {{Deprecated_inline}}

  - : The background color of the table. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/named-color) can also be used.

    To achieve a similar effect, use the CSS {{cssxref("background-color")}} property.

- `border` {{Deprecated_inline}}

  - : This integer attribute defines, in pixels, the size of the frame surrounding the table. If set to 0, the [`frame`](#frame) attribute is set to void.

    To achieve a similar effect, use the CSS {{cssxref("border")}} shorthand property.

- `cellpadding` {{Deprecated_inline}}

  - : This attribute defines the space between the content of a cell and its border, displayed or not. If the cellpadding's length is defined in pixels, this pixel-sized space will be applied to all four sides of the cell's content. If the length is defined using a percentage value, the content will be centered and the total vertical space (top and bottom) will represent this value. The same is true for the total horizontal space (left and right).

    To achieve a similar effect, apply the {{cssxref("border-collapse")}} property to the `<table>` element, with its value set to collapse, and the {{cssxref("padding")}} property to the {{HTMLElement("td")}} elements.

- `cellspacing` {{Deprecated_inline}}

  - : This attribute defines the size of the space between two cells in a percentage value or pixels. The attribute is applied both horizontally and vertically, to the space between the top of the table and the cells of the first row, the left of the table and the first column, the right of the table and the last column and the bottom of the table and the last row.

    To achieve a similar effect, apply the {{cssxref("border-spacing")}} property to the `<table>` element. `border-spacing` does not have any effect if {{cssxref("border-collapse")}} is set to collapse.

- `frame` {{Deprecated_inline}}

  - : This enumerated attribute defines which side of the frame surrounding the table must be displayed.

    To achieve a similar effect, use the {{cssxref("border-style")}} and {{cssxref("border-width")}} properties.

- `rules` {{Deprecated_inline}}

  - : This enumerated attribute defines where rules, i.e. lines, should appear in a table. It can have the following values:

    - `none`, which indicates that no rules will be displayed; it is the default value;
    - `groups`, which will cause the rules to be displayed between row groups (defined by the {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} and {{HTMLElement("tfoot")}} elements) and between column groups (defined by the {{HTMLElement("col")}} and {{HTMLElement("colgroup")}} elements) only;
    - `rows`, which will cause the rules to be displayed between rows;
    - `cols`, which will cause the rules to be displayed between columns;
    - `all`, which will cause the rules to be displayed between rows and columns.

    To achieve a similar effect, apply the {{cssxref("border")}} property to the appropriate {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("col")}}, or {{HTMLElement("colgroup")}} elements.

- `summary` {{Deprecated_inline}}
  - : This attribute defines an alternative text that summarizes the content of the table. Use the {{htmlelement("caption")}} element instead.
- `width` {{Deprecated_inline}}
  - : This attribute defines the width of the table. Use the CSS {{cssxref("width")}} property instead.

> **Note:** While no HTML specification includes `height` as a `<table>` attribute, some browsers support a non-standard interpretation of `height`. The unitless value sets a minimum absolute height in pixels. If set as a percent value, the minimum table height will be relative to the height of the parent container.

## Examples

### Simple table

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

#### Result

{{EmbedLiveSample('Simple_table', '100%', '100')}}

### Further simple examples

```html
<p>Simple table with header</p>
<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

<p>Table with thead, tfoot, and tbody</p>
<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>

<p>Table with colgroup</p>
<table>
  <colgroup span="4"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington, D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>

<p>Table with colgroup and col</p>
<table>
  <colgroup>
    <col style="background-color: #0f0" />
    <col span="2" />
  </colgroup>
  <tr>
    <th>Lime</th>
    <th>Lemon</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Green</td>
    <td>Yellow</td>
    <td>Orange</td>
  </tr>
</table>

<p>Simple table with caption</p>
<table>
  <caption>
    Awesome caption
  </caption>
  <tr>
    <td>Awesome data</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

#### Result

{{EmbedLiveSample('Further_simple_examples', '100%', '700')}}

### Table sorting

#### Sorting table rows

There are no native methods for sorting the rows ([`<tr>`](/en-US/docs/Web/HTML/Element/tr) elements) of an HTML table. But using [`Array.prototype.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.sort()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`Node.removeChild()`](/en-US/docs/Web/API/Node/removeChild), and [`Node.appendChild()`](/en-US/docs/Web/API/Node/appendChild), you can implement your own `sort()` function to sort an [`HTMLCollection`](/en-US/docs/Web/API/HTMLCollection) of `<tr>` elements.

In the below example, you can see such an example. We are attaching it to the \<tbody> element so that it sorts the table cells in order of increasing value, and updates the display to suit.

##### HTML

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

##### JavaScript

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

##### Result

{{EmbedLiveSample('Sorting_table_rows', '100%', '100')}}

#### Sorting rows with a click on the th element

The following example adds an event handler to every `<th>` element of every `<table>` in the `document`; it sorts all the `<tbody>`'s rows, basing the sorting on the `td` cells contained in the rows.

> **Note:** This solution assumes that the `<td>` elements are populated by raw text with no descendant elements.

##### HTML

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

##### JavaScript

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

##### Result

{{EmbedLiveSample('Sorting_rows_with_a_click_on_the_th_element', '100%', '100')}}

### Displaying large tables in small spaces

A common issue with tables on the web is that they don't natively work very well on small screens when the amount of content is large, and the way to make them scrollable isn't obvious, especially when the markup may come from a CMS and cannot be modified to have a wrapper.

This example provides one way to display tables in small spaces. We've hidden the HTML content as it is very large, and there is nothing remarkable about it. The CSS is more useful to inspect in this example.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> equals:
      <th>2<sup>3</sup> equals:
      <th>3<sup>3</sup> equals:
      <th>4<sup>3</sup> equals:
      <th>5<sup>3</sup> equals:
      <th>6<sup>3</sup> equals:
      <th>7<sup>3</sup> equals:
  <tbody>
    <tr>
      <td>row 1: 1
      <td>row 1: 8
      <td>row 1: 27
      <td>row 1: 64
      <td>row 1: 125
      <td>row 1: 216
      <td>row 1: 343
    <tr>
      <td>row 2: 1
      <td>row 2: 8
      <td>row 2: 27
      <td>row 2: 64
      <td>row 2: 125
      <td>row 2: 216
      <td>row 2: 343
    <tr>
      <td>row 3: 1
      <td>row 3: 8
      <td>row 3: 27
      <td>row 3: 64
      <td>row 3: 125
      <td>row 3: 216
      <td>row 3: 343
    <tr>
      <td>row 4: 1
      <td>row 4: 8
      <td>row 4: 27
      <td>row 4: 64
      <td>row 4: 125
      <td>row 4: 216
      <td>row 4: 343
    <tr>
      <td>row 5: 1
      <td>row 5: 8
      <td>row 5: 27
      <td>row 5: 64
      <td>row 5: 125
      <td>row 5: 216
      <td>row 5: 343
    <tr>
      <td>row 6: 1
      <td>row 6: 8
      <td>row 6: 27
      <td>row 6: 64
      <td>row 6: 125
      <td>row 6: 216
      <td>row 6: 343
    <tr>
      <td>row 7: 1
      <td>row 7: 8
      <td>row 7: 27
      <td>row 7: 64
      <td>row 7: 125
      <td>row 7: 216
      <td>row 7: 343
    <tr>
      <td>row 8: 1
      <td>row 8: 8
      <td>row 8: 27
      <td>row 8: 64
      <td>row 8: 125
      <td>row 8: 216
      <td>row 8: 343
    <tr>
      <td>row 9: 1
      <td>row 9: 8
      <td>row 9: 27
      <td>row 9: 64
      <td>row 9: 125
      <td>row 9: 216
      <td>row 9: 343
    <tr>
      <td>row 10: 1
      <td>row 10: 8
      <td>row 10: 27
      <td>row 10: 64
      <td>row 10: 125
      <td>row 10: 216
      <td>row 10: 343
    <tr>
      <td>row 11: 1
      <td>row 11: 8
      <td>row 11: 27
      <td>row 11: 64
      <td>row 11: 125
      <td>row 11: 216
      <td>row 11: 343
    <tr>
      <td>row 12: 1
      <td>row 12: 8
      <td>row 12: 27
      <td>row 12: 64
      <td>row 12: 125
      <td>row 12: 216
      <td>row 12: 343
    <tr>
      <td>row 13: 1
      <td>row 13: 8
      <td>row 13: 27
      <td>row 13: 64
      <td>row 13: 125
      <td>row 13: 216
      <td>row 13: 343
    <tr>
      <td>row 14: 1
      <td>row 14: 8
      <td>row 14: 27
      <td>row 14: 64
      <td>row 14: 125
      <td>row 14: 216
      <td>row 14: 343
    <tr>
      <td>row 15: 1
      <td>row 15: 8
      <td>row 15: 27
      <td>row 15: 64
      <td>row 15: 125
      <td>row 15: 216
      <td>row 15: 343
    <tr>
      <td>row 16: 1
      <td>row 16: 8
      <td>row 16: 27
      <td>row 16: 64
      <td>row 16: 125
      <td>row 16: 216
      <td>row 16: 343
    <tr>
      <td>row 17: 1
      <td>row 17: 8
      <td>row 17: 27
      <td>row 17: 64
      <td>row 17: 125
      <td>row 17: 216
      <td>row 17: 343
    <tr>
      <td>row 18: 1
      <td>row 18: 8
      <td>row 18: 27
      <td>row 18: 64
      <td>row 18: 125
      <td>row 18: 216
      <td>row 18: 343
    <tr>
      <td>row 19: 1
      <td>row 19: 8
      <td>row 19: 27
      <td>row 19: 64
      <td>row 19: 125
      <td>row 19: 216
      <td>row 19: 343
    <tr>
      <td>row 20: 1
      <td>row 20: 8
      <td>row 20: 27
      <td>row 20: 64
      <td>row 20: 125
      <td>row 20: 216
      <td>row 20: 343
</table>
```

When looking at these styles you'll notice that table's {{cssxref("display")}} property has been set to `block`. While this allows scrolling, the table loses some of its integrity, and table cells try to become as small as possible. To mitigate this issue we've set {{cssxref("white-space")}} to `nowrap` on the `<tbody>`. However, we don't do this for the `<thead>` to avoid long titles forcing columns to be wider than they need to be to display the data.

To keep the table headers on the page while scrolling down we've set {{cssxref("position")}} to sticky on the `<th>` elements. Note that we have **not** set {{cssxref("border-collapse")}} to `collapse`, as if we do the header cannot be separated correctly from the rest of the table.

```css
table,
th,
td {
  border: 1px solid;
}

table {
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto;
  display: block;
  overflow-x: auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: #fff;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### Result

{{EmbedLiveSample('Displaying_large_tables_in_small_spaces', '100%', 240)}}

## Accessibility concerns

### Captions

By supplying a {{HTMLElement("caption")}} element whose value clearly and concisely describes the table's purpose, it helps the people decide if they need to read the rest of the table content or skip over it.

This helps people navigating with the aid of assistive technology such as a screen reader, people experiencing low vision conditions, and people with cognitive concerns.

- [MDN Adding a caption to your table with \<caption>](/en-US/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_caption)
- [Caption & Summary • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Scoping rows and columns

The [`scope`](/en-US/docs/Web/HTML/Element/th#scope) attribute on header elements is redundant in simple contexts, because scope is inferred. However, some assistive technologies may fail to draw correct inferences, so specifying header scope may improve user experiences. In complex tables, scope can be specified to provide necessary information about the cells related to a header.

#### Examples

```html
<table>
  <caption>
    Color names and values
  </caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsl(180 90% 64% / 1)</code></td>
      <td><code>rgb(81 246 246 / 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsl(38 90% 65% / 1)</code></td>
      <td><code>rgba(246 188 87 / 1)</code></td>
    </tr>
  </tbody>
</table>
```

##### Result

{{EmbedLiveSample('Scoping_rows_and_columns')}}

Providing a declaration of `scope="col"` on a {{HTMLElement("th")}} element will help describe that the cell is at the top of a column. Providing a declaration of `scope="row"` on a {{HTMLElement("th")}} element will help describe that the cell is the first in a row.

- [MDN Tables for visually impaired users](/en-US/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tables with two headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tables with irregular headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Using the scope attribute to associate header cells and data cells in data tables | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Complicated tables

Assistive technology such as screen readers may have difficulty parsing tables that are so complex that header cells can't be associated in a strictly horizontal or vertical way. This is typically indicated by the presence of the [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) and [`rowspan`](/en-US/docs/Web/HTML/Element/td#rowspan) attributes.

Ideally, consider alternate ways to present the table's content, including breaking it apart into a collection of smaller, related tables that don't have to rely on using the `colspan` and `rowspan` attributes. In addition to helping people who use assistive technology understand the table's content, this may also benefit people with cognitive concerns who may have difficulty understanding the associations the table layout is describing.

If the table cannot be broken apart, use a combination of the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) and [`headers`](/en-US/docs/Web/HTML/Element/td#headers) attributes to programmatically associate each table cell with the header(s) the cell is associated with.

- [MDN Tables for visually impaired users](/en-US/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tables with multi-level headers • Tables • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables | Techniques for W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML data table tutorial](/en-US/docs/Learn/HTML/Tables)
- CSS properties that may be especially useful to style the `<table>` element:

  - {{cssxref("width")}} to control the width of the table;
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}}, {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}} to control the aspect of cell borders, rules, and frame;
  - {{cssxref("margin")}} and {{cssxref("padding")}} to style the individual cell content;
  - {{cssxref("text-align")}} and {{cssxref("vertical-align")}} to define the alignment of text and cell content.
