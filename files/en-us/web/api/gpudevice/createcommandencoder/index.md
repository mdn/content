---
title: "GPUDevice: createCommandEncoder() method"
short-title: createCommandEncoder()
slug: Web/API/GPUDevice/createCommandEncoder
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createCommandEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`createCommandEncoder()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUCommandEncoder")}}, used to encode commands to be issued to the GPU.

## Syntax

```js-nolint
createCommandEncoder()
createCommandEncoder(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}
  - : An object containing the following properties:
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

### Return value

A {{domxref("GPUCommandEncoder")}} object instance.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}} created via `createCommandEncoder()`:

```js
// ...

// Create GPUCommandEncoder
const commandEncoder = device.createCommandEncoder();

// Create GPURenderPassDescriptor to tell WebGPU which texture to draw into, then initiate render pass
const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Draw a triangle
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass
passEncoder.end();

// ...
```

The commands encoded by the {{domxref("GPUCommandEncoder")}} are recoded into a {{domxref("GPUCommandBuffer")}} using the {{domxref("GPUCommandEncoder.finish()")}} method. The command buffer is then passed into the queue via a {{domxref("GPUQueue.submit", "submit()")}} call, ready to be processed by the GPU.

```js
device.queue.submit([commandEncoder.finish()]);
```

> [!NOTE]
> Study the [WebGPU samples](https://webgpu.github.io/webgpu-samples/) to find more command encoding examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
