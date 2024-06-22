---
title: "<br>: The Line Break element"
slug: Web/HTML/Element/br
page-type: html-element
browser-compat: html.elements.br
---

{{HTMLSidebar}}

The **`<br>`** [HTML](/en-US/docs/Web/HTML) element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

As you can see from the above example, a `<br>` element is included at each point where we want the text to break. The text after the `<br>` begins again at the start of the next line of the text block.

> **Note:** Do not use `<br>` to create margins between paragraphs; wrap them in {{htmlelement("p")}} elements and use the [CSS](/en-US/docs/Web/CSS) {{cssxref('margin')}} property to control their size.

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

### Deprecated attributes

- `clear` {{Deprecated_Inline}}
  - : Indicates where to begin the next line after the break.

## Styling with CSS

The `<br>` element has a single, well-defined purpose — to create a line break in a block of text. As such, it has no dimensions or visual output of its own, and there is very little you can do to style it.

You can set a {{cssxref("margin")}} on `<br>` elements themselves to increase the spacing between the lines of text in the block, but this is a bad practice — you should use the {{cssxref("line-height")}} property that was designed for that purpose.

## Accessibility

Creating separate paragraphs of text using `<br>` is not only bad practice, it is problematic for people who navigate with the aid of screen reading technology. Screen readers may announce the presence of the element, but not any content contained within `<br>`s. This can be a confusing and frustrating experience for the person using the screen reader.

Use `<p>` elements, and use CSS properties like {{cssxref("margin")}} to control their spacing.

## Examples

### Simple br

In the following example we use `<br>` elements to create line breaks between the different lines of a postal address:

```html
Mozilla<br />
331 E. Evelyn Avenue<br />
Mountain View, CA<br />
94041<br />
USA<br />
```

#### Result

{{ EmbedLiveSample('Simple_br', 640, 120) }}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        Must have a start tag and must not have an end tag. In XHTML documents,
        write this element as <code>&#x3C;br /></code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
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
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLBRElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("address")}} element
- {{HTMLElement("p")}} element
- {{HTMLElement("wbr")}} element
