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

The intention behind this property is to allow developers to request specific details about the user's GPU so that they can preemptively apply workarounds for GPU-specific bugs, or provide different codepaths to better suit different GPU architectures. Providing such information does present a security risk — it could be used for fingerprinting — therefore the information shared is to be kept at a minimum, and different browser vendors are likely to share different information types and granularities.

## Value

A {{domxref("GPUAdapterInfo")}} object instance.

## Examples

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
