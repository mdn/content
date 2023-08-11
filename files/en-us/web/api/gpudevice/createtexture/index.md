---
title: "GPUDevice: createTexture() method"
short-title: createTexture()
slug: Web/API/GPUDevice/createTexture
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

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
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `mipLevelCount` {{optional_inline}}
      - : A number specifying the number of mip levels the texture will contain. If omitted, this defaults to 1.
    - `sampleCount` {{optional_inline}}
      - : A number specifying the texture's sample count. To be valid, the value must be 1 or 4. If omitted, this defaults to 1. A value higher than 1 indicates a multi-sampled texture.
    - `size`

      - : An object or array specifying the width, height, and depth/array layer count of the texture. The width value must always be specified, while the height and depth/array layer count values are optional and will default to 1 if omitted.

        What follows is a sample `size` array:

        ```js
        size: [16, 16, 2];
        ```

        The object equivalent would look like this:

        ```js
        size: {
          width: 16,
          height: 16,
          depthOrArrayLayers: 2
        }
        ```

    - `usage`

      - : The {{glossary("Bitwise_flags", "bitwise flags")}} representing the allowed usages for the `GPUTexture`. The possible values are in the [`GPUTexture.usage` value table](/en-US/docs/Web/API/GPUTexture/usage#value).

        Note that multiple possible usages can be specified by separating values with pipe symbols, for example:

        ```js
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT;
        ```

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

In the WebGPU samples [Textured Cube sample](https://webgpu.github.io/webgpu-samples/samples/texturedCube), a texture to use on the faces of a cube is created by:

- Loading the image into an {{domxref("HTMLImageElement")}} and creating an image bitmap using {{domxref("createImageBitmap()")}}.
- Creating a new texture using `createTexture()`.
- Copying the image bitmap into the texture using {{domxref("GPUQueue.copyExternalImageToTexture()")}}.

```js
//...

let cubeTexture: GPUTexture; // Sample is written in TypeScript

{
  const img = document.createElement("img");
  img.src = new URL(
    "../../../assets/img/Di-3d.png",
    import.meta.url
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
    [imageBitmap.width, imageBitmap.height]
  );
}

//...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
