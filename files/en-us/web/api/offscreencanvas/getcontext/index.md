---
title: OffscreenCanvas.getContext()
slug: Web/API/OffscreenCanvas/getContext
tags:
  - API
  - Canvas
  - Experimental
  - Method
  - OffscreenCanvas
  - Reference
browser-compat: api.OffscreenCanvas.getContext
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`OffscreenCanvas.getContext()`** method returns a drawing
context for an offscreen canvas, or {{jsxref("null")}} if the context identifier is not
supported.

> **Note:** This API is currently implemented for [WebGL1](/en-US/docs/Web/API/WebGLRenderingContext) and [WebGL2](/en-US/docs/Web/API/WebGL2RenderingContext) contexts only. See
> {{bug(801176)}} for [Canvas 2D API](/en-US/docs/Web/API/Canvas_API) support
> from workers.

## Syntax

```js
offscreen.getContext(contextType, contextAttributes);
```

### Parameters

- `contextType`

  - : Is a {{domxref("DOMString")}} containing the context identifier defining the drawing
    context associated to the canvas. Possible values are:

    - **`"2d"`** creates a
      {{domxref("CanvasRenderingContext2D")}} object representing a two-dimensional
      rendering context.
    - **`"webgl"`** creates a
      {{domxref("WebGLRenderingContext")}} object representing a three-dimensional
      rendering context. This context is only available on browsers that implement [WebGL](/en-US/docs/Web/API/WebGL_API) version 1 (OpenGL ES 2.0).
    - **`"webgl2"`** creates a
      {{domxref("WebGL2RenderingContext")}} object representing a three-dimensional
      rendering context. This context is only available on browsers that implement [WebGL](/en-US/docs/Web/API/WebGL_API) version 2 (OpenGL ES 3.0).
      {{experimental_inline}}
    - **`"bitmaprenderer"`** creates a
      {{domxref("ImageBitmapRenderingContext")}} which only provides functionality to
      replace the content of the canvas with a given {{domxref("ImageBitmap")}}.

    Note: The identifiers **`"experimental-webgl"`** or
    **`"experimental-webgl2"`** are also used in implementations
    of WebGL. These implementations have not reached test suite conformance, or the
    graphic drivers situation on the platform is not yet stable. The [Khronos Group](https://www.khronos.org/) certifies WebGL implementations
    under certain [conformance
    rules](https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt).

- `contextAttributes`

  - : You can use several context attributes when creating your rendering context, for
    example:

    ```js
    offscreen.getContext("webgl",
                     { antialias: false,
                       depth: false });
    ```

    2d context attributes:

    - **`alpha`**: Boolean that indicates if the canvas
      contains an alpha channel. If set to `false`, the browser now knows
      that the backdrop is always opaque, which can speed up drawing of transparent
      content and images then.
    - {{non-standard_inline}} (Gecko only)
      **`willReadFrequently`**: Boolean that indicates whether
      or not a lot of read-back operations are planned. This will force the use of a
      software (instead of hardware accelerated) 2D canvas and can save memory when
      calling {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}
      frequently. This option is only available, if the flag
      `gfx.canvas.willReadFrequently.enable` is set to `true`
      (which, by default, is only the case for B2G/Firefox OS).
    - {{non-standard_inline}} (Blink only) **`storage`**:
      String that indicates which storage is used ("persistent" by default).

    WebGL context attributes:

    - **`alpha`**: Boolean that indicates if the canvas
      contains an alpha buffer.
    - **`depth`**: Boolean that indicates that the drawing
      buffer has a depth buffer of at least 16 bits.
    - **`stencil`**: Boolean that indicates that the drawing
      buffer has a stencil buffer of at least 8 bits.
    - **`antialias`**: Boolean that indicates whether or not
      to perform anti-aliasing.
    - **`premultipliedAlpha`**: Boolean that indicates that
      the page compositor will assume the drawing buffer contains colors with
      pre-multiplied alpha.
    - **`preserveDrawingBuffer`**: If the value is true the
      buffers will not be cleared and will preserve their values until cleared or
      overwritten by the author.
    - **`failIfMajorPerformanceCaveat`**: Boolean that
      indicates if a context will be created if the system performance is low.

### Return value

A rendering context which is either a

- {{domxref("CanvasRenderingContext2D")}} for `"2d"`,
- {{domxref("WebGLRenderingContext")}} for `"webgl"` and
  `"experimental-webgl"`,
- {{domxref("WebGL2RenderingContext")}} for `"webgl2"` and
  `"experimental-webgl2"` {{experimental_inline}}, or
- {{domxref("ImageBitmapRenderingContext")}} for `"bitmaprenderer"`.

If the `contextType` doesn't match a possible drawing context,
`null` is returned.

## Examples

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

gl; // WebGLRenderingContext
gl.canvas; // OffscreenCanvas
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvas")}}
- {{domxref("HTMLCanvasElement.getContext()")}}
- Available rendering contexts: {{domxref("CanvasRenderingContext2D")}},
  {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, and
  {{domxref("ImageBitmapRenderingContext")}}
