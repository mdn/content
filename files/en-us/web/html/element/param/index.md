---
title: "<param>: The Object Parameter element"
slug: Web/HTML/Element/param
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.param
---

{{HTMLSidebar}}{{Deprecated_Header}}

The **`<param>`** [HTML](/en-US/docs/Web/HTML) element defines parameters for an {{HTMLElement("object")}} element.

> [!NOTE]
> Use the {{HTMLElement("object")}} element with a [`data`](/en-US/docs/Web/HTML/Element/object#data) attribute to set the URL of an external resource.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `name` {{deprecated_inline}}
  - : Name of the parameter.
- `value` {{deprecated_inline}}
  - : Specifies the value of the parameter.
- `type` {{deprecated_inline}}
  - : Only used if the `valuetype` is set to `ref`. Specifies the MIME type of values found at the URI specified by value.
- `valuetype` {{deprecated_inline}}

  - : Specifies the type of the `value` attribute. Possible values are:

    - `data`: Default value. The value is passed to the object's implementation as a string.
    - `ref`: The value is a URI to a resource where run-time values are stored.
    - `object`: An ID of another {{HTMLElement("object")}} in the same document.

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
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        An {{HTMLElement("object")}} before any
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
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
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLParamElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("object")}}
