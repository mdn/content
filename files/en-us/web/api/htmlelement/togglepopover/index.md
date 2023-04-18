---
title: "HTMLElement: togglePopover() method"
short-title: togglePopover()
slug: Web/API/HTMLElement/togglePopover
page-type: web-api-instance-method
browser-compat: api.HTMLElement.togglePopover
---

{{ APIRef("HTML DOM") }}

The **`HTMLElement.togglePopover()`** method opens an element that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute.

When `togglePopover()` is called on an element with the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute that is currently hidden, then a {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} cancelable event will be fired, followed by the popover opening and a {{domxref("HTMLElement/toggle_event", "toggle")}} event being fired.

If the element is already open, then a {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} non-cancelable event will be fired followed by the popover closing and a {{domxref("HTMLElement/toggle_event", "toggle")}} event being fired.

## Syntax

```js-nolint
togglePopover()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related event handlers

  - {{domxref("HTMLElement.beforetoggle_event", "HTMLElement.beforetoggle")}}
  - {{domxref("HTMLElement.toggle_event", "HTMLElement.toggle")}}

- Related methods

  - {{domxref("HTMLElement.hidePopover", "HTMLElement.hidePopover")}}
  - {{domxref("HTMLElement.showPopover", "HTMLElement.showPopover")}}
