---
title: HTMLCanvasElement.mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - Deprecated
  - HTMLCanvasElement
  - Non-standard
  - Property
  - Reference
browser-compat: api.HTMLCanvasElement.mozOpaque
---
{{APIRef("Canvas API")}}{{deprecated_header}}{{non-standard_header}}

The non-standard **`HTMLCanvasElement.mozOpaque`** property is
a boolean value reflecting the {{htmlattrxref("moz-opaque", "canvas")}} HTML
attribute of the {{HTMLElement("canvas")}} element. It lets the canvas know whether or
not translucency will be a factor. If the canvas knows there's no translucency, painting
performance can be optimized.

> **Note:** This has been standardized as setting the `alpha` option to
> `false` when creating a drawing context with
> {{domxref("HTMLCanvasElement.getContext()")}}. Use of `mozOpaque` should be
> avoided. Firefox will stop supporting it in the future.

## Value

A boolean value.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

You can get or set the `mozOpaque` property. For example, you could
conditionally set it to `true` if `mimeType === 'image/jpeg'`, or
similar, to gain performance in your application when translucency is not needed.

```js
const canvas = document.getElementById('canvas');
console.log(canvas.mozOpaque); // true
// deactivate it
canvas.mozOpaque = false;
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- The {{htmlattrxref("moz-opaque", "canvas")}} HTML attribute of the
  {{HTMLElement("canvas")}} element.
- [Optimizing your JavaScript game for Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)
