---
title: GPURenderBundleEncoder
slug: Web/API/GPURenderBundleEncoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPURenderBundleEncoder`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} is used to pre-record bundles of commands.

The command bundles are encoded by calling the methods of `GPURenderBundleEncoder`; once the desired commands have been encoded, they are recorded into a {{domxref("GPURenderBundle")}} object instance using the {{domxref("GPURenderBundleEncoder.finish()")}} method. These render bundles can then be reused across multiple render passes by passing the `GPURenderBundle` objects into {{domxref("GPURenderPassEncoder.executeBundles()")}} calls.

In effect, this is like a partial render pass — `GPURenderBundleEncoder`s have all the same functionality available as {{domxref("GPURenderPassEncoder")}}s, except that they can't begin and end occlusion queries, and can't set the scissor rect, viewport, blend constant, and stencil reference. The `GPURenderBundle` will inherit all these values from the {{domxref("GPURenderPassEncoder")}} that executes it.

> [!NOTE]
> Currently set vertex buffers, index buffers, bind groups, and pipeline are all cleared prior to executing a render bundle, and once the render bundle has finished executing.

Reusing pre-recoded commands can significantly improve app performance in situations where JavaScript draw call overhead is a bottleneck. Render bundles are most effective in situations where a batch of objects will be drawn the same way across multiple views or frames, with the only differences being the buffer content being used (such as updated matrix uniforms). A good example is VR rendering. Recording the rendering as a render bundle and then tweaking the view matrix and replaying it for each eye is a more efficient way to issue draw calls for both renderings of the scene.

A `GPURenderBundleEncoder` object instance is created via the {{domxref("GPUDevice.createRenderBundleEncoder()")}} property.

> [!NOTE]
> The methods of `GPURenderBundleEncoder` are functionally identical to their equivalents available on {{domxref("GPURenderPassEncoder")}}, except for {{domxref("GPURenderBundleEncoder.finish()")}}, which is similar in purpose to {{domxref("GPUCommandEncoder.finish()")}}.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPURenderBundleEncoder.label", "label")}} {{Experimental_Inline}}
  - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

## Instance methods

- {{domxref("GPURenderBundleEncoder.draw", "draw()")}} {{Experimental_Inline}}
  - : Draw primitives based on the vertex buffers provided by {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}}.
- {{domxref("GPURenderBundleEncoder.drawIndexed", "drawIndexed()")}} {{Experimental_Inline}}
  - : Draw indexed primitives based on the vertex and index buffers provided by {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} and {{domxref("GPURenderBundleEncoder.setIndexBuffer", "setIndexBuffer()")}}
- {{domxref("GPURenderBundleEncoder.drawIndirect", "drawIndirect()")}} {{Experimental_Inline}}
  - : Draw primitives using parameters read from a {{domxref("GPUBuffer")}}.
- {{domxref("GPURenderBundleEncoder.drawIndexedIndirect", "drawIndexedIndirect()")}} {{Experimental_Inline}}

  - : Draw indexed primitives using parameters read from a {{domxref("GPUBuffer")}}.

- {{domxref("GPURenderBundleEncoder.finish", "finish()")}} {{Experimental_Inline}}

  - : Completes recording of the current render pass command sequence.

- {{domxref("GPURenderBundleEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Marks a specific point in a series of encoded commands with a label.
- {{domxref("GPURenderBundleEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Ends a debug group, which is begun with a {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}} call.
- {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}
  - : Begins a debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPURenderBundleEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.
- {{domxref("GPURenderBundleEncoder.setBindGroup", "setBindGroup()")}} {{Experimental_Inline}}

  - : Sets the {{domxref("GPUBindGroup")}} to use for subsequent render bundle commands, for a given index.

- {{domxref("GPURenderBundleEncoder.setIndexBuffer", "setIndexBuffer()")}} {{Experimental_Inline}}

  - : Sets the current {{domxref("GPUBuffer")}} that will provide index data for subsequent drawing commands.

- {{domxref("GPURenderBundleEncoder.setPipeline", "setPipeline()")}} {{Experimental_Inline}}

  - : Sets the {{domxref("GPURenderPipeline")}} to use for this render bundle.

- {{domxref("GPURenderBundleEncoder.setVertexBuffer", "setVertexBuffer()")}} {{Experimental_Inline}}
  - : Sets or unsets the current {{domxref("GPUBuffer")}} that will provide vertex data for subsequent drawing commands.

## Examples

In the WebGPU Samples [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/), a lot of like operations are done on many different objects simultaneously. A bundle of commands is encoded using the following function:

```js
function recordRenderPass(
  passEncoder: GPURenderBundleEncoder | GPURenderPassEncoder
) {
  if (settings.dynamicOffsets) {
    passEncoder.setPipeline(dynamicPipeline);
  } else {
    passEncoder.setPipeline(pipeline);
  }
  passEncoder.setVertexBuffer(0, vertexBuffer);
  passEncoder.setBindGroup(0, timeBindGroup);
  const dynamicOffsets = [0];
  for (let i = 0; i < numTriangles; ++i) {
    if (settings.dynamicOffsets) {
      dynamicOffsets[0] = i * alignedUniformBytes;
      passEncoder.setBindGroup(1, dynamicBindGroup, dynamicOffsets);
    } else {
      passEncoder.setBindGroup(1, bindGroups[i]);
    }
    passEncoder.draw(3, 1, 0, 0);
  }
}
```

Later on, a `GPURenderBundleEncoder` is created, the function is invoked, and the command bundle is recorded into a {{domxref("GPURenderBundle")}} using {{domxref("GPURenderBundleEncoder.finish()")}}:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

{{domxref("GPURenderPassEncoder.executeBundles()")}} is then used to reuse the work across multiple render passes to improve performance. Study the example code listing for the full context.

```js
// ...

return function doDraw(timestamp) {
  if (startTime === undefined) {
    startTime = timestamp;
  }
  uniformTime[0] = (timestamp - startTime) / 1000;
  device.queue.writeBuffer(uniformBuffer, timeOffset, uniformTime.buffer);

  renderPassDescriptor.colorAttachments[0].view = context
    .getCurrentTexture()
    .createView();

  const commandEncoder = device.createCommandEncoder();
  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

  if (settings.renderBundles) {
    passEncoder.executeBundles([renderBundle]);
  } else {
    recordRenderPass(passEncoder);
  }

  passEncoder.end();
  device.queue.submit([commandEncoder.finish()]);
};

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
