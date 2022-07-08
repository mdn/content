---
title: CanvasRenderingContext2D.restore()
slug: Web/API/CanvasRenderingContext2D/restore
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.restore
---
{{APIRef}}

The
**`CanvasRenderingContext2D.restore()`**
method of the Canvas 2D API restores the most recently saved canvas state by popping the
top entry in the drawing state stack. If there is no saved state, this method does
nothing.

For more information about the [drawing state](/en-US/docs/Web/API/CanvasRenderingContext2D/save#drawing_state), see {{domxref("CanvasRenderingContext2D.save()")}}.

## Syntax

```js
restore()
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
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Save the default state
ctx.save();

ctx.fillStyle = 'green';
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

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.save()")}}
