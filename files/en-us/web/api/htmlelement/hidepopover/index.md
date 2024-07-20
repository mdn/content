---
title: "HTMLElement: hidePopover() method"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
page-type: web-api-instance-method
browser-compat: api.HTMLElement.hidePopover
---

{{APIRef("Popover API")}}

The **`hidePopover()`** method of the {{domxref("HTMLElement")}} interface hides a [popover](/en-US/docs/Web/API/Popover_API) element (i.e. one that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute) by removing it from the {{glossary("top layer")}} and styling it with `display: none`.

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

### Hiding a popover

The following example provides functionality to hide a popover by pressing a particular key on the keyboard.

#### HTML

```html
<button popovertarget="mypopover">Toggle popover's display</button>
<div id="mypopover" popover="manual">
  You can press <kbd>h</kbd> on your keyboard to close the popover.
</div>
```

#### JavaScript

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.hidePopover();
  }
});
```

#### Result

{{EmbedLiveSample("Hiding a popover","100%",100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
