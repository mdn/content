---
title: "GPUTexture: dimension property"
short-title: dimension
slug: Web/API/GPUTexture/dimension
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.dimension
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`dimension`** read-only property of the
{{domxref("GPUTexture")}} interface represents the dimension of the set of texels for each `GPUTexture` subresource.

This is set via the `dimension` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call, which defaults to `"2d"` if omitted.

## Value

An enumerated value. Possible values are:

- `"1d"`: A one-dimensional texture with a single dimension, width.
- `"2d"`: A two-dimensional texture with a width and height, which may also have layers. Only `"2d"` textures can have mipmaps, be multisampled, use a compressed or depth/stencil format, and be used as a render attachment.
- `"3d"`: A three-dimensional texture with a width, height, and depth.

## Examples

```js
// …

const depthTexture = device.createTexture({
  size: [canvas.width, canvas.height],
  format: "depth24plus",
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

console.log(depthTexture.dimension); // "2d"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
