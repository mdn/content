---
title: CanvasRenderingContext2D.measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.measureText
---
{{APIRef}}

The
`CanvasRenderingContext2D.measureText()`
method returns a {{domxref("TextMetrics")}} object that contains information about the
measured text (such as its width, for example).

## Syntax

```js
ctx.measureText(text);
```

### Parameters

- `text`
  - : The text {{jsxref("String")}} to measure.

### Return value

A {{domxref("TextMetrics")}} object.

## Example

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

... you can get a {{domxref("TextMetrics")}} object using the following code:

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let text = ctx.measureText('Hello world');
console.log(text.width);  // 56;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("TextMetrics")}}
