---
title: '<tfoot>: The Table Foot element'
slug: Web/HTML/Element/tfoot
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
browser-compat: html.elements.tfoot
---

{{HTMLRef}}

The **`<tfoot>`** [HTML](/en-US/docs/Web/HTML) element defines a set of rows summarizing the columns of the table.

{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

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
        {{HTMLElement("tbody")}}, or {{HTMLElement("tr")}}
        element. Note that this is the requirement in HTML.<br />Originally, in HTML4, the opposite was true: the {{HTMLElement("tfoot")}} element could not be placed after any
        {{HTMLElement("tbody")}} or {{HTMLElement("tr")}}
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

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the {{htmlattrxref("char", "tfoot")}} and {{htmlattrxref("charoff", "tfoot")}} attributes.

    If this attribute is not set, the `left` value is assumed.

    > **Note:**
    >
    > - To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS {{cssxref("text-align")}} property on it.
    > - To achieve the same effect as the `char` value, in CSS, you can use the value of the {{htmlattrxref("char", "tfoot")}} as the value of the {{cssxref("text-align")}} property {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}

  - : The background color of the table. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/color_value#rgb_colors), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/color_value#color_keywords) can also be used.

    To achieve a similar effect, use the CSS {{cssxref("background-color")}} property.

- {{htmlattrdef("char")}} {{deprecated_inline}}
  - : This attribute specifies the alignment of the content in a column to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "tfoot")}} is not set to `char`, this attribute is ignored.
- {{htmlattrdef("charoff")}} {{deprecated_inline}}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the `char` attribute.
- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each row of cells of the table footer. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not use this attribute as it is obsolete (and not supported) in the latest standard: instead set the CSS {{cssxref("vertical-align")}} property on it.

## Examples

Please see the {{HTMLElement("table")}} page for examples on `<tfoot>`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other table-related HTML Elements: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties and pseudo-classes that may be specially useful to style the `<tfoot>` element:

  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.
