---
title: "GPUDevice: features property"
short-title: features
slug: Web/API/GPUDevice/features
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUDevice.features
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`features`** read-only property of the
{{domxref("GPUDevice")}} interface returns a {{domxref("GPUSupportedFeatures")}} object that describes additional functionality supported by the device. Only features requested during the creation of the device (i.e., when {{domxref("GPUAdapter.requestDevice()")}} is called) are included.

> [!NOTE]
> Not all features will be available to WebGPU in all browsers that support it, even if the features are supported by the underlying hardware. See {{domxref("GPUAdapter.features")}} for more details.

## Value

A {{domxref("GPUSupportedFeatures")}} object instance. This is a [setlike](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object.

## Examples

In the following code we check whether a {{domxref("GPUAdapter")}} has the `texture-compression-astc` feature available. If so, we push it into the array of `requiredFeatures`, and request a device with that feature requirement using {{domxref("GPUAdapter.requestDevice()")}}.

We then log all items in the `GPUDevice.features` set to the console. This set should only contain a single item — `texture-compression-astc` — as that was the only feature requested when the device was created.

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

  device.features.forEach((value) => {
    console.log(value);
  });

  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
