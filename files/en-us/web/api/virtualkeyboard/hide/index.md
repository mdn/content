---
title: VirtualKeyboard.hide()
slug: Web/API/VirtualKeyboard/hide
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - VirtualKeyboard
  - hide
  - Experimental
browser-compat: api.VirtualKeyboard.hide
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

The **`hide()`** method of the {{domxref("VirtualKeyboard")}} interface programmatically hides the on-screen virtual keyboard. This is useful when the page needs to implement its own virtual keyboard logic by using the {{domxref("VirtualKeyboard_API", "VirtualKeyboard API")}}.

The method only works if the currently focused element is a form control, such as a text `input`, or if the focused element is `contenteditable`.

The `hide()` method always returns `undefined` but triggers a {{domxref("VirtualKeyboard.geometrychange_event", "geometrychange")}} event.

## Syntax

```js-nolint
hide()
```

### Parameters

None.

### Return value

Undefined.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
