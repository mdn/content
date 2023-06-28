---
title: "HTMLElement: togglePopover() method"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
page-type: web-api-instance-method
browser-compat: api.HTMLElement.togglePopover
---

{{ APIRef("HTML DOM") }}

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

None ({{jsxref("undefined")}}).

## Examples

The following example provides functionality to toggle a popover on and off by pressing a particular key on the keyboard.

First, some HTML:

```html
<div id="mypopover">
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
    <hr />
    <li>Say "Service" to summon the robot waiter to take your order</li>
    <li>Say "Escape" to engage the ejector seat</li>
  </ul>
</div>
```

And now the JavaScript to wire up the functionality:

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.togglePopover();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
