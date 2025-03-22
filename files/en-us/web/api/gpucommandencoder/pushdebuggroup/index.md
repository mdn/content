---
title: "GPUCommandEncoder: pushDebugGroup() method"
short-title: pushDebugGroup()
slug: Web/API/GPUCommandEncoder/pushDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.pushDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`pushDebugGroup()`** method of the
{{domxref("GPUCommandEncoder")}} interface begins a debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPUCommandEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.

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
