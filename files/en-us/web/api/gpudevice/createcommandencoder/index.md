---
title: GPUDevice.createCommandEncoder()
slug: Web/API/GPUDevice/createCommandEncoder
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.GPUDevice.createCommandEncoder
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

The **`createCommandEncoder()`** method of the
{{domxref("GPUDevice")}} interface creates a {{domxref("GPUCommandEncoder")}}, used to encode commands to be issued to the GPU.

## Syntax

```js-nolint
createCommandEncoder()
createCommandEncoder(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}
  - : An object containing the following properties:
    - `label` {{optional_inline}}
      - : A string providing a label that can be used to identify the object, for example in {{domxref("GPUError")}} messages or console warnings.

### Return value

A {{domxref("GPUCommandEncoder")}} object instance.

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

  // ...
  // later on

  const commandEncoder = device.createCommandEncoder();

  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API)
