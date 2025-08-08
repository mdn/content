---
title: "ToggleEvent: source property"
short-title: source
slug: Web/API/ToggleEvent/source
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ToggleEvent.source
---

{{APIRef("Popover API")}}{{SeeCompatTable}}

The **`source`** read-only property of the {{domxref("ToggleEvent")}} interface is an {{domxref("Element")}} object instance representing the HTML popover control element that initiated the toggle.

## Value

An {{domxref("Element")}} object instance, or `null` if the popover was not activated by a control element.

## Description

A {{htmlelement("button")}} element can be set as a popover control by specifying the [`id`](/en-US/docs/Web/HTML/Reference/Global_attributes/id) of the popover element in its [`commandfor`](/en-US/docs/Web/HTML/Reference/Elements/button#commandfor) or [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) attribute (if the button is specified using `<input type="button">`, only the `popovertarget` attribute works).

When the [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event) event fires on the popover, the `ToggleEvent` event object's `source` property will then contain a reference to the popover control button that initiated the toggle. This is useful for running different code in response to the `toggle` event depending on which control initiated it (see an [example](#basic_source_usage)).

Before the `source` property was available, developers would have to reimplement the `command` attribute functionality from scratch to provide a similar identifier and then monitor it with JavaScript to know which button invoked the popover.
In addition, there was a danger of such JavaScript tasks blocking the showing or hiding of the popover.
The `toggle` event is asynchronous, and therefore avoids this problem.

If the popover was not activated by a control button — for example, if the popover is being controlled using a JavaScript method such as {{domxref("HTMLElement.togglePopover()")}} — the `source` property returns `null`.

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

We then add some feature detection to detect whether the HTML `command` attribute is supported, and whether the `source` property is supported. If either are not supported, we output an appropriate message to the output `<p>`. If both are supported, we add a [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event) event listener to the popover. When fired, it checks if the "yes" or the "no" button was used to toggle (hide) the popover; an appropriate message is printed to the output `<p>` in each case.

```js live-sample___toggleevent-source
if (yesBtn.command === undefined) {
  output.textContent = "Popover control command attribute not supported.";
} else {
  popover.addEventListener("toggle", (event) => {
    if (event.source === undefined) {
      output.textContent = "ToggleEvent.source not supported.";
    } else if (event.source === yesBtn) {
      output.textContent = "Cookie set!";
    } else if (event.source === noBtn) {
      output.textContent = "No cookie set.";
    }
  });
}
```

#### Result

{{embedlivesample("toggleevent-source", "100%", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
