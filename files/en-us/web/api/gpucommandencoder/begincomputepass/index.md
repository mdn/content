---
title: "GPUCommandEncoder: beginComputePass() method"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
page-type: web-api-instance-method
browser-compat: api.GPUCommandEncoder.beginComputePass
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`beginComputePass()`** method of the
{{domxref("GPUCommandEncoder")}} interface starts encoding a compute pass, returning a {{domxref("GPUComputePassEncoder")}} that can be used to control computation.

## Syntax

```js-nolint
beginComputePass()
beginComputePass(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}
  - : An object containing the following properties:
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.
    - `timestampWrites` {{optional_inline}}
      - : An array of objects defining where and when timestamp query values will be written for this pass. These objects have the following properties:
        - `querySet`
          - : A {{domxref("GPUQuerySet")}} of type `"timestamp"` that the timestamp query results will be written to.
        - `beginningOfPassWriteIndex`
          - : A number specifying the query index in `querySet` where the timestamp at the beginning of the render pass will be written. This is optional - if not defined, no timestamp will be written for the beginning of the pass.
        - `endOfPassWriteIndex`
          - : A number specifying the query index in `querySet` where the timestamp at the end of the render pass will be written. This is optional - if not defined, no timestamp will be written for the end of the pass.

        > [!NOTE]
        > The `timestamp-query` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to use timestamp queries. Timestamp query values are written in nanoseconds, but how the value is determined is implementation-defined.

### Return value

A {{domxref("GPUComputePassEncoder")}} object instance.

### Validation

The following criteria must be met when calling **`beginComputePass()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUComputePassEncoder")}} is returned:

- The `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} is enabled in the {{domxref("GPUDevice")}}.

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the {{domxref("GPUComputePassEncoder")}} created via `beginComputePass()`.

```js
// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate render pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// End the render pass
passEncoder.end();

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

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
