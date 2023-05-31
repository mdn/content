---
title: "GPURenderPassEncoder: draw() method"
short-title: draw()
slug: Web/API/GPURenderPassEncoder/draw
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.draw
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`draw()`** method of the
{{domxref("GPURenderPassEncoder")}} interface draws primitives based on the vertex buffers provided by {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}}.

## Syntax

```js-nolint
draw(vertexCount)
draw(vertexCount, instanceCount)
draw(vertexCount, instanceCount, firstVertex)
draw(vertexCount, instanceCount, firstVertex, firstInstance)
```

### Parameters

- `vertexCount`
  - : A number defining the number of vertices to draw.
- `instanceCount` {{optional_inline}}
  - : A number defining the number of instances to draw. If omitted, `instanceCount` defaults to 1.
- `firstVertex` {{optional_inline}}
  - : A number defining the offset into the vertex buffers, in vertices, to begin drawing from. If omitted, `firstVertex` defaults to 0.
- `firstInstance` {{optional_inline}}
  - : A number defining the first instance to draw. If omitted, `firstInstance` defaults to 0.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the `GPURenderPassEncoder` created via {{domxref("GPUCommandEncoder.beginRenderPass()")}}. `draw()` is used to specify that three vertices should be drawn to create our triangle.

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
