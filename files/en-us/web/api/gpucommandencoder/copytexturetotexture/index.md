---
title: "GPUCommandEncoder: copyTextureToTexture() method"
short-title: copyTextureToTexture()
slug: Web/API/GPUCommandEncoder/copyTextureToTexture
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.copyTextureToTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`copyTextureToTexture()`** method of the
{{domxref("GPUCommandEncoder")}} interface encodes a command that copies data from one {{domxref("GPUTexture")}} to another.

## Syntax

```js-nolint
copyTextureToTexture(source, destination, copySize)
```

### Parameters

- `source`
  - : An object (see [Copy texture object structure](#copy_texture_object_structure)) defining the texture to copy the data from. Combined with `copySize`, this defines the region of the source texture subresource.
- `destination`
  - : An object (see [Copy texture object structure](#copy_texture_object_structure)) defining the texture to write the data to. Combined with `copySize`, this defines the region of the destination texture subresource.
- `copySize`

  - : An object or array specifying the width, height, and depth/array layer count of the copied data. The width value must always be specified, while the height and depth/array layer count values are optional and will default to 1 if omitted.

    What follows is a sample `copySize` array:

    ```js
    [16, 16, 2];
    ```

    The object equivalent would look like this:

    ```js
    {
      width: 16,
      height: 16,
      depthOrArrayLayers: 2
    }
    ```

### Copy texture object structure

A copy texture object has the following structure:

- `aspect` {{optional_inline}}

  - : An enumerated value defining which aspects of the texture to copy the data from/to. Possible values are:

    - `"all"`
      - : All available aspects of the texture format will be copied from/to, which can mean all or any of color, depth, and stencil, depending on what kind of format you are dealing with.
    - `"depth-only"`
      - : Only the depth aspect of a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) will be copied from/to.
    - `"stencil-only"`
      - : Only the stencil aspect of a depth-or-stencil format will be copied from/to.

    If omitted, `aspect` takes a value of `"all"`.

- `mipLevel` {{optional_inline}}
  - : A number representing the mip-map level of the texture to copy the data from/to. If omitted, `mipLevel` defaults to 0.
- `origin` {{optional_inline}}

  - : An object or array specifying the origin of the copy/destination — the minimum corner of the texture region to copy the data from/to. Together with `size`, this defines the full extent of the region to copy from/to. The `x`, `y`, and `z` values default to 0 if any of all of `origin` is omitted.

    What follows is a sample array:

    ```js
    [0, 0, 0];
    ```

    The object equivalent would look like this:

    ```js
    {
      x: 0,
      y: 0,
      z: 0
    }
    ```

- `texture`
  - : A {{domxref("GPUTexture")}} object representing the texture to copy the data from/to.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`copyTextureToTexture()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid.

For the `source`:

- The `source`'s {{domxref("GPUTexture.usage")}} includes the `GPUTextureUsage.COPY_SRC` flag.

For the `destination`:

- The `source`'s {{domxref("GPUTexture.usage")}} includes the `GPUTextureUsage.COPY_DST` flag.

For `source` and `destination`:

- `mipLevel` is less than the {{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` is a multiple of the texel block width of the {{domxref("GPUTexture.format")}}.
- `origin.y` is a multiple of the texel block height of the {{domxref("GPUTexture.format")}}.
- The source and destination `texture` {{domxref("GPUTexture.format")}}s are copy-compatible.
- The source and destination `texture` {{domxref("GPUTexture.sampleCount")}}s are equal.
- If the {{domxref("GPUTexture.format")}} is a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) or {{domxref("GPUTexture.sampleCount")}} is more than 1, the subresource size is equal to `size`.
- The `texture`'s {{domxref("GPUTexture.sampleCount")}} is 1.
- `aspect` refers to a single aspect of the {{domxref("GPUTexture.format")}}.
- That aspect is a valid image copy source/destination according to [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- The `texture` is compatible with the `copySize`.

## Examples

```js
commandEncoder.copyTextureToTexture(
  {
    texture: sourceTexture,
  },
  {
    texture: destinationTexture,
  },
  {
    width: 16,
    height: 16,
    depthOrArrayLayers: 2,
  },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
