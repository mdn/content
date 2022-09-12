---
title: '<hr>: The Thematic Break (Horizontal Rule) element'
slug: Web/HTML/Element/hr
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
browser-compat: html.elements.hr
---

{{HTMLRef}}

The **`<hr>`** [HTML](/en-US/docs/Web/HTML) element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Historically, this has been presented as a horizontal rule or line. While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None, it is an {{Glossary("empty element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>It must have start tag, but must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>{{ARIARole("separator")}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("presentation")}} or {{ARIARole("none")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the alignment of the rule on the page. If no value is specified, the default value is `left`.
- {{htmlattrdef("color")}} {{Non-standard_inline}} {{Deprecated_Inline}}
  - : Sets the color of the rule through color name or hexadecimal value.
- {{htmlattrdef("noshade")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the rule to have no shading.
- {{htmlattrdef("size")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the height, in pixels, of the rule.
- {{htmlattrdef("width")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the length of the rule on the page through a pixel or percentage value.

## Example

### HTML

```html
<p>
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
  This is the first paragraph of text.
</p>

<hr>

<p>
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
  This is the second paragraph of text.
</p>
```

### Result

{{EmbedLiveSample("Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement('p')}}
