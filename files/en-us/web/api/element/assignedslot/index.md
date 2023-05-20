---
title: "Element: assignedSlot property"
short-title: assignedSlot
slug: Web/API/Element/assignedSlot
page-type: web-api-instance-property
browser-compat: api.Element.assignedSlot
---

{{APIRef("Shadow DOM")}}

The **`assignedSlot`** read-only
property of the {{domxref("Element")}} interface returns an
{{domxref("HTMLSlotElement")}} representing the {{htmlelement("slot")}} element the
node is inserted in.

## Value

An {{domxref('HTMLSlotElement')}} instance, or `null` if the element is not
assigned to a slot, or if the associated shadow root was attached with its
{{domxref("ShadowRoot.mode", "mode")}} set to `closed` (see
{{domxref("Element.attachShadow")}} for further details).

## Examples

In our [simple-template example](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([see it live](https://mdn.github.io/web-components-examples/simple-template/)), we create a trivial custom element example called
`<my-paragraph>` in which a shadow root is attached and then populated
using the contents of a template that contains a slot named `my-text`.

When `<my-paragraph>` is used in the document, the slot is populated
by a slottable element by including it inside the element with a
[`slot`](/en-US/docs/Web/HTML/Global_attributes/slot) attribute
with the value `my-text`. Here is one such example:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In our JavaScript file we get a reference to the {{htmlelement("span")}} shown above,
then log a reference to the original `<slot>` element the
`<span>` was inserted in.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
