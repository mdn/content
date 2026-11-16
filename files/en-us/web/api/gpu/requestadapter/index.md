---
title: "GPU: requestAdapter() method"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
page-type: web-api-instance-method
browser-compat: api.GPU.requestAdapter
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`requestAdapter()`** method of the {{domxref("GPU")}} interface returns a {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapter")}} object instance. From this you can request a {{domxref("GPUDevice")}}, adapter info, features, and limits.

Note that the user agent chooses whether to return an adapter. If so, it chooses according to the provided options. If no options are provided, the device will provide access to the default adapter, which is usually good enough for most purposes.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that can contain the following properties:
    - `featureLevel` {{optional_inline}}
      - : An enumerated value that specifies the set of features the returned adapter will support. Available values are:
        - `core`
          - : The default value. Specifies that the `GPUAdapter` supports all core WebGPU features and limits, which allows applications to support devices with modern platform graphics APIs. This is referred to as "core" WebGPU. Adapters that support core WebGPU will have the `core-features-and-limits` feature available (see {{domxref("GPUSupportedFeatures")}}).
        - `compatibility`
          - : Specifies that the `GPUAdapter` supports a restricted subset of the WebGPU API capable of running in older graphics APIs such as OpenGL ES 3.1 and Direct3D 11. This setting opts WebGPU into [compatibility mode](/en-US/docs/Web/API/WebGPU_API#webgpu_compatibility_mode).
    - `powerPreference` {{optional_inline}}
      - : An enumerated value that can be used to provide a hint to the user agent indicating what class of adapter should be chosen from the system's available adapters. Available values are:
        - `undefined` (or not specified)
          - : Provides no hint.
        - `"low-power"`
          - : Provides a hint to prioritize power savings over performance. If your app runs OK with this setting, it is recommended to use it, as it can significantly improve battery life on portable devices. This is usually the default if no options are provided.
        - `"high-performance"`
          - : Provides a hint to prioritize performance over power consumption. You are encouraged to only specify this value if absolutely necessary, since it may significantly decrease battery life on portable devices. It may also result in increased {{domxref("GPUDevice")}} loss — the system will sometimes elect to switch to a lower-power adapter to save power.

        This hint's primary purpose is to influence which GPU is used in a multi-GPU system. For instance, some laptops have a low-power integrated GPU and a high-performance discrete GPU. Different factors may affect which adapter is returned including battery status, attached displays, or removable GPUs.

        > [!NOTE]
        > On Chrome running on dual-GPU macOS devices, if `requestAdapter()` is called without a `powerPreference` option, the high-performance discrete GPU is returned when the user's device is on AC power. Otherwise, the low-power integrated GPU is returned.

### Fallback adapters

The adapter provided by the user agent may be a **fallback adapter**, if it determines it to be the most appropriate option available. A fallback adapter generally has significant performance caveats in exchange for some combination of wider compatibility, more predictable behavior, or improved privacy. For example, some browsers may offer a software-based implementation of the API via a fallback adapter. A fallback adapter will not be available on every system.

If you wish to prevent your apps from running on fallback adapters, you should check the {{domxref("GPUAdapter.isFallbackAdapter")}} attribute prior to requesting a {{domxref("GPUDevice")}}.

> [!NOTE]
> The specification includes a `forceFallbackAdapter` option for `requestAdapter()`. This is a boolean that, if set to `true`, forces the user agent to return a fallback adapter if one is available. This is not yet supported by any browser.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("GPUAdapter")}} object instance if the request is successful.

`requestAdapter()` will resolve to `null` if an appropriate adapter is not available.

### Exceptions

None.

## Examples

### Basic usage

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

### Using compatibility mode only if necessary

You can create an application that will use compatibility mode only if necessary, and upgrade to core WebGPU if the core feature set is available.

To do so, first request a compatibility mode adapter:

```js
const adapter = await navigator.gpu.requestAdapter({
  featureLevel: "compatibility",
});
```

Next, check whether the `core-features-and-limits` feature is available when using the {{jsxref("Set.has", "has()")}} method available on the {{domxref("GPUSupportedFeatures")}} object. If it is, request a {{domxref("GPUDevice")}} with `core-features-and-limits` as a required feature. If not, don't specify that required feature.

```js
const hasCore = adapter.features.has("core-features-and-limits");
const device = await adapter.requestDevice({
  requiredFeatures: [...(hasCore ? ["core-features-and-limits"] : [])],
});
```

Subsequent code that wants to check if the device is a core or compatibility device should check the device's features:

```js
const isCore = device.features.has("core-features-and-limits");
```

The `isCore` value will always be `true` on a core device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
