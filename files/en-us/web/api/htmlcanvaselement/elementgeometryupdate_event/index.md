---
title: "HTMLCanvasElement: elementgeometryupdate event"
short-title: elementgeometryupdate
slug: Web/API/HTMLCanvasElement/elementgeometryupdate_event
page-type: web-api-event
browser-compat: api.HTMLCanvasElement.elementgeometryupdate_event
---

{{APIRef("Canvas API")}}

The **`elementgeometryupdate`** event of the [Canvas API](/en-US/docs/Web/API/Canvas_API) is fired when [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element geometry has been updated via an {{domxref("OffscreenCanvas")}}.

This includes when geometry has been updated automatically during a {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage()")}} call, or manually using an {{domxref("OffscreenCanvas.updateElementGeometry()")}} call.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("elementgeometryupdate", (event) => { })

onelementgeometryupdate = (event) => { }
```

## Event type

A {{domxref("ElementGeometryUpdateEvent")}}.

## Examples

### Reporting geometry updates from an offscreen canvas

Our [Canvas 2D context offscreen canvas example](https://mdn.github.io/dom-examples/html-in-canvas//2d-context-offscreencanvas) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/2d-context-offscreencanvas)) shows how to render an element on an offscreen canvas using `drawElementImage()`.

In this example, our main thread includes an `elementgeometryupdate` event handler on the `<canvas>` that logs the `drawable` elements whose geometry has been changed via the worker (the resulting array will only contain a reference to the `<form>` element), and the transform {{domxref("DOMMatrix")}} applied to it (retrieved using {{domxref("HTMLCanvasElement.getElementTransform", "getElementTransform()")}}):

```js
canvas.addEventListener("elementgeometryupdate", (e) => {
  console.log("Geometry update:", e.elements);
  console.log(canvas.getElementTransform(e.elements[0]));
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementGeometryUpdateEvent")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
