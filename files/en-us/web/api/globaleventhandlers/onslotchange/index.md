---
title: GlobalEventHandlers.onslotchange
slug: Web/API/GlobalEventHandlers/onslotchange
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - Property
  - Reference
  - Shadow DOM API
  - slot
  - slotchange
  - onslotchange
browser-compat: api.GlobalEventHandlers.onslotchange
---
{{ApiRef('DOM')}}{{SeeCompatTable}}

The **`onslotchange`** property of the {{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) that processes {{event("slotchange")}} events.

The `slotchange` event is fired on {{DOMxRef("HTMLSlotElement")}} instances ({{HTMLElement("slot")}} elements) when the node(s) contained in the slot change.

## Examples

The following snippet is a slightly modified version of our [slotchange example](https://github.com/mdn/web-components-examples/tree/master/slotchange) which uses `onslotchange` rather than adding a listener for the `slotchange` event.

First the code gets an array of all the `<slot>`s and then assigns a handler function to the `onslotchange` property on the template's second slot — this second slot is the one that has its contents changed in the example.
Every time the element in the slot changes, we log a report to the console saying which slot has changed, and what the new node inside the slot is.

```js
let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].onslotchange = function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
};
```

We might alternatively handle the event at a higher level.
The snippet below shows the equivalent code if the handler is assigned to `onslotchange` on the `shadowRoot`.
Every time the element in any slot changes, we log a report to the console saying which slot has changed, and what the new node inside the slot is.

```js
this.shadowRoot.onslotchange = function(e) {
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
- {{event("slotchange")}} event
- {{domxref("HTMLSlotElement")}}
