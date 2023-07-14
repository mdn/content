---
title: "GPUAdapterInfo: device property"
short-title: device
slug: Web/API/GPUAdapterInfo/device
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapterInfo.device
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`device`** read-only property of the
{{domxref("GPUAdapterInfo")}} interface returns a vendor-specific identifier for the adapter, or an empty string if it is not available.

## Value

A string.

## Examples

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.device);

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
