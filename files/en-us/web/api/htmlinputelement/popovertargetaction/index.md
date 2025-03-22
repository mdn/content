---
title: "HTMLInputElement: popoverTargetAction property"
short-title: popoverTargetAction
slug: Web/API/HTMLInputElement/popoverTargetAction
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.popoverTargetAction
---

{{APIRef("Popover API")}}

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

### Toggle popover action with an auto popover

This example shows the basic use of the popover API with a "toggle" value set for the `popoverTargetAction` property.
The `popover` attribute is set to [`"auto"`](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), so the popover can be closed ("light-dismissed") by clicking outside the popover area.

First we define an [`<input>`](/en-US/docs/Web/HTML/Element/input/button) of `type="button"` that we will use to show and hide the popover, and a `<div>` that will be the popover.
In this case we don't set the [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction) HTML attribute on the button or the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute on the `<div>`, as we will be doing so programmatically.

```html
<input id="toggleBtn" type="button" value="Toggle popover" />
<div id="mypopover">This is popover content!</div>
```

The JavaScript code first gets a handle to the `<div>` and `<input>` elements.
It then defines a function to check for popover support.

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

// Check for popover API support.
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
```

If the popover API is supported the code sets the `<div>` element's `popover` attribute to `"auto"` and makes it the popover target of the toggle button.
We then set the `popoverTargetAction` of the button to `"toggle"`.
If the popover API is not supported we change the text content of the `<div>` element to state this, and hide the toggle button.

```js
if (supportsPopover()) {
  // Set the <div> element to be an auto popover
  popover.popover = "auto";
  // Set the button popover target to be the popover
  toggleBtn.popoverTargetElement = popover;

  // Set that the button toggles popover visibility
  toggleBtn.popoverTargetAction = "toggle";
} else {
  popover.textContent = "Popover API not supported.";
  toggleBtn.hidden = true;
}
```

> [!NOTE]
> A popover element is hidden by default, but if the API is not supported your element will display "as usual".

You can try out the example below.
Show and hide the popover by toggling the button.
The "auto" popover can also be dismissed by selecting outside the bounds of the popover text.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

### Show/hide popover action with a manual popover

This example shows how to use the `"show"` and `"hide"` values of the `popoverTargetAction` attribute.

The code is near identical to the previous example, except that there are two `<button>` elements, and the popover is set to [`"manual"`](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state).
A `manual` popover must be closed explicitly, and not "light dismissed" by selecting outside the popover area.

```html
<input id="showBtn" type="button" value="Show popover" />
<input id="hideBtn" type="button" value="Hide popover" />
<div id="mypopover">This is popover content!</div>
```

```js
function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}

const popover = document.getElementById("mypopover");
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");

const popoverSupported = supportsPopover();

if (supportsPopover()) {
  // Set the <div> element be a manual popover
  popover.popover = "manual";

  // Set the button targets to be the popover
  showBtn.popoverTargetElement = popover;
  hideBtn.popoverTargetElement = popover;

  // Set the target actions to be show/hide
  showBtn.popoverTargetAction = "show";
  hideBtn.popoverTargetAction = "hide";
} else {
  popover.textContent = "Popover API not supported.";
  showBtn.hidden = true;
  hideBtn.hidden = true;
}
```

The popover can be displayed by selecting the "Show popover" button, and dismissed using the "Hide popover" button.

{{EmbedLiveSample("Show/hide popover action with a manual popover", "100%")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
