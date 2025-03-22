---
title: "GPURenderPassEncoder: setVertexBuffer() method"
short-title: setVertexBuffer()
slug: Web/API/GPURenderPassEncoder/setVertexBuffer
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setVertexBuffer
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`setVertexBuffer()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets or unsets the current {{domxref("GPUBuffer")}} for the given slot that will provide vertex data for subsequent drawing commands.

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameters

- `slot`
  - : A number referencing the vertex buffer slot to set the vertex buffer for.
- `buffer`
  - : A {{domxref("GPUBuffer")}} representing the buffer containing the vertex data to use for subsequent drawing commands, or `null`, in which case any previously-set buffer in the given slot is unset.
- `offset` {{optional_inline}}
  - : A number representing the offset, in bytes, into `buffer` where the vertex data begins. If omitted, `offset` defaults to 0.
- `size` {{optional_inline}}
  - : A number representing the size, in bytes, of the vertex data contained in `buffer`. If omitted, `size` defaults to the `buffer`'s {{domxref("GPUBuffer.size")}} - `offset`.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`setVertexBuffer()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- `buffer`'s {{domxref("GPUBuffer.usage")}} contains the `GPUBufferUsage.VERTEX` flag.
- `slot` is less than the {{domxref("GPUDevice")}}'s `maxVertexBuffers` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- `offset` + `size` is less than or equal to the `buffer`'s {{domxref("GPUBuffer.size")}}.
- `offset` is a multiple of 4.

## Examples

### Set vertex buffer

In our [basic render demo](https://mdn.github.io/dom-examples/webgpu-render-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the `GPURenderPassEncoder` created via {{domxref("GPUCommandEncoder.beginRenderPass()")}}. `setVertexBuffer()` is used as appropriate to set the source of vertex data.

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

### Unset vertex buffer

```js
// Set vertex buffer in slot 0
passEncoder.setVertexBuffer(0, vertexBuffer);

// Later, unset vertex buffer in slot 0
passEncoder.setVertexBuffer(0, null);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
