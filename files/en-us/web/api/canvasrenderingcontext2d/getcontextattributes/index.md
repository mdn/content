---
title: "CanvasRenderingContext2D: getContextAttributes() method"
short-title: getContextAttributes()
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
page-type: web-api-instance-method
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

```js-nolint
getContextAttributes()
```

### Parameters

None.

### Return value

A `CanvasRenderingContext2DSettings` object that contains the actual context
parameters.
It has the following members:

- `alpha` {{optional_inline}}
  - : A Boolean indicating if the canvas contains an alpha channel.
    If `false`, the backdrop is always opaque, which can speed up drawing
    of transparent content and images.
- `colorSpace` {{optional_inline}}
  - : Specifies the color space of the rendering context. Possible values are:
    - `srgb`: denotes the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)
    - `display-p3`: denotes the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3)
- `desynchronized` {{optional_inline}}
  - : A Boolean indicating the user agent reduced the latency by desynchronizing
    the canvas paint cycle from the event loop.
- `willReadFrequently` {{optional_inline}}
  - : A Boolean indicating whether or not this canvas uses software acceleration
    (instead of hardware acceleration) to support frequent read-back operations via
    {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}.

## Examples

Given context attributes were provided on context creation using
[`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext)

```js
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d", { alpha: false });
```

the `getContextAttributes()` method lets you read back actual attributes
used by
the user agent:

```js
ctx.getContextAttributes();
// returns {alpha: false, colorSpace: 'srgb', desynchronized: false, willReadFrequently: false}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext)
- [`WebGLRenderingContext.getContextAttributes()`](/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes)
