---
title: "GPURenderPassEncoder: executeBundles() method"
short-title: executeBundles()
slug: Web/API/GPURenderPassEncoder/executeBundles
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.executeBundles
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`executeBundles()`** method of the
{{domxref("GPURenderPassEncoder")}} interface executes commands previously recorded into the referenced {{domxref("GPURenderBundle")}}s, as part of this render pass.

> **Note:** After calling `executeBundles()` the currently set vertex buffers, index buffers, bind groups, and pipeline are all cleared, even if no bundles are actually executed.

## Syntax

```js-nolint
executeBundles(bundles)
```

### Parameters

- `bundles`
  - : An array of {{domxref("GPURenderBundle")}} objects, containing the pre-recorded commands to execute.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`executeBundles()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid.

For each {{domxref("GPURenderBundle")}}:

- If the render pass's `depthReadOnly` property (as specified in the descriptor of the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call) is `true`, then the bundle's `depthReadOnly` property (as specified in the descriptor of the {{domxref("GPUDevice.createRenderBundleEncoder()")}} call that created the originating {{domxref("GPURenderBundleEncoder")}}) is also `true`.
- If the render pass's `stencilReadOnly` property (as specified in the descriptor of the originating {{domxref("GPUCommandEncoder.beginRenderPass()")}} call) is `true`, then the bundle's `stencilReadOnly` property (as specified in the descriptor of the {{domxref("GPUDevice.createRenderBundleEncoder()")}} call that created the originating {{domxref("GPURenderBundleEncoder")}}) is also `true`.
- The layout of the render pipeline specified in {{domxref("GPURenderPassEncoder.setPipeline()")}} (as defined in the descriptor of the originating {{domxref("GPUDevice.createRenderPipeline()")}} call) equals the layout of the render bundle pipeline specified in {{domxref("GPURenderBundleEncoder.setPipeline()")}}.

## Examples

In the WebGPU Samples [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer), a lot of like operations are done on many different objects simultaneously. `executeBundles()` is used to reuse the work on multiple render passes to improve performance. Study the example code listing for the full context.

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
