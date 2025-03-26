---
title: "GPURenderBundleEncoder: popDebugGroup() method"
short-title: popDebugGroup()
slug: Web/API/GPURenderBundleEncoder/popDebugGroup
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.popDebugGroup
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`popDebugGroup()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface ends a render bundle debug group, which is begun with a {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}} call.

This could be used for telemetry, or may be utilized in {{domxref("GPUError")}} messages, browser dev tools, or other services in the future to help with debugging.

> [!NOTE]
> This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}}.

## Syntax

```js-nolint
popDebugGroup()
```

### Parameters

None.

### Return value

None ({{jsxref("Undefined")}}).

### Validation

The following criteria must be met when calling **`popDebugGroup()`**, otherwise a {{domxref("GPUValidationError")}} is generated and the {{domxref("GPURenderBundleEncoder")}} becomes invalid:

- The render bundle encoder's debug stack is not empty (i.e. at least one render bundle debug group was previously started with {{domxref("GPURenderBundleEncoder.pushDebugGroup", "pushDebugGroup()")}}).

## Examples

```js
// ...

const bundleEncoder = device.createRenderBundleEncoder(renderBundleDescriptor);

bundleEncoder.pushDebugGroup("my_group_marker"); // Start labeled debug group

bundleEncoder.setPipeline(renderPipeline);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.draw(3);

bundleEncoder.popDebugGroup();

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
