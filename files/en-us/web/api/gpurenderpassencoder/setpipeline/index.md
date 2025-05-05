---
title: "GPURenderPassEncoder: setPipeline() method"
short-title: setPipeline()
slug: Web/API/GPURenderPassEncoder/setPipeline
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setPipeline
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setPipeline()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets the {{domxref("GPURenderPipeline")}} to use for subsequent render pass commands.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameters

- `pipeline`
  - : The {{domxref("GPURenderPipeline")}} to use for subsequent render pass commands.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`setPipeline()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- If the {{domxref("GPURenderPipeline")}} writes to the depth component of the depth/stencil attachment, `depthReadOnly` (as specified in the descriptor of the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call) is `true`.
- If the {{domxref("GPURenderPipeline")}} writes to the stencil component of the depth/stencil attachment, `stencilReadOnly` (as specified in the descriptor of the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call) is `true`.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the `GPURenderPassEncoder` created via {{domxref("GPUCommandEncoder.beginRenderPass()")}}. `setPipeline()` is called in an appropriate place to set the render pipeline.

```js
// …

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Create GPUCommandEncoder to issue commands to the GPU
// Note: render pass descriptor, command encoder, etc. are destroyed after use, fresh one needed for each frame.
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

// Draw the triangle
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass
passEncoder.end();

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
