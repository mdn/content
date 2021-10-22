---
title: '<thead>: The Table Head element'
slug: Web/HTML/Element/thead
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
browser-compat: html.elements.thead
---

{{HTMLRef}}

The **`<thead>`** [HTML](/en-US/docs/Web/HTML) element defines a set of rows defining the head of the columns of the table.

{{EmbedInteractiveExample("pages/tabbed/thead.html","tabbed-taller")}}

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
      <td>Zero or more {{HTMLElement("tr")}} elements.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is mandatory. The end tag may be omitted if the
        {{HTMLElement("thead")}} element is immediately followed by a
        {{HTMLElement("tbody")}} or {{HTMLElement("tfoot")}}
        element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("table")}} element. The
        {{HTMLElement("thead")}} must appear after any
        {{HTMLElement("caption")}} or
        {{HTMLElement("colgroup")}} element, even implicitly defined,
        but before any {{HTMLElement("tbody")}},
        {{HTMLElement("tfoot")}} and {{HTMLElement("tr")}}
        element.
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

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the {{htmlattrxref("char", "thead")}} and {{htmlattrxref("charoff", "thead")}} attributes.

    If this attribute is not set, the `left` value is assumed.

    > **Warning:** Do not use this attribute as it is obsolete (not supported) in the latest standard.
    >
    > - To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS {{cssxref("text-align")}} property on it.
    > - To achieve the same effect as the `char` value, in CSS3, you can use the value of the {{htmlattrxref("char", "thead")}} as the value of the {{cssxref("text-align")}} property.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : This attribute defines the background color of each cell of the column. It is one of the 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB), prefixed by a '#'. One of the sixteen predefined color strings may be used:

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

    > **Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: the {{HTMLElement("thead")}} element should be styled using [CSS](/en-US/docs/Web/CSS). To give a similar effect to the **bgcolor** attribute, use the [CSS](/en-US/docs/Web/CSS) property {{cssxref("background-color")}}, on the relevant {{HTMLElement("td")}} or {{HTMLElement("th")}} elements.

- {{htmlattrdef("char")}} {{deprecated_inline}}

  - : This attribute is used to set the character to align the cells in a column on. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "thead")}} is not set to `char`, this attribute is ignored.

    > **Note:** Do not use this attribute as it is obsolete (and not supported) in the latest standard. To achieve the same effect as the {{htmlattrxref("char", "thead")}}, in CSS3, you can use the character set using the {{htmlattrxref("char", "thead")}} attribute as the value of the {{cssxref("text-align")}} property.

- {{htmlattrdef("charoff")}} {{deprecated_inline}}

  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the **char** attribute.

    > **Note:** Do not use this attribute as it is obsolete (and not supported) in the latest standard.

- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each row of cells of the table header. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{cssxref("vertical-align")}} property on it.

## Examples

See {{HTMLElement("table")}} for examples on `<thead>`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<thead>` element:

  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.
