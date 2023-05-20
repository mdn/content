---
title: "OffscreenCanvasRenderingContext2D: commit() method"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
page-type: web-api-instance-method
browser-compat: api.OffscreenCanvasRenderingContext2D.commit
---

{{APIRef}}

The
**`OffscreenCanvasRenderingContext2D.commit()`**
method of the [Canvas 2D API](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D) copies the rendering context's bitmap to the bitmap of the placeholder {{HtmlElement("canvas")}} element of the associated `OffscreenCanvas` object.
The copy operation is synchronous. Calling this method is not needed for the transfer, since it happens automatically during the event-loop execution.

## Syntax

```js-nolint
commit()
```

## Examples

```javascript
const placeholder = document.createElement("canvas");
const offscreen = placeholder.transferControlToOffscreen();
const ctx = offscreenCanvas.getContext("2d");

// Perform some drawing using the 2d context
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 10, 10);

// Push placeholder to the canvas element
ctx.commit();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvasRenderingContext2D")}}
