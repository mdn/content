---
title: "<td>: The Table Data Cell element"
slug: Web/HTML/Element/td
page-type: html-element
browser-compat: html.elements.td
---

{{HTMLSidebar}}

The **`<td>`** [HTML](/en-US/docs/Web/HTML) element defines a cell of a table that contains data. It participates in the _table model_.

{{EmbedInteractiveExample("pages/tabbed/td.html","tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `colspan`
  - : This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
- `headers`
  - : This attribute contains a list of space-separated strings, each corresponding to the **id** attribute of the {{HTMLElement("th")}} elements that apply to this element.
- `rowspan`
  - : This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.

### Deprecated attributes

- `abbr` {{deprecated_inline}}

  - : This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.

- `align` {{deprecated_inline}}

  - : This [enumerated](/en-US/docs/Glossary/Enumerated) attribute specifies how the cell content's horizontal alignment will be handled. Possible values are:

    - `left`: The content is aligned to the left of the cell.
    - `center`: The content is centered in the cell.
    - `right`: The content is aligned to the right of the cell.
    - `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.
    - `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](#char) and [`charoff`](#charoff) attributes.

    The default value when this attribute is not specified is `left`.

    > **Note:**
    >
    > - To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS {{cssxref("text-align")}} property to the element.
    > - To achieve the same effect as the `char` value, give the {{cssxref("text-align")}} property the same value you would use for the [`char`](#char).

- `axis` {{deprecated_inline}}
  - : This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.
- `bgcolor` {{deprecated_inline}}

  - : This attribute defines the background color of each cell in a column. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/hex-color), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/named-color) can also be used.

    To achieve a similar effect, use the CSS {{cssxref("background-color")}} property.

- `char` {{deprecated_inline}}
  - : The content in the cell element is aligned to a character. Typical values include a period (.) to align numbers or monetary values. If [`align`](#align) is not set to `char`, this attribute is ignored.
- `charoff` {{deprecated_inline}}
  - : This attribute is used to shift column data to the right of the character specified by the **char** attribute. Its value specifies the length of this shift.
- `height` {{deprecated_inline}}
  - : This attribute is used to define a recommended cell height. Use the CSS {{cssxref("height")}} property instead.
- `scope` {{deprecated_inline}}
  - : This enumerated attribute defines the cells that the header (defined in the {{HTMLElement("th")}}) element relates to. Only use this attribute with the `<th>` element to define the row or column for which it is a header.
- `valign` {{deprecated_inline}}

  - : This attribute specifies how a text is vertically aligned inside a cell. Possible values for this attribute are:

    - `baseline`: Positions the text near the bottom of the cell and aligns it with the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom. If characters don't descend below the baseline, the baseline value achieves the same effect as `bottom`.
    - `bottom`: Positions the text near the bottom of the cell.
    - `middle`: Centers the text in the cell.
    - and `top`: Positions the text near the top of the cell.

    To achieve a similar effect, use the CSS {{cssxref("vertical-align")}} property.

- `width` {{deprecated_inline}}
  - : This attribute is used to define a recommended cell width. Use the CSS {{cssxref("width")}} property instead.

## Examples

See {{HTMLElement("table")}} for examples on `<td>`.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>Sectioning root.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
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
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Cell_Role"
            >cell</a
          ></code
        >
        if a descendant of a {{HTMLElement("table")}} element
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
