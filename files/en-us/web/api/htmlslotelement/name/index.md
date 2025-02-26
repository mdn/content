---
title: "HTMLSlotElement: name property"
short-title: name
slug: Web/API/HTMLSlotElement/name
page-type: web-api-instance-property
browser-compat: api.HTMLSlotElement.name
---

{{APIRef("Shadow DOM API")}}

The **`name`** property of the {{domxref("HTMLSlotElement")}}
interface returns or sets the slot name. A slot is a placeholder inside a web component
that users can fill with their own markup.

## Value

A string.

## Examples

The following snippet is taken from our [slotchange example](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([See it live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Here we grab references to all the slots, then add a slotchange event listener to the
2nd slot in the template — which is the one that keeps having its contents changed in
the example.

Every time the element inserted in the slot changes, we log a report to the console
saying which slot has changed, and what the new node inside the slot is.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
