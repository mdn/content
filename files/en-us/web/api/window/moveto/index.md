---
title: Window.moveTo()
slug: Web/API/Window/moveTo
page-type: web-api-instance-method
tags:
  - API
  - CSSOM View
  - Method
  - Reference
  - Window
browser-compat: api.Window.moveTo
---
{{APIRef}}

The **`moveTo()`** method of the {{domxref("Window")}}
interface moves the current window to the specified coordinates.

> **Note:** This function moves the window to an absolute location. In
> contrast, {{domxref("window.moveBy()")}} moves the window relative to its current
> location.

## Syntax

```js
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

As of Firefox 7, websites can no longer move a browser window [in the following cases](https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24):

1. You can't move a window or tab that wasn't created by {{domxref("Window.open()")}}.
2. You can't move a window or tab when it's in a window with more than one tab.

## See also

- {{domxref("Window.moveBy()")}}
