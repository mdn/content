---
title: "<bdo>: The Bidirectional Text Override element"
slug: Web/HTML/Element/bdo
page-type: html-element
browser-compat: html.elements.bdo
---

{{HTMLSidebar}}

The **`<bdo>`** [HTML](/en-US/docs/Web/HTML) element overrides the current directionality of text, so that the text within is rendered in a different direction.

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

The text's characters are drawn from the starting point in the given direction; the individual characters' orientation is not affected (so characters don't get drawn backward, for example).

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `dir`

  - : The direction in which text should be rendered in this element's contents. Possible values are:

    - `ltr`: Indicates that the text should go in a left-to-right direction.
    - `rtl`: Indicates that the text should go in a right-to-left direction.

## Examples

```html
<!-- Switch text direction -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### Result

{{EmbedLiveSample('Examples')}}

## Notes

The HTML 4 specification did not specify events for this element; they were added in XHTML. This is most likely an oversight.

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
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
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
        <code
          ><a href="/en-US/docs/Web/API/HTMLSpanElement"
            >HTMLSpanElement</a
          ></code
        >
        interface for this element.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related HTML element: {{HTMLElement("bdi")}}
