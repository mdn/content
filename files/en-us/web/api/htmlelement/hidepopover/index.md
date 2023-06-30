---
title: "HTMLElement: hidePopover() method"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
page-type: web-api-instance-method
browser-compat: api.HTMLElement.hidePopover
---

{{ APIRef("HTML DOM") }}

The **`hidePopover()`** method of the {{domxref("HTMLElement")}} interface hides a {{domxref("Popover_API", "popover", "", "nocode")}} element (i.e. one that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute) by removing it from the {{glossary("top layer")}} and styling it with `display: none`.

When `hidePopover()` is called on a showing element with the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute, a {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} event will be fired, followed by the popover being hidden, and then the {{domxref("HTMLElement/toggle_event", "toggle")}} event firing. If the element is already hidden, an error is thrown.

## Syntax

```js-nolint
hidePopover()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the popover is already hidden.

## Examples

The following example provides functionality to hide a popover by pressing a particular key on the keyboard.

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
    popover.hidePopover();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
