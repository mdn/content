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

> **Note:** This function moves the window to an absolute location. In
> contrast, {{domxref("window.moveBy()")}} moves the window relative to its current
> location.

> **Note:** On devices with multiple displays, `moveTo()` should position windows relative to the [multi-screen origin](/en-US/docs/Web/API/Window_Management_API#multi-screen_origin). This is true in Chromium-based browsers, while Firefox does it inconsistently, sometimes exhibiting unusual behavior. Safari on the other hand moves it relative to the _current_ screen.

## Syntax

```js-nolint
moveTo(x, y)
```

### Parameters

- `x` is the horizontal coordinate to be moved to.
- `y` is the vertical coordinate to be moved to.

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

## See also

- {{domxref("Window.moveBy()")}}
