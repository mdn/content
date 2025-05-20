---
title: "GPUTexture: depthOrArrayLayers property"
short-title: depthOrArrayLayers
slug: Web/API/GPUTexture/depthOrArrayLayers
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUTexture.depthOrArrayLayers
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`depthOrArrayLayers`** read-only property of the
{{domxref("GPUTexture")}} interface represents the depth or layer count of the `GPUTexture`.

This is set based on the `size` property in the descriptor object passed into the originating {{domxref("GPUDevice.createTexture()")}} call.

## Value

A number. This represents:

- The depth in pixels, in the case of textures with a `"3d"` {{domxref("GPUTexture.dimension")}}.
- The number of layers, in the case of layered textures with a `"2d"` {{domxref("GPUTexture.dimension")}}.

In cases where the `GPUTexture` does not have a depth or layers, the value is 1.

## Examples

```js
// …

const test = device.createTexture({
  size: [128],
  format: "r8uint",
  dimension: "1d",
  usage: GPUTextureUsage.COPY_SRC,
});

console.log(test.depthOrArrayLayers); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
