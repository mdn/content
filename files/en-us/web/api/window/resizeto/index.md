---
title: Window.resizeTo()
slug: Web/API/Window/resizeTo
tags:
  - API
  - CSSOM View
  - Method
  - Reference
  - Window
browser-compat: api.Window.resizeTo
---
{{APIRef}}

The **`Window.resizeTo()`** method dynamically resizes the
window.

## Syntax

```js
window.resizeTo(width, height)
```

### Parameters

- `width`
  - : An integer representing the new {{domxref("window.outerWidth","outerWidth")}} in
    pixels (including scroll bars, title bars, etc).
- `height`
  - : An integer value representing the new
    {{domxref("window.outerHeight","outerHeight")}} in pixels (including scroll bars,
    title bars, etc).

## Example

This function resizes the window so that it takes up one quarter of the available
screen. See the {{domxref("Screen.availWidth")}} and {{domxref("Screen.availHeight")}}
properties.

```js
function quarter() {
  window.resizeTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

Note: It's not possible to resize a window or tab that wasn’t created by
**`window.open()`**. It's also not possible to resize when the
window has multiple tabs.

## See also

- {{domxref("window.resizeBy()")}}
