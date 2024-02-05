---
title: "HTMLElement: togglePopover() method"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
page-type: web-api-instance-method
browser-compat: api.HTMLElement.togglePopover
---

{{APIRef("Popover API")}}

The **`togglePopover()`** method of the {{domxref("HTMLElement")}} interface toggles a {{domxref("Popover_API", "popover", "", "nocode")}} element (i.e. one that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute) between the hidden and showing states.

When `togglePopover()` is called on an element with the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute:

1. A {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} event is fired.
2. The popover toggles between hidden and showing:
   1. If it was initially showing, it toggles to hidden.
   2. If it was initially hidden, it toggles to showing.
3. A {{domxref("HTMLElement/toggle_event", "toggle")}} event is fired.

## Syntax

```js-nolint
togglePopover(force)
```

### Parameters

- `force`
  - : A boolean, which causes `togglePopover()` to behave like {{domxref("HTMLElement.showPopover", "showPopover()")}} or {{domxref("HTMLElement.hidePopover", "hidePopover()")}}, except that it doesn't throw an exception if the popover is already in the target state.
    - If set to `true`, the popover is shown if it was initially hidden. If it was initially shown, nothing happens.
    - If set to `false`, the popover is hidden if it was initially shown. If it was initially hidden, nothing happens.

### Return value

`true` if the popup is open after the call, and `false` otherwise.

None ({{jsxref("undefined")}}) may be returned in older browser versions (see [browser compatibility](#browser_compatibility)).

## Examples

See the [Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/) to access the full collection of MDN popover examples.

### Simple auto-popup

This is a slightly modified version of the [Toggle Help UI Popover Example](https://mdn.github.io/dom-examples/popover-api/toggle-help-ui/).
The example toggles a popover on and off by pressing a particular key on the keyboard (when the example window has focus).

The HTML for the example is shown below.
This first element defines instructions on how to invoke the popup, which we need because popups are hidden by default.

```html
<p id="instructions">
  Press "h" to toggle a help screen (select example window first).
</p>
```

We then define a `<div>` element which is the popup.
The actual content doesn't matter, but note that we need the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute to make the `<div>` into a popover so that it is hidden by default (or we could set this element in the JavaScript).

```html
<div id="mypopover" popover>
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
  </ul>
</div>
```

The JavaScript for the example is shown below.
First we check whether popovers are supported, and if they aren't we hide the popover `div` so that it isn't displayed inline.

```js
const instructions = document.getElementById("instructions");
const popover = document.getElementById("mypopover");

if (!HTMLElement.prototype.hasOwnProperty("popover")) {
  popover.innerText = "";
  instructions.innerText = "Popovers not supported";
}
```

If popovers are supported we add a listener for the `h` key to be pressed, and use that to trigger opening the popup.
We also log whether the popup was open or closed after the call, but only if a `true` or `false` was returned.

```js
if (HTMLElement.prototype.hasOwnProperty("popover")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      const popupOpened = popover.togglePopover();

      // Check if popover is opened or closed on supporting browsers
      if (popupOpened !== undefined) {
        instructions.innerText +=
          popupOpened === true ? `\nOpened` : `\nClosed`;
      }
    }
  });
}
```

You can test this out using the live example below.

{{EmbedLiveSample('Examples', 700, 290)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
