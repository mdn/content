---
title: "<col>: The Table Column element"
slug: Web/HTML/Element/col
page-type: html-element
browser-compat: html.elements.col
---

{{HTMLSidebar}}

The **`<col>`** [HTML](/en-US/docs/Web/HTML) element defines one or more columns within a table and is used for defining common semantics among table columns. The `<col>` element is only valid as a child of a {{HTMLElement("colgroup")}} element that has no [`span`](/en-US/docs/Web/HTML/Element/colgroup#span) attribute defined.

{{EmbedInteractiveExample("pages/tabbed/col.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `span`
  - : This attribute contains a positive integer indicating the number of consecutive columns the `<col>` element spans. If not present, its default value is `1`.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : Specifies the horizontal alignment of each cell within the column. The valid values of this {{Glossary("enumerated")}} attribute include the `left`, `center`, `right`, `justify`, and `char` keywords. When supported, the `char` value aligns the textual content on the character defined in the  [`char`](#char) attribute and on offset defined by the  [`charoff`](#charoff) attribute. The default value is the value of the  {{HTMLElement("colgroup")}}'s [`align`](/en-US/docs/Web/HTML/Element/colgroup#align) attribute, if present, otherwise `left`.



    > **Note:** Do not use this attribute as it is deprecated; use the CSS {{cssxref("text-align")}} property on the {{htmlelement("td")}} and {{htmlelement("th")}} elements (not the `<col>` element) instead. Setting `text-align` on the `<col>` element has no effect as `<col>` has no descendants, and therefore no elements inherit from it.
    >
    > If the table doesn't use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-of-type(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-of-type(2) { text-align: right; }` to right-align the second column cells.
    >
    > If the table does use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- `bgcolor` {{deprecated_inline}}

  - : This attribute defines the background color of the column's cells. The value is an HTML color; either a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a '`#`' or a [color keyword](/en-US/docs/Web/CSS/named-color). Other CSS {{cssxref("&lt;color&gt")}} values are not supported.

    > **Note:** Do not use this attribute as it is deprecated; use the CSS {{cssxref("background-color")}} property instead. As the column background color is painted on top of the table, but behind background colors applied to the row, the {{htmlelement("thead")}}, {{htmlelement("tbody")}}, and {{htmlelement("tfood")}}, and the individual cells, backgrounds applied to table columns are only visible if every layer painted on top of them has a transparent background.

- `char` {{deprecated_inline}}

  - : This attribute specifies the alignment of the content to a character in column cells. Typical values for this include a period (`.`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

- `charoff` {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the [`char`](#char) attribute.

- `valign` {{deprecated_inline}}

  - : This attribute specifies how vertical alignment of each column cell content will be handled. Possible values are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the {{Glossary("baseline/typography", "baseline")}} of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("vertical-align")}} property instead.
    >
    > Also, do not try to set the {{cssxref("vertical-align")}} property on a selector giving a `<col>` element. Because {{HTMLElement("td")}} elements are not descendant of the `<col>` element, they won't inherit it.
    >
    > If the table doesn't use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, use the `td:nth-of-type(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-of-type(2) { vertical-align: middle; }` to center the second column cells vertically.
    >
    > If the table does use a [`colspan`](/en-US/docs/Web/HTML/Element/td#colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- `width` {{deprecated_inline}}

  - : This attribute specifies a default width for each column. In addition to the standard pixel and percentage values, this attribute might take the special form `0*`, which means that the width of each column spanned should be the minimum width necessary to hold the column's contents. Relative widths such as `5*` can also be used. Note that this attribute overrides the specified `width` of its {{HTMLElement("colgroup")}} parent element.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("width")}} property instead.

## Usage notes

The `<col>` element is used within a {{HTMLElement("colgroup")}} element that doesn't have a `span` attribute. The `<col>` elements does not structurally group columns together. This is the role of the {{HTMLElement("colgroup")}} element.

Only a limited number of CSS properties affect columns:

- {{cssxref("border")}}: The various `border` properties apply, but only if the `<table>` has {{cssxref("border-collapse", "border-collapse: collapse")}} set.
- {{cssxref("background")}} : The various`background` properties will set the background for cells within the column, but will only be visible if the cell and row backgrounds are transparent.
- {{cssxref("width")}}: The `width` property defines a minimum width for the column, as if {{cssxref("min-width")}} were set.
- {{cssxref("visibility")}}: The {{cssxref("visibility")}} property is also supported.

- {{cssxref("border")}}: The various `border` properties apply, but only if the `<table>` has {{cssxref("border-collapse", "border-collapse: collapse")}} set.
- {{cssxref("background")}} : The various`background` properties will set the background for cells within the column, but will only be visible if the cell and row backgrounds are transparent.
- {{cssxref("width")}}: The `width` property defines a minimum width for the column, as if {{cssxref("min-width")}} were set.
- {{cssxref("visibility")}}: The {{cssxref("visibility")}} property is also supported.

## Example

This examples demonstrates an eight column table divided into three HTML `<col>` elements.

### HTML

A {{HTMLElement("colgroup")}} element provides structures to a basic table, creating a single implicit column group. Three `<col>` elements are included within the `<colgroup>`, creating three stylable columns,. The [`span`](#span) attribute specifies the number of table columns each `<col>` should span (defaulting to `1` when omitted), enabling attributes to be shared across the columns in each `<col>`.

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

We use CSS instead of deprecated HTML attributes to provide a background color to the columns and align the cell content:

```css
table {
  border-collapse: collapse;
}
caption {
  caption-side: bottom;
}
th,
td {
  border: 1px solid rgb(140 140 140);
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

{{EmbedLiveSample('Example', 650, 180)}}

> **Note:** `<col>` allows styling columns using CSS, but only a few properties will have an effect on the column ([see the CSS 2.2 specification](https://www.w3.org/TR/CSS22/tables.html#columns) for a list).

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
      <td>It must have start tag, but must not have an end tag.</td>
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

- [HTML tables tutorial](/en-US/docs/Learn/HTML/Tables)
- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<col>` element:

  - the {{cssxref("background-color")}} property to set the background color of each column cell;
  - the {{cssxref("border")}} property to control borders of column cells;
  - the {{cssxref("text-align")}} property to horizontally align each column cell content;
  - the {{cssxref("vertical-align")}} property to vertically align each column cell content;
  - the {{cssxref("width")}} property to control the default width for each column;
  - the {{cssxref(":nth-of-type")}}, {{cssxref(":first-of-type")}} and {{cssxref(":last-of-type")}} pseudo-classes to select the desired column cells.
