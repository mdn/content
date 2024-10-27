---
title: "GPUCommandEncoder: popDebugGroup() method"
short-title: popDebugGroup()
slug: Web/API/GPUCommandEncoder/popDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.popDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`popDebugGroup()`** method of the
{{domxref("GPUCommandEncoder")}} interface ends a debug group, which is begun with a {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}} call.

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

The following criteria must be met when calling **`popDebugGroup()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPUCommandEncoder")}} becomes invalid:

- The command encoder's debug stack is not empty (i.e. at least one debug group was previously started with {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}}).

## Examples

```js
// ...

commandEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.end();

commandEncoder.popDebugGroup(); // End labeled debug group

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
