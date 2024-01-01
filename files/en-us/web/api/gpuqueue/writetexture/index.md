---
title: "GPUQueue: writeTexture() method"
short-title: writeTexture()
slug: Web/API/GPUQueue/writeTexture
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUQueue.writeTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`writeTexture()`** method of the
{{domxref("GPUQueue")}} interface writes a provided data source into a given {{domxref("GPUTexture")}}.

This is a convenience function, which provides an alternative to setting texture data via buffer mapping and buffer-to-texture copies. It lets the user agent determine the most efficient way to copy the data over.

## Syntax

```js-nolint
writeTexture(destination, data, dataLayout, size)
```

### Parameters

- `destination`

  - : An object defining the texture subresource and origin to write the data source to, which can take the following properties:

    - `aspect` {{optional_inline}}

      - : An enumerated value defining which aspects of the texture to write the data to. Possible values are:

        - `"all"`
          - : All available aspects of the texture format will be written to, which can mean all or any of color, depth, and stencil, depending on what kind of format you are dealing with.
        - `"depth-only"`
          - : Only the depth aspect of a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) will be written to.
        - `"stencil-only"`
          - : Only the stencil aspect of a depth-or-stencil format will be written to.

        If omitted, `aspect` takes a value of `"all"`.

    - `mipLevel` {{optional_inline}}
      - : A number representing the mip-map level of the texture to write the data to. If omitted, `mipLevel` defaults to 0.
    - `origin` {{optional_inline}}

      - : An object or array specifying the origin of the copy — the minimum corner of the texture region to write the data to. Together with `size`, this defines the full extent of the region to copy to. The `x`, `y`, and `z` values default to 0 if any of all of `origin` is omitted.

        What follows is a sample array:

        ```js
        origin: [0, 0, 0];
        ```

        The object equivalent would look like this:

        ```js
        origin: {
          x: 0,
          y: 0,
          z: 0
        }
        ```

    - `texture`
      - : A {{domxref("GPUTexture")}} object representing the texture to write the data to.

- `data`
  - : An object representing the data source to write into the {{domxref("GPUTexture")}}. This can be an {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}}.
- `dataLayout`
  - : An object that defines the layout of the content contained in `data`. Possible values are:
    - `offset` {{optional_inline}}
      - : The offset, in bytes, from the beginning of `data` to the start of the image data to be copied. If omitted, `offset` defaults to 0.
    - `bytesPerRow` {{optional_inline}}
      - : A number representing the stride, in bytes, between the start of each block row (i.e. a row of complete texel blocks) and the subsequent block row. This is required if there are multiple block rows (i.e. the copy height or depth is more than one block).
    - `rowsPerImage` {{optional_inline}}
      - : The number of block rows per single image of the texture. `bytesPerRow` &times; `rowsPerImage` will give you the stride, in bytes, between the start of each complete image. This is required if there are multiple images to copy.
- `size`
  - : An object or array specifying the extent of the copy — the far corner of the texture region to write the data to. Together with `destination.origin`, this defines the full extent of the region to copy to. See `destination.origin` for examples of the object/array structure.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`writeTexture()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUQueue")}} becomes invalid:

- `mipLevel` is less than the destination {{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` is a multiple of the texel block width of the destination {{domxref("GPUTexture.format")}}.
- `origin.y` is a multiple of the texel block height of the destination {{domxref("GPUTexture.format")}}.
- If the destination {{domxref("GPUTexture.format")}} is a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) or {{domxref("GPUTexture.sampleCount")}} is more than 1, the subresource size is equal to `size`.
- The destination {{domxref("GPUTexture.usage")}} includes the `GPUTextureUsage.COPY_DST` flag.
- The destination {{domxref("GPUTexture.sampleCount")}} is 1.
- `destination.origin.x` + the `destination` {{domxref("GPUTexture.width")}} is less than or equal to the width of the subresource to write to the `destination` {{domxref("GPUTexture")}}.
- `destination.origin.y` + the `destination` {{domxref("GPUTexture.height")}} is less than or equal to the height of the subresource to write to the `destination` {{domxref("GPUTexture")}}.
- `destination.origin.z` + the `destination` {{domxref("GPUTexture.depthOrArrayLayers")}} is less than or equal to the depthOrArrayLayers of the subresource to write to the `destination` {{domxref("GPUTexture")}}.
- The `destination` {{domxref("GPUTexture.width")}} is a multiple of the texel block width of the destination {{domxref("GPUTexture.format")}}.
- The `destination` {{domxref("GPUTexture.height")}} is a multiple of the texel block height of the destination {{domxref("GPUTexture.format")}}.
- `destination.aspect` refers to a single aspect of the destination {{domxref("GPUTexture.format")}}.
- That aspect is a valid image copy destination according to [depth-or-stencil formats](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- The `destination` is otherwise compatible with the {{domxref("GPUTexture.format")}}.

## Examples

In [Efficiently rendering glTF models](https://toji.github.io/webgpu-gltf-case-study/), a function is defined for creating a solid color texture:

```js
function createSolidColorTexture(r, g, b, a) {
  const data = new Uint8Array([r * 255, g * 255, b * 255, a * 255]);
  const texture = device.createTexture({
    size: { width: 1, height: 1 },
    format: "rgba8unorm",
    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
  });
  device.queue.writeTexture({ texture }, data, {}, { width: 1, height: 1 });
  return texture;
}
```

This can be used to define standard textures for use in material libraries:

```js
const opaqueWhiteTexture = createSolidColorTexture(1, 1, 1, 1);
const transparentBlackTexture = createSolidColorTexture(0, 0, 0, 0);
const defaultNormalTexture = createSolidColorTexture(0.5, 0.5, 1, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
