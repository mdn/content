---
title: "GPUAdapter: info property"
short-title: info
slug: Web/API/GPUAdapter/info
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapter.info
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`info`** read-only property of the
{{domxref("GPUAdapter")}} interface returns a {{domxref("GPUAdapterInfo")}} object containing identifying information about the adapter.

## Value

A {{domxref("GPUAdapterInfo")}} object instance.

## Examples

### Basic info usage

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
