---
title: "GPUComputePassEncoder: popDebugGroup() method"
short-title: popDebugGroup()
slug: Web/API/GPUComputePassEncoder/popDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePassEncoder.popDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`popDebugGroup()`** method of the
{{domxref("GPUComputePassEncoder")}} interface ends a compute pass debug group, which is begun with a {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}} call.

This could be used for telemetry, or may be utilized in {{domxref("GPUError")}} messages, browser dev tools, or other services in the future to help with debugging.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`popDebugGroup()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUComputePassEncoder")}} becomes invalid:

- The compute pass encoder's debug stack is not empty (i.e. at least one compute pass debug group was previously started with {{domxref("GPUComputePassEncoder.pushDebugGroup", "pushDebugGroup()")}}).

## Examples

```js
// ...

const passEncoder = commandEncoder.beginComputePass();

passEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.popDebugGroup();

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
