---
title: "HTMLSlotElement: assignedNodes() method"
short-title: assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
page-type: web-api-instance-method
browser-compat: api.HTMLSlotElement.assignedNodes
---

{{APIRef("Shadow DOM API")}}

The **`assignedNodes()`** method of the {{domxref("HTMLSlotElement")}} interface returns a sequence of the nodes assigned to this slot.

If the `flatten` option is set to `true`, it returns a sequence of both the nodes assigned to this slot, as well as the nodes assigned to any other slots that are descendants of this slot. If no assigned nodes are found, it returns the slot's fallback content.

## Syntax

```js-nolint
assignedNodes()
assignedNodes(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object that sets options for the nodes to be returned. The available options are:

    - `flatten`
      - : A boolean value indicating whether to return the assigned nodes of any available child `<slot>` elements (`true`) or not (`false`). Defaults to `false`.

### Return value

An array of nodes.

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
