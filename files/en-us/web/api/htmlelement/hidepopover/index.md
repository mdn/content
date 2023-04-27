---
title: "HTMLElement: hidePopover() method"
short-title: hidePopover()
slug: Web/API/HTMLElement/hidePopover
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HTMLElement.hidePopover
---

{{ APIRef("HTML DOM") }}{{SeeCompatTable}}

The **`HTMLElement.hidePopover()`** method opens an element that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute.

When `hidePopover()` is called on an element with the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute that is currently open, then a {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} non-cancelable event will be fired, followed by the popover closing, and a {{domxref("HTMLElement/toggle_event", "toggle")}} event will be fired. If the element is already closed, then nothing will happen.

## Syntax

```js-nolint
hidePopover()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Open a popover when moving the mouse pointer over a button:

### HTML

```html
<button onmouseover="myFunction()">Hover Menu</button>
<div id="myPopover">Popover</div>
```

### JavaScript

```js
// On mouse-over, execute myFunction
function myFunction() {
  document.getElementById("myPopover").hidePopover();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related event handlers

  - {{domxref("HTMLElement.beforetoggle_event", "HTMLElement.beforetoggle")}}
  - {{domxref("HTMLElement.toggle_event", "HTMLElement.toggle")}}

- Related methods

  - {{domxref("HTMLElement.showPopover", "HTMLElement.showPopover")}}
  - {{domxref("HTMLElement.togglePopover", "HTMLElement.togglePopover")}}
