---
title: "GPUCommandEncoder: copyTextureToBuffer() method"
short-title: copyTextureToBuffer()
slug: Web/API/GPUCommandEncoder/copyTextureToBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.copyTextureToBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`copyTextureToBuffer()`** method of the
{{domxref("GPUCommandEncoder")}} interface encodes a command that copies data from a {{domxref("GPUTexture")}} to a {{domxref("GPUBuffer")}}.

## Syntax

```js-nolint
copyTextureToBuffer(source, destination, copySize)
```

### Parameters

- `source`

  - : An object defining the texture to copy the data from. Combined with `copySize`, defines the region of the source texture subresource. `source` can take the following properties:

    - `aspect` {{optional_inline}}

      - : An enumerated value defining which aspects of the texture to copy the data from. Possible values are:

        - `"all"`
          - : All available aspects of the texture format will be copied from, which can mean all or any of color, depth, and stencil, depending on what kind of format you are dealing with.
        - `"depth-only"`
          - : Only the depth aspect of a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) will be copied from.
        - `"stencil-only"`
          - : Only the stencil aspect of a depth-or-stencil format will be copied from.

        If omitted, `aspect` takes a value of `"all"`.

    - `mipLevel` {{optional_inline}}
      - : A number representing the mip-map level of the texture to copy the data from. If omitted, `mipLevel` defaults to 0.
    - `origin` {{optional_inline}}

      - : An object or array specifying the origin of the copy — the minimum corner of the texture region to copy the data from. Together with `size`, this defines the full extent of the region to copy from. The `x`, `y`, and `z` values default to 0 if any of all of `origin` is omitted.

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
      - : A {{domxref("GPUTexture")}} object representing the texture to copy the data from.

- `destination`

  - : An object that defines the buffer to write to, plus the layout of the data to write to the buffer. Combined with `copySize`, it defines the region of the destination buffer. `source` can take the following properties:
    - `buffer`
      - : The {{domxref("GPUBuffer")}} to write to.
    - `offset` {{optional_inline}}
      - : The offset, in bytes, from the beginning of `data` to the start position to write the copied data to. If omitted, `offset` defaults to 0.
    - `bytesPerRow` {{optional_inline}}
      - : A number representing the stride, in bytes, between the start of each block row (i.e. a row of complete texel blocks) and the subsequent block row. This is required if there are multiple block rows (i.e. the copy height or depth is more than one block).
    - `rowsPerImage` {{optional_inline}}
      - : The number of block rows per single image inside the data. `bytesPerRow` &times; `rowsPerImage` will give you the stride, in bytes, between the start of each complete image. This is required if there are multiple images to copy.

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

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`copyTextureToBuffer()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid.

For the `source`:

- `mipLevel` is less than the {{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` is a multiple of the texel block width of the {{domxref("GPUTexture.format")}}.
- `origin.y` is a multiple of the texel block height of the {{domxref("GPUTexture.format")}}.
- If the {{domxref("GPUTexture.format")}} is a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) or {{domxref("GPUTexture.sampleCount")}} is more than 1, the subresource size is equal to `size`.
- The `source`'s {{domxref("GPUTexture.usage")}} includes the `GPUTextureUsage.COPY_SRC` flag.
- The `source`'s {{domxref("GPUTexture.sampleCount")}} is 1.
- `source.aspect` refers to a single aspect of the {{domxref("GPUTexture.format")}}.
- That aspect is a valid image copy source according to [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- The `source` is compatible with the `copySize`.

For the `destination`:

- `destination.bytesPerRow` is a multiple of 256.
- The `destination.buffer`'s {{domxref("GPUBuffer.usage")}} includes the `GPUBufferUsage.COPY_DST` flag.

## Examples

```js
commandEncoder.copyTextureToBuffer(
  {
    texture: sourceTexture,
  },
  {
    buffer: destinationBuffer,
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
