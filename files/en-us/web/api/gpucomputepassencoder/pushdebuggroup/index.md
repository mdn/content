---
title: "GPUComputePassEncoder: pushDebugGroup() method"
short-title: pushDebugGroup()
slug: Web/API/GPUComputePassEncoder/pushDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePassEncoder.pushDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`pushDebugGroup()`** method of the
{{domxref("GPUComputePassEncoder")}} interface begins a compute pass debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPUComputePassEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.

This could be used for telemetry, or may be utilized in {{domxref("GPUError")}} messages, browser dev tools, or other services in the future to help with debugging.

## Syntax

```js-nolint
pushDebugGroup(groupLabel)
```

### Parameters

- `groupLabel`
  - : A string representing the label for the debug group.

### Return value

None ({{jsxref("Undefined")}}).

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
