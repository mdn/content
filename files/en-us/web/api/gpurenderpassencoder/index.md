---
title: GPURenderPassEncoder
slug: Web/API/GPURenderPassEncoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPURenderPassEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPURenderPassEncoder`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} encodes commands related to controlling the vertex and fragment shader stages, as issued by a {{domxref("GPURenderPipeline")}}. It forms part of the overall encoding activity of a {{domxref("GPUCommandEncoder")}}.

A render pipeline renders graphics to {{domxref("GPUTexture")}} attachments, typically intended for display in a {{htmlelement("canvas")}} element, but it could also render to textures used for other purposes that never appear onscreen. It has two main stages:

- A vertex stage, in which a vertex shader takes positioning data fed into the GPU and uses it to position a series of vertices in 3D space by applying specified effects like rotation, translation, or perspective. The vertices are then assembled into primitives such as triangles (the basic building block of rendered graphics) and rasterized by the GPU to figure out what pixels each one should cover on the drawing canvas.

- A fragment stage, in which a fragment shader computes the color for each pixel covered by the primitives produced by the vertex shader. These computations frequently use inputs such as images (in the form of textures) that provide surface details and the position and color of virtual lights.

A `GPURenderPassEncoder` object instance is created via the {{domxref("GPUCommandEncoder.beginRenderPass()")}} property.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPURenderPassEncoder.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}} {{Experimental_Inline}}
  - : Begins an occlusion query at the specified index of the relevant {{domxref("GPUQuerySet")}} (provided as the value of the `occlusionQuerySet` descriptor property when invoking {{domxref("GPUCommandEncoder.beginRenderPass()")}} to run the render pass).
- {{domxref("GPURenderPassEncoder.draw", "draw()")}} {{Experimental_Inline}}
  - : Draw primitives based on the vertex buffers provided by {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}}.
- {{domxref("GPURenderPassEncoder.drawIndexed", "drawIndexed()")}} {{Experimental_Inline}}
  - : Draw indexed primitives based on the vertex and index buffers provided by {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} and {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}}
- {{domxref("GPURenderPassEncoder.drawIndirect", "drawIndirect()")}} {{Experimental_Inline}}
  - : Draw primitives using parameters read from a {{domxref("GPUBuffer")}}.
- {{domxref("GPURenderPassEncoder.drawIndexedIndirect", "drawIndexedIndirect()")}} {{Experimental_Inline}}

  - : Draw indexed primitives using parameters read from a {{domxref("GPUBuffer")}}.

- {{domxref("GPURenderPassEncoder.end", "end()")}} {{Experimental_Inline}}
  - : Completes recording of the current render pass command sequence.
- {{domxref("GPURenderPassEncoder.endOcclusionQuery", "endOcclusionQuery()")}} {{Experimental_Inline}}
  - : Ends an active occlusion query previously started with {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}}.
- {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} {{Experimental_Inline}}
  - : Executes commands previously recorded into the referenced {{domxref("GPURenderBundle")}}s, as part of this render pass.
- {{domxref("GPURenderPassEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Marks a specific point in a series of encoded commands with a label.
- {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Ends a debug group, which is begun with a {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}} call.
- {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}
  - : Begins a debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.
- {{domxref("GPURenderPassEncoder.setBindGroup", "setBindGroup()")}} {{Experimental_Inline}}
  - : Sets the {{domxref("GPUBindGroup")}} to use for subsequent render commands, for a given index.
- {{domxref("GPURenderPassEncoder.setBlendConstant", "setBlendConstant()")}} {{Experimental_Inline}}

  - : Sets the constant blend color and alpha values used with `"constant"` and `"one-minus-constant"` blend factors (as set in the descriptor of the {{domxref("GPUDevice.createRenderPipeline()")}} method, in the `blend` property).

- {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}} {{Experimental_Inline}}

  - : Sets the current {{domxref("GPUBuffer")}} that will provide index data for subsequent drawing commands.

- {{domxref("GPURenderPassEncoder.setPipeline", "setPipeline()")}} {{Experimental_Inline}}
  - : Sets the {{domxref("GPURenderPipeline")}} to use for this render pass.
- {{domxref("GPURenderPassEncoder.setScissorRect", "setScissorRect()")}} {{Experimental_Inline}}
  - : Sets the scissor rectangle used during the rasterization stage. After transformation into viewport coordinates any fragments that fall outside the scissor rectangle will be discarded.
- {{domxref("GPURenderPassEncoder.setStencilReference", "setStencilReference()")}} {{Experimental_Inline}}

  - : Sets the stencil reference value using during stencil tests with the `"replace"` stencil operation (as set in the descriptor of the {{domxref("GPUDevice.createRenderPipeline()")}} method, in the properties defining the various stencil operations).

- {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} {{Experimental_Inline}}
  - : Sets or unsets the current {{domxref("GPUBuffer")}} that will provide vertex data for subsequent drawing commands.
- {{domxref("GPURenderPassEncoder.setViewport", "setViewport()")}} {{Experimental_Inline}}
  - : Sets the viewport used during the rasterization stage to linearly map from normalized device coordinates to viewport coordinates.

## Examples

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the `GPURenderPassEncoder` created via {{domxref("GPUCommandEncoder.beginRenderPass()")}}.

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
