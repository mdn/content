---
title: "GPURenderPassEncoder: setStencilReference() method"
short-title: setStencilReference()
slug: Web/API/GPURenderPassEncoder/setStencilReference
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.setStencilReference
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`setStencilReference()`** method of the
{{domxref("GPURenderPassEncoder")}} interface sets the stencil reference value using during stencil tests with the `"replace"` stencil operation (as set in the descriptor of the {{domxref("GPUDevice.createRenderPipeline()")}} method, in the properties defining the various stencil operations).

## Syntax

```js-nolint
setStencilReference(reference)
```

### Parameters

- `reference`
  - : A number representing the new stencil reference value to set for the render pass.

> **Note:** If a `setStencilReference()` call is not made, the stencil reference value defaults to 0 for each render pass.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

```js
// ...

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setStencilReference(1);
passEncoder.draw(3);

passEncoder.end();

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
