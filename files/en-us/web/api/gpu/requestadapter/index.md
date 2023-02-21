---
title: GPU.requestAdapter()
slug: Web/API/GPU/requestAdapter
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPU.requestAdapter
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`requestAdapter()`** method of the
{{domxref("GPU")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapter")}} object instance. From this you can request a {{domxref("GPUDevice")}} to start using functionality of a device GPU and return adapter info, features, and limits.

Note that the user agent chooses whether to return an adapter. If so, it chooses according to the provided options. If no options are provided, the device will provide access to the default adapter, which is usually good enough for most purposes.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object containing the following properties:
    - `powerPreference` {{optional_inline}}
      - : An emumerated value that can be used to provide a hint to the user agent indicating what class of adapter should be chosen from the system's available adapters. Available values are:

        - `undefined` (or not specified), which provides no hint.
        - `low-power`, which provides a hint to prioritize power savings over performance. If your app runs OK with this setting, it is recommended to use it, as it can significantly improve battery life on portable devices. This is usually the default if no options are provided.
        - `high-performance`, which provides a hint to prioritize performance over power consumption. You are encouraged to only specify this value if absolutely necessary, since it may significantly decrease battery life on portable devices. It may also result in increased device loss — devices will sometimes elect to switch to a lower-power adapter to save power.

         This hint's primary purpose is to influence which GPU is used in a multi-GPU system. For instance, some laptops have a low-power integrated GPU and a high-performance discrete GPU. Different factors may affect which adapter is returned including battery status, attached displays, or removable GPUs.
    - `forceFallbackAdapter` {{optional_inline}}
      - : A boolean value that indicates whether a fallback adapter must be returned.

        - If set to `true`, a fallback adapter will be returned unless one is not available, in which case `requestAdapter()` will resolve to `null`.
        - If set to `false` or not specified, a fallback adapter will not be returned unless no other more appropriate adapter is available.

### Fallback adapters

A fallback adapter generally has significant performance caveats in exchange for some combination of wider compatibility, more predictable behavior, or improved privacy. A fallback adapter will not be available on every system.

If you wish to prevent your apps from running on fallback adapters, you should check the {{domxref("GPUAdapter.isFallbackAdapter")}} attribute prior to requesting a {{domxref("GPUDevice")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapter")}} object instance if the request is successful.

`requestAdapter()` will resolve to `null` if `forceFallbackAdapter` is set to `true` but no fallback adapter is available.

### Exceptions

None.

## Examples

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU not supported.');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('Couldn\'t request WebGPU adapter.');
  }

  const device = await adapter.requestDevice();

  //...

}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
