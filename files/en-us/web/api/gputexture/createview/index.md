---
title: "GPUTexture: createView() method"
short-title: createView()
slug: Web/API/GPUTexture/createView
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUTexture.createView
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`createView()`** method of the
{{domxref("GPUTexture")}} interface creates a {{domxref("GPUTextureView")}} representing a specific view of the `GPUTexture`.

## Syntax

```js-nolint
createView()
createView(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}

  - : An object containing the following properties:

    - `arrayLayerCount` {{optional_inline}}

      - : A number defining how many array layers are accessible to the view, starting with the `baseArrayLayer` value.

        If `arrayLayerCount` is omitted, it is given a value as follows:

        - If `dimension` is `"1d"`, `"2d"`, or `"3d"`, `arrayLayerCount` is 1.
        - If `dimension` is `"cube"`, `arrayLayerCount` is 6.
        - If `dimension` is `"2d-array"`, or `"cube-array"`, `arrayLayerCount` is {{domxref("GPUTexture.depthOrArrayLayers")}} - `baseArrayLayer`.

    - `aspect` {{optional_inline}}

      - : An enumerated value specifying which aspect(s) of the texture are accessible to the texture view. Possible values are:

        - `"all"`
          - : All available aspects of the texture format will be accessible to the view, which can mean all or any of color, depth, and stencil, depending on what kind of format you are dealing with.
        - `"depth-only"`
          - : Only the depth aspect of a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format) will be accessible to the view.
        - `"stencil-only"`
          - : Only the stencil aspect of a depth-or-stencil format will be accessible to the view.

        If omitted, `aspect` takes a value of `"all"`.

    - `baseArrayLayer` {{optional_inline}}
      - : A number defining the index of the first array layer accessible to the view. If omitted, `baseArrayLayer` takes a value of 0.
    - `baseMipLevel` {{optional_inline}}
      - : A number representing the first (most detailed) mipmap level accessible to the view. If omitted, `baseMipLevel` takes a value of 0.
    - `dimension` {{optional_inline}}

      - : An enumerated value specifying the format to view the texture as. Possible values are:

        - `"1d"`: The texture is viewed as a one-dimensional image.
        - `"2d"`: The texture is viewed as a single two-dimensional image.
        - `"2d-array"`: The texture is viewed as an array of two-dimensional images.
        - `"cube"`: The texture is viewed as a cubemap. The view has 6 array layers, corresponding to the `[+X, -X, +Y, -Y, +Z, -Z]` faces of the cube. Sampling is done seamlessly across the faces of the cubemap.
        - `"cube-array"`: The texture is viewed as a packed array of N cubemaps, each with 6 array layers corresponding to the `[+X, -X, +Y, -Y, +Z, -Z]` faces of the cube. Sampling is done seamlessly across the faces of the cubemaps.
        - `"3d"`: The texture is viewed as a three-dimensional image.

        If `dimension` is omitted, it is given a value as follows:

        - If {{domxref("GPUTexture.dimension")}} is `"1d"`, `dimension` is `"1d"`.
        - If {{domxref("GPUTexture.dimension")}} is `"2d"` and {{domxref("GPUTexture.depthOrArrayLayers")}} is 1, `dimension` is `"2d"`.
        - If {{domxref("GPUTexture.dimension")}} is `"2d"` and {{domxref("GPUTexture.depthOrArrayLayers")}} is more than 1, `dimension` is `"2d-array"`.
        - If {{domxref("GPUTexture.dimension")}} is `"3d"`, `dimension` is `"3d"`.

    - `format` {{optional_inline}}

      - : An enumerated value specifying the format of the texture view. See the [Texture formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) section of the specification for all the possible values.

        If `format` is omitted, it will be given a value as follows:

        - If `aspect` is `"depth-only"` or `"stencil-only"`, and {{domxref("GPUTexture.format")}} is a [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format), `format` will be set equal to the appropriate [aspect-specific format](https://gpuweb.github.io/gpuweb/#aspect-specific-format).
        - Otherwise it will be set equal to {{domxref("GPUTexture.format")}}.

    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `mipLevelCount` {{optional_inline}}

      - : A number defining how many mipmap levels are accessible to the view, starting with the `baseMipLevel` value.

        If `mipLevelCount` is omitted, it will be given a value of {{domxref("GPUTexture.mipLevelCount")}} - `baseMipLevel`.

    - `usage` {{optional_inline}}

      - : A set of {{glossary("bitwise flags")}} representing a subset of the source texture's usage flags (available in the {{domxref("GPUTexture.usage")}} property) that are compatible with the chosen view format. This can be used to restrict the allowed view usage in cases where the view format is incompatible with certain usages. The available usage flags are listed in the [`GPUTexture.usage` value table](/en-US/docs/Web/API/GPUTexture/usage#value).

        The default value is `0`, which represents the source texture's full set of usage flags. If the view's [`format`](#format) doesn't support all of the texture's usages, the default will fail, and the view's usage must be specified explicitly.

### Return value

A {{domxref("GPUTextureView")}} object instance.

### Validation

The following criteria must be met when calling **`createView()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUTextureView")}} object is returned:

- If `aspect` is `"all"`, `format` is equal to {{domxref("GPUTexture.format")}}, or one of the `viewFormats` specified in the originating {{domxref("GPUDevice.createTexture()")}} call's descriptor object.
- If `aspect` is `"depth-only"` or `"stencil-only"`, `format` is equal to the appropriate [aspect-specific format](https://gpuweb.github.io/gpuweb/#aspect-specific-format) of the [depth-or-stencil format](https://gpuweb.github.io/gpuweb/#combined-depth-stencil-format).
- `mipLevelCount` is greater than 0.
- `mipLevelCount` + `baseMipLevel` is less than or equal to {{domxref("GPUTexture.mipLevelCount")}}.
- `arrayLayerCount` is greater than 0.
- `arrayLayerCount` + `baseArrayLayer` is less than or equal to {{domxref("GPUTexture.depthOrArrayLayers")}} if {{domxref("GPUTexture.dimension")}} is `"2d"`, or less than or equal to 1 if {{domxref("GPUTexture.dimension")}} is `"1d"` or `"3d"`.
- If `sampleCount` is greater than 1, `dimension` is `"2d"`.
- If `dimension` is:
  - `"1d"`
    - {{domxref("GPUTexture.dimension")}} is `"1d"`
    - `arrayLayerCount` is 1
  - `"2d"`
    - {{domxref("GPUTexture.dimension")}} is `"2d"`
    - `arrayLayerCount` is 1
  - `"2d-array"`
    - {{domxref("GPUTexture.dimension")}} is `"2d"`
  - `"cube"`
    - {{domxref("GPUTexture.dimension")}} is `"2d"`
    - `arrayLayerCount` is 6
    - {{domxref("GPUTexture.width")}} is equal to {{domxref("GPUTexture.height")}}
  - `"cube-array"`
    - {{domxref("GPUTexture.dimension")}} is `"2d"`
    - `arrayLayerCount` is a multiple of 6
    - {{domxref("GPUTexture.width")}} is equal to {{domxref("GPUTexture.height")}}
  - `"3d"`
    - {{domxref("GPUTexture.dimension")}} is `"3d"`
    - `arrayLayerCount` is 1
- The view's [`format`](#format) supports all of the usages specified in the [`usage`](#usage) property.

## Examples

### Typical `createView()` usage

In the WebGPU Samples [Cubemap demo](https://webgpu.github.io/webgpu-samples/samples/cubemap/), you will see multiple examples of how `createView()` is used, both as to create a view `resource` for a {{domxref("GPUDevice.createBindGroup()")}} call, and to provide a `view` in the `depthStencilAttachment` object of a {{domxref("GPUCommandEncoder.beginRenderPass()")}} descriptor.

```js
const uniformBindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 0,
      resource: {
        buffer: uniformBuffer,
        offset: 0,
        size: uniformBufferSize,
      },
    },
    {
      binding: 1,
      resource: sampler,
    },
    {
      binding: 2,
      resource: cubemapTexture.createView({
        dimension: "cube",
      }),
    },
  ],
});

const renderPassDescriptor: GPURenderPassDescriptor = {
  colorAttachments: [
    {
      view: undefined, // Assigned later
      loadOp: "clear",
      storeOp: "store",
    },
  ],
  depthStencilAttachment: {
    view: depthTexture.createView(),

    depthClearValue: 1.0,
    depthLoadOp: "clear",
    depthStoreOp: "store",
  },
};

// …

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// …
```

### `createView()` with usage restriction

In this snippet, we create a texture and then create a view that has its usage restricted via the `usage` property.

```js
const texture = myDevice.createTexture({
  size: [4, 4],
  format: "rgba8unorm",
  usage:
    GPUTextureUsage.RENDER_ATTACHMENT |
    GPUTextureUsage.TEXTURE_BINDING |
    GPUTextureUsage.STORAGE_BINDING,
  viewFormats: ["rgba8unorm-srgb"],
});

const view = texture.createView({
  format: "rgba8unorm-srgb",
  usage: GPUTextureUsage.RENDER_ATTACHMENT, // Restrict allowed usage
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
