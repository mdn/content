---
title: "CanvasRenderingContext2D: getContextAttributes() method"
short-title: getContextAttributes()
slug: Web/API/CanvasRenderingContext2D/getContextAttributes
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.getContextAttributes
---

{{APIRef("WebGL")}}

The **`CanvasRenderingContext2D.getContextAttributes()`** method returns an object that contains attributes used by the context.

Note that context attributes may be requested when creating the context with [`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext), but the attributes that are actually supported and used may differ.

## Syntax

```js-nolint
getContextAttributes()
```

### Parameters

None.

### Return value

A `CanvasRenderingContext2DSettings` object that contains the actual context parameters.
It has the following members:

- `alpha` {{optional_inline}}
  - : A Boolean indicating if the canvas contains an alpha channel.
    If `false`, the backdrop is always opaque, which can speed up drawing of transparent content and images.
- `colorSpace` {{optional_inline}}
  - : Specifies the color space of the rendering context. Possible values are:
    - `srgb`: denotes the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)
    - `display-p3`: denotes the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3)
- `desynchronized` {{optional_inline}}
  - : A Boolean indicating the user agent reduced the latency by desynchronizing the canvas paint cycle from the event loop.
- `willReadFrequently` {{optional_inline}}
  - : A Boolean indicating whether or not this canvas uses software acceleration (instead of hardware acceleration) to support frequent read-back operations via {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}.

## Examples

This example shows how you can specify context attributes when creating a canvas context, and then call `getContextAttributes()` to read back the actual parameters that the browser used.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += text;
}
```

First we create a context using [`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext), specifying just one context attribute.

```js
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d", { alpha: false });
```

If the `getContextAttributes()` method is supported, we use it to read back the actual attributes used by the browser (including those we explicitly specified):

```js
if (ctx.getContextAttributes) {
  const attributes = ctx.getContextAttributes();
  log(JSON.stringify(attributes));
} else {
  log("CanvasRenderingContext2D.getContextAttributes() is not supported");
}
```

Depending on the attributes supported by the browser, the log below should display a string that looks something like: `{alpha: false, colorSpace: 'srgb', desynchronized: false, willReadFrequently: false}`

{{EmbedLiveSample('Examples','100%','50')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`HTMLCanvasElement.getContext()`](/en-US/docs/Web/API/HTMLCanvasElement/getContext)
- [`WebGLRenderingContext.getContextAttributes()`](/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes)
