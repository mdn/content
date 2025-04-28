---
title: "GPUDevice: createRenderBundleEncoder() method"
short-title: createRenderBundleEncoder()
slug: Web/API/GPUDevice/createRenderBundleEncoder
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createRenderBundleEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`createRenderBundleEncoder()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPURenderBundleEncoder")}} that can be used to pre-record bundles of commands. These can be reused in {{domxref("GPURenderPassEncoder")}}s via the {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} method, as many times as required.

## Syntax

```js-nolint
createRenderBundleEncoder(descriptor)
```

### Parameters

- `descriptor`
  - : An object containing the following properties:
    - `colorFormats`
      - : An array of enumerated values specifying the expected color formats for render targets. For possible values, see the [`GPUTextureFormat` definition](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) in the spec.
    - `depthReadOnly` {{optional_inline}}
      - : A boolean. If `true`, specifies that executing any {{domxref("GPURenderBundle")}} created by the {{domxref("GPURenderBundleEncoder")}} will not modify the depth component of the `depthStencilFormat` when executed. If omitted, `depthReadOnly` will default to `false`.
    - `depthStencilFormat` {{optional_inline}}
      - : An enumerated value that specifies the expected depth-or-stencil format for render targets. For possible values, see the [Depth-stencil formats](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) section of the spec.
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `sampleCount` {{optional_inline}}
      - : A number representing the expected sample count for render targets.
    - `stencilReadOnly` {{optional_inline}}
      - : A boolean. If `true`, specifies that executing any {{domxref("GPURenderBundle")}} created by the {{domxref("GPURenderBundleEncoder")}} will not modify the stencil component of the `depthStencilFormat` when executed. If omitted, `stencilReadOnly` will default to `false`.

### Return value

A {{domxref("GPURenderBundleEncoder")}} object instance.

## Examples

In the WebGPU Samples [Animometer example](https://webgpu.github.io/webgpu-samples/samples/animometer/), numerous similar operations are done on many different objects simultaneously. A bundle of commands is encoded using the following function:

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

Later on, a {{domxref("GPURenderBundleEncoder")}} is created using `createRenderBundleEncoder()`, the function is invoked, and the command bundle is recorded into a {{domxref("GPURenderBundle")}} using {{domxref("GPURenderBundleEncoder.finish()")}}:

```js
const renderBundleEncoder = device.createRenderBundleEncoder({
  colorFormats: [presentationFormat],
});
recordRenderPass(renderBundleEncoder);
const renderBundle = renderBundleEncoder.finish();
```

{{domxref("GPURenderPassEncoder.executeBundles()")}} is then used to reuse the work across multiple render passes to improve performance. Study the example code listing for the full context.

```js
// …

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

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
