---
title: "Window: moveTo() method"
short-title: moveTo()
slug: Web/API/Window/moveTo
page-type: web-api-instance-method
browser-compat: api.Window.moveTo
---

{{APIRef}}

The **`moveTo()`** method of the {{domxref("Window")}}
interface moves the current window to the specified coordinates.

> [!NOTE]
> This function moves the window to an absolute location. In
> contrast, {{domxref("window.moveBy()")}} moves the window relative to its current
> location.

## Syntax

```js-nolint
moveTo(x, y)
```

### Parameters

- `x`
  - : The horizontal coordinate to be moved to.
- `y`
  - : The vertical coordinate to be moved to.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example moves the window to the top-left corner of the screen.

```js
function origin() {
  window.moveTo(0, 0);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

As of Firefox 7, websites can no longer move a browser window [in the following cases](https://bugzil.la/565541#c24):

1. You can't move a window or tab that wasn't created by {{domxref("Window.open()")}}.
2. You can't move a window or tab when it's in a window with more than one tab.

> [!NOTE]
> This function might not move the window synchronously.
> In some environments (like Wayland, or mobile) it might not move the window
> at all. Currently there's no way to listen to a move event, see
> [CSS Working Group issue #7693](https://github.com/w3c/csswg-drafts/issues/7693).

## See also

- {{domxref("Window.moveBy()")}}
