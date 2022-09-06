---
title: '<th>: The Table Header element'
slug: Web/HTML/Element/th
tags:
  - Element
  - HTML
  - HTML tabular data
  - Heading Cell
  - Reference
  - Table Cell
  - Table Head
  - Table Header
  - Table Heading
  - Table Heading Cell
  - Tables
  - Web
  - cell
browser-compat: html.elements.th
---

{{HTMLRef}}

The **`<th>`** [HTML](/en-US/docs/Web/HTML) element defines a cell as header of a group of table cells. The exact nature of this group is defined by the {{htmlattrxref("scope", "th")}} and {{htmlattrxref("headers", "th")}} attributes.

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
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
        {{ARIARole("columnheader")}} or {{ARIARole("rowheader")}}
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

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("abbr")}}
  - : This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.
- {{htmlattrdef("colspan")}}
  - : This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is `1`. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
- {{htmlattrdef("headers")}}
  - : This attribute contains a list of space-separated strings, each corresponding to the **id** attribute of the {{HTMLElement("th")}} elements that apply to this element.
- {{htmlattrdef("rowspan")}}
  - : This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is `1`; if its value is set to `0`, it extends until the end of the table section ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.
- {{htmlattrdef("scope")}}

  - : This enumerated attribute defines the cells that the header (defined in the {{HTMLElement("th")}}) element relates to. It may have the following values:

    - `row`: The header relates to all cells of the row it belongs to.
    - `col`: The header relates to all cells of the column it belongs to.
    - `rowgroup`: The header belongs to a rowgroup and relates to all of its cells. These cells can be placed to the right or the left of the header, depending on the value of the [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir) attribute in the {{HTMLElement("table")}} element.
    - `colgroup`: The header belongs to a colgroup and relates to all of its cells.

    If the `scope` attribute is not specified, or its value is not `row`, `col`, or `rowgroup`, or `colgroup`, then browsers automatically select the set of cells to which the header cell applies.

### Deprecated attributes

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute specifies how the cell content's horizontal alignment will be handled. Possible values are:

    - `left`: The content is aligned to the left of the cell.
    - `center`: The content is centered in the cell.
    - `right`: The content is aligned to the right of the cell.
    - `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.
    - `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the {{htmlattrxref("char", "th")}} and {{htmlattrxref("charoff", "th")}} attributes.

    The default value when this attribute is not specified is `left`.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard.
    >
    > - To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS {{cssxref("text-align")}} property to the element.
    > - To achieve the same effect as the `char` value, give the {{cssxref("text-align")}} property the same value you would use for the {{htmlattrxref("char", "th")}}.

- {{htmlattrdef("axis")}} {{deprecated_inline}}

  - : This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard: use the {{htmlattrxref("scope", "th")}} attribute instead.

- {{htmlattrdef("bgcolor")}} {{Deprecated_Inline}}

  - : This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings:

    - `black` = "#000000"
    - `green` = "#008000"
    - `silver` = "#C0C0C0"
    - `lime` = "#00FF00"
    - `gray` = "#808080"
    - `olive` = "#808000"
    - `white` = "#FFFFFF"
    - `yellow` = "#FFFF00"
    - `maroon` = "#800000"
    - `navy` = "#000080"
    - `red` = "#FF0000"
    - `blue` = "#0000FF"
    - `purple` = "#800080"
    - `teal` = "#008080"
    - `fuchsia` = "#FF00FF"
    - `aqua` = "#00FFFF"

    > **Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The {{HTMLElement("th")}} element should be styled using [CSS](/en-US/docs/Web/CSS). To create a similar effect use the {{cssxref("background-color")}} property in [CSS](/en-US/docs/Web/CSS) instead.

- {{htmlattrdef("char")}} {{deprecated_inline}}

  - : The content in the cell element is aligned to a character. Typical values include a period (.) to align numbers or monetary values. If {{htmlattrxref("align", "th")}} is not set to `char`, this attribute is ignored.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard. To achieve the same effect, you can specify the character as the first value of the {{cssxref("text-align")}} property.

- {{htmlattrdef("charoff")}} {{deprecated_inline}}

  - : This attribute is used to shift column data to the right of the character specified by the **char** attribute. Its value specifies the length of this shift.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard.

- {{htmlattrdef("height")}} {{deprecated_inline}}

  - : This attribute is used to define a recommended cell height.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard: use the CSS {{cssxref("height")}} property instead.

- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : This attribute specifies how a text is vertically aligned inside a cell. Possible values for this attribute are:

    - `baseline`: Positions the text near the bottom of the cell and aligns it with the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom. If characters don't descend below the baseline, the baseline value achieves the same effect as `bottom`.
    - `bottom`: Positions the text near the bottom of the cell.
    - `middle`: Centers the text in the cell.
    - and `top`: Positions the text near the top of the cell.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard: use the CSS {{cssxref("vertical-align")}} property instead.

- {{htmlattrdef("width")}} {{deprecated_inline}}

  - : This attribute is used to define a recommended cell width. Additional space can be added with the {{domxref("HTMLTableElement.cellSpacing", "cellspacing")}} and {{domxref("HTMLTableElement.cellPadding", "cellpadding")}} properties and the width of the {{HTMLElement("col")}} element can also create extra width. But, if a column's width is too narrow to show a particular cell properly, it will be widened when displayed.

    > **Note:** Do not use this attribute as it is obsolete in the latest standard: use the CSS {{cssxref("width")}} property instead.

## Examples

See {{HTMLElement("table")}} for examples on `<th>`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.
