---
title: Ink API
slug: Web/API/Ink_API
page-type: web-api-overview
tags:
  - API
  - Experimental
  - Ink
  - Inking
  - Landing
  - Latency
  - Overview
browser-compat: api.Ink
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

The Ink API allows browsers to directly make use of available OS-level compositors when drawing pen stokes in an inking app feature, thereby reducing latency and increasing performance.

## Concepts and Usage

Inking on the web refers to app features that involve using [pointer events](/en-US/docs/Web/API/Pointer_events) to draw a smooth pen stroke — for example a drawing app or document signing feature.

Pointers events are usually sent first to the browser process, which then forwards these events to the JavaScript event loop to execute the associated handler functions and render the result in the app. The time delay between the start and finish of this process can be significant, resulting in latency between the user initiating drawing (e.g. with a stylus or mouse), and the stroke showing up on the screen.

The Ink API significantly reduces this latency by allowing supporting browsers to pass such rendering instructions directly to available OS-level compositors, bypassing the JavaScript event loop entirely.

The entry point is the {{domxref("Navigator.ink")}} property, which returns an {{domxref("Ink")}} object for the current document. The {{domxref("Ink.requestPresenter","Ink.requestPresenter()")}} method returns an {{domxref("InkPresenter")}} object instance that instructs the OS-level compositor to render ink strokes between pointer event dispatches, in the next available frame in each case.

> **Note:** If the underlying operating system does not have a specialized OS-level compositor to use for this purpose, all is not lost. Supporting browsers implement a polyfill that will take over behind the scenes and provide optimized rendering inside the browser. This is not as powerful as the real thing, but it still confers some improvements.

## Interfaces

- {{domxref("Ink")}}
  - : Provides access to {{domxref("InkPresenter")}} objects for the application to use to render the strokes.
- {{domxref("InkPresenter")}}
  - : Instructs the OS-level compositor to render ink strokes between pointer event dispatches.

### Extensions to the `Navigator` interface

- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an {{domxref("Ink")}} object for the current document.

## Example

```js
const ctx = canvas.getContext('2d');
let presenter = navigator.ink.requestPresenter({presentationArea: canvas});
let move_cnt = 0;
let style = { color: "rgba(0, 0, 255, 1)", diameter: 10 };

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", evt => {
  const pointSize = 10;
  ctx.fillStyle = "#000000";
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if(move_cnt == 50) {
      let r = getRandomInt(0,255);
      let g = getRandomInt(0,255);
      let b = getRandomInt(0,255);
      style = { color: "rgba("+r+", "+g+", "+b+", 1)", diameter:10};
      move_cnt = 0;
      document.getElementById('div').style.backgroundColor = "rgba("+r+", "+g+", "+b+", 1)";
  }
  move_cnt += 1;
  presenter.then(function(v) { v.updateInkTrailStartPoint(evt, style); });
});
window.addEventListener("pointerdown", evt => {
  evt.pointerId;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});
canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;
```

> **Note:** See this example running live — [Delegated ink trail](https://mabian-ms.github.io/delegated-ink-trail.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
