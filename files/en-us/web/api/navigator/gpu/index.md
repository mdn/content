---
title: "Navigator: gpu property"
short-title: gpu
slug: Web/API/Navigator/gpu
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.gpu
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`Navigator.gpu`** read-only property returns the {{domxref("GPU")}} object for the current browsing context, which is the entry point for the {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}.

## Value

An {{domxref("GPU")}} object.

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

  const device = await adapter.requestDevice();

  //...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}
