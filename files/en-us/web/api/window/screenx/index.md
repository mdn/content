---
title: "Window: screenX property"
short-title: screenX
slug: Web/API/Window/screenX
page-type: web-api-instance-property
browser-compat: api.Window.screenX
---

{{APIRef}}

The **`screenX`** read-only property of the {{domxref("Window")}} interface returns the horizontal distance, in CSS pixels, from the left border of the user's browser window to the left side of the screen.

> [!NOTE]
> {{domxref("Window.screenLeft")}} is an alias of the older `screenX` property. `screenLeft` was originally supported only in IE but was introduced everywhere due to popularity.

## Value

A number equal to the number of CSS pixels from the left edge of the browser window to the left edge of the screen.

## Examples

In our [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/) example, you'll see a canvas onto which has been drawn a circle. In this example we are using {{domxref("Window.screenLeft")}}/{{domxref("Window.screenTop")}} plus {{domxref("Window.requestAnimationFrame()")}} to constantly redraw the circle in the same physical position on the screen, even if the window position is moved.

This example compensates for changes in the browser window's position, but not for changes in the viewport's position within the window. Showing or hiding a toolbar or sidebar can therefore shift the circle on the screen.

```js
initialLeft = window.screenLeft + canvasElem.offsetLeft;
initialTop = window.screenTop + canvasElem.offsetTop;

function positionElem() {
  let newLeft = window.screenLeft + canvasElem.offsetLeft;
  let newTop = window.screenTop + canvasElem.offsetTop;

  let leftUpdate = initialLeft - newLeft;
  let topUpdate = initialTop - newTop;

  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgb(0 0 255)";
  ctx.beginPath();
  ctx.arc(
    leftUpdate + width / 2,
    topUpdate + height / 2 + 35,
    50,
    degToRad(0),
    degToRad(360),
    false,
  );
  ctx.fill();

  pElem.textContent = `Window.screenLeft: ${window.screenLeft}, Window.screenTop: ${window.screenTop}`;

  window.requestAnimationFrame(positionElem);
}

window.requestAnimationFrame(positionElem);
```

These work in exactly the same way as `screenX`/`screenY`.

Also in the code we include a snippet that detects whether `screenLeft` is supported, and if not, polyfills in `screenLeft`/`screenTop` using `screenX`/`screenY`.

```js
if (!window.screenLeft) {
  window.screenLeft = window.screenX;
  window.screenTop = window.screenY;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.screenLeft")}}
- {{domxref("window.screenY")}}
