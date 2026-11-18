---
title: "HTMLSlotElement: assign() method"
short-title: assign()
slug: Web/API/HTMLSlotElement/assign
page-type: web-api-instance-method
browser-compat: api.HTMLSlotElement.assign
---

{{APIRef("Shadow DOM API")}}

The **`assign()`** method of the {{domxref("HTMLSlotElement")}} interface sets the slot's _manually assigned nodes_ to an ordered set of slottables. The manually assigned nodes set is initially empty until nodes are assigned using `assign()`.

> [!NOTE]
> Manual assignments determine the slot's displayed content only when the shadow tree has been [created](/en-US/docs/Web/API/Element/attachShadow) with the `slotAssignment: "manual"` option. In a shadow tree using named (automatic) assignment, calling `assign()` still updates the slot's manually assigned nodes, but does not override named assignment.

## Syntax

```js-nolint
assign()
assign(node1)
assign(node1, node2)
assign(node1, node2, /* …, */ nodeN)
```

### Parameters

- `node1`, …, `nodeN`
  - : A set of {{domxref("Element")}} or {{domxref("Text")}} nodes. Passing zero arguments clears the slot's manually assigned nodes, and its fallback content is displayed. Fallback content is also displayed when no nodes have been assigned or all assigned nodes have been removed from the shadow host.

    Removing a node from the shadow host preserves its manual assignment, so reinserting it into the host restores its slot assignment unless the manual assignment has been changed using `assign()`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Displaying assigned nodes and fallback content

In this example, the `assign()` method is used to display one of two panels. Click a panel button to assign that panel to the slot, or click "Show fallback" to clear the assignment and display the slot's fallback content. Switching panels or clearing the assignment does not remove the panels from the shadow host.

To compare clearing an assignment with removing a node, first display a panel, then click "Remove assigned panel". This removes the panel from the shadow host without calling `assign()`. The fallback content should appear automatically. Clicking any other button first restores any removed panels to the shadow host.

#### HTML

```html
<div>
  <button id="show-first">Show first panel</button>
  <button id="show-second">Show second panel</button>
  <button id="show-fallback">Show fallback</button>
  <button id="remove-panel">Remove assigned panel</button>
</div>

<div id="panels">
  <tab-panel><p>This is the first panel.</p></tab-panel>
  <tab-panel><p>This is the second panel.</p></tab-panel>
</div>
```

#### JavaScript

```js
function updateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
    // Clear any previous assignment to display the slot's fallback content.
    slot.assign();
  }
}

const host = document.querySelector("#panels");
const panels = host.querySelectorAll("tab-panel");
const shadow = host.attachShadow({
  mode: "open",
  slotAssignment: "manual",
});
shadow.innerHTML = `
  <slot>
    <p>This is the fallback content. No panel is assigned.</p>
  </slot>
`;
const slot = shadow.querySelector("slot");

function restorePanels() {
  for (let i = panels.length - 1; i >= 0; i--) {
    if (panels[i].parentNode !== host) {
      host.insertBefore(panels[i], panels[i + 1] ?? null);
    }
  }
}

document.querySelector("#show-first").addEventListener("click", () => {
  restorePanels();
  updateDisplayTab(host, 1);
});

document.querySelector("#show-second").addEventListener("click", () => {
  restorePanels();
  updateDisplayTab(host, 2);
});

document.querySelector("#show-fallback").addEventListener("click", () => {
  restorePanels();
  updateDisplayTab(host, 0);
});

document.querySelector("#remove-panel").addEventListener("click", () => {
  for (const panel of slot.assignedNodes()) {
    // Remove the node without clearing its manual assignment.
    panel.remove();
  }
});
```

#### Result

{{EmbedLiveSample("Displaying assigned nodes and fallback content", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.attachShadow()")}}
