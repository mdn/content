---
title: "HTMLCanvasElement: captureElementImage() method"
short-title: captureElementImage()
slug: Web/API/HTMLCanvasElement/captureElementImage
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.captureElementImage
---

{{APIRef("Canvas API")}}

The **`captureElementImage()`** method of the {{domxref("HTMLCanvasElement")}} interface captures a snapshot of a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element's current rendered state, which can be rendered later on using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

## Syntax

```js-nolint
captureElementImage(element)
```

### Parameters

- `element`
  - : A reference to the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element you wish to capture.

### Return value

An {{domxref("ElementImage")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `element` has not yet been painted, meaning there is currently no rendered state to capture.

## Examples

### Rendering the initial state of a `drawable` element

This example shows how to capture the initial rendered state of a canvas-rendered HTML element and then restore that state when wished.

#### HTML

We include a {{htmlelement("canvas")}} element with its `content` attribute set to `drawable`. We also include a {{htmlelement("div")}} element with the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute set, so it can be rendered onto the `<canvas>`. We also include two {{htmlelement("button")}} elements, one to update the `<div>`'s background color, and one to restore its initial rendered state.

```html live-sample___restore-initial-view
<p>
  <button id="update">Update box background</button>
  <button id="restore">Restore initial paint</button>
</p>
<canvas width="640" height="320" content="drawable">
  <div drawable>Initial render status</div>
</canvas>
```

#### CSS

We include some rudimentary styles for the `<div>` element:

```css live-sample___restore-initial-view
div {
  font-size: 1.4rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 4px solid #576490;
  background: #d1d2f9;
  border-radius: 5px;
  padding: 10px;
}
```

```css hidden live-sample___restore-initial-view
button {
  margin-right: 10px;
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

First, we grab references to the `<canvas>`, `<div>`, and two `<button>` elements. We also set the restore `<button>` to be initially disabled, as it won't do anything at first.

```js hidden live-sample___restore-initial-view
function randomColor() {
  const rnd1 = Math.floor(Math.random() * 256);
  const rnd2 = Math.floor(Math.random() * 256);
  const rnd3 = Math.floor(Math.random() * 256);
  return `rgb(${rnd1} ${rnd2} ${rnd3})`;
}
```

```js live-sample___restore-initial-view
const canvas = document.querySelector("canvas");
const divElem = document.querySelector("div");
const updateBtn = document.getElementById("update");
const restoreBtn = document.getElementById("restore");
restoreBtn.disabled = true;
```

Next, we set a `click` event handler on the update `<button>` so that when clicked, its {{cssxref("background-color")}} is updated and its `textContent` is changed to "Background updated". We also enable the restore `<button>` in this handler, as after the first paint update, the initial rendering will be captured and restorable (see next explanation).

```js live-sample___restore-initial-view
updateBtn.addEventListener("click", () => {
  divElem.style.backgroundColor = randomColor();
  divElem.textContent = "Background updated";
  restoreBtn.disabled = false;
});
```

We define a `main()` function to handle the main rendering for the example. Inside, we first get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we declare an `initialView` variable and define a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler. Inside the handler, we fill the entire canvas with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method. We then use `drawElementImage()` to draw the `<div>` onto the canvas. If `initialView` is undefined (only during the first paint), we set it to equal a {{domxref("ElementImage")}} snapshot of the `<div>` using `captureElementImage()`, then set an event handler on the restore `<button>` so that this view is restored when it is clicked. This involves passing `initialView` to `drawElementImage()` instead of a reference to the `<div>`.

```js live-sample___restore-initial-view
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  let initialView;

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "goldenrod";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(divElem, 100, 100);
    if (!initialView) {
      initialView = canvas.captureElementImage(divElem);
      restoreBtn.addEventListener("click", () => {
        ctx.fillStyle = "goldenrod";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawElementImage(initialView, 100, 100);
      });
    }
  });
}
```

Finally, we run the `main()` function to start eveything off.

```js live-sample___restore-initial-view
main();
```

#### Result

{{embedlivesample("restore-initial-view", "100%", "380")}}

Click the update button to change the `<div>`'s background color and enable the restore button. This will cause the `paint` event to fire, meaning that the `<div>`'s updated color will be rendered and the initial render snapshot will be captured. Pressing the restore button will restore the initial rendered state captured in the snapshot.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
