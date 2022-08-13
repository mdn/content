---
title: '<tr>: The Table Row element'
slug: Web/HTML/Element/tr
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
  - tag
  - tr
  - tr tag
browser-compat: html.elements.tr
---

{{HTMLRef}}

The **`<tr>`** [HTML](/en-US/docs/Web/HTML) element defines a row of cells in a table. The row's cells can then be established using a mix of {{HTMLElement("td")}} (data cell) and {{HTMLElement("th")}} (header cell) elements.

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

To provide additional control over how cells fit into (or span across) columns, both `<th>` and `<td>` support the {{htmlattrxref("colspan", "td")}} attribute, which lets you specify how many columns wide the cell should be, with the default being 1. Similarly, you can use the {{htmlattrxref("rowspan", "td")}} attribute on cells to indicate they should span more than one table row.

This can take a little practice to get right when building your tables. We have some [examples](#examples) below, but for more examples and an in-depth tutorial, see the [HTML tables](/en-US/docs/Learn/HTML/Tables) series in our [Learn web development](/en-US/docs/Learn) area, where you'll learn how to use the table elements and their attributes to get just the right layout and formatting for your tabular data.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes). There are also several [deprecated attributes](#deprecated_attributes), which you should avoid but may need to know when reading older code.

### Deprecated attributes

The following attributes may still be implemented in browsers but are no longer part of the HTML specification and may be missing or may not work as expected. They should be avoided.

- {{HTMLAttrDef("align")}} {{deprecated_inline}}

  - : A string which specifies how the cell's context should be aligned horizontally within the cells in the row; this is shorthand for using `align` on every cell in the row individually. Possible values are:

    - `left`
      - : Align the content of each cell at its left edge.
    - `center`
      - : Center the contents of each cell between their left and right edges.
    - `right`
      - : Align the content of each cell at its right edge.
    - `justify`
      - : Widen whitespaces within the text of each cell so that the text fills the full width of each cell (full justification).
    - `char`
      - : Align each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the {{htmlattrxref("char", "tr")}} and {{htmlattrxref("charoff", "tr")}} to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.

    If no value is expressly set for `align`, the parent node's value is inherited.

    > **Note:** Instead of using the obsolete `align` attribute, you should instead use the CSS {{CSSxRef("text-align")}} property to establish `left`, `center`, `right`, or `justify` alignment for the row's cells. To apply character-based alignment, set the CSS {{CSSxRef("text-align")}} property to the alignment character (such as `"."` or `","`).

- {{HTMLAttrDef("bgcolor")}} {{deprecated_inline}}

  - : A string specifying a color to apply to the backgrounds of each of the row's cells. This can be either an [hexadecimal `#RRGGBB` or `#RGB` value](/en-US/docs/Web/CSS/color_value/rgb) or a [color keyword](/en-US/docs/Web/CSS/color_value#color_keywords). Omitting the attribute or setting it to `null` in JavaScript causes the row's cells to inherit the row's parent element's background color.

    > **Note:** The {{HTMLElement("tr")}} element should be styled using [CSS](/en-US/docs/Web/CSS). To give a similar effect as the `bgcolor` attribute, use the [CSS](/en-US/docs/Web/CSS) property {{CSSxRef("background-color")}}.

- {{HTMLAttrDef("char")}} {{deprecated_inline}}

  - : A string which sets the character to align the cells in each of the row's columns on (each row's centering that uses the same character gets aligned with others using the same character . Typical values for this include a period (`"."`) or comma (`","`) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "tr")}} is not set to `char`, this attribute is ignored.

    > **Note:** This attribute is not only obsolete, but was rarely implemented anyway. To achieve the same effect as the {{htmlattrxref("char", "tr")}} attribute, set the CSS {{CSSxRef("text-align")}} property to the same string you would specify for the `char` property, such as `text-align: "."`.

- {{HTMLAttrDef("charoff")}} {{deprecated_inline}}

  - : A string indicating the number of characters on the tail end of the column's data should be displayed after the alignment character specified by the `char` attribute. For example, when displaying money values for currencies that use hundredths of a unit (such as the dollar, which is divided into 100 cents), you would typically specify a value of 2, so that in tandem with `char` being set to `"."`, the values in a column would be cleanly aligned on the decimal points, with the number of cents properly displayed to the right of the decimal point.

    > **Note:** This attribute is obsolete, and was never widely supported anyway.

- {{HTMLAttrDef("valign")}} {{deprecated_inline}}

  - : A string specifying the vertical alignment of the text within each cell in the row. Possible values for this attribute are:

    - `baseline`
      - : Aligns each cell's content text as closely as possible to the bottom of the cell, handling alignment of different fonts and font sizes by aligning the characters along the [baseline](https://en.wikipedia.org/wiki/Baseline) of the font(s) used in the row. If all of the characters in the row are the same size, the effect is the same as `bottom`.
    - `bottom`,
      - : Draws the text in each of the row's cells as closely as possible to the bottom edge of those cells.
    - `middle`
      - : Each cell's text is vertically centered.
    - `top`
      - : Each cell's text is drawn as closely as possible to the top edge of the containing cell.

    > **Note:** Don't use the obsolete `valign` attribute. Instead, add the CSS {{CSSxRef("vertical-align")}} property to the row.

## Examples

See {{HTMLElement("table")}} for examples on `<tr>`.

### Basic example

This simple example shows a table listing people's names along with various information about membership in a club or service.

#### HTML

This HTML demonstrates the most basic structure of a table. There are no groups, no cells that span multiple rows or columns, no captions, and only the most basic styling to create lines around the components of the table for something resembling clarity.

There are just four rows (including one header row), each with four columns (including one header column). Not even the table section elements are used; instead, the browser is allowed to determine this automatically. We'll add {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, and {{HTMLElement("tfoot")}} in the next example.

```html
<table>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Member Since</th>
    <th>Balance</th>
  </tr>
  <tr>
    <td>Margaret Nguyen</td>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>0.00</td>
  </tr>
  <tr>
    <td>Edvard Galinski</td>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <td>Hoshi Nakamura</td>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>15.00</td>
  </tr>
</table>
```

#### CSS

This simple CSS just adds a solid black border around the table and around each of its cells, including those specified using both {{HTMLElement("th")}} and {{HTMLElement("td")}}. That way, both header and data cells are easily demarcated.

```css
table {
  border: 1px solid black;
}

th, td {
  border: 1px solid black;
}
```

#### Result

{{EmbedLiveSample("Basic_example", 500, 125)}}

### Row and column spanning

Now, let's introduce another column that shows the date the user's membership ended, along with a super-heading above the "joined" and "canceled" dates called "Membership Dates". This involves adding both row and column spans to the table, so that the heading cells can wind up in the right places.

#### Result

Let's actually look at the output first this time:

{{EmbedLiveSample("Row_and_column_spanning", 500, 150)}}

Notice how the heading area here is actually two rows, one with "Name", "ID", "Membership Dates", and "Balance" headings, and the other with "Joined" and "Canceled", which are sub-headings below "Membership Dates". This is accomplished by:

- Having the first row's "Name", "ID", and "Balance" heading cells span two rows using the {{htmlattrxref("rowspan")}} attribute, making them each be two rows tall.
- Having the first row's "Membership Dates" heading cell span two columns using the {{htmlattrxref("colspan")}} attribute, which causes this heading to actually be two columns wide.
- Having a second row of {{HTMLElement("th")}} elements that contains only the "Joined" and "Canceled" headings. Because the other columns are already occupied by first-row cells that span into the second row, these wind up correctly positioned under the "Membership Dates" heading.

#### HTML

The HTML is similar to the previous example's, except for the addition of the new column in each data row, and the changes to the header. Those changes make the HTML look like this:

```html
<table>
  <tr>
    <th rowspan="2">Name</th>
    <th rowspan="2">ID</th>
    <th colspan="2">Membership Dates</th>
    <th rowspan="2">Balance</th>
  </tr>
  <tr>
    <th>Joined</th>
    <th>Canceled</th>
  </tr>
  <tr>
    <th>Margaret Nguyen</th>
    <td>427311</td>
    <td><time datetime="2010-06-03">June 3, 2010</time></td>
    <td>n/a</td>
    <td>0.00</td>
  </tr>
  <tr>
    <th>Edvard Galinski</th>
    <td>533175</td>
    <td><time datetime="2011-01-13">January 13, 2011</time></td>
    <td><time datetime="2017-04-08">April 8, 2017</time></td>
    <td>37.00</td>
  </tr>
  <tr>
    <th>Hoshi Nakamura</th>
    <td>601942</td>
    <td><time datetime="2012-07-23">July 23, 2012</time></td>
    <td>n/a</td>
    <td>15.00</td>
  </tr>
</table>
```

The differences that matter here—for the purposes of discussing row and column spans—are in the first few lines of the code above. Note the use of `rowspan` on to make the "Name", "ID", and "Balance" headers occupy two rows instead of just one, and the use of `colspan` to make the "Membership Dates" header cell span across two columns.

The CSS is unchanged from before.

```css hidden
table {
  border: 1px solid black;
}

th, td {
  border: 1px solid black;
}
```

### Explicitly specifying table content groups

Before really getting into styling this table, let's take a moment to add row and column groups to help make our CSS easier.

#### HTML

The HTML is where the action is here, and the action is pretty simple.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Membership Dates</th>
      <th rowspan="2">Balance</th>
    </tr>
    <tr>
      <th>Joined</th>
      <th>Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

The differences that matter here—for the purposes of discussing row and column spans—are in the first few lines of the code above. Note the use of `rowspan` on to make the "Name", "ID", and "Balance" headers occupy two rows instead of just one, and the use of `colspan` to make the "Membership Dates" header cell span across two columns.

Once again, we haven't touched the CSS.

```css hidden
table {
  border: 1px solid black;
}

th, td {
  border: 1px solid black;
}
```

#### Result

The output is entirely unchanged, despite the addition of useful contextual information under the hood:

{{EmbedLiveSample("Explicitly_specifying_table_content_groups", 500, 150)}}

### Basic styling

As is the case with all parts of a table, you can change the appearance of a table row and its contents using CSS. Any styles applied to the `<tr>` element will affect the cells within the row unless overridden by styles applied to those cells.

Let's apply a basic style to the table to adjust the typeface being used, and add a background color to the header row.

#### Result

Again, let's take a look at the result first.

{{EmbedLiveSample("Basic_styling", 500, 200)}}

```html hidden
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Membership Dates</th>
      <th rowspan="2">Balance</th>
    </tr>
    <tr>
      <th>Joined</th>
      <th>Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

#### CSS

This time, the HTML is unchanged, so let's dive right into the CSS.

```css
table {
  border: 1px solid black;
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
}

thead > tr {
  background-color: rgb(228, 240, 245);
}

th, td {
  border: 1px solid black;
  padding:4px 6px;
}
```

While we add a {{CSSxRef("font")}} property to the {{HTMLElement("table")}} element here to set a more visually-appealing typeface (or an abominable sans-serif typeface, depending on your personal opinion), the interesting part is the second style here, where we style `<tr>` elements located within the {{HTMLElement("thead")}} so they have a light blue background color. This is a way to quickly apply a background color to all of the cells in the heading area at once.

This does _not_ affect the style of the {{HTMLElement("th")}} elements in the first column, though, where we treat the member names as a row heading.

### Advanced styling

Now we'll go all-out, with styles on rows in the header and body areas both, including alternating row colors, cells with different colors depending on position within a row, and so forth.

#### Result

Here's what the final table will look like:

{{EmbedLiveSample("Advanced_styling", 500, 200)}}

There is no change to the HTML again. See what proper preparation of your HTML can do for you?

```html hidden
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th rowspan="2">ID</th>
      <th colspan="2">Membership Dates</th>
      <th rowspan="2">Balance</th>
    </tr>
    <tr>
      <th>Joined</th>
      <th>Canceled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Margaret Nguyen</th>
      <td>427311</td>
      <td><time datetime="2010-06-03">June 3, 2010</time></td>
      <td>n/a</td>
      <td>0.00</td>
    </tr>
    <tr>
      <th scope="row">Edvard Galinski</th>
      <td>533175</td>
      <td><time datetime="2011-01-13">January 13, 2011</time></td>
      <td><time datetime="2017-04-08">April 8, 2017</time></td>
      <td>37.00</td>
    </tr>
    <tr>
      <th scope="row">Hoshi Nakamura</th>
      <td>601942</td>
      <td><time datetime="2012-07-23">July 23, 2012</time></td>
      <td>n/a</td>
      <td>15.00</td>
    </tr>
  </tbody>
</table>
```

#### CSS

The CSS is much more involved this time. It's not complicated, but there's a lot going on. Let's break it down.

##### The table and base styles

```css
table {
  border: 1px solid black;
  font: 16px "Open Sans", Helvetica, Arial, sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}
```

Here we've added the {{CSSxRef("border-spacing")}} and {{CSSxRef("border-collapse")}} properties to eliminate spacing between cells and collapse borders that touch one another to be a single border instead of winding up with double borders.

```css
th, td {
  border: 1px solid black;
  padding:4px 6px;
}

th {
  vertical-align: bottom;
}
```

And here are the default styles for all table cells. Now let's customize!

##### The top header: overall

We're going to look at the top header in two pieces. First, the overall styling of the header:

```css
thead > tr {
  background-color: rgb(228, 240, 245);
}

thead > tr:nth-of-type(2) {
  border-bottom: 2px solid black;
}
```

This sets the background color of all `<tr>` elements in the table's heading (as specified using {{HTMLElement("thead")}}). Then we set the bottom border of the top header to be a two-pixel wide line. Notice, however, that we're using the {{CSSxRef(":nth-of-type")}} selector to apply {{CSSxRef("border-bottom")}} to the _second_ row in the heading. Why? Because the heading is made of two rows that are spanned by some of the cells. That means there are actually two rows there; applying the style to the first row would not give us the expected result.

##### The "Joined" and "Canceled" headers

Let's style these two header cells with green and red hues to represent the "good" of a new member and the "bummer" of a canceled membership.

```css
thead > tr:last-of-type > th:nth-of-type(1) {
  background-color: rgb(225, 255, 225);
}

thead > tr:last-of-type > th:nth-of-type(2) {
  background-color: rgb(255, 225, 225);
}
```

Here we dig into the last row of the table's header block and give the first header cell in it (the "Joined" header) a greenish color, and the second header cell in it (the "Canceled" header) a reddish hue.

##### Color every body other row differently

It's common to help improve readability of table data by alternating row colors. Let's add a bit of color to every even row:

```css
tbody > tr:nth-of-type(even) {
  background-color: rgb(237, 238, 242);
}
```

##### Give the left-side header some style

Since we want the first column to stand out as well, we'll add some custom styling here, too.

```css
tbody > tr > th:first-of-type {
  text-align: left;
  background-color: rgb(225, 229, 244);
}
```

This styles the first header cell in each row of the table's body with {{CSSxRef("text-align")}} to left-justify the member names, and with a somewhat different background color.

##### Justify the balances

Finally, since it's standard practice to right-justify currency values in tables, let's do that here.

```css
tbody > tr > td:last-of-type {
  text-align:right;
}
```

This just sets the CSS {{CSSxRef("text-align")}} property for the last {{HTMLElement("td")}} in each body row to `"right"`.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
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
        {{HTMLElement("template")}}) are also allowed
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
        element
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
        be {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} or
        {{HTMLElement("tfoot")}}
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

- [Learning area: HTML tables](/en-US/docs/Learn/HTML/Tables): An introduction to using tables, including `<tr>`.
- {{DOMxRef("HTMLTableRowElement")}}: the interface on which `<tr>` is based.
- Other table-related elements:

  - {{HTMLElement("table")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("caption")}}, {{HTMLElement("col")}}, and {{HTMLElement("colgroup")}}
