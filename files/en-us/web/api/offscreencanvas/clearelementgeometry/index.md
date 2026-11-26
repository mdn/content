---
title: "OffscreenCanvas: clearElementGeometry() method"
short-title: clearElementGeometry()
slug: Web/API/OffscreenCanvas/clearElementGeometry
page-type: web-api-instance-method
browser-compat: api.OffscreenCanvas.clearElementGeometry
---

{{APIRef("Canvas API")}}

The **`clearElementGeometry()`** method of the {{domxref("OffscreenCanvas")}} interface clears any previous geometry applied to an {{domxref("ElementImage")}}'s underlying DOM presence.

## Syntax

```js-nolint
clearElementGeometry(element)
```

### Parameters

- `element`
  - : A reference to an {{domxref("ElementImage")}}.

### Return value

None ({{jsxref("undefined")}}).

## Description

The `clearElementGeometry()` method clears geometry applied to an `ElementImage`. This includes both geometry applied automatically by {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage","drawElementImage()")}} calls, and geometry applied manually by {{domxref("OffscreenCanvas.updateElementGeometry","updateElementGeometry()")}} calls.

Calling `clearElementGeometry()` causes the referenced element image to be un-drawn, removing its interactivity and marking it as offscreen in the accessibility tree, without actually removing it from the DOM. You could re-draw it again with a subsequent `updateElementGeometry()` call.

It doesn't un-render the element from the {{htmlelement("canvas")}} context; to do this, you'd have to redraw the canvas scene without rendering the element.

## Examples

### Clearing the geometry of an element image rendered via an offscreen canvas

In the following snippet we draw an element image to an offscreen 2D canvas context using `drawElementImage()`. We then clear the element image's geometry by calling `clearElementGeometry()` on the `OffscreenCanvas`:

```js
OffscreenCtx.drawElementImage(img, x, y);

offscreen.clearElementGeometry(img);
```

See [Canvas 2D context offscreen canvas example](https://mdn.github.io/dom-examples/html-in-canvas//2d-context-offscreencanvas) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/2d-context-offscreencanvas)) for a full offscreen canvas demo, and see {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage","drawElementImage()")}} for a full example walkthrough.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas.updateElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
