---
title: "<colgroup>: The Table Column Group element"
slug: Web/HTML/Element/colgroup
page-type: html-element
browser-compat: html.elements.colgroup
---

{{HTMLSidebar}}

The **`<colgroup>`** [HTML](/en-US/docs/Web/HTML) element defines a group of columns within a table.

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `span`

  - : Specifies the number of consecutive columns the `<colgroup>` element spans. The value must be a positive integer greater than zero. If not present, its default value is `1`.

    > [!NOTE]
    > The `span` attribute is not permitted if there are one or more {{HTMLElement("col")}} elements within the `<colgroup>`.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : Specifies the horizontal alignment of each column group cell. The possible {{Glossary("enumerated")}} values are `left`, `center`, `right`, `justify`, and `char`. When supported, the `char` value aligns the textual content on the character defined in the [`char`](#char) attribute and the offset defined by the [`charoff`](#charoff) attribute. Note that the descendant {{HTMLElement("col")}} elements may override this value using their own [`align`](/en-US/docs/Web/HTML/Element/col#align) attribute. Use the {{cssxref("text-align")}} CSS property on the {{htmlelement("td")}} and {{htmlelement("th")}} elements instead, as this attribute is deprecated.

    > [!NOTE]
    > Setting `text-align` on the `<colgroup>` element has no effect as {{HTMLElement("td")}} and {{HTMLElement("th")}} elements are not descendants of the `<colgroup>` element, and therefore they do not inherit from it.
    >
    > If the table does not use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-of-type(an+b)` CSS selector per column, where `a` is the total number of the columns in the table and `b` is the ordinal position of the column in the table, e.g. `td:nth-of-type(7n+2) { text-align: right; }` to right-align the second column cells.
    >
    > If the table does use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- `bgcolor` {{deprecated_inline}}

  - : Defines the background color of each column group cell. The value is an HTML color; either a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a `#`, or a [color keyword](/en-US/docs/Web/CSS/named-color). Other CSS {{cssxref("color_value", "&lt;color&gt")}} values are not supported. Use the {{cssxref("background-color")}} CSS property instead, as this attribute is deprecated.

- `char` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the alignment of the content to a character of each column group cell. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored, though it will still be used as the default value for the [`align`](/en-US/docs/Web/HTML/Element/col#align) of the {{HTMLElement("col")}} elements which are members of this column group.

- `charoff` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the number of characters to offset the column group cell content from the alignment character specified by the [`char`](#char) attribute.

- `valign` {{deprecated_inline}}

  - : Specifies the vertical alignment of each column group cell. The possible {{Glossary("enumerated")}} values are `baseline`, `bottom`, `middle`, and `top`. Note that the descendant {{HTMLElement("col")}} elements may override this value using their own [`valign`](/en-US/docs/Web/HTML/Element/col#valign) attribute. Use the {{cssxref("vertical-align")}} CSS property on the {{htmlelement("td")}} and {{htmlelement("th")}} elements instead, as this attribute is deprecated.

    > [!NOTE]
    > Setting `vertical-align` on the `<colgroup>` element has no effect as {{HTMLElement("td")}} and {{HTMLElement("th")}} elements are not descendants of the `<colgroup>` element, and therefore they do not inherit from it.
    >
    > If the table does not use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, use the [`td:nth-of-type()`](/en-US/docs/Web/CSS/:nth-of-type) CSS selector per column, e.g. `td:nth-of-type(2) { vertical-align: middle; }` to center the second column cells vertically.
    >
    > If the table does use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- `width` {{deprecated_inline}}

  - : Specifies a default width for each column in the current column group. In addition to the standard pixel and percentage values, this attribute can take the special form `0*`, which means that the width of each column spanned should be the minimum width necessary to hold the column's contents. Relative widths such as `5*` can also be used. Note that the descendant {{HTMLElement("col")}} elements may override this value using their own [`width`](/en-US/docs/Web/HTML/Element/col#width) attribute. Use the {{cssxref("width")}} CSS property instead, as this attribute is deprecated.

## Usage notes

- The `<colgroup>` should appear within a {{HTMLElement("table")}}, after any {{HTMLElement("caption")}} element (if used), but before any {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, and {{HTMLElement("tr")}} elements.
- Only a limited number of CSS properties affect `<colgroup>`:
  - {{cssxref("background")}} : The various `background` properties will set the background for cells within the column group. As the column group background color is painted on top of the table, but behind background colors applied to the columns ({{HTMLElement("col")}}), the row groups ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, and {{htmlelement("tfoot")}}), the rows ({{htmlelement("tr")}}), and the individual cells ({{htmlelement("th")}} and {{htmlelement("td")}}), backgrounds applied to table column groups are only visible if every layer painted on top of them has a transparent background.
  - {{cssxref("border")}}: The various `border` properties apply, but only if the `<table>` has {{cssxref("border-collapse", "border-collapse: collapse")}} set.
  - {{cssxref("visibility")}}: The value `collapse` for a column group results in all cells of the columns in that column group not being rendered, and cells spanning into other columns being clipped. The space these columns in the column group would have occupied is removed. However, the size of other columns is still calculated as though the cells in the collapsed column(s) in the column group are present. Other values for `visibility` have no effect.
  - {{cssxref("width")}}: The `width` property defines a minimum width for the columns within the column group, as if {{cssxref("min-width")}} were set.

## Example

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

This example demonstrates a seven-column table divided into two `<colgroup>` elements that span multiple columns.

### HTML

Two `<colgroup>` elements are used to structure a basic table by creating column groups. The number of columns in each column group is specified by the [`span`](#span) attribute.

```html
<table>
  <caption>
    Personal weekly activities
  </caption>
  <colgroup span="5" class="weekdays"></colgroup>
  <colgroup span="2" class="weekend"></colgroup>
  <tr>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <td>Clean room</td>
    <td>Football training</td>
    <td>Dance Course</td>
    <td>History Class</td>
    <td>Buy drinks</td>
    <td>Study hour</td>
    <td>Free time</td>
  </tr>
  <tr>
    <td>Yoga</td>
    <td>Chess Club</td>
    <td>Meet friends</td>
    <td>Gymnastics</td>
    <td>Birthday party</td>
    <td>Fishing trip</td>
    <td>Free time</td>
  </tr>
</table>
```

### CSS

Grouped columns can be used to visually highlight the structure using CSS:

```css
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 6px;
  text-align: center;
}

.weekdays {
  background-color: #d7d9f2;
}

.weekend {
  background-color: #ffe8d4;
}
```

```css hidden
table {
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
```

#### Result

{{EmbedLiveSample('Example', 650, 170)}}

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
        If the <a href="#span"><code>span</code></a> attribute is
        present: none.<br />If
        the attribute is not present: zero or more {{HTMLElement("col")}}
        element
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag may be omitted, if it has a {{HTMLElement("col")}}
        element as its first child and if it is not preceded by a
        <code>&lt;colgroup&gt;</code> whose end tag has been omitted.<br />The
        end tag may be omitted, if it is not followed by a space or a comment.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("table")}} element. The
        <code>&lt;colgroup&gt;</code> must appear after any
        {{HTMLElement("caption")}} element, but before any
        {{HTMLElement("thead")}}, {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}}, and
        {{HTMLElement("tr")}} elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTableColElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: HTML table basics](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Other table-related elements
- {{cssxref("background-color")}}: CSS property to set the background color of each column group cell
- {{cssxref("border")}}: CSS property to control borders of column group cells
- {{cssxref("text-align")}}: CSS property to horizontally align each column group cell content
- {{cssxref("vertical-align")}}: CSS property to vertically align each column group cell content
- {{cssxref("visibility")}}: CSS property to hide (or show) cells of a column group
- {{cssxref("width")}}: CSS property to control the default width for each column in a column group
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS pseudo-classes to select the desired column cells
