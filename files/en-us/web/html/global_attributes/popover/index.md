---
title: popover
slug: Web/HTML/Global_attributes/popover
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.popover
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

The **`popover`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is used to designate an element as a popover element.

Popover elements are hidden via `display: none` until opened via an invoking/control element (i.e. a `<button>` or `<input type="button">` with a [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute) or a {{domxref("HTMLElement.showPopover()")}} call.

When open, popover elements will appear above all other elements in the {{glossary("top layer")}}, and won't be influenced by parent elements' {{cssxref('position')}} or {{cssxref('overflow')}} styling.

A popover attribute can have values [`"auto"`](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) (default) or [`"manual"`](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state).
Popovers that have the `auto` state can be "light dismissed" by selecting outside the popover area, and generally only allow one popover to be displayed on-screen at a time.
By contrast, `manual` popovers must always be explicitly hidden, but allow for use cases such as nested popovers in menus.

For detailed information on usage, see the {{domxref("Popover API", "Popover API", "", "nocode")}} landing page.

## Examples

The following will render a button which will open a popover element.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

> **Note:** See our [Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/) to access the full collection of MDN popover examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Popover API", "Popover API", "", "nocode")}}
