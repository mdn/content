---
title: "<dd>: The Description Details element"
slug: Web/HTML/Element/dd
page-type: html-element
browser-compat: html.elements.dd
---

{{HTMLSidebar}}

The **`<dd>`** [HTML](/en-US/docs/Web/HTML) element provides the description, definition, or value for the preceding term ({{HTMLElement("dt")}}) in a description list ({{HTMLElement("dl")}}).

{{EmbedInteractiveExample("pages/tabbed/dd.html", "tabbed-standard")}}

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `nowrap` {{Non-standard_inline}} {{Deprecated_Inline}}
  - : If the value of this attribute is set to `yes`, the definition text will not wrap. The default value is `no`.

## Examples

For examples, see the [examples provided for the `<dl>` element](/en-US/docs/Web/HTML/Element/dl#examples).

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
        The start tag is required. The end tag may be omitted if this element is
        immediately followed by another <code>&#x3C;dd></code> element or a
        {{HTMLElement("dt")}} element, or if there is no more content in
        the parent element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("dl")}} or a
        {{HTMLElement("div")}} that is a child of a
        {{HTMLElement("dl")}}.<br />This element can be used after a
        {{HTMLElement("dt")}} or another {{HTMLElement("dd")}}
        element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role"><code>definition</code></a></td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("dl")}}
- {{HTMLElement("dt")}}
