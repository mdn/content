---
title: "GPUDevice: createTexture() method"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`createTexture()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUTexture")}} in which to store 1D, 2D, or 3D arrays of data, such as images, to use in GPU rendering operations.

## Syntax

```js-nolint
createTexture(descriptor)
```

### Parameters

- `descriptor`

  - : An object containing the following properties:

    - `dimension` {{optional_inline}}

      - : An enumerated value indicating the dimension level of the texture. Possible values are:

        - `"1d"`: The texture is one-dimensional.
        - `"2d"`: The texture is two-dimensional or an array of two-dimensional layers.
        - `"3d"`: The texture is three-dimensional.

        `dimension` defaults to `"2d"` if the value is omitted.

    - `format`

      - : An enumerated value specifying the format of the texture. See the [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) section of the specification for all the possible values.

        > [!NOTE]
        >
        > - The `depth32float-stencil8` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to create `depth32float-stencil8`-format {{domxref("GPUTexture")}}s.
        > - The `texture-compression-bc` feature needs to be enabled to create two-dimensional BC compressed `GPUTexture`s: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm`, and `bc7-rgba-unorm-srgb` formats.
        > - The `texture-compression-astc` feature needs to be enabled to create two-dimensional ASTC compressed `GPUTexture`s: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, and `astc-12x12-unorm``astc-12x12-unorm-srgb` formats.
        > - The `texture-compression-etc2` feature needs to be enabled to create two-dimensional ETC2 compressed `GPUTexture`s: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm`, and `eac-rg11snorm` formats.

    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `mipLevelCount` {{optional_inline}}
      - : A number specifying the number of mip levels the texture will contain. If omitted, this defaults to 1.
    - `sampleCount` {{optional_inline}}
      - : A number specifying the texture's sample count. To be valid, the value must be 1 or 4. If omitted, this defaults to 1. A value higher than 1 indicates a multi-sampled texture.
    - `size`

      - : An object or array specifying the width, height, and depth/array layer count of the texture. The width value must always be specified, while the height and depth/array layer count values are optional and will default to 1 if omitted.

        For example, you can pass an array like `[16, 16, 2]`, or its equivalent object `{ width: 16, height: 16, depthOrArrayLayers: 2 }`.

    - `usage`

      - : The {{glossary("Bitwise_flags", "bitwise flags")}} representing the allowed usages for the `GPUTexture`. The possible values are in the [`GPUTexture.usage` value table](/en-US/docs/Web/API/GPUTexture/usage#value).

        Note that multiple possible usages can be specified by separating values with [bitwise OR](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR), for example: `GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT`.

        > [!NOTE]
        >
        > - The `bgra8unorm-storage` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to specify `STORAGE_BINDING` usage for a `bgra8unorm`-[`format`](#format) {{domxref("GPUTexture")}}.
        > - The `rg11b10ufloat-renderable` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to specify `RENDER_ATTACHMENT` usage for a `rg11b10ufloat`-[`format`](#format) {{domxref("GPUTexture")}}, as well as its blending and multisampling.

    - `viewFormats` {{optional_inline}}
      - : An array of enumerated values specifying other [texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) permitted when calling {{domxref("GPUTexture.createView()")}} on this texture, in addition to the texture format specified in its `format` value.

### Return value

A {{domxref("GPUTexture")}} object instance.

### Validation

The following criteria must be met when calling **`createTexture()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUTexture")}} object is returned:

- A valid `usage` is specified.
- The values specified in `size` (width, height, or depth/array layer count) are greater than 0.
- `mipLevelCount` is greater than 0.
- `sampleCount` is equal to 1 or 4.
- If `dimension` is set to `"1d"`:
  - The `size` width value is less than or equal to the {{domxref("GPUDevice")}}'s `maxTextureDimension1D` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
  - The `size` height and depth/array layer count values are equal to 1.
  - The `sampleCount` is equal to 1.
  - The `format` is not equal to a [compressed format](https://gpuweb.github.io/gpuweb/#compressed-format) or [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- If `dimension` is set to `"2d"`:
  - The `size` width and height values are less than or equal to the {{domxref("GPUDevice")}}'s `maxTextureDimension2D` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
  - The `size` depth/array layer count value is less than or equal to the {{domxref("GPUDevice")}}'s `maxTextureArrayLayers` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- If `dimension` is set to `"3d"`:
  - The `size` width, and height, and depth/array layer count values are less than or equal to the {{domxref("GPUDevice")}}'s `maxTextureDimension3D` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
  - The `sampleCount` value is equal to 1.
  - The `format` is not equal to a [compressed format](https://gpuweb.github.io/gpuweb/#compressed-format) or [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format).
- The `size` width value is a multiple of the [texel block width](https://gpuweb.github.io/gpuweb/#texel-block-width).
- The `size` height value is a multiple of the [texel block height](https://gpuweb.github.io/gpuweb/#texel-block-height).
- If `sampleCount` is greater than 1:
  - `mipLevelCount` is equal to 1.
  - The `size` depth/array layer count value is equal to 1.
  - `usage` includes the `GPUTextureUsage.RENDER_ATTACHMENT` flag.
  - `usage` does not include the `GPUTextureUsage.STORAGE_BINDING` flag.
  - The specified format supports multi-sampling.
- The `mipLevelCount` value is less than or equal to the [maximum miplevel count](https://gpuweb.github.io/gpuweb/#abstract-opdef-maximum-miplevel-count).
- The formats specified in `format` and `viewFormats` are [compatible](https://gpuweb.github.io/gpuweb/#texture-view-format-compatible) with one another.
- If `usage` includes the `GPUTextureUsage.RENDER_ATTACHMENT` flag:
  - `format` is a renderable format (meaning a color renderable format, or a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)).
  - `dimension` is set to `"2d"`.
- If `usage` includes the `GPUTextureUsage.STORAGE_BINDING` flag:
  - The specified `format` includes the `STORAGE_BINDING` capability (see the [Plain color formats](https://gpuweb.github.io/gpuweb/#plain-color-formats) table for reference).

## Examples

In the WebGPU samples [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube/), a texture to use on the faces of a cube is created by:

- Loading the image into an {{domxref("HTMLImageElement")}} and creating an image bitmap using {{domxref("Window.createImageBitmap", "createImageBitmap()")}}.
- Creating a new texture using `createTexture()`.
- Copying the image bitmap into the texture using {{domxref("GPUQueue.copyExternalImageToTexture()")}}.

```js
// …

let cubeTexture;

{
  const img = document.createElement("img");
  img.src = new URL(
    "../../../assets/img/Di-3d.png",
    import.meta.url,
  ).toString();
  await img.decode();
  const imageBitmap = await createImageBitmap(img);

  cubeTexture = device.createTexture({
    size: [imageBitmap.width, imageBitmap.height, 1],
    format: "rgba8unorm",
    usage:
      GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.RENDER_ATTACHMENT,
  });
  device.queue.copyExternalImageToTexture(
    { source: imageBitmap },
    { texture: cubeTexture },
    [imageBitmap.width, imageBitmap.height],
  );
}

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
