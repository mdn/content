---
title: "HTMLInputElement: popoverTargetAction property"
short-title: popoverTargetAction
slug: Web/API/HTMLInputElement/popoverTargetAction
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInputElement.popoverTargetAction
---

{{ APIRef("DOM") }}{{SeeCompatTable}}

The **`popoverTargetAction`** property of the {{domxref("HTMLInputElement")}} interface gets and sets the action to be performed (`"hide"`, `"show"`, or `"toggle"`) on a popover element being controlled by an {{htmlelement("input")}} element of `type="button"`.

It reflects the value of the [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction) HTML attribute.

## Value

An enumerated value. Possible values are:

- `"hide"`
  - : The button will hide a shown popover. If you try to hide an already hidden popover, no action will be taken.
- `"show"`
  - : The button will show a hidden popover. If you try to show an already showing popover, no action will be taken.
- `"toggle"`
  - : The button will toggle a popover between showing and hidden. If the popover is hidden, it will be shown; if the popover is showing, it will be hidden. If `popoverTargetAction` is not set, `"toggle"` is the default action that will be performed by the control button.

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
