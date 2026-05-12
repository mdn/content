---
title: "`<slot>` HTML web component slot element"
short-title: <slot>
slug: Web/HTML/Reference/Elements/slot
page-type: html-element
browser-compat: html.elements.slot
sidebar: htmlsidebar
---

The **`<slot>`** [HTML](/en-US/docs/Web/HTML) element is a placeholder inside a [Web Component](/en-US/docs/Web/API/Web_components) that you can fill with your own markup when the component is used.
This lets you create separate DOM trees and present them together.

A slot can contain default content, such as plain text, other HTML elements, or other web components.
This is displayed if the slot is not assigned another element when the web component is used.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `name`
  - : The slot's name.
    A _named slot_ is a `<slot>` element with a `name` attribute, while unnamed slots have no `name` attribute, and the name defaults to the empty string.

    When the associated shadow root uses [named slot assignment](/en-US/docs/Web/HTML/Reference/Elements/template#named), the slot's containing element is rendered with elements in the same host that have a [`slot` attribute](/en-US/docs/Web/API/Element/slot) with the same name.
    All elements that don't have a `slot` attribute are rendered in the first unnamed `<slot>` element, which is referred to as the _default slot_.
    Slot names should be unique per shadow root: if you have two slots with the same name, all of the elements with a matching `slot` attribute will be assigned to the first slot with that name.
    The `name` has no effect if [manual slot assignment](/en-US/docs/Web/HTML/Reference/Elements/template#manual) is used.

    For more information see [`shadowrootslotassignment`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) on the `<template>` element and [`Element.attachShadow()`](/en-US/docs/Web/API/Element/attachShadow#slotassignment).

## Examples

### Basic usage

This HTML shows how a number of named slots might be declared within a {{htmlelement(template)}} element.
Note that these slots are only used as slots when the template used inside a shadow root.

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", "Helvetica", "Arial", sans-serif;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
      background: #217ac0;
      color: white;
      padding: 2px 6px;
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <code class="name">
        &lt;<slot name="element-name">NEED NAME</slot>&gt;
      </code>
      <span class="desc"><slot name="description">NEED DESCRIPTION</slot></span>
    </summary>
    <div class="attributes">
      <h4>Attributes</h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>
```

> [!NOTE]
> You can see this complete example in action at [element-details](https://github.com/mdn/web-components-examples/tree/main/element-details) (see it [running live](https://mdn.github.io/web-components-examples/element-details/)). In addition, you can find an explanation at [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots).

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content">Flow content</a>,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasing content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#transparent_content_model">Transparent</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Events</th>
      <td>{{domxref("HTMLSlotElement/slotchange_event", "slotchange")}}</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasing content</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">No corresponding role</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLSlotElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("template")}} element
- HTML [`slot`](/en-US/docs/Web/HTML/Reference/Global_attributes/slot) attribute
- CSS {{CSSXref("::slotted")}} pseudo-element
- CSS {{cssxref(":has-slotted")}} pseudo-class
- [CSS scoping](/en-US/docs/Web/CSS/Guides/Scoping) module
- [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
