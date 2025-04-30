---
title: GPUSampler
slug: Web/API/GPUSampler
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUSampler
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUSampler`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents an object that can control how shaders transform and filter texture resource data.

A `GPUSampler` object instance is created using the {{domxref("GPUDevice.createSampler()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUSampler.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Examples

The following snippet creates a `GPUSampler` that does trilinear filtering and repeats texture coordinates:

```js
// …
const sampler = device.createSampler({
  addressModeU: "repeat",
  addressModeV: "repeat",
  magFilter: "linear",
  minFilter: "linear",
  mipmapFilter: "linear",
});
```

The WebGPU samples [Shadow Mapping sample](https://webgpu.github.io/webgpu-samples/samples/shadowMapping/) uses comparison samplers to sample from a depth texture to render shadows.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
