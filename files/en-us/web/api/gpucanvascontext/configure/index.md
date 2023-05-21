---
title: "GPUCanvasContext: configure() method"
short-title: configure()
slug: Web/API/GPUCanvasContext/configure
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCanvasContext.configure
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`configure()`** method of the
{{domxref("GPUCanvasContext")}} interface configures the context to use for rendering with a given {{domxref("GPUDevice")}}. When called the canvas will initially be cleared to transparent black.

## Syntax

```js-nolint
configure(configuration)
```

### Parameters

- `configuration`

  - : An object containing the following properties:

    - `alphaMode` {{optional_inline}}
      - : An enumerated value that specifies the effect that alpha values will have on the content of textures returned by {{domxref("GPUCanvasContext.getCurrentTexture()", "getCurrentTexture()")}} when read, displayed, or used as an image source. Possible values are:
        - `opaque`: Alpha values are ignored — if a texture is not already opaque, the alpha channel is cleared to 1.0 when it is used as an image source or displayed to the screen. This is the default value.
        - `premultiplied`: Color values are premultiplied by their alpha value. For example, 100% red at 50% alpha is `[0.5, 0, 0, 0.5]`.
    - `colorSpace` {{optional_inline}}
      - : The color space that values written into textures returned by `getCurrentTexture()` should be displayed with. Possible values are `srgb` (the default) and `display-p3`.
    - `device`
      - : The {{domxref("GPUDevice")}} that the rendering information for the context will come from.
    - `format`
      - : The format that textures returned by `getCurrentTexture()` will have. This can be `bgra8unorm`, `rgba8unorm`, or `rgba16float`. The optimal canvas texture format for the current system can be returned by {{domxref("GPU.getPreferredCanvasFormat()")}}. Using this is recommended — if you don't use the preferred format when configuring the canvas context, you may incur additional overhead, such as additional texture copies, depending on the platform.
    - `usage` {{optional_inline}}

      - : {{glossary("Bitwise flags")}} specifying the allowed usage for textures returned by `getCurrentTexture()`. Possible values are:

        - `GPUTextureUsage.COPY_SRC`: The texture can be used as the source of a copy operation, for example the source argument of a {{domxref("GPUCommandEncoder.copyTextureToBuffer()")}} call.
        - `GPUTextureUsage.COPY_DST`: The texture can be used as the destination of a copy/write operation, for example the destination argument of a {{domxref("GPUCommandEncoder.copyTextureToTexture()")}} call.
        - `GPUTextureUsage.RENDER_ATTACHMENT`: The texture can be used as a color attachment in a render pass, for example in a color attachment view in a {{domxref("GPUCommandEncoder.beginRenderPass()")}} call. `GPUTextureUsage.RENDER_ATTACHMENT` is the default `usage`, but note that it is not automatically included if a different value is explicitly set; in such cases you need to include it in addition.
        - `GPUTextureUsage.TEXTURE_BINDING`: The texture can be bound for use as a sampled texture in a shader, for example in a bind group entry in a {{domxref("GPUDevice.createBindGroup()")}} call.
        - `GPUTextureUsage.STORAGE_BINDING`: The texture can be bound for use as a storage texture in a shader, for example in a bind group entry in a {{domxref("GPUDevice.createBindGroup()")}} call.

        Note that multiple possible usages can be specified using the [bitwise OR operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR). For example, `usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.RENDER_ATTACHMENT`.

    - `viewFormats` {{optional_inline}}
      - : An array of formats that views created from textures returned by `getCurrentTexture()` may use. See [Texture Formats](https://gpuweb.github.io/gpuweb/#texture-formats) for all the possible values.

### Return value

None (`undefined`).

## Examples

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
