---
title: "Window: moveBy() method"
short-title: moveBy()
slug: Web/API/Window/moveBy
page-type: web-api-instance-method
browser-compat: api.Window.moveBy
---

{{APIRef}}

The **`moveBy()`** method of the {{domxref("Window")}}
interface moves the current window by a specified amount.

> **Note:** This function moves the window relative to its current
> location. In contrast, {{domxref("window.moveTo()")}} moves the window to an absolute
> location.

## Syntax

```js-nolint
moveBy(deltaX, deltaY)
```

### Parameters

- `deltaX` is the amount of pixels to move the window horizontally.
  Positive values are to the right, while negative values are to the left.
- `deltaY` is the amount of pixels to move the window vertically. Positive
  values are down, while negative values are up.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example moves the window 10 pixels to the right and 10 pixels up.

```js
function budge() {
  moveBy(10, -10);
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

- {{domxref("Window.moveTo()")}}
