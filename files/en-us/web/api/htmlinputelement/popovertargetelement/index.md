---
title: "HTMLInputElement: popoverTargetElement property"
short-title: popoverTargetElement
slug: Web/API/HTMLInputElement/popoverTargetElement
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.popoverTargetElement
---

{{APIRef("Popover API")}}

The **`popoverTargetElement`** property of the {{domxref("HTMLInputElement")}} interface gets and sets the popover element to control via an {{htmlelement("input")}} element of `type="button"`.

It is the JavaScript equivalent of the [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) HTML attribute.

Establishing a relationship between a popover and its invoker button using the `popoverTargetElement` property has two additional useful effects:

- The browser creates an implicit [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) and [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) relationship between popover and invoker, and places the popover in a logical position in the keyboard focus navigation order when shown. This makes the popover more accessible to keyboard and assistive technology (AT) users (see also [Popover accessibility features](/en-US/docs/Web/API/Popover_API/Using#popover_accessibility_features)).
- The browser creates an implicit anchor reference between the two, making it very convenient to position popovers relative to their controls using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). See [Popover anchor positioning](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning) for more details.

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

### Toggle popover action with an auto popover

This example shows the basic use of the popover API, setting a `<div>` element as a popover, and then setting it as the `popoverTargetElement` of an [`<input>`](/en-US/docs/Web/HTML/Element/input/button) of `type="button"`.
The `popover` attribute is set to [`"auto"`](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), so the popover can be closed ("light-dismissed") by clicking outside the popover area.

First we define an `<input>` that we will use to display and hide the popover, and a `<div>` that will be the popover.
In this case we don't set the [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction) HTML attribute on the `<input>` or the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute on the `<div>`, as we will be doing so programmatically.

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
If the popover API is not supported we change the text content of the `<div>` element to state this, and hide the input element.

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
The "auto" popover can also be light dismissed by selecting outside the bounds of the popover text.

{{EmbedLiveSample("Toggle popover action with an auto popover", "100%")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
