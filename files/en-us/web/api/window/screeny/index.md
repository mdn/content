---
title: "Window: screenY property"
short-title: screenY
slug: Web/API/Window/screenY
page-type: web-api-instance-property
browser-compat: api.Window.screenY
---

{{APIRef("CSSOM view API")}}

The **`screenY`** read-only property of the {{domxref("Window")}} interface returns the vertical distance, in CSS pixels, from the top border of the user's browser window to the top side of the screen.

> [!NOTE]
> {{domxref("Window.screenTop")}} is an alias of the older `screenY` property. `screenTop` was originally supported only in IE but was introduced everywhere due to popularity.

## Value

A number equal to the number of CSS pixels from the top edge of the browser window to the top edge of the screen.

## Examples

In our [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) example, you'll see a canvas onto which has been drawn a circle. In this example we are using {{domxref("Window.screenLeft")}}/{{domxref("Window.screenTop")}} plus {{domxref("Window.requestAnimationFrame()")}} to constantly redraw the circle in the same physical position on the screen, even if the window position is moved.

See {{domxref("Window.screenLeft")}} for more information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.screenTop")}}
- {{domxref("window.screenX")}}
