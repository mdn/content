---
title: "HTMLSlotElement: slotchange event"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
page-type: web-api-event
browser-compat: api.HTMLSlotElement.slotchange_event
---

{{APIRef}}

The **`slotchange`** event is fired on an {{DOMxRef("HTMLSlotElement")}} instance ({{HTMLElement("slot")}} element) when the node(s) contained in that slot change.

> **Note:** the `slotchange` event doesn't fire if the children of a slotted node change — only if you change (e.g. add or delete) the actual nodes themselves.

In order to trigger a **slotchange** event, one has to set or remove the `slot` attribute.

This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("slotchange", (event) => {});

onslotchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
element.setAttribute("slot", slotName);
// element.assignedSlot = $slot
element.removeAttribute("slot");
// element.assignedSlot = null
```

The following snippet is taken from our [slotchange example](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([see it live also](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Here we grab references to all the `<slot>`s, then add a `slotchange` event listener to the template's second slot — which is the one which has its contents changed in the example.

Every time the element inserted in the slot changes, we log a report to the console saying which slot has changed, and what the new node inside the slot is.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("HTMLSlotElement")}}
