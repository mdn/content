---
title: "GPURenderBundleEncoder: insertDebugMarker() method"
short-title: insertDebugMarker()
slug: Web/API/GPURenderBundleEncoder/insertDebugMarker
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPURenderBundleEncoder.insertDebugMarker
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`insertDebugMarker()`** method of the
{{domxref("GPURenderBundleEncoder")}} interface marks a specific point in a series of encoded render bundle pass commands with a label.

This could be used for telemetry, or may be utilized in {{domxref("GPUError")}} messages, browser dev tools, or other services in the future to help with debugging.

> **Note:** This method is functionally identical to its equivalent on {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.InsertDebugMarker", "InsertDebugMarker()")}}.

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

bundleEncoder.insertDebugMarker("mymarker");

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
