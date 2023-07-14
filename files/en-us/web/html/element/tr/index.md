---
title: "<tr>: The Table Row element"
slug: Web/HTML/Element/tr
page-type: html-element
browser-compat: html.elements.tr
---

{{HTMLSidebar}}

The **`<tr>`** [HTML](/en-US/docs/Web/HTML) element defines a row of cells in a table. The row's cells can then be established using a mix of {{HTMLElement("td")}} (data cell) and {{HTMLElement("th")}} (header cell) elements.

{{EmbedInteractiveExample("pages/tabbed/tr.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes). There are also several [deprecated attributes](#deprecated_attributes), which you should avoid but may need to know when reading older code.

### Deprecated attributes

The following attributes may still be implemented in browsers but are no longer part of the HTML specification and may be missing or may not work as expected. They should be avoided.

- `align` {{deprecated_inline}}

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
      - : Align each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the [`char`](#char) and [`charoff`](#charoff) to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.

    If no value is expressly set for `align`, the parent node's value is inherited.

    > **Note:** Instead of using the obsolete `align` attribute, you should instead use the CSS {{CSSxRef("text-align")}} property to establish `left`, `center`, `right`, or `justify` alignment for the row's cells. To apply character-based alignment, set the CSS {{CSSxRef("text-align")}} property to the alignment character (such as `"."` or `","`).

- `bgcolor` {{deprecated_inline}}

  - : A string specifying a color to apply to the backgrounds of each of the row's cells. This can be either a [hexadecimal `#RRGGBB` or `#RGB` value](/en-US/docs/Web/CSS/color_value/rgb) or a [color keyword](/en-US/docs/Web/CSS/named-color). Omitting the attribute or setting it to `null` in JavaScript causes the row's cells to inherit the row's parent element's background color.

    > **Note:** The {{HTMLElement("tr")}} element should be styled using [CSS](/en-US/docs/Web/CSS). To give a similar effect as the `bgcolor` attribute, use the CSS property {{CSSxRef("background-color")}}.

- `char` {{deprecated_inline}}

  - : A string that sets the character to align the cells in each row's columns (each row's centering that uses the same character gets aligned with others using the same character. Typical values for this include a period (`"."`) or comma (`","`) when attempting to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.

    > **Note:** This attribute is obsolete and rarely implemented anyway. To achieve the same effect as the [`char`](#char) attribute, set the CSS {{CSSxRef("text-align")}} property to the same string you would specify for the `char` property, such as `text-align: "."`.

- `charoff` {{deprecated_inline}}

  - : A string indicating the number of characters on the tail end of the column's data should be displayed after the alignment character specified by the `char` attribute. For example, when displaying money values for currencies that use hundredths of a unit (such as the dollar, which is divided into 100 cents), you would typically specify a value of 2, so that in tandem with `char` being set to `"."`, the values in a column would be cleanly aligned on the decimal points, with the number of cents properly displayed to the right of the decimal point.

    > **Note:** This attribute is obsolete, and was never widely supported anyway.

- `valign` {{deprecated_inline}}

  - : A string specifying the vertical alignment of the text within each cell in the row. Possible values for this attribute are:

    - `baseline`
      - : Aligns each cell's content text as closely as possible to the bottom of the cell, handling alignment of different fonts and font sizes by aligning the characters along the [baseline](https://en.wikipedia.org/wiki/Baseline) of the font(s) used in the row. If all the characters in the row are the same size, the effect is the same as `bottom`.
    - `bottom`,
      - : Draws the text in each of the row's cells as closely as possible to the bottom edge of those cells.
    - `middle`
      - : Each cell's text is vertically centered.
    - `top`
      - : Each cell's text is drawn as closely as possible to the top edge of the containing cell.

    > **Note:** Don't use the obsolete `valign` attribute. Instead, add the CSS {{CSSxRef("vertical-align")}} property to the row.

## Examples

See {{HTMLElement("table")}} for examples on `<tr>`.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
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
