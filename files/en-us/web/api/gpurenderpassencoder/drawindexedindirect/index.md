---
title: "GPURenderPassEncoder: drawIndexedIndirect() method"
short-title: drawIndexedIndirect()
slug: Web/API/GPURenderPassEncoder/drawIndexedIndirect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.drawIndexedIndirect
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`drawIndexedIndirect()`** method of the
{{domxref("GPURenderPassEncoder")}} interface draws indexed primitives using parameters read from a {{domxref("GPUBuffer")}}.

## Syntax

```js-nolint
drawIndexedIndirect(indirectBuffer, indirectOffset)
```

### Parameters

- `indirectBuffer`

  - : A {{domxref("GPUBuffer")}} containing the `indexCount`, `instanceCount`, `firstIndex`, `baseVertex`, and `firstInstance` values needed to carry out the drawing operation. The buffer must contain a tightly packed block of five 32-bit unsigned integer values representing the values (20 bytes total), given in the same order as the arguments for {{domxref("GPURenderPassEncoder.drawIndexed()")}}. So for example:

    ```js
    const uint32 = new Uint32Array(5);
    uint32[0] = 3; // The indexCount value
    uint32[1] = 1; // The instanceCount value
    uint32[2] = 0; // The firstIndex value
    uint32[3] = 0; // The baseVertex value
    uint32[4] = 0; // The firstInstance value

    // Write values into a GPUBuffer
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : The offset, in bytes, into `indirectBuffer` where the value data begins.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`drawIndirect()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- `indirectBuffer`'s {{domxref("GPUBuffer.usage")}} contains the `GPUBufferUsage.INDIRECT` flag.
- `indirectOffset` + the total size specified by the value parameters in the `indirectBuffer` is less than or equal to the `indirectBuffer`'s {{domxref("GPUBuffer.size")}}.
- `indirectOffset` is a multiple of 4.

## Examples

```js
// ...

// Create GPURenderPassEncoder
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Set pipeline and vertex buffer
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setIndexBuffer(indexBuffer, "uint16");

// Create drawIndexedIndirect values
const uint32 = new Uint32Array(5);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;
uint32[4] = 0;

// Create a GPUBuffer and write the draw values into it
const drawValues = device.createBuffer({
  size: 20,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Draw the vertices
passEncoder.drawIndexedIndirect(drawValues, 0);

// End the render pass
passEncoder.end();

// End frame by passing array of GPUCommandBuffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
