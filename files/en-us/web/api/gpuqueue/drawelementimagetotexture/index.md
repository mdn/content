---
title: "GPUQueue: drawElementImageToTexture() method"
short-title: drawElementImageToTexture()
slug: Web/API/GPUQueue/drawElementImageToTexture
page-type: web-api-instance-method
browser-compat: api.GPUQueue.drawElementImageToTexture
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`drawElementImageToTexture()`** method of the {{domxref("GPUQueue")}} interface draws a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element's state recorded during the current rendering update (or an {{domxref("ElementImage")}}) into a texture. Part of the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

## Syntax

```js-nolint
drawElementImageToTexture(source, destination)
```

### Parameters

- `source`
  - : An object describing the texture source. Properties can include:
    - `element`
      - : A `drawable` element reference or an {{domxref("ElementImage")}} object representing the DOM element to use in the texture.
    - `sx` {{optional_inline}}
      - : A float representing the horizontal coordinate of the top-left corner of the source `element` area to use in the texture. If omitted, defaults to `0`.
    - `sy` {{optional_inline}}
      - : A float representing the vertical coordinate of the top-left corner of the source `element` area to use in the texture. If omitted, defaults to `0`.
    - `swidth` {{optional_inline}}
      - : A float representing the width of the source `element` area to use in the texture. If omitted, defaults to the element's width.
    - `sheight` {{optional_inline}}
      - : A float representing the height of the source `element` area to use in the texture. If omitted, defaults to the element's height.
- `destination`
  - : An object describing the texture destination. Properties can include:
    - `width` {{optional_inline}}
      - : An integer representing the width of the source when included in the texture, in texels.
    - `height` {{optional_inline}}
      - : An integer representing the height of the source when included in the texture, in texels.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Typical usage

Our [WebGPU example](https://mdn.github.io/dom-examples/html-in-canvas/webgpu-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/webgpu-example)) renders an HTML form as a texture on all six sides of a rotating 3D cube. The following snippet shows the code used to create and bind a texture, and upload the latest snapshot of the `source` form element into the texture each time it is repainted.

```js
let elementTexture = null;
let bindGroup = null;
let texWidth = 0;
let texHeight = 0;

function updateElementTexture() {
  // Size in canvas-grid pixels.
  const scale = canvas.width / canvas.clientWidth;
  const w = Math.ceil(source.offsetWidth * scale);
  const h = Math.ceil(source.offsetHeight * scale);
  if (!(w > 0 && h > 0)) return false;

  if (!elementTexture || w !== texWidth || h !== texHeight) {
    elementTexture?.destroy();
    elementTexture = device.createTexture({
      size: [w, h],
      format: "rgba8unorm",
      usage:
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT,
    });
    bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: uniformBuffer } },
        { binding: 1, resource: sampler },
        { binding: 2, resource: elementTexture.createView() },
      ],
    });
    texWidth = w;
    texHeight = h;
  }

  device.queue.drawElementImageToTexture(
    { source },
    { texture: elementTexture, size: { width: w, height: h } },
  );
  return true;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.drawElementImage()")}}
- {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage()")}}
- {{domxref("WebGLRenderingContext.texElementSubImage2D()")}}
- {{domxref("HTMLCanvasElement.updateElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
