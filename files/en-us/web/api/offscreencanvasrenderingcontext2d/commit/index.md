---
title: "OffscreenCanvasRenderingContext2D: commit() method"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.OffscreenCanvasRenderingContext2D.commit
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

The
**`OffscreenCanvasRenderingContext2D.commit()`**
method of the [Canvas 2D API](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D) was intended to copy the rendering context's bitmap to the bitmap of the placeholder {{HtmlElement("canvas")}} element of the associated `OffscreenCanvas` object.
The copy operation is synchronous. Calling this method is not needed for the transfer, since it happens automatically during the event-loop execution.

## Syntax

```js-nolint
commit()
```

## Examples

```js
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

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvasRenderingContext2D")}}
