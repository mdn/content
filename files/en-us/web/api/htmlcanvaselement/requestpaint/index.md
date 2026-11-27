---
title: "HTMLCanvasElement: requestPaint() method"
short-title: requestPaint()
slug: Web/API/HTMLCanvasElement/requestPaint
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.requestPaint
---

{{APIRef("Canvas API")}}

The **`requestPaint()`** method of the {{domxref("HTMLCanvasElement")}} schedules a single {{domxref("HTMLCanvasElement.paint_event", "paint")}} event even if no repaints occurred, when rendering elements on a {{htmlelement("canvas")}} using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API). This can be useful for example if you want to redraw the element at a different size on the `<canvas>` without changing its rendered DOM state.

The `requestPaint()` method and the `paint` event operate similarly to {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}}, although the `requestAnimationFrame()` callback is invoked at the start of the document lifecycle, and the `paint` event is fired at the end.

## Syntax

```js-nolint
requestPaint()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Requesting a paint event to redraw an element

This example shows how to use the `requestPaint()` method to redraw an element at double its original rendered size on a `<canvas>`.

#### HTML

We include a `<canvas>` element with its `content` attribute set to `drawable`. We also include a {{htmlelement("div")}} element with the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute set, so it can be rendered onto the `<canvas>`. Finally, we include a {{htmlelement("button")}} that can be pressed to change the element's rendered size.

```html live-sample___request-paint
<button>Double render size</button>
<canvas width="640" height="200" content="drawable">
  <div drawable>Initial render status</div>
</canvas>
```

#### CSS

We include some rudimentary styles for the `<div>` element:

```css live-sample___request-paint
div {
  font-size: 1.4rem;
  border: 4px solid #576490;
  background: #d1d2f9;
  border-radius: 5px;
  padding: 10px;
}
```

```css hidden live-sample___request-paint
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

button {
  margin-bottom: 10px;
}

.no-html-in-canvas::before {
  content: "CanvasRenderingContext2D.drawElementImage() is not available. HTML-in-Canvas is not supported.";
  background-color: wheat;
  text-align: center;
  padding: 1rem 0;
  font-family: sans-serif;
  z-index: 1;
  position: fixed;
  inset: 40% 0 auto;
}
```

#### JavaScript

First, we grab references to the `<canvas>`, `<div>`, and `<button>` elements. We also define `renderWidth` and `renderHeight` variables to store the width and height to render the `<div>` element at.

```js live-sample___request-paint
const canvas = document.querySelector("canvas");
const divElem = document.querySelector("canvas div");
const btn = document.querySelector("button");
let renderWidth;
let renderHeight;
```

We define a `main()` function to handle the main rendering for the example. Inside, we first get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we define a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler. Inside the handler, we retrieve the initial rendered size of the `<div>` element using the {{domxref("HTMLCanvasElement.getElementImageDefaultSize()")}} method and set the the `renderWidth` and `renderHeight` variables to the retrieved values. We then fill the entire canvas with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method, and use `drawElementImage()` to draw the `<div>` onto the canvas, setting its width and height to `renderWidth` and `renderHeight`.

```js live-sample___request-paint
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  canvas.addEventListener("paint", () => {
    if (!renderWidth) {
      const initialSize = canvas.getElementImageDefaultSize(divElem);
      renderWidth = initialSize.width;
      renderHeight = initialSize.height;
    }

    ctx.fillStyle = "goldenrod";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(divElem, 100, 50, renderWidth, renderHeight);
  });
}
```

We set a `click` event handler on the `<button>`. Inside, we double the `renderWidth` and `renderHeight` values and call `requestPaint()` to fire the `paint` event and run its handler again, re-rendering the `<div>` element at the new size. After a delay of 2 seconds, we use the same technique to render the `<div>` back at its original size.

```js live-sample___request-paint
btn.addEventListener("click", () => {
  btn.disabled = true;
  renderWidth *= 2;
  renderHeight *= 2;
  canvas.requestPaint();

  setTimeout(() => {
    btn.disabled = false;
    renderWidth *= 0.5;
    renderHeight *= 0.5;
    canvas.requestPaint();
  }, 2000);
});
```

Finally, we run the `main()` function to start eveything off.

```js live-sample___request-paint
main();
```

#### Result

{{embedlivesample("request-paint", "100%", "250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
