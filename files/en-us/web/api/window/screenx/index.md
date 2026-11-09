---
title: "Window: screenX property"
short-title: screenX
slug: Web/API/Window/screenX
page-type: web-api-instance-property
browser-compat: api.Window.screenX
---

{{APIRef("CSSOM view API")}}

The **`screenX`** read-only property of the {{domxref("Window")}} interface returns the horizontal distance, in CSS pixels, from the left border of the user's browser window to the left side of the screen.

> [!NOTE]
> {{domxref("Window.screenLeft")}} is an alias of the older `screenX` property. `screenLeft` was originally supported only in IE but was introduced everywhere due to popularity.

## Value

A number equal to the number of CSS pixels from the left edge of the browser window to the left edge of the screen.

## Examples

In our [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) example, you'll see a canvas onto which has been drawn a circle. In this example we are using {{domxref("Window.screenLeft")}}/{{domxref("Window.screenTop")}} plus {{domxref("Window.requestAnimationFrame()")}} to constantly redraw the circle in the same physical position on the screen, even if the window position is moved.

See {{domxref("Window.screenLeft")}} for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.screenLeft")}}
- {{domxref("window.screenY")}}
