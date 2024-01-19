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

  - : This deprecated {{Glossary("enumerated", "enumerated")}} attribute accepts `left`, `top`, `right`, or `bottom` as a value to indicate which side of the table the caption should be displayed. Use the {{cssxref("caption-side")}} and {{cssxref("text-align")}} CSS properties instead.


    > **Note:** Do not use this attribute as it is deprecated (and not supported) in the latest standard: use the CSS {{cssxref("caption-side")}} and {{cssxref("text-align")}} properties instead.

## Usage notes

- If included, the `<caption>` element must be the first child of its parent {{htmlelement("table")}} element.
- When a `<table>` is nested within a {{HTMLElement("figure")}} as the figure's only content, it should be captioned via a {{HTMLElement("figcaption")}} for the `<figure>` instead of as a `<caption>` nested within the `<table>`.
- Any {{cssxref("background-color")}} applied to a table will not be applied to its caption. Add a `background-color` to the `<caption>` element as well if you want the same color to be behind both.

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
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
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
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">caption</a
          ></code
        >
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

- [Learn: HTML tables](/en-US/docs/Learn/HTML/Tables)
- {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}: Other table-related elements

  - {{cssxref("caption-side")}} CSS property
  - {{cssxref("text-align")}} CSS property
