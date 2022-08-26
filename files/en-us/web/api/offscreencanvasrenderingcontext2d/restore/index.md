---
title: OffscreenCanvasRenderingContext2D.restore()
slug: Web/API/OffscreenCanvasRenderingContext2D/restore
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - OffscreenCanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.OffscreenCanvasRenderingContext2D.restore
---

{{APIRef}}

The
**`OffscreenCanvasRenderingContext2D.restore()`**
method of the Canvas 2D API restores the most recently saved canvas state by popping the
top entry in the drawing state stack. If there is no saved state, this method does
nothing.

For more information about the [drawing state](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D/save#drawing_state), see {{domxref("OffscreenCanvasRenderingContext2D.save()")}}.

## Syntax

```js
restore();
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Restoring a saved state

This example uses the `save()` method to save the default state and
`restore()` to restore it later, so that you are able to draw a rect with the
default state later.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Save the default state
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Restore the default state
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Result

{{ EmbedLiveSample('Restoring_a_saved_state', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D.save()")}}
