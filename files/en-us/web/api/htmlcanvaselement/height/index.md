---
title: "HTMLCanvasElement: height property"
short-title: height
slug: Web/API/HTMLCanvasElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLCanvasElement.height
---

{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.height`** property is a
positive `integer` reflecting the [`height`](/en-US/docs/Web/HTML/Element/canvas#height) HTML
attribute of the {{HTMLElement("canvas")}} element interpreted in CSS pixels. When the
attribute is not specified, or if it is set to an invalid value, like a negative, the
default value of `150` is used.

When the `height` property is set the drawing buffer is always reset to blank — this is true for all context types, and even when the height is set to the same value. If you need to restore the previous content, you can save it via {{domxref("CanvasRenderingContext2D.getImageData()")}} and restore it via {{domxref("CanvasRenderingContext2D.putImageData()")}}.

This is one of the two properties, the other being
{{domxref("HTMLCanvasElement.width")}}, that controls the size of the canvas.

## Value

A number.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

You can get the height of the canvas with the following code:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement")}}: Interface used to define the `HTMLCanvasElement.height` property
- {{domxref("HTMLCanvasElement.width")}}: Other property used to control the size of the canvas
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
