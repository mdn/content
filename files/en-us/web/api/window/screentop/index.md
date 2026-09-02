---
title: "Window: screenTop property"
short-title: screenTop
slug: Web/API/Window/screenTop
page-type: web-api-instance-property
browser-compat: api.Window.screenTop
---

{{APIRef}}

The **`screenTop`** read-only property of the {{domxref("Window")}} interface returns the vertical distance, in CSS pixels, from the top border of the user's browser window to the top side of the screen.

> [!NOTE]
> `screenTop` is an alias of the older {{domxref("Window.screenY")}} property. `screenTop` was originally supported only in IE but was introduced everywhere due to popularity.

## Value

A number equal to the number of CSS pixels from the top edge of the browser window to the top edge of the screen.

## Examples

In our [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) example, you'll see a canvas onto which has been drawn a circle. In this example we are using `screenLeft`/`screenTop` plus {{domxref("Window.requestAnimationFrame()")}} to constantly redraw the circle in the same physical position on the screen, even if the window position is moved.

See {{domxref("Window.screenLeft")}} for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.screenLeft")}}
- {{domxref("window.screenY")}}
