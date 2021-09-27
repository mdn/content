---
title: 'HTMLSlotElement: slotchange event'
slug: Web/API/HTMLSlotElement/slotchange_event
tags:
  - Event
  - Reference
  - Web Components
  - events
  - shadow dom
  - slotchange
browser-compat: api.HTMLSlotElement.slotchange_event
---
{{APIRef}}

The **`slotchange`** event is fired on an {{DOMxRef("HTMLSlotElement")}} instance ({{HTMLElement("slot")}} element) when the node(s) contained in that slot change.

> **Note:** the `slotchange` event doesn't fire if the children of a slotted node change — only if you change (e.g. add or delete) the actual nodes themselves.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

In order to trigger a **slotchange** event, one has to set or remove the `slot` attribute.

## Examples

```js
element.setAttribute('slot', slotName);
// element.assignedSlot = $slot
element.removeAttribute('slot');
// element.assignedSlot = null
```

The following snippet is taken from our [slotchange example](https://github.com/mdn/web-components-examples/tree/master/slotchange) ([see it live also](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].addEventListener('slotchange', function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
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
