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

For detailed information on usage, see the {{domxref("Popover API", "Popover API", "", "nocode")}} landing page.

## Examples

## Basic example

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
