---
title: WebGLRenderingContext.getContextAttributes()
slug: Web/API/WebGLRenderingContext/getContextAttributes
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.getContextAttributes
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getContextAttributes()`** method
returns a `WebGLContextAttributes` object that contains the actual context
parameters. Might return {{jsxref("null")}}, if the context is lost.

## Syntax

```js
gl.getContextAttributes();
```

### Return value

A `WebGLContextAttributes` object that contains the actual context
parameters, or {{jsxref("null")}} if the context is lost.

## Examples

Given this {{HTMLElement("canvas")}} element

```html
<canvas id="canvas"></canvas>
```

and given this WebGL context

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
gl.getContextAttributes();
```

the `getContextAttributes` method returns an object that describes the
attributes set on this context, for example:

```js
{
  alpha: true,
  antialias: true,
  depth: true,
  failIfMajorPerformanceCaveat: false,
  powerPreference: "default",
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  stencil: false,
  desynchronized: false
}
```

The context attributes can be set when creating the context using the
{{domxref("HTMLCanvasElement.getContext()")}} method:

```js
canvas.getContext('webgl',
                 { antialias: false,
                   depth: false });
```

See {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} for more information
about the individual attributes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.getContext()")}}
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
