---
title: GPUDeviceLostInfo
slug: Web/API/GPUDeviceLostInfo
page-type: web-api-interface
status:
  - experimental
browser-compat: api.GPUDeviceLostInfo
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`GPUDeviceLostInfo`** interface of the {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} represents the object returned when the {{domxref("GPUDevice.lost")}} {{jsxref("Promise")}} resolves. This provides information as to why a device has been lost.

See the {{domxref("GPUDevice.lost")}} page for more information about "lost" state.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("GPUDeviceLostInfo.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A string providing a human-readable message that explains why the device was lost.
- {{domxref("GPUDeviceLostInfo.reason", "reason")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : An enumerated value that defines the reason the device was lost in a machine-readable way.

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
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
