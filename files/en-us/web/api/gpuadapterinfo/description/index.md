---
title: "GPUAdapterInfo: description property"
short-title: description
slug: Web/API/GPUAdapterInfo/description
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapterInfo.description
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`description`** read-only property of the
{{domxref("GPUAdapterInfo")}} interface returns a human-readable string describing the adapter, or an empty string if it is not available.

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
  console.log(adapterInfo.description);

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
