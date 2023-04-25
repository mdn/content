---
title: "HTMLButtonElement: popoverTargetElement property"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLButtonElement.popoverTargetElement
---

{{ APIRef("DOM") }}{{SeeCompatTable}}

The **`popoverTargetElement`** property of the {{domxref("HTMLButtonElement")}} interface gets and sets the popover element to control via a control button.

It is the JavaScript equivalent of the [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) HTML attribute.

## Value

A reference to a popover element in the DOM.

## Examples

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

const popoverSupported = supportsPopover();

if (popoverSupported) {
  popover.popover = "auto";
  toggleBtn.popoverTargetElement = popover;
  toggleBtn.popoverTargetAction = "toggle";
} else {
  console.log("Popover API not supported.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
