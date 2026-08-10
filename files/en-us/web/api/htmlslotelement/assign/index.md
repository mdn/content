---
title: "HTMLSlotElement: assign() method"
short-title: assign()
slug: Web/API/HTMLSlotElement/assign
page-type: web-api-instance-method
browser-compat: api.HTMLSlotElement.assign
---

{{APIRef("Shadow DOM API")}}

The **`assign()`** method of the {{domxref("HTMLSlotElement")}} interface sets the slot's _manually assigned nodes_ to an ordered set of slottables. The manually assigned nodes set is initially empty until nodes are assigned using `assign()`. If no slottables are passed into **`assign()`**, the slot's fallback content is enabled. If there are no manually assigned nodes and **`assign()`** has not been called, the slots default content will not be enabled.

> [!NOTE]
> You cannot mix manually (imperative) and named (declarative, automatic) slot assignments. Therefore, for this method to work, the shadow tree needs to have been [created](/en-US/docs/Web/API/Element/attachShadow) with the `slotAssignment: "manual"` option.

## Syntax

```js-nolint
slot.assign() // enables fallback content
slot.assign(node1)
slot.assign(node1, node2)
slot.assign(node1, node2, /* …, */ nodeN)
```

### Parameters

- `slot`
  - : The {{domxref("HTMLSlotElement")}} to assign nodes to.
- `node1`, …, `nodeN`
  - : A set of {{domxref("Element")}} or {{domxref("Text")}} nodes.
  - : Passing zero arguments causes the slot's fallback content to be enabled. Failing to call **`assign()`** with zero arguments after all manually assigned nodes are removed from DOM will *not* enable the slot's fallback content.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown when calling this method on an automatically assigned slot.

## Examples

In the example below, the `assign()` method is used to display the correct tab in a tabbed application. The function is called and passed the panel to show, which is then assigned to the slot.

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
    // In case there are no nodes to assign, call `assign()` with zero arguments
    // to enable the slot's fallback content.
    slot.assign();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.attachShadow()")}}
