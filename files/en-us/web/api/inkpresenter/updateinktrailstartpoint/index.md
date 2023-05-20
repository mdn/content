---
title: "InkPresenter: updateInkTrailStartPoint() method"
short-title: updateInkTrailStartPoint()
slug: Web/API/InkPresenter/updateInkTrailStartPoint
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.InkPresenter.updateInkTrailStartPoint
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

The **`updateInkTrailStartPoint()`** method of the {{domxref("InkPresenter")}} interface indicates which {{domxref("PointerEvent")}} was used as the last rendering point for the current frame, allowing the OS-level compositor to render a delegated ink trail ahead of the next pointer event being dispatched.

## Syntax

```js-nolint
requestPresenter(event, style)
```

### Parameters

- `event` {{optional_inline}}
  - : A {{domxref("PointerEvent")}}.
- `style`
  - : An object defining the trail style, which contains the following properties:
    - `color`
      - : A {{jsxref("String")}} containing a valid CSS color code, indicating the color the presenter will use when rendering the ink trail.
    - `diameter`
      - : A number representing the diameter the presenter will use when rendering the ink trail.

### Return value

`undefined`.

### Exceptions

- `Error` {{domxref("DOMException")}}
  - : An error is thrown and the operation is aborted if the:
    - `color` property does not contain a valid CSS color code.
    - `diameter` property is not a number or less than 1.
    - {{domxref("InkPresenter.presentationArea", "presentationArea")}} element is removed from the document before or during rendering.

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
