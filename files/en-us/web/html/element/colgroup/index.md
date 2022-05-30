---
title: '<colgroup>: The Table Column Group element'
slug: Web/HTML/Element/colgroup
tags:
  - Element
  - HTML
  - HTML tabular data
  - Reference
  - Tables
  - Web
browser-compat: html.elements.colgroup
---

{{HTMLRef}}

The **`<colgroup>`** [HTML](/en-US/docs/Web/HTML) element defines a group of columns within a table.

{{EmbedInteractiveExample("pages/tabbed/colgroup.html","tabbed-taller")}}

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
        If the {{htmlattrxref("span", "colgroup")}} attribute is
        present: none, it is an {{Glossary("empty element")}}.<br />If
        the attribute is not present: zero or more {{HTMLElement("col")}}
        element
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag may be omitted, if it has a {{HTMLElement("col")}}
        element as its first child and if it is not preceded by a
        {{HTMLElement("colgroup")}} whose end tag has been omitted.<br />The
        end tag may be omitted, if it is not followed by a space or a comment.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("table")}} element. The
        {{HTMLElement("colgroup")}} must appear after any optional
        {{HTMLElement("caption")}} element but before any
        {{HTMLElement("thead")}}, {{HTMLElement("th")}},
        {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}} and
        {{HTMLElement("tr")}} element.
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

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("span")}}

  - : This attribute contains a positive integer indicating the number of consecutive columns the `<colgroup>` element spans. If not present, its default value is `1`.

    The `span` attribute is not permitted if there are one or more {{HTMLElement("col")}} elements within the `<colgroup>`.

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:

    - `left`, aligning the content to the left of the cell
    - `center`, centering the content in the cell
    - `right`, aligning the content to the right of the cell
    - `justify`, inserting spaces into the textual content so that the content is justified in the cell
    - `char`, aligning the textual content on a special character with a minimal offset, defined by the {{htmlattrxref("char", "col")}} and {{htmlattrxref("charoff", "col")}} attributes.

    If this attribute is not set, the `left` value is assumed. The descendant {{HTMLElement("col")}} elements may override this value using their own {{htmlattrxref("align", "col")}} attribute.

    > **Note:** Do not try to set the {{cssxref("text-align")}} property on a selector giving a {{HTMLElement("colgroup")}} element. Because {{HTMLElement("td")}} elements are not descendant of the {{HTMLElement("colgroup")}} element, they won't inherit it.
    >
    > If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the `text-align` property can be used.
    >
    > If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

- {{htmlattrdef("bgcolor")}} {{Deprecated_inline}}

  - : The background color of the table. It is a [6-digit hexadecimal RGB code](/en-US/docs/Web/CSS/color_value#rgb_colors), prefixed by a '`#`'. One of the predefined [color keywords](/en-US/docs/Web/CSS/color_value#color_keywords) can also be used.

    To achieve a similar effect, use the CSS {{cssxref("background-color")}} property.

- {{htmlattrdef("char")}} {{deprecated_inline}}
  - : This attribute specifies the alignment of the content in a column group to a character. Typical values for this include a period (.) when attempting to align numbers or monetary values. If {{htmlattrxref("align", "colgroup")}} is not set to `char`, this attribute is ignored, though it will still be used as the default value for the {{htmlattrxref("align", "col")}} of the {{HTMLElement("col")}} which are members of this column group.
- {{htmlattrdef("charoff")}} {{deprecated_inline}}
  - : This attribute is used to indicate the number of characters to offset the column data from the alignment character specified by the `char` attribute.
- {{htmlattrdef("valign")}} {{deprecated_inline}}

  - : This attribute specifies the vertical alignment of the text within each cell of the column. Possible values for this attribute are:

    - `baseline`, which will put the text as close to the bottom of the cell as it is possible, but align it on the [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) of the characters instead of the bottom of them. If characters are all of the size, this has the same effect as `bottom`.
    - `bottom`, which will put the text as close to the bottom of the cell as it is possible;
    - `middle`, which will center the text in the cell;
    - and `top`, which will put the text as close to the top of the cell as it is possible.

    > **Note:** Do not try to set the {{cssxref("vertical-align")}} property on a selector giving a `<colgroup>` element. Because {{HTMLElement("td")}} elements are not descendant of the `<colgroup>` element, they won't inherit it.
    >
    > If the table doesn't use a {{htmlattrxref("colspan", "td")}} attribute, use the `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of the column in the table. Only after this selector the `vertical-align` property can be used.
    >
    > If the table does use a {{htmlattrxref("colspan", "td")}} attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.

## Examples

Please see the {{HTMLElement("table")}} page for examples on `<colgroup>`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS properties and [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) that may be specially useful to style the `<col>` element:

  - the {{cssxref("width")}} property to control the width of the column;
  - the {{cssxref(":nth-child")}} pseudo-class to set the alignment on the cells of the column;
  - the {{cssxref("text-align")}} property to align all cells content on the same character, like '.'.
