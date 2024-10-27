---
title: "GPURenderPassEncoder: insertDebugMarker() method"
short-title: insertDebugMarker()
slug: Web/API/GPURenderPassEncoder/insertDebugMarker
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderPassEncoder.insertDebugMarker
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`insertDebugMarker()`** method of the
{{domxref("GPURenderPassEncoder")}} interface marks a specific point in a series of encoded render pass commands with a label.

This could be used for telemetry, or may be utilized in {{domxref("GPUError")}} messages, browser dev tools, or other services in the future to help with debugging.

## Syntax

```js-nolint
insertDebugMarker(markerLabel)
```

### Parameters

- `markerLabel`
  - : A string representing the label to insert.

### Return value

None ({{jsxref("Undefined")}}).

## Examples

```js
// ...

passEncoder.insertDebugMarker("my_marker");

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
