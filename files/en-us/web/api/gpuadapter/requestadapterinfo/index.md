---
title: "GPUAdapter: requestAdapterInfo() method"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.GPUAdapter.requestAdapterInfo
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

The **`requestAdapterInfo()`** method of the
{{domxref("GPUAdapter")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapterInfo")}} object containing identifying information about an adapter.

`requestAdapterInfo()` has been removed from the WebGPU specification. Use {{domxref("GPUAdapter.info")}} to access adapter information instead.

## Syntax

```js-nolint
requestAdapterInfo()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapterInfo")}} object instance.

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
  console.log(adapterInfo.vendor);
  console.log(adapterInfo.architecture);

  // …
}
```

## Specifications

No longer part of the [WebGPU specification](https://gpuweb.github.io/gpuweb/).

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
