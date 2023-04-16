---
title: "GPUDevice: lost property"
short-title: lost
slug: Web/API/GPUDevice/lost
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUDevice.lost
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`lost`** read-only property of the
{{domxref("GPUDevice")}} interface contains a {{jsxref("Promise")}} that remains pending throughout the device's lifetime and resolves with a {{domxref("GPUDeviceLostInfo")}} object when the device is lost.

{{domxref("GPUAdapter.requestDevice()")}} will never return `null`, and it will reject only if the request is invalid, i.e. it exceeds the capabilities of the {{domxref("GPUAdapter")}}. If a valid device request can't be fulfilled for some reason however it may resolve to a device that has already been lost. Additionally, devices can be lost at any time after creation for a variety of reasons (such as browser resource management or driver updates), so it's a good idea to always handle lost devices gracefully.

Many causes for lost devices are transient, so you should try getting a new device once a previous one has been lost unless the loss was caused by the application intentionally destroying the device (i.e. with {{domxref("GPUDevice.destroy()")}}). Note that any WebGPU resources created with a previous device (buffers, textures, etc.) will need to be re-created with the new one.

> **Note:** Also bear in mind that a `GPUAdapter` may become unavailable, e.g. if the physical GPU is unplugged from the system or disabled to save power. From then on, the adapter can no longer return valid devices, and will always return already-lost devices.

## Value

A promise that resolves with a {{domxref("GPUDeviceLostInfo")}} object when the device is lost.

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

  // Create a GPUDevice
  let device = await adapter.requestDevice(descriptor);

  // Use lost to handle lost devices
  device.lost.then((info) => {
    console.error(`WebGPU device was lost: ${info.message}`);
    device = null;

    if (info.reason !== "destroyed") {
      init();
    }
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
