---
title: "GPUAdapter: requestAdapterInfo() method"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUAdapter.requestAdapterInfo
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`requestAdapterInfo()`** method of the
{{domxref("GPUAdapter")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapterInfo")}} object containing identifying information about an adapter.

The intention behind this method is to allow developers to request specific details about the user's GPU so that they can preemptively apply workarounds for GPU-specific bugs, or provide different codepaths to better suit different GPU architectures. Providing such information does present a security risk — it could be used for fingerprinting — therefore the information shared is to be kept at a minimum, and different browser vendors are likely to share different information types and granularities.

> **Note:** The specification includes an `unmaskHints` parameter for `requestAdapterInfo()`, which is intended to mitigate the security risk mentioned above. Once it is supported, developers will be able to specify the values they really need to know, and users will be given a permission prompt asking them if they are OK to share this information when the method is invoked. Browser vendors are likely to share more useful information if it is guarded by a permissions prompt, as it makes the method a less viable target for fingerprinting.

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

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
