---
title: "OffscreenCanvas: updateElementGeometry() method"
short-title: updateElementGeometry()
slug: Web/API/OffscreenCanvas/updateElementGeometry
page-type: web-api-instance-method
browser-compat: api.OffscreenCanvas.updateElementGeometry
---

{{APIRef("Canvas API")}}

The **`updateElementGeometry()`** method of the {{domxref("OffscreenCanvas")}} interface updates the geometry applied to an {{domxref("ElementImage")}}'s underlying DOM presence.

> [!NOTE]
> See the {{domxref("HTMLCanvasElement.updateElementGeometry()")}} page for detailed descriptions of what all the method options do plus examples.

## Syntax

```js-nolint
updateElementGeometry(element)
updateElementGeometry(element, options)
```

### Parameters

- `element`
  - : A reference to the {{domxref("ElementImage")}} whose geometry you wish to update.
- `options` {{optional_inline}}
  - : An options object, the properties of which can include:
    - `preserveHitTestOrder` {{optional_inline}}
      - : A boolean value that controls whether the `element`'s underlying DOM presence is brought to the top of the hit test stack (`false`), or whether it will remain in the same position in the hit test stack (`true`). Defaults to `false`.
    - `canvasClip` {{optional_inline}}
      - : A {{domxref("DOMRect")}} that sets the area of the `element` that can receive pointer events. This is useful when you only render a portion of an element image on the canvas and want to limit hit testing to the rendered portion. Defaults to `undefined`. The rect is in the element's own coordinate space.
    - `canvasTransform` {{optional_inline}}
      - : A {{domxref("DOMMatrix")}} that updates the size, shape, and position of the `element`'s underlying DOM presence so that it can be kept in sync with its canvas rendering position in terms of hit-testing area. Defaults to `undefined`. The matrix units are specified in CSS pixels.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `element` has not yet been painted, meaning there is currently no rendered state to update the geometry of.

## Examples

### Updating the geometry of an element rendered via an offscreen canvas

Our [Canvas 2D context offscreen canvas example](https://mdn.github.io/dom-examples/html-in-canvas//2d-context-offscreencanvas) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/2d-context-offscreencanvas)) shows how to render an element on an offscreen canvas using `drawElementImage()`. Below, we walk through the pertinent part that features `updateElementGeometry()`; see {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage","drawElementImage()")}} for a full example walkthrough.

In our worker script's `message` event handler, if `data` contains an `ElementImage` of our `<form>`, we render it to the `<canvas>`. We start by getting references to the `ElementImage` and the `OffscreenCanvas`, then fill the entire canvas context with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method.

We then draw the form to the canvas using `drawElementImage()`. Because we included `preserveElementGeometry: true`, we need to call `updateElementGeometry()` to update the element geometry so that it will be interactive as expected. Finally, we log the element's original size to the console, retrieved using {{domxref("OffscreenCanvas.getElementImageDefaultSize", "getElementImageDefaultSize()")}}, and call {{domxref("ElementImage.close()")}} to free up the memory used to store the element image now we no longer need it:

```js-nolint
  if (data.formImage) {
    const img = data.formImage;
    const offscreen = ctx.canvas;

    ctx.fillStyle = "#7D82B8";
    ctx.fillRect(0, 0, offscreen.width, offscreen.height);

    ctx.drawElementImage(img, x, y, {
      preserveElementGeometry: true,
    });

    offscreen.updateElementGeometry(img, {
      canvasTransform: new DOMMatrix().translate(x, y),
    });

    console.log(offscreen.getElementImageDefaultSize(img));

    img.close();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas.clearElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
