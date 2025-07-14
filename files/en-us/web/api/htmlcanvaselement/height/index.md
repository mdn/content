---
title: "HTMLCanvasElement: height property"
short-title: height
slug: Web/API/HTMLCanvasElement/height
page-type: web-api-instance-property
browser-compat: api.HTMLCanvasElement.height
---

{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.height`** property is a
positive `integer` reflecting the [`height`](/en-US/docs/Web/HTML/Reference/Elements/canvas#height) HTML
attribute of the {{HTMLElement("canvas")}} element interpreted in CSS pixels. When the
attribute is not specified, or if it is set to an invalid value, like a negative, the
default value of `150` is used.

Setting the `height` property resets the entire rendering context to its default state. This includes clearing the canvas (backing buffer), resetting the current path, and resetting _all_ properties like `fillStyle` and `globalCompositeOperation`. This reset occurs for all context types, and occurs even when setting `height` to its current value. To restore the previous content after changing the height, use {{domxref("CanvasRenderingContext2D.getImageData()")}} and {{domxref("CanvasRenderingContext2D.putImageData()")}}. Context properties must be separately tracked and restored.

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
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
