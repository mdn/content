---
title: HTMLSlotElement.assign()
slug: Web/API/HTMLSlotElement/assign
tags:
  - API
  - HTMLSlotElement
  - Method
  - Reference
  - Web Components
  - assign
  - shadow dom
browser-compat: api.HTMLSlotElement.assign
---
{{APIRef("Shadow DOM API")}}

The **`assign()`** method of the
{{domxref("HTMLSlotElement")}} interface sets the slot's **manually assigned nodes** to an ordered set of slottables. The manually assigned nodes set is initially empty until nodes are assigned using `assign()`.

## Syntax

```js
HTMLSlotElement.assign(...nodes)
```

### Parameters

- ...`nodes`
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
