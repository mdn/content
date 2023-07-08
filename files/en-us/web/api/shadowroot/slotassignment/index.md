---
title: "ShadowRoot: slotAssignment property"
short-title: slotAssignment
slug: Web/API/ShadowRoot/slotAssignment
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.slotAssignment
---

{{APIRef("Shadow DOM")}}

The read-only **`slotAssignment`** property of the {{domxref("ShadowRoot")}} interface returns the _slot assignment mode_ for the shadow DOM tree. Nodes are either automatically assigned (`named`) or manually assigned (`manual`). The value of this property defined using the `slotAssignment` option when calling {{domxref("Element.attachShadow()")}}.

## Value

A string that can be one of:

- `named`
  - : Elements are automatically assigned to {{HTMLElement("slot")}} elements within this shadow root. Any descendants of the host with a `slot` attribute which matches the `name` attribute of a `<slot>` within this shadow root will be assigned to that slot. Any top-level children of the host with no `slot` attribute will be assigned to a `<slot>` with no `name` attribute (the "default slot") if one is present.
- `manual`
  - : Elements are not automatically assigned to {{HTMLElement("slot")}} elements. Instead, they must be manually assigned with {{domxref("HTMLSlotElement.assign()")}}.

## Examples

In the example below, the `assign()` method is used to display the correct tab in a tabbed application. The function is called and passed the panel to show, which is then assigned to the slot. We test if the `slotAssignment` is `named` to prevent an exception to be raised when {{domxref("HTMLSlotElement.assign()")}} is called.

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;

  // This test is usually not needed, but can be useful when debugging
  if (shadow.slotAssignment === "named") {
    console.error(
      "Trying to manually assign a slot on an automatically-assigned (named) slot",
    );
  }
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
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
- {{domxref("HTMLSlotElement.assign()")}}
