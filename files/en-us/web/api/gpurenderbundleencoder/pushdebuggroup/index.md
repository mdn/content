---
title: "GPURenderBundleEncoder: pushDebugGroup() method"
short-title: pushDebugGroup()
slug: Web/API/GPURenderBundleEncoder/pushDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.pushDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`pushDebugGroup()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface begins a render bundle debug group, which is marked with a specified label, and will contain all subsequent encoded commands up until a {{domxref("GPURenderBundleEncoder.popDebugGroup", "popDebugGroup()")}} method is invoked.

This could be used for telemetry, or may be utilized in {{domxref("GPUError")}} messages, browser dev tools, or other services in the future to help with debugging.

> [!NOTE]
> This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}}.

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
// …

const bundleEncoder = device.createRenderBundleEncoder(renderBundleDescriptor);

bundleEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.draw(3);

bundleEncoder.popDebugGroup();

// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
