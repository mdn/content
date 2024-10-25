---
title: "GPUAdapterInfo: vendor property"
short-title: vendor
slug: Web/API/GPUAdapterInfo/vendor
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapterInfo.vendor
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`vendor`** read-only property of the
{{domxref("GPUAdapterInfo")}} interface returns the name of the adapter vendor, or an empty string if it is not available.

## Value

A string.

## Examples

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
