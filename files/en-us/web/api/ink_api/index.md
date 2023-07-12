---
title: Ink API
slug: Web/API/Ink_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Ink
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

The Ink API allows browsers to directly make use of available OS-level compositors when drawing pen strokes in an inking app feature, thereby reducing latency and increasing performance.

## Concepts and usage

Inking on the web refers to app features that involve using [pointer events](/en-US/docs/Web/API/Pointer_events) to draw a smooth pen stroke — for example, a drawing app or document signing feature.

Pointers events are usually sent first to the browser process, which then forwards these events to the JavaScript event loop to execute the associated handler functions and render the result in the app. The time delay between the start and finish of this process can be significant, resulting in latency between the user initiating drawing (for example, with a stylus or mouse), and the stroke showing up on the screen.

The Ink API significantly reduces this latency by allowing browsers to bypass the JavaScript event loop entirely. Where possible, browsers will pass such rendering instructions directly to OS-level compositors. If the underlying operating system does not have a specialized OS-level compositor to use for this purpose, browsers will use their own optimized rendering code. This is not as powerful as a compositor, but it still confers some improvements.

> **Note:** Compositors are part of the rendering machinery that draws the UI to the screen in a browser or operating system. See [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) for some interesting insights into how a compositor functions inside a web browser.

The entry point is the {{domxref("Navigator.ink")}} property, which returns an {{domxref("Ink")}} object for the current document. The {{domxref("Ink.requestPresenter","Ink.requestPresenter()")}} method returns a {{jsxref("Promise")}} that fulfills with an {{domxref("InkPresenter")}} object instance. This instructs the OS-level compositor to render ink strokes between pointer event dispatches in the next available frame in each case.

## Interfaces

- {{domxref("Ink")}}
  - : Provides access to {{domxref("InkPresenter")}} objects for the application to use to render the strokes.
- {{domxref("InkPresenter")}}
  - : Instructs the OS-level compositor to render ink strokes between pointer event dispatches.

### Extensions to other interfaces

- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an {{domxref("Ink")}} object for the current document.

## Example

In this example, we draw a trail onto a 2D canvas. Near the start of the code, we call {{domxref("Ink.requestPresenter()")}}, passing it the canvas as the presentation area for it to take care of and storing the promise it returns in the `presenter` variable.

Later on, in the `pointermove` event listener, the new position of the trailhead is drawn onto the canvas each time the event fires. In addition, the {{domxref("InkPresenter")}} object returned when the `presenter` promise fulfills has its {{domxref("InkPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}} method invoked; this is passed:

- The last trusted pointer event representing the rendering point for the current frame.
- A `style` object containing color and diameter settings.

The result is that a delegated ink trail is drawn ahead of the default browser rendering on the app's behalf, in the specified style, until the next time it receives a `pointermove` event.

```js
const ctx = canvas.getContext("2d");
let presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let move_cnt = 0;
let style = { color: "rgba(0, 0, 255, 1)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", (evt) => {
  const pointSize = 10;
  ctx.fillStyle = "#000000";
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (move_cnt == 50) {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    style = { color: "rgba(" + r + ", " + g + ", " + b + ", 1)", diameter: 10 };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      "rgba(" + r + ", " + g + ", " + b + ", 1)";
  }
  move_cnt += 1;
  presenter.then(function (v) {
    v.updateInkTrailStartPoint(evt, style);
  });
});

window.addEventListener("pointerdown", (evt) => {
  evt.pointerId;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

> **Note:** See this example running live — [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
