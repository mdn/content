---
title: ShadowRoot.onslotchange
slug: Web/API/ShadowRoot/onslotchange
page-type: web-api-instance-property
tags:
  - API
  - Event Handler
  - Experimental
  - ShadowRoot
  - Property
  - Reference
  - Shadow DOM API
  - slot
  - slotchange
  - onslotchange
browser-compat: api.ShadowRoot.onslotchange
---
{{ApiRef('DOM')}}{{SeeCompatTable}}

The **`onslotchange`** property of the {{domxref("ShadowRoot")}} is an [event handler](/en-US/docs/Web/Events/Event_handlers) that processes {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} events.

The `slotchange` event is fired on {{DOMxRef("HTMLSlotElement")}} instances ({{HTMLElement("slot")}} elements) when the node(s) contained in the slot change.

## Examples

The following snippet is a slightly modified version of our [slotchange example](https://github.com/mdn/web-components-examples/tree/main/slotchange) which uses the `ShadowRoot.onslotchange` property rather than adding a listener for the `slotchange` event.

Every time the element in any slot changes, we log a report to the console saying which slot has changed, and what the new node inside the slot is.

```js
this.shadowRoot.onslotchange = (e) => {
  const nodes = e.originalTarget.assignedNodes();
  console.log(`Element in Slot "${e.originalTarget.name}" changed to "${nodes[0].outerHTML}".`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using templates and slots](/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- {{domxref("HTMLSlotElement/slotchange_event", "slotchange")}} event
- {{domxref("HTMLSlotElement")}}
- {{domxref("HTMLSlotElement.onslotchange")}}
