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

Also in the code we include a snippet that detects whether `screenLeft` is supported, and if not, polyfills in `screenLeft`/`screenTop` using {{domxref("Window.screenX")}}/{{domxref("Window.screenY")}}.

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
