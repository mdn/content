---
title: "GPURenderPassEncoder: end() method"
short-title: end()
slug: Web/API/GPURenderPassEncoder/end
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.end
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`end()`** method of the
{{domxref("GPURenderPassEncoder")}} interface completes recording of the current render pass command sequence.

## Syntax

```js-nolint
end()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`end()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- The {{domxref("GPURenderPassEncoder")}} is open (i.e. not already ended via an `end()` call).
- There is no occlusion query (i.e. started via {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}}) active on the current render pass.
- The debug stack for the current render pass is empty (i.e. no render pass debug group is currently open, as opened by {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}}).
- The number of draw commands encoded in this render pass is less than or equal to the `maxDrawCount` property set in the {{domxref("GPUCommandEncoder.beginRenderPass()")}} descriptor.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the `GPURenderPassEncoder` created via {{domxref("GPUCommandEncoder.beginRenderPass()")}}. `end()` is called in an appropriate place to end the render pass.

```js
// ...

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

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
