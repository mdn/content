---
title: InkPresenter
slug: Web/API/InkPresenter
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Ink
  - Inking
  - InkPresenter
  - Interface
  - Landing
  - Latency
  - Overview
browser-compat: api.InkPresenter
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

The **`InkPresenter`** interface of the [Ink API](/en-US/docs/Web/API/Ink_API) provides the ability to instruct the OS-level compositor to render ink strokes between pointer event dispatches.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("InkPresenter.expectedImprovement", "expectedImprovement")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns a value, in milliseconds, indicating the perceived latency improvements that can be expected using this presenter.
- {{domxref("InkPresenter.presentationArea", "presentationArea")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Element")}} inside which rendering of ink strokes is confined.

## Instance methods

- {{domxref("InkPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}} {{Experimental_Inline}}
  - : Indicates which {{domxref("PointerEvent")}} was used as the last rendering point for the current frame, allowing the OS-level compositor to render an ink trail between that and the next point in the next animation frame.

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
