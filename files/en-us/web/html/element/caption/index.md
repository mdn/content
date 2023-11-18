---
title: "<caption>: The Table Caption element"
slug: Web/HTML/Element/caption
page-type: html-element
browser-compat: html.elements.caption
---

{{HTMLSidebar}}

The **`<caption>`** [HTML](/en-US/docs/Web/HTML) element specifies the caption (or title) of a table.

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-taller")}}

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- `align` {{deprecated_inline}}

  - : This {{Glossary("enumerated", "enumerated")}} attribute indicates how the caption must be aligned with respect to the table. Possible values are:

    - `left`: the caption is displayed to the left of the table;
    - `top`: the caption is displayed above the table;
    - `right`: the caption is displayed to the right of the table;
    - `bottom`: the caption is displayed below the table.

    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("caption-side")}} and {{cssxref("text-align")}} properties instead.

## Usage notes

- If used, the `<caption>` element must be the first child of its parent {{htmlelement("table")}} element.
- When the {{HTMLElement("table")}} element that contains the `<caption>` is the only descendant of a {{HTMLElement("figure")}} element, you should use the {{HTMLElement("figcaption")}} element instead of `<caption>`.
- A {{cssxref("background-color")}} on the table will not include the caption. Add a `background-color` to the `<caption>` element as well if you want the same color to be behind both.

## Example

See {{HTMLElement("table")}} for a complete table example introducing common standards and best practices.

This example shows a basic table that includes a caption describing the data presented. Some basic CSS is used to align and highlight the `<caption>`.

Such a "title" is helpful for users who are quickly scanning the page, and it is especially beneficial for visually impaired users, allowing them to determine the table's relevance quickly without the need to have a screen reader read the contents of many cells just to find out what the table is about.

```html
<table>
  <caption>
    User login email addresses
  </caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@example.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@example.com</td>
  </tr>
</table>
```

```css
caption {
  caption-side: top;
  text-align: left;
  padding-bottom: 10px;
  font-weight: bold;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140, 140, 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230, 230, 230);
}

td {
  text-align: center;
}
```

#### Result

{{EmbedLiveSample('Example', 650, 140)}}

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
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The end tag can be omitted if the element is not immediately followed by
        ASCII whitespace or a comment.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("table")}} element, as its first descendant.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">caption</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML tables tutorial](/en-US/docs/Learn/HTML/Tables)
- Other table-related HTML Elements: {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties that may be specially useful to style the `<caption>` element:

  - the {{cssxref("background-color")}} property to set the background color of the caption;
  - the {{cssxref("caption-side")}} and {{cssxref("text-align")}} properties to align the caption content with respect to the table.
