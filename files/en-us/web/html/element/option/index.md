---
title: '<option>: The HTML Option element'
slug: Web/HTML/Element/option
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Select
browser-compat: html.elements.option
---

{{HTMLRef}}

The **`<option>`** [HTML](/en-US/docs/Web/HTML) element is used to define an item contained in a {{HTMLElement("select")}}, an {{HTMLElement("optgroup")}}, or a {{HTMLElement("datalist")}} element. As such, `<option>` can represent menu items in popups and other lists of items in an HTML document.

{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}

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
        Text, possibly with escaped characters (like
        <code>&#x26;eacute;</code>).
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is mandatory. The end tag is optional if this element is
        immediately followed by another <code>&#x3C;option></code> element or an
        {{HTMLElement("optgroup")}}, or if the parent element has no
        more content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("select")}}, an
        {{HTMLElement("optgroup")}} or a
        {{HTMLElement("datalist")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>{{ARIARole("option")}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLOptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("disabled")}}
  - : If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled {{HTMLElement("optgroup")}} element.
- {{htmlattrdef("label")}}
  - : This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content.
- {{htmlattrdef("selected")}}
  - : If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a {{HTMLElement("select")}} element whose {{htmlattrxref("multiple", "select")}} attribute is not set, only one single `<option>` of this {{HTMLElement("select")}} element may have the `selected` attribute.
- {{htmlattrdef("value")}}
  - : The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.

## Styling with CSS

Styling the **`<option>`** element is highly limited. Options don't inherit the font set on the parent. In Firefox, only [`color`](/en-US/docs/Web/CSS/color) and [`background-color`](/en-US/docs/Web/CSS/background-color) can be set however in Chrome or Safari it's not possible to set any properties. You can find more details about styling in [our guide to advanced form styling](/en-US/docs/Learn/Forms/Advanced_form_styling).

## Examples

See {{HTMLElement("select")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.
