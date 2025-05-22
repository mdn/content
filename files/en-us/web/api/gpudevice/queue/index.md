---
title: "GPUDevice: queue property"
short-title: queue
slug: Web/API/GPUDevice/queue
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.GPUDevice.queue
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`queue`** read-only property of the
{{domxref("GPUDevice")}} interface returns the primary {{domxref("GPUQueue")}} for the device.

## Value

A {{domxref("GPUQueue")}} object instance.

## Examples

Basic {{domxref("GPUQueue")}} access:

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
  const device = await adapter.requestDevice();

  // …

  // Common queue use — end current frame by passing array of
  // command buffers to queue for execution
  device.queue.submit([commandEncoder.finish()]);

  // …
}
```

> [!NOTE]
> For more queue examples, see the {{domxref("GPUQueue")}} reference pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
