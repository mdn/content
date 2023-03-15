---
title: GPUCommandEncoder.popDebugGroup()
slug: Web/API/GPUCommandEncoder/popDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUCommandEncoder.popDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`popDebugGroup()`** method of the
{{domxref("GPUCommandEncoder")}} interface ends a debug group, which is begun with a {{domxref("GPUCommandEncoder.pushDebugGroup", "pushDebugGroup()")}} call.

This could be used for telemetry, or may be utilized by browser dev tools or other services in the future to help with debugging.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameters

None.

### Return value

None ({{domxref("Undefined")}}).

## Examples

```js
// ...

commandEncoder.pushDebugGroup("mygroupmarker"); // Start labeled debug group

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
