---
title: "Window: resizeTo() method"
short-title: resizeTo()
slug: Web/API/Window/resizeTo
page-type: web-api-instance-method
browser-compat: api.Window.resizeTo
---

{{APIRef}}

The **`Window.resizeTo()`** method dynamically resizes the
window.

## Syntax

```js-nolint
resizeTo(width, height)
```

### Parameters

- `width`
  - : An integer representing the new {{domxref("window.outerWidth","outerWidth")}} in
    pixels (including scroll bars, title bars, etc.).
- `height`
  - : An integer value representing the new
    {{domxref("window.outerHeight","outerHeight")}} in pixels (including scroll bars,
    title bars, etc.).

### Return value

None ({{jsxref("undefined")}}).

## Examples

This function resizes the window so that it takes up one quarter of the available
screen. See the {{domxref("Screen.availWidth")}} and {{domxref("Screen.availHeight")}}
properties.

```js
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

Note: It's not possible to resize a window or tab that wasn't created by
**`window.open()`**. It's also not possible to resize when the
window has multiple tabs.

> [!NOTE]
> This function might not resize the window synchronously.
> In some environments (like mobile) it might not resize the window at all. You
> can listen to the {{domxref("Window/resize_event", "resize")}} event to see
> if/when the window got resized.

## See also

- {{domxref("window.resizeBy()")}}
