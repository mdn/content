---
title: "GPUAdapterInfo: subgroupMinSize property"
short-title: subgroupMinSize
slug: Web/API/GPUAdapterInfo/subgroupMinSize
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapterInfo.subgroupMinSize
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`subgroupMinSize`** read-only property of the {{domxref("GPUAdapterInfo")}} interface returns the minimum supported [subgroup size](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size) for the {{domxref("GPUAdapter")}}. This can be used along with the `subgroups` [feature](/en-US/docs/Web/API/GPUSupportedFeatures).

## Value

A number.

## Examples

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.subgroupMinSize);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
