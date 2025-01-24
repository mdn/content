---
title: "<col>: The Table Column element"
slug: Web/HTML/Element/col
page-type: html-element
browser-compat: html.elements.col
---

{{HTMLSidebar}}

The **`<col>`** [HTML](/en-US/docs/Web/HTML) element defines one or more columns in a column group represented by its parent {{HTMLElement("colgroup")}} element. The `<col>` element is only valid as a child of a {{HTMLElement("colgroup")}} element that has no [`span`](/en-US/docs/Web/HTML/Element/colgroup#span) attribute defined.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `span`
  - : Specifies the number of consecutive columns the `<col>` element spans. The value must be a positive integer greater than zero. If not present, its default value is `1`.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : Specifies the horizontal alignment of each column cell. The possible {{Glossary("enumerated")}} values are `left`, `center`, `right`, `justify`, and `char`. When supported, the `char` value aligns the textual content on the character defined in the [`char`](#char) attribute and on offset defined by the [`charoff`](#charoff) attribute. Note that this attribute overrides the specified [`align`](/en-US/docs/Web/HTML/Element/colgroup#align) of its {{HTMLElement("colgroup")}} parent element. Use the {{cssxref("text-align")}} CSS property on the {{htmlelement("td")}} and {{htmlelement("th")}} elements instead, as this attribute is deprecated.

    > [!NOTE]
    > Setting `text-align` on the `<col>` element has no effect as `<col>` has no descendants, and therefore no elements inherit from it.
    >
    > If the table does not use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-of-type(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-of-type(2) { text-align: right; }` to right-align the second column cells.
    >
    > If the table does use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- `bgcolor` {{deprecated_inline}}

  - : Defines the background color of each column cell. The value is an HTML color; either a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a `#`, or a [color keyword](/en-US/docs/Web/CSS/named-color). Other CSS {{cssxref("color_value", "&lt;color&gt")}} values are not supported. Use the {{cssxref("background-color")}} CSS property instead, as this attribute is deprecated.

- `char` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the alignment of the content to a character of each column cell. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored, though it will still override the specified [`char`](/en-US/docs/Web/HTML/Element/colgroup#char) of its {{HTMLElement("colgroup")}} parent element.

- `charoff` {{deprecated_inline}}

  - : Does nothing. It was originally intended to specify the number of characters to offset the column cell content from the alignment character specified by the [`char`](#char) attribute.

- `valign` {{deprecated_inline}}

  - : Specifies the vertical alignment of each column cell. The possible {{Glossary("enumerated")}} values are `baseline`, `bottom`, `middle`, and `top`. Note that this attribute overrides the specified [`valign`](/en-US/docs/Web/HTML/Element/colgroup#valign) of its {{HTMLElement("colgroup")}} parent element. Use the {{cssxref("vertical-align")}} CSS property on the {{htmlelement("td")}} and {{htmlelement("th")}} elements instead, as this attribute is deprecated.

    > [!NOTE]
    > Setting `vertical-align` on the `<col>` element has no effect as `<col>` has no descendants, and therefore no elements inherit from it.
    >
    > If the table does not use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-of-type(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-of-type(2) { vertical-align: middle; }` to center the second column cells vertically.
    >
    > If the table does use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- `width` {{deprecated_inline}}

  - : Specifies a default width for each column. In addition to the standard pixel and percentage values, this attribute can take the special form `0*`, which means that the width of each column spanned should be the minimum width necessary to hold the column's contents. Relative widths such as `5*` can also be used. Note that this attribute overrides the specified [`width`](/en-US/docs/Web/HTML/Element/colgroup#width) of its {{HTMLElement("colgroup")}} parent element. Use the {{cssxref("width")}} CSS property instead, as this attribute is deprecated.

## Usage notes

- The `<col>` element is used within a {{HTMLElement("colgroup")}} element that doesn't have a `span` attribute.
- The `<col>` elements do not structurally group columns together. This is the role of the {{HTMLElement("colgroup")}} element.
- Only a limited number of CSS properties affect `<col>`:
  - {{cssxref("background")}} : The various `background` properties will set the background for cells within the column. As the column background color is painted on top of the table and column groups ({{HTMLElement("colgroup")}}), but behind background colors applied to the row groups ({{htmlelement("thead")}}, {{htmlelement("tbody")}}, and {{htmlelement("tfoot")}}), the rows ({{htmlelement("tr")}}), and the individual cells ({{htmlelement("th")}} and {{htmlelement("td")}}), backgrounds applied to table columns are only visible if every layer painted on top of them has a transparent background.
  - {{cssxref("border")}}: The various `border` properties apply, but only if the `<table>` has {{cssxref("border-collapse", "border-collapse: collapse")}} set.
  - {{cssxref("visibility")}}: The value `collapse` for a column results in all cells of that column not being rendered, and cells spanning into other columns being clipped. The space these columns would have occupied is removed. However, the size of other columns is still calculated as though the cells in the collapsed column(s) are present. Other values for `visibility` have no effect.
  - {{cssxref("width")}}: The `width` property defines a minimum width for the column, as if {{cssxref("min-width")}} were set.

## Example

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

This example demonstrates an eight-column table divided into three `<col>` elements.

### HTML

A {{HTMLElement("colgroup")}} element provides structures to a basic table, creating a single implicit column group. Three `<col>` elements are included within the `<colgroup>`, creating three stylable columns. The [`span`](#span) attribute specifies the number of table columns each `<col>` should span (defaulting to `1` when omitted), enabling attributes to be shared across the columns in each `<col>`.

```html
<table>
  <caption>
    Personal weekly activities
  </caption>
  <colgroup>
    <col />
    <col span="5" class="weekdays" />
    <col span="2" class="weekend" />
  </colgroup>
  <tr>
    <th>Period</th>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thu</th>
    <th>Fri</th>
    <th>Sat</th>
    <th>Sun</th>
  </tr>
  <tr>
    <th>a.m.</th>
    <td>Clean room</td>
    <td>Football training</td>
    <td>Dance Course</td>
    <td>History Class</td>
    <td>Buy drinks</td>
    <td>Study hour</td>
    <td>Free time</td>
  </tr>
  <tr>
    <th>p.m.</th>
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

We use CSS, instead of deprecated HTML attributes, to provide a background color to the columns and align the cell content:

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
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        {{HTMLElement("colgroup")}} only, though it can be implicitly
        defined as its start tag is not mandatory. The
        {{HTMLElement("colgroup")}} must not have a
        <a href="/en-US/docs/Web/HTML/Element/colgroup#span"><code>span</code></a> attribute.
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

- {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Other table-related elements
- {{cssxref("background-color")}}: CSS property to set the background color of each column cell
- {{cssxref("border")}}: CSS property to control borders of column cells
- {{cssxref("text-align")}}: CSS property to horizontally align each column cell content
- {{cssxref("vertical-align")}}: CSS property to vertically align each column cell content
- {{cssxref("visibility")}}: CSS property to hide cells of a column
- {{cssxref("width")}}: CSS property to control the default width for each column
- {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}}, {{cssxref(":last-of-type")}}: CSS pseudo-classes to select the desired column cells
