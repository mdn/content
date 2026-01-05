---
title: "GPUAdapterInfo: subgroupMaxSize property"
short-title: subgroupMaxSize
slug: Web/API/GPUAdapterInfo/subgroupMaxSize
page-type: web-api-instance-property
browser-compat: api.GPUAdapterInfo.subgroupMaxSize
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`subgroupMaxSize`** read-only property of the {{domxref("GPUAdapterInfo")}} interface returns the maximum supported [subgroup size](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) for the {{domxref("GPUAdapter")}}. This can be used along with the `subgroups` [feature](/en-US/docs/Web/API/GPUSupportedFeatures).

## Value

A number.

## Examples

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.subgroupMaxSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
