---
title: "ToggleEvent: source property"
short-title: source
slug: Web/API/ToggleEvent/source
page-type: web-api-instance-property
browser-compat: api.ToggleEvent.source
---

{{APIRef("Popover API")}}

The **`source`** read-only property of the {{domxref("ToggleEvent")}} interface is an {{domxref("Element")}} object instance representing the HTML popover control element that initiated the toggle.

A {{htmlelement("button")}} element can be specified as a popover control by specifying the [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id) of the popover element in its [`commandfor`](/en-US/docs/Web/HTML/Reference/Elements/button#commandfor) or [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) attribute (if the button is specified using `<input type="button">`, only the `popovertarget` attribute works).

## Value

An {{domxref("Element")}} object instance, or `null` if the popover was not activated by a control element (for example, if the popover is being controlled using a JavaScript method such as {{domxref("HTMLElement.togglePopover()")}}).

## Examples

### Basic `source` usage

This demo shows how to use the `source` property to perform a different action depending on which control button was used to close a popover.

#### HTML

Our markup contains a `<button>`, a {{htmlelement("p")}}, and a {{htmlelement("div")}} element. The `<div>` is designated as an [`auto` popover](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss), and the button is designated as a control for showing the popover using the [`commandfor`](/en-US/docs/Web/HTML/Reference/Elements/button#commandfor) and [`command`](/en-US/docs/Web/HTML/Reference/Elements/button#command) attributes.

The popover contains a heading asking the user if they would like a cookie, and two buttons allowing them to select an answer of "yes" or "no". Each one of these buttons is designated as a control for hiding the popover.

```html live-sample___toggleevent-source
<button commandfor="popover" command="show-popover">
  Select cookie preference
</button>
<p id="output"></p>
<div id="popover" popover="auto">
  <h3>Would you like a cookie?</h3>
  <button id="yes" commandfor="popover" command="hide-popover">Yes</button>
  <button id="no" commandfor="popover" command="hide-popover">No</button>
</div>
```

```css hidden live-sample___toggleevent-source
html {
  font-family: sans-serif;
}

[popover] {
  border: 1px solid grey;
  padding: 10px 20px;
  border-radius: 5px;
}

[popover] h3 {
  margin: 0 0 10px;
}
```

#### JavaScript

In our script, we start off by grabbing references to the "yes" and "no" buttons, the popover, and the output `<p>`.

```js live-sample___toggleevent-source
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popover = document.getElementById("popover");
const output = document.getElementById("output");
```

We then add a [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event) event listener to the popover. When fired, it checks if the "yes" or the "no" button was used to toggle (hide) the popover; an appropriate message is printed to the output `<p>` in each case.

```js live-sample___toggleevent-source
popover.addEventListener("toggle", (event) => {
  if (event.source === yesBtn) {
    output.textContent = "Cookie set!";
  } else if (event.source === noBtn) {
    output.textContent = "No cookie set.";
  }
});
```

#### Result

{{embedlivesample("toggleevent-source", "100%", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
