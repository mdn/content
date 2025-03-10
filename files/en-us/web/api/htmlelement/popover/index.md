---
title: "HTMLElement: popover property"
short-title: popover
slug: Web/API/HTMLElement/popover
page-type: web-api-instance-property
browser-compat: api.HTMLElement.popover
---

{{APIRef("Popover API")}}

The **`popover`** property of the {{domxref("HTMLElement")}} interface gets and sets an element's popover state via JavaScript (`"auto"`, `"hint"`, or `"manual"`), and can be used for feature detection.

It reflects the value of the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) global HTML attribute.

## Value

An enumerated value; possible values are:

- `"auto"`

  - : [`auto`](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) popovers can be "light dismissed" — this means that you can hide the popover by clicking outside it or pressing the <kbd>Esc</kbd> key.

    Usually, only one `auto` popover can be shown at a time — showing a second popover when one is already shown will hide the first one. The exception to this rule is when you have nested auto popovers. See [Nested popovers](/en-US/docs/Web/API/Popover_API/Using#nested_popovers) for more details.

- `"hint"` {{experimental_inline}}

  - : [`hint`](/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state) popovers do not close `auto` popovers when they are displayed, but will close other hint popovers.
    They can be light dismissed and will respond to close requests.

    Usually they are shown and hidden in response to non-click JavaScript events such as [`mouseover`](/en-US/docs/Web/API/Element/mouseover_event)/[`mouseout`](/en-US/docs/Web/API/Element/mouseout_event) and [`focus`](/en-US/docs/Web/API/Element/focus_event)/[`blur`](/en-US/docs/Web/API/Element/blur_event).
    Clicking a button to open a `hint` popover would cause an open `auto` popover to light-dismiss.

- `"manual"`

  - : [`manual`](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state) popovers cannot be "light dismissed" are not automatically closed. Popovers must explicitly be displayed and closed using declarative show/hide/toggle buttons or JavaScript. Multiple independent `manual` popovers can be shown simultaneously.

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

- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
