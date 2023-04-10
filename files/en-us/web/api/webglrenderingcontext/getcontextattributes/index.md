---
title: "WebGLRenderingContext: getContextAttributes() method"
short-title: getContextAttributes()
slug: Web/API/WebGLRenderingContext/getContextAttributes
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getContextAttributes
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.getContextAttributes()`** method
returns a `WebGLContextAttributes` object that contains the actual context
parameters. Might return [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), if the context is lost.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameters

None.

### Return value

A `WebGLContextAttributes` object that contains the actual context
parameters, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if the context is lost.

## Examples

Given this {{HTMLElement("canvas")}} element

```html
<canvas id="canvas"></canvas>
```

and given this WebGL context

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getContextAttributes();
```

the `getContextAttributes` method returns an object that describes the
attributes set on this context, for example:

```
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
canvas.getContext("webgl", { antialias: false, depth: false });
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
