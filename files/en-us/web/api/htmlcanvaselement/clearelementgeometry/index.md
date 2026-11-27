---
title: "HTMLCanvasElement: clearElementGeometry() method"
short-title: clearElementGeometry()
slug: Web/API/HTMLCanvasElement/clearElementGeometry
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.clearElementGeometry
---

{{APIRef("Canvas API")}}

The **`clearElementGeometry()`** method of the {{domxref("HTMLCanvasElement")}} interface clears any previous geometry applied to a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element (or {{domxref("ElementImage")}})'s underlying DOM presence.

## Syntax

```js-nolint
clearElementGeometry(element)
```

### Parameters

- `element`
  - : A reference to a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element or an {{domxref("ElementImage")}}.

### Return value

None ({{jsxref("undefined")}}).

## Description

The `clearElementGeometry()` method clears geometry applied to a `drawable` element or `ElementImage`. This includes both geometry applied automatically by {{domxref("CanvasRenderingContext2D.drawElementImage","drawElementImage()")}} calls, and geometry applied manually by {{domxref("HTMLCanvasElement.updateElementGeometry","updateElementGeometry()")}} calls.

Calling `clearElementGeometry()` causes the referenced element to be un-drawn, removing its interactivity and marking it as offscreen in the accessibility tree, without actually removing it from the DOM. You could re-draw it again with a subsequent `updateElementGeometry()` call.

It doesn't un-render the element from a {{htmlelement("canvas")}} context; to do this, you'd have to redraw the canvas scene without rendering the element.

## Examples

### Basic usage with 2D canvas rendering

In the following snippet, we add a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event listener to a `<canvas>` element. Inside, we draw an element onto a 2D canvas context using `drawElementImage()`. Because the call includes the `preserveElementGeometry: true` option, we manually update the element's geometry using `updateElementGeometry()`. Finally, we clear the element's geometry using `clearElementGeometry()`.

```js
canvas.addEventListener("paint", () => {
  ctx.drawElementImage(element, 100, 100, { preserveElementGeometry: true });
  const currentTransform = new DOMMatrix();
  currentTransform.e = 100;
  currentTransform.f = 100;
  canvas.updateElementGeometry(element, { canvasTransform: currentTransform });
  canvas.clearElementGeometry(element);
});
```

### Usage with 3D canvas rendering

For examples of `clearElementGeometry()` being used to clear the geometry of elements rendered on 3D canvases when the rendered scene isn't in an interactive state, see the following demos:

- [WebGL example](https://mdn.github.io/dom-examples/html-in-canvas/webgl-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/webgl-example))
- [WebGPU example](https://mdn.github.io/dom-examples/html-in-canvas/webgpu-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/webgpu-example))

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.updateElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
