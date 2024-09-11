---
title: "<code>: The Inline Code element"
slug: Web/HTML/Element/code
page-type: html-element
browser-compat: html.elements.code
---

{{HTMLSidebar}}

The **`<code>`** [HTML](/en-US/docs/Web/HTML) element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the {{Glossary("user agent", "user agent's")}} default monospace font.

{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

A paragraph of text that includes `<code>`:

```html
<p>
  The function <code>selectAll()</code> highlights all the text in the input
  field so the user can, for example, copy or delete the text.
</p>
```

### Result

{{EmbedLiveSample("Example", 640, 70)}}

## Notes

To represent multiple lines of code, wrap the `<code>` element within a {{HTMLElement("pre")}} element. The `<code>` element by itself only represents a single phrase of code or line of code.

A CSS rule can be defined for the `code` selector to override the browser's default font face. Preferences set by the user might take precedence over the specified CSS.

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
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
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
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">code</a
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
      <td>
        {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implements the
        {{domxref("HTMLSpanElement")}} interface for this element.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}
