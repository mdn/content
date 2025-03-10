---
title: "GPURenderPassEncoder: pushDebugGroup() method"
short-title: pushDebugGroup()
slug: Web/API/GPURenderPassEncoder/pushDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.pushDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`pushDebugGroup()`** method of the
{{domxref("GPURenderPassEncoder")}} interface begins a render pass debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.

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

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

passEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

passEncoder.popDebugGroup();

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
