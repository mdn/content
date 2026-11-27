---
title: "OffscreenCanvas: getElementImageDefaultSize() method"
short-title: getElementImageDefaultSize()
slug: Web/API/OffscreenCanvas/getElementImageDefaultSize
page-type: web-api-instance-method
browser-compat: api.OffscreenCanvas.getElementImageDefaultSize
---

{{APIRef("Canvas API")}}

The **`getElementImageDefaultSize()`** method of the {{domxref("OffscreenCanvas")}} interface returns an object containing the default size, in canvas units, of an {{domxref("ElementImage")}} when drawn with {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} (specifying no destination size).

## Syntax

```js-nolint
getElementImageDefaultSize(element)
```

### Parameters

- `element`
  - : A reference to an {{domxref("ElementImage")}}.

### Return value

An object containing the following properties:

- `height`
  - : The default height of the element image, in canvas units.
- `width`
  - : The default width of the element image, in canvas units.

> [!NOTE]
> These are live values that will change if, for example, the canvas resolution changes.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `element` has not yet been painted, meaning there is currently no rendered state to capture the size of.

## Examples

### Returning the default size of an element image

Our [Canvas 2D context offscreen canvas example](https://mdn.github.io/dom-examples/html-in-canvas//2d-context-offscreencanvas) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/2d-context-offscreencanvas)) shows how to render an element on an offscreen canvas using `drawElementImage()`. Below, we walk through the pertinent part that features `getElementImageDefaultSize()`; see {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage","drawElementImage()")}} for a full example walkthrough.

In our worker script's `message` event handler, if `data` contains an `ElementImage` of our `<form>`, we render it to the `<canvas>`. We start by getting references to the `ElementImage` and the `OffscreenCanvas`, then fill the entire canvas context with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method.

We then draw the form to the canvas using `drawElementImage()`. Because we included `preserveElementGeometry: true`, we need to call {{domxref("OffscreenCanvas.updateElementGeometry", "updateElementGeometry()")}} to update the element geometry so that it will be interactive as expected. Finally, we log the element's original size to the console, retrieved using `getElementImageDefaultSize()`, and call {{domxref("ElementImage.close()")}} to free up the memory used to store the element image now we no longer need it:

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

The `getElementImageDefaultSize()` method returns an object along the following lines:

```js
{
  "height": 149,
  "width": 230.125
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
