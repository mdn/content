---
title: "HTMLButtonElement: popoverTargetElement property"
short-title: popoverTargetElement
slug: Web/API/HTMLButtonElement/popoverTargetElement
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.popoverTargetElement
---

{{APIRef("Popover API")}}

The **`popoverTargetElement`** property of the {{domxref("HTMLButtonElement")}} interface gets and sets the popover element to control via a button.

It is the JavaScript equivalent of the [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) HTML attribute.

## Value

A reference to a popover element in the DOM.

## Examples

### Toggle popover action with an auto popover

This example shows the basic use of the popover API, setting a `<div>` element as a popover, and then setting it as the `popoverTargetElement` of a `<button>`.
The `popover` attribute is set to [`"manual"`](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state), so the popover must be closed using a button, and not "light dismissed" by selecting outside the popover area.

First we define an HTML `<button>` element that we will use to show and hide the popover, and a `<div>` that will be the popover.
In this case we don't set the [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction) HTML attribute on the `<button>` or the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute on the `<div>`, as we will be doing so programmatically.

```html
<button id="toggleBtn">Toggle popover</button>
<div id="mypopover">This is popover content!</div>
```

The JavaScript code first gets a handle to the `<div>` and `<button>` elements.
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
We then set the `popoverTargetAction` of the `<button>` to `"toggle"`.
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
