---
title: "GPUQueue: copyExternalImageToTexture() method"
short-title: copyExternalImageToTexture()
slug: Web/API/GPUQueue/copyExternalImageToTexture
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUQueue.copyExternalImageToTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`copyExternalImageToTexture()`** method of the
{{domxref("GPUQueue")}} interface copies a snapshot taken from a source image, video, or canvas into a given {{domxref("GPUTexture")}}.

Using this function allows the user agent to determine the most efficient way to copy the data over for each source type.

## Syntax

```js-nolint
copyExternalImageToTexture(source, destination, copySize)
```

### Parameters

- `source`

  - : An object representing the source to write to the destination, and its origin. This can take the following properties:

    - `source`
      - : An object providing the source of the snapshot to copy. This can be an {{domxref("HTMLCanvasElement")}}, {{domxref("HTMLImageElement")}}, {{domxref("HTMLVideoElement")}}, {{domxref("ImageBitmap")}}, {{domxref("ImageData")}}, {{domxref("OffscreenCanvas")}}, or {{domxref("VideoFrame")}} object. The image source data is captured at the exact moment `copyExternalImageToTexture()` is invoked.
    - `origin` {{optional_inline}}

      - : An object or array specifying the origin of the copy — the top-left corner of the source sub-region to copy from. Together with `copySize`, this defines the full extent of the source sub-region. The `x` and `y` values default to 0 if any of all of `origin` is omitted.

        What follows is a sample array:

        ```js
        origin: [0, 0];
        ```

        The object equivalent would look like this:

        ```js
        origin: {
          x: 0,
          y: 0
        }
        ```

    - `flipY` {{optional_inline}}
      - : A boolean. If set to `true`, the image capture is flipped vertically. If omitted, `flipY` defaults to `false`.

- `destination`

  - : An object defining the texture subresource and origin to write the captured image to, plus encoding metadata. This can take the following properties:

    - `aspect` {{optional_inline}}

      - : An enumerated value defining which aspects of the texture to write the image to. Possible values are:

        - `"all"`
          - : All available aspects of the texture format will be written to, which can mean all or any of color, depth, and stencil, depending on what kind of format you are dealing with.
        - `"depth-only"`
          - : Only the depth aspect of a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) will be written to.
        - `"stencil-only"`
          - : Only the stencil aspect of a depth-or-stencil format will be written to.

        If omitted, `aspect` takes a value of `"all"`.

    - `colorSpace` {{optional_inline}}

      - : An enumerated value describing the color space and encoding used to encode data into the destination texture. Possible values are `"srgb"` and `"display-p3"`. If omitted, `colorSpace` defaults to `"srgb"`.

        > [!NOTE]
        > The encoding may result in values outside of the range `[0, 1]` being written to the target texture, if its format can represent them. Otherwise, the results are clamped to the target texture format's range. Conversion may not be necessary if `colorSpace` matches the source image color space.

    - `mipLevel` {{optional_inline}}
      - : A number representing the mip-map level of the texture to write the image to. If omitted, `mipLevel` defaults to 0.
    - `origin` {{optional_inline}}

      - : An object or array specifying the origin of the copy — the minimum corner of the texture region to write the image data to. Together with `copySize`, this defines the full extent of the region to copy to. The `x`, `y`, and `z` values default to 0 if any of all of `origin` is omitted.

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

    - `premultipliedAlpha` {{optional_inline}}

      - : A boolean. If set to `true`, the image data written into the texture will have its RGB channels premultiplied by the alpha channel. If omitted, `premultipliedAlpha` defaults to `false`.

        > [!NOTE]
        > If this option is set to `true` and the `source` is also premultiplied, the source RGB values must be preserved even if they exceed their corresponding alpha values.

    - `texture`
      - : A {{domxref("GPUTexture")}} object representing the texture to write the data to.

- `copySize`

  - : An object or array specifying `width`, `height`, and `depthOrArrayLayers` — of the region to copy from/to.

    What follows is a sample array:

    ```js
    origin: [16, 1, 1];
    ```

    The object equivalent would look like this:

    ```js
    origin: {
      width: 16,
      height: 1,
      depthOrArrayLayers: 1
    }
    ```

    The `width` value has to be included. If the `height` or `depthOrArrayLayers` values are omitted, they default to 1.

### Return value

None ({{jsxref("Undefined")}}).

### Exceptions

- `OperationError` {{domxref("DOMException")}}
  - : The method throws an `OperationError` if the following criteria are not met:
    - `source.origin.x` + the width of the region to copy to is less than or equal to the width of the source image.
    - `source.origin.y` + the height of the region to copy to is less than or equal to the height of the source image.
    - `source.origin.z` + the depthOrArrayLayers of the region to copy to is less than or equal to 1.
    - `dataOffset` is equal to or smaller than the size of `data`.
    - The size of `data` (when converted to bytes, in the case of `TypedArray`s) is a multiple of 4.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the image source data is cross-origin.

### Validation

The following criteria must be met when calling **`writeTexture()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUQueue")}} becomes invalid:

- `mipLevel` is less than the destination {{domxref("GPUTexture.mipLevelCount")}}.
- `origin.x` is a multiple of the texel block width of the destination {{domxref("GPUTexture.format")}}.
- `origin.y` is a multiple of the texel block height of the destination {{domxref("GPUTexture.format")}}.
- If the destination {{domxref("GPUTexture.format")}} is a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format), the image capture size is equal to `size`.
- The destination {{domxref("GPUTexture.usage")}} includes the `GPUTextureUsage.COPY_DST` and `GPUTextureUsage.RENDER_ATTACHMENT` flags.
- The destination {{domxref("GPUTexture.dimension")}} is `"2d"`.
- The destination {{domxref("GPUTexture.sampleCount")}} is 1.
- The destination {{domxref("GPUTexture.format")}} is one of the following (which support `GPUTextureUsage.RENDER_ATTACHMENT` usage):
  - `"r8unorm"`
  - `"r16float"`
  - `"r32float"`
  - `"rg8unorm"`
  - `"rg16float"`
  - `"rg32float"`
  - `"rgba8unorm"`
  - `"rgba8unorm-srgb"`
  - `"bgra8unorm"`
  - `"bgra8unorm-srgb"`
  - `"rgb10a2unorm"`
  - `"rgba16float"`
  - `"rgba32float"`
- `destination.origin.x` + `copySize.width` is less than or equal to the `destination` {{domxref("GPUTexture")}} {{domxref("GPUTexture.width", "width")}}.
- `destination.origin.y` + `copySize.height` is less than or equal to the `destination` {{domxref("GPUTexture")}} {{domxref("GPUTexture.height", "height")}}.
- `destination.origin.z` + `copySize.depthOrArrayLayers` is less than or equal to the `destination` {{domxref("GPUTexture")}} {{domxref("GPUTexture.depthOrArrayLayers", "depthOrArrayLayers")}}.
- The `destination` {{domxref("GPUTexture.width")}} is a multiple of the texel block width of the destination {{domxref("GPUTexture.format")}}.
- The `destination` {{domxref("GPUTexture.height")}} is a multiple of the texel block height of the destination {{domxref("GPUTexture.format")}}.

## Examples

In the WebGPU Samples [Textured Cube example](https://webgpu.github.io/webgpu-samples/samples/texturedCube/), the following snippet is used to fetch an image and upload it into a {{domxref("GPUTexture")}}:

```js
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
