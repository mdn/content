---
title: "GPUCommandEncoder: beginComputePass() method"
short-title: beginComputePass()
slug: Web/API/GPUCommandEncoder/beginComputePass
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.beginComputePass
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

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

        - `location`: An enumerated value specifying when the timestamp will be executed. Available values are:
          - `"beginning"`: The timestamp is executed along with the other encoded commands in the compute pass once the corresponding {{domxref("GPUCommandBuffer")}} is submitted.
          - `"end"`: The timestamp is executed as part of a separate list of timestamp attachments once the pass ends.
        - `queryIndex`: A number specifying the index position in the `querySet` that the timestamp will be written to.
        - `querySet`: The {{domxref("GPUQuerySet")}} that the timestamp will be written to.

        > [!NOTE]
        > The `timestamp-query` [feature](/en-US/docs/Web/API/GPUSupportedFeatures) needs to be enabled to use timestamp queries.

### Return value

A {{domxref("GPUComputePassEncoder")}} object instance.

### Validation

The following criteria must be met when calling **`beginComputePass()`**, otherwise a {{domxref("GPUValidationError")}} is generated and an invalid {{domxref("GPUComputePassEncoder")}} is returned:

- The `timestamp-query` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} is enabled in the {{domxref("GPUDevice")}}.
- No two `timestampWrites` objects have the same `location`. In effect, this means that you can only run two timestamp queries per render pass.
- For each timestamp query, the `querySet` {{domxref("GPUQuerySet.type")}} is `"timestamp"`, and the `queryIndex` value is less than the {{domxref("GPUQuerySet.count")}}.

## Examples

In our [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), several commands are recorded via a {{domxref("GPUCommandEncoder")}}. Most of these commands originate from the {{domxref("GPUComputePassEncoder")}} created via `beginComputePass()`.

```js
// ...

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

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
