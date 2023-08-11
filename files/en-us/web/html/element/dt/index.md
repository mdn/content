---
title: "<dt>: The Description Term element"
slug: Web/HTML/Element/dt
page-type: html-element
browser-compat: html.elements.dt
---

{{HTMLSidebar}}

The **`<dt>`** [HTML](/en-US/docs/Web/HTML) element specifies a term in a description or definition list, and as such must be used inside a {{HTMLElement("dl")}} element. It is usually followed by a {{HTMLElement("dd")}} element; however, multiple `<dt>` elements in a row indicate several terms that are all defined by the immediate next {{HTMLElement("dd")}} element.

The subsequent {{HTMLElement("dd")}} (**Description Details**) element provides the definition or other related text associated with the term specified using `<dt>`.

{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

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
        >, but with no {{HTMLElement("header")}},
        {{HTMLElement("footer")}}, sectioning content or heading content
        descendants.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is required. The end tag may be omitted if this element is
        immediately followed by another <code>&#x3C;dt></code> element or a
        {{HTMLElement("dd")}} element, or if there is no more content in
        the parent element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("dl")}} or (in {{Glossary("WHATWG")}} HTML,
        {{Glossary("W3C")}} HTML 5.2 and later) a
        {{HTMLElement("div")}} that is a child of a
        {{HTMLElement("dl")}}.<br />This element can be used before a
        {{HTMLElement("dd")}} or another {{HTMLElement("dt")}}
        element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/term_role"><code>term</code></a></td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Listitem_role"
            >listitem</a
          ></code
        >
      </td>
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

- {{HTMLElement("dl")}}
- {{HTMLElement("dd")}}
