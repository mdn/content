---
title: '<caption>: The Table Caption element'
slug: Web/HTML/Element/caption
tags:
  - Element
  - HTML
  - HTML Tables
  - HTML tabular data
  - Reference
  - Table Captions
  - Table Titles
  - Tables
  - Web
  - caption
browser-compat: html.elements.caption
---

{{HTMLRef}}

The **`<caption>`** [HTML](/en-US/docs/Web/HTML) element specifies the caption (or title) of a table.

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-taller")}}

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
      <td>{{domxref("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

The following attributes are deprecated and should not be used. They are documented below for reference when updating existing code and for historical interest only.

- {{htmlattrdef("align")}} {{deprecated_inline}}

  - : This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:

    - `left`
      - : The caption is displayed to the left of the table.
    - `top`
      - : The caption is displayed above the table.
    - `right`
      - : The caption is displayed to the right of the table.
    - `bottom`
      - : The caption is displayed below the table.

    > **Warning:** Do not use this attribute, as it has been deprecated. The {{HTMLElement("caption")}} element should be styled using the [CSS](/en-US/docs/Web/CSS) properties {{cssxref("caption-side")}} and {{cssxref("text-align")}}.

## Usage notes

If used, the `<caption>` element must be the first child of its parent {{htmlelement("table")}} element.

When the `<table>` element that contains the `<caption>` is the only descendant of a {{HTMLElement("figure")}} element, you should use the {{HTMLElement("figcaption")}} element instead of `<caption>`.

A {{cssxref("background-color")}} on the table will not include the caption. Add a `background-color` to the `<caption>` element as well if you want the same color to be behind both.

## Example

This simple example presents a table that includes a caption.

```html
<table>
  <caption>Example Caption</caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@sample.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@sample.com</td>
  </tr>
</table>
```

```css hidden
caption {
  caption-side: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table, th, td {
  border: 1px solid black;
}
```

{{EmbedLiveSample('Example', 650, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS properties that may be specially useful to style the {{HTMLElement("caption")}} element:

  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}.
