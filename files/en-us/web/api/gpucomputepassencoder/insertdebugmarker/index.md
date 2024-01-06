---
title: "GPUComputePassEncoder: insertDebugMarker() method"
short-title: insertDebugMarker()
slug: Web/API/GPUComputePassEncoder/insertDebugMarker
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUComputePassEncoder.insertDebugMarker
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`insertDebugMarker()`** method of the
{{domxref("GPUComputePassEncoder")}} interface marks a specific point in a series of encoded compute pass commands with a label.

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

passEncoder.insertDebugMarker("mymarker");

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
