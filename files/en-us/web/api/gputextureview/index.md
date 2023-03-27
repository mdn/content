---
title: GPUTextureView
slug: Web/API/GPUTextureView
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUTextureView
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`GPUTextureView`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a view into a subset of the texture resources defined by a particular {{domxref("GPUTexture")}}.

A `GPUTextureView` object instance is created using the {{domxref("GPUTexture.createView()")}} method.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUTextureView.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Examples

In the WebGPU Samples [Cubemap demo](https://webgpu.github.io/webgpu-samples/samples/cubemap), you will see multiple examples of how `GPUTextureView`s (created by {{domxref("GPUTexture.createView()")}} calls) are used, both as a `resource` in a {{domxref("GPUDevice.createBindGroup()")}} call, and as a provided `view` in the `depthStencilAttachment` object of a {{domxref("GPUCommandEncoder.beginRenderPass()")}} descriptor.

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

// ...

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
