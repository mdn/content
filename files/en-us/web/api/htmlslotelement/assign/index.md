---
title: HTMLSlotElement.assign()
slug: Web/API/HTMLSlotElement/assign
page-type: web-api-instance-method
tags:
  - API
  - HTMLSlotElement
  - Method
  - Reference
  - Web Components
  - assign
  - shadow DOM
browser-compat: api.HTMLSlotElement.assign
---
{{APIRef("Shadow DOM API")}}

The **`assign()`** method of the
{{domxref("HTMLSlotElement")}} interface sets the slot's **manually assigned nodes** to an ordered set of slottables. The manually assigned nodes set is initially empty until nodes are assigned using `assign()`.

Please note that you cannot mix declarative and imperative slot assignment. Therefore, for this to work, the shadow tree needs to have been created with the `slotAssignment: "manual"` option.

## Syntax

```js
assign(node1)
assign(node1, node2)
assign(node1, node2, /* … ,*/ nodeN)
```

### Parameters

- `node1`, …, `nodeN`
  - : A set of {{domxref("Element")}} or {{domxref("Text")}} nodes.

### Return value

Undefined.

## Examples

In the below example, the `assign()` method is used to display the correct tab in a tabbed application. The function is called and passed the panel to show, which is then assigned to the slot.

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll('tab-panel');
  if (panels.length && tabIdx && tabIdx <= panels.length ) {
    slot.assign(panels[tabIdx-1]);
  } else {
    slot.assign();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
