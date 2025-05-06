---
title: GPUCommandEncoder
slug: Web/API/GPUCommandEncoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUCommandEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUCommandEncoder`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents a command encoder, used to encode commands to be issued to the GPU.

A `GPUCommandEncoder` object instance is created via the {{domxref("GPUDevice.createCommandEncoder()")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUCommandEncoder.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPUCommandEncoder.beginComputePass", "beginComputePass()")}} {{Experimental_Inline}}
  - : Starts encoding a compute pass, returning a {{domxref("GPUComputePassEncoder")}} that can be used to control computation.
- {{domxref("GPUCommandEncoder.beginRenderPass", "beginRenderPass()")}} {{Experimental_Inline}}
  - : Starts encoding a render pass, returning a {{domxref("GPURenderPassEncoder")}} that can be used to control rendering.
- {{domxref("GPUCommandEncoder.clearBuffer", "clearBuffer()")}} {{Experimental_Inline}}
  - : Encodes a command that fills a region of a {{domxref("GPUBuffer")}} with zeroes.
- {{domxref("GPUCommandEncoder.copyBufferToBuffer", "copyBufferToBuffer()")}} {{Experimental_Inline}}
  - : Encodes a command that copies data from one {{domxref("GPUBuffer")}} to another.
- {{domxref("GPUCommandEncoder.copyBufferToTexture", "copyBufferToTexture()")}} {{Experimental_Inline}}
  - : Encodes a command that copies data from a {{domxref("GPUBuffer")}} to a {{domxref("GPUTexture")}}.
- {{domxref("GPUCommandEncoder.copyTextureToBuffer", "copyTextureToBuffer()")}} {{Experimental_Inline}}
  - : Encodes a command that copies data from a {{domxref("GPUTexture")}} to a {{domxref("GPUBuffer")}}.
- {{domxref("GPUCommandEncoder.copyTextureToTexture", "copyTextureToTexture()")}} {{Experimental_Inline}}
  - : Encodes a command that copies data from one {{domxref("GPUTexture")}} to another.
- {{domxref("GPUCommandEncoder.finish", "finish()")}} {{Experimental_Inline}}

  - : Completes recording of the command sequence encoded on this `GPUCommandEncoder`, returning a corresponding {{domxref("GPUCommandBuffer")}}.

- {{domxref("GPUCommandEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Marks a specific point in a series of encoded commands with a label.
- {{domxref("GPUCommandEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Ends a debug group, which is begun with a {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}} call.
- {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}

  - : Begins a debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPUCommandEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.

- {{domxref("GPUCommandEncoder.resolveQuerySet", "resolveQuerySet()")}} {{Experimental_Inline}}
  - : Encodes a command that resolves a {{domxref("GPUQuerySet")}}, copying the results into a specified {{domxref("GPUBuffer")}}.
- {{domxref("GPUCommandEncoder.writeTimestamp", "writeTimestamp()")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Encodes a command that writes a timestamp into a {{domxref("GPUQuerySet")}} once the previous commands recorded into the same queued {{domxref("GPUCommandBuffer")}} have been executed by the GPU.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), several commands are recorded via a `GPUCommandEncoder`:

```js
// …

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

// …
```

The commands encoded by the `GPUCommandEncoder` are recoded into a {{domxref("GPUCommandBuffer")}} using the {{domxref("GPUCommandEncoder.finish()")}} method. The command buffer is then passed into the queue via a {{domxref("GPUQueue.submit", "submit()")}} call, ready to be processed by the GPU.

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
