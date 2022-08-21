---
title: Window.screenLeft
slug: Web/API/Window/screenLeft
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - Property
  - Read-only
  - Reference
  - Window
  - screenLeft
browser-compat: api.Window.screenLeft
---
{{APIRef}}

The **`Window.screenLeft`** read-only property returns the
horizontal distance, in CSS pixels, from the left border of the user's browser viewport
to the left side of the screen.

> **Note:** `screenLeft` is an alias of the older
> {{domxref("Window.screenX")}} property. `screenLeft` was originally
> supported only in IE but was introduced everywhere due to popularity.

## Value

A number equal to the number of CSS pixels from the left edge of the browser viewport
to the left edge of the screen.

## Examples

In our [screenleft-screentop](https://mdn.github.io/dom-examples/screenleft-screentop/)
example, you'll see a canvas onto which has been drawn a circle. In this example we are
using `screenLeft`/`screenTop` plus
{{domxref("Window.requestAnimationFrame()")}} to constantly redraw the circle in the
same physical position on the screen, even if the window position is moved.

```js
initialLeft = window.screenLeft + canvasElem.offsetLeft;
initialTop = window.screenTop + canvasElem.offsetTop;

function positionElem() {
  let newLeft = window.screenLeft + canvasElem.offsetLeft;
  let newTop = window.screenTop + canvasElem.offsetTop;

  let leftUpdate = initialLeft - newLeft;
  let topUpdate = initialTop - newTop;

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'rgb(0, 0, 255)';
  ctx.beginPath();
  ctx.arc(leftUpdate + (width/2), topUpdate + (height/2) + 35, 50, degToRad(0), degToRad(360), false);
  ctx.fill();

  pElem.textContent = `Window.screenLeft: ${window.screenLeft}, Window.screenTop: ${window.screenTop}`;

  window.requestAnimationFrame(positionElem);
}

window.requestAnimationFrame(positionElem);
```

Also in the code we include a snippet that detects whether `screenLeft` is
supported, and if not, polyfills in `screenLeft`/`screenTop` using
{{domxref("Window.screenX")}}/{{domxref("Window.screenY")}}.

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

- {{domxref("window.screenTop")}}
- {{domxref("Window.screenX")}}
