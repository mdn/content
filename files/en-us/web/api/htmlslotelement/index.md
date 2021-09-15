---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
tags:
  - API
  - HTMLSlotElement
  - Interface
  - Reference
  - shadow dom
browser-compat: api.HTMLSlotElement
---
{{APIRef('Web Components')}}

The **`HTMLSlotElement`** interface of the [Shadow DOM API](/en-US/docs/Web/Web_Components/Using_shadow_DOM) enables access to the name and assigned nodes of an HTML {{HTMLElement("slot")}} element.

## Properties

- {{domxref('HTMLSlotElement.name')}}
  - : A {{domxref("DOMString","string")}} used to get and set the slot's name.

## Methods

- {{domxref('HTMLSlotElement.assign()')}}
  - : Sets the manually assigned nodes for this slot to the given nodes.
- {{domxref('HTMLSlotElement.assignedNodes()')}}
  - : Returns a sequence of the nodes assigned to this slot, and if the `flatten` option is set to `true`, the assigned nodes of any other slots that are descendants of this slot. If no assigned nodes are found, it returns the slot's fallback content.
- {{domxref('HTMLSlotElement.assignedElements()')}}
  - : Returns a sequence of the elements assigned to this slot (and no other nodes). If the `flatten` option is set to `true`, it also returns the assigned elements of any other slots that are descendants of this slot. If no assigned nodes are found, it returns the slot's fallback content.

## Events

- {{domxref('HTMLSlotElement.slotchange_event', 'slotchange')}}
  - : Fired on an `HTMLSlotElement` instance ([`<slot>`](/en-US/docs/Web/HTML/Element/slot "The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.") element) when the node(s) contained in that slot change.

## Examples

The following snippet is taken from our [slotchange example](https://github.com/mdn/web-components-examples/tree/master/slotchange) ([see it live also](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].addEventListener('slotchange', function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
});
```

Here we grab references to all the slots, then add a slotchange event listener to the 2nd slot in the template — which is the one that keeps having its contents changed in the example.

Every time the element inserted in the slot changes, we log a report to the console saying which slot has changed, and what the new node inside the slot is.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
