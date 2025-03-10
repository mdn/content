---
title: "GPUDevice: destroy() method"
short-title: destroy()
slug: Web/API/GPUDevice/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.destroy
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`destroy()`** method of the
{{domxref("GPUDevice")}} interface destroys the device, preventing further operations on it.

Note that:

- Any commands currently enqueued on the device's {{domxref("GPUQueue")}} will be executed before the device is destroyed.
- Any WebGPU resources created using the device (buffers, textures, etc.) are also destroyed.
- Any mapped buffers created using the device will be unmapped.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

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

  let device = await adapter.requestDevice();

  // Some time later

  device.destroy();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
