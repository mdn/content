---
title: CanvasRenderingContext2D.getContextAttributes()
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Canvas
  - CanvasRenderingContext2D
browser-compat: api.CanvasRenderingContext2D.getContextAttributes
---
{{APIRef("WebGL")}}

The **`CanvasRenderingContext2D.getContextAttributes()`**
method
returns an object that contains the actual context parameters. Context attributes can be
requested with
[`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext)
on context creation.

## Syntax

```js
getContextAttributes()
```

### Parameters

None.

### Return value

A `CanvasRenderingContext2DSettings` object that contains the actual context
parameters.
It has the following members:

- `alpha`
  - : A Boolean indicating if the canvas contains an alpha channel.
    If `false`, the backdrop is always opaque, which can speed up drawing
    of transparent content and images.
- `desynchronized`
  - : A Boolean indicating the user agent reduced the latency by desynchronizing
    the canvas paint cycle from the event loop.

## Examples

Given context attributes were provided on context creation using
[`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext)

```js
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d', {alpha: false});
```

the `getContextAttributes()` method lets you read back actual attributes
used by
the user agent:

```js
ctx.getContextAttributes();
// returns {alpha: false, desynchronized: false}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext)
- [`WebGLRenderingContext.getContextAttributes()`](/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes)
