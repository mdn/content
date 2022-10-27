---
title: InkPresenter.updateInkTrailStartPoint()
slug: Web/API/InkPresenter/updateInkTrailStartPoint
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Ink
  - Inking
  - Latency
  - Method
  - updateInkTrailStartPoint
browser-compat: api.InkPresenter.updateInkTrailStartPoint
---

{{APIRef("Ink API")}}{{SeeCompatTable}}

The **`updateInkTrailStartPoint()`** method of the {{domxref("InkPresenter")}} interface indicates which {{domxref("PointerEvent")}} was used as the last rendering point for the current frame, allowing the OS-level compositor to render an ink trail between that and the next point in the next animation frame.

## Syntax

```js-nolint
requestPresenter(event, style)
```

### Parameters

- `event` {{optional_inline}}
  - : A {{domxref("PointerEvent")}}.
- `style`
  - : An `InkTrailStyle` object that contains the following properties:
    - `color`
      - : A {{jsxref("String")}} containing a valid CSS color code, indicating the color the presenter will use when rendering the ink trail.
    - `diameter`
      - : A number representing the diameter the presenter will use when rendering the ink trail.

### Return value

`undefined`.

### Exceptions

- `Error`
  - : An error is thrown and the operation is aborted if the `color` property does not contain a valid CSS color code, or the `diameter` property is not a number or less than 1.
- `Error`
  - : An error is thrown and the operation is aborted if the {{domxref("InkPresenter.presentationArea", "presentationArea")}} element is removed from the document before or during rendering.

## Example

```js
window.addEventListener('pointermove', function(event) {
  // Render all of the points that have come from the queue of events.
  const points = event.getCoalescedEvents();

  points.forEach( p => {
      renderInkStroke(p.x, p.y, canvas);
  });

  // Render the ink stroke belonging to the dispatched event
  renderInkStroke(event.x, event.y, canvas);

  // Update the presenter with the last rendered point and give it a style
  presenter.updateInkTrailStartPoint(event, {
      color: "#7851A9",
      diameter: event.pressure * 4
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
