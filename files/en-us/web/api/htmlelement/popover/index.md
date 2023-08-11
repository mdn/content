---
title: "HTMLElement: popover property"
short-title: popover
slug: Web/API/HTMLElement/popover
page-type: web-api-instance-property
browser-compat: api.HTMLElement.popover
---

{{ APIRef("HTML DOM") }}

The **`popover`** property of the {{domxref("HTMLElement")}} interface gets and sets an element's popover state via JavaScript (`"auto"` or `"manual"`), and can be used for feature detection.

It reflects the value of the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) global HTML attribute.

## Value

An enumerated value; possible values are:

- `"auto"`: In [auto state](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss):
  - The popover can be "light dismissed" — this means that you can hide the popover by clicking outside it or pressing the <kbd>Esc</kbd> key.
  - Usually, only one popover can be shown at a time — showing a second popover when one is already shown will hide the first one. The exception to this rule is when you have nested auto popovers. See [Nested popovers](/en-US/docs/Web/API/Popover_API/Using#nested_popovers) for more details.
- `"manual"`: In [manual state](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state):
  - The popover cannot be "light dismissed", although declarative show/hide/toggle buttons will still work.
  - Multiple independent popovers can be shown at a time.

## Examples

### Feature detection

You can use the `popover` attribute to feature detect the [Popover API](/en-US/docs/Web/API/Popover_API):

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

### Setting up a popover programmatically

```js
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
