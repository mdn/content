---
title: GPUExternalTexture
slug: Web/API/GPUExternalTexture
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUExternalTexture
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUExternalTexture`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a wrapper object containing an {{domxref("HTMLVideoElement")}} snapshot that can be used as a texture in GPU rendering operations.

A `GPUExternalTexture` object instance is created using {{domxref("GPUDevice.importExternalTexture()")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUExternalTexture.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Examples

In the WebGPU samples [Video Uploading sample](https://webgpu.github.io/webgpu-samples/samples/videoUploading), a `GPUExternalTexture` object (created via a {{domxref("GPUDevice.importExternalTexture()")}} call) is used as the value of a bind group entry `resource`, specified when creating a {{domxref("GPUBindGroup")}} via a {{domxref("GPUDevice.createBindGroup()")}} call:

```js
//...
const uniformBindGroup = device.createBindGroup({
  layout: pipeline.getBindGroupLayout(0),
  entries: [
    {
      binding: 1,
      resource: sampler,
    },
    {
      binding: 2,
      resource: device.importExternalTexture({
        source: video,
      }),
    },
  ],
});
//...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
