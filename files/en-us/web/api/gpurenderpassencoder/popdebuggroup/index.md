---
title: "GPURenderPassEncoder: popDebugGroup() method"
short-title: popDebugGroup()
slug: Web/API/GPURenderPassEncoder/popDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.popDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`popDebugGroup()`** method of the
{{domxref("GPURenderPassEncoder")}} interface ends a render pass debug group, which is begun with a {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}} call.

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

The following criteria must be met when calling **`popDebugGroup()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderPassEncoder")}} becomes invalid:

- The render pass encoder's debug stack is not empty (i.e., at least one render pass debug group was previously started with {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}}).

## Examples

```js
// …

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.popDebugGroup();

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
