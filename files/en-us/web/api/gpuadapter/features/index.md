---
title: "GPUAdapter: features property"
short-title: features
slug: Web/API/GPUAdapter/features
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUAdapter.features
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`features`** read-only property of the
{{domxref("GPUAdapter")}} interface returns a {{domxref("GPUSupportedFeatures")}} object that describes additional functionality supported by the adapter.

You should note that not all features will be available to WebGPU in all browsers that support it, even if the features are supported by the underlying hardware. This could be due to constraints in the underlying system, browser, or adapter. For example:

- The underlying system might not be able to guarantee exposure of a feature in a way that is compatible with a certain browser.
- The browser vendor might not have found a secure way to implement support for that feature, or might just not have gotten round to it yet.

If you are hoping to take advantage of a specific additional feature in a WebGPU app, thorough testing is advised.

## Value

A {{domxref("GPUSupportedFeatures")}} object instance. This is a [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object.

## Examples

In the following code we check whether a {{domxref("GPUAdapter")}} has the `texture-compression-astc` feature available. If so, we push it into the array of `requiredFeatures`, and request a device with that feature requirement using {{domxref("GPUAdapter.requestDevice()")}}

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const requiredFeatures = [];

  if (adapter.features.has("texture-compression-astc")) {
    requiredFeatures.push("texture-compression-astc");
  }

  const device = await adapter.requestDevice({
    requiredFeatures,
  });

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
