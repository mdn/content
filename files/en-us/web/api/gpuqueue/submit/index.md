---
title: "GPUQueue: submit() method"
short-title: submit()
slug: Web/API/GPUQueue/submit
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUQueue.submit
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`submit()`** method of the
{{domxref("GPUQueue")}} interface schedules the execution of command buffers represented by one or more {{domxref("GPUCommandBuffer")}} objects by the GPU.

## Syntax

```js-nolint
submit(commandBuffers)
```

### Parameters

- `commandBuffers`
  - : An array of {{domxref("GPUCommandBuffer")}} objects containing the commands to be enqueued for processing by the GPU.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`submit()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUQueue")}} becomes invalid:

- Any {{domxref("GPUBuffer")}}, {{domxref("GPUTexture")}}, and {{domxref("GPUQuerySet")}} objects used in the encoded commands are available for use, i.e. not unavailable (`GPUBuffer`s are unavailable if they are currently {{domxref("GPUBuffer.mapAsync", "mapped", "", "nocode")}}) or destroyed (with the `destroy()` method).
- Any {{domxref("GPUExternalTexture")}} objects used in the encoded commands are not expired (they expire automatically shortly after being imported via {{domxref("GPUDevice.importExternalTexture", "importExternalTexture()")}}).
- If a {{domxref("GPUQuerySet")}} object used in an encoded command is of type `"occlusion"` query, it is not already used, except by {{domxref("GPURenderPassEncoder.beginOcclusionQuery()")}}.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), a number of commands are recorded via a {{domxref("GPUCommandEncoder")}}:

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

> **Note:** Study the [WebGPU samples](https://webgpu.github.io/webgpu-samples/) to find more queue examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
